import { PostgrestFilterBuilder } from "@supabase/postgrest-js";
import { createClient } from "@supabase/supabase-js";
import type { NextApiRequest, NextApiResponse } from "next";
const { v4: uuidv4 } = require("uuid");

// const prisma = new PrismaClient();

interface Job {
  id?: number | string;
  created_at: string;
  uuid: string;
  job_title: string;
  scraped_link: string;
  apply_link: string;
  company: string;
  address: string;
  state: string;
  date_posted: string;
  job_type: string;
  nurse_type: string;
  hot_job: boolean;
  salary: string;
  urgent_hire: boolean;
}

const supabaseUrl = process.env.NEXT_PUBLIC_API_KEY || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY || "";
const supabase = createClient(supabaseUrl, supabaseKey);

const buildSearchQuery = (
  key: string,
  value: string | string[],
  query: PostgrestFilterBuilder<any>
): PostgrestFilterBuilder<any> => {
  if (value.length && typeof value !== "string") {
    value = value.join(" or ");
    query = query.textSearch(key, value, {
      type: "websearch",
      config: "English",
    });
  } else if (typeof value === "string") {
    query = query.textSearch(key, value, {
      type: "plain",
      config: "English",
    });
  }

  return query;
};

const buildFilterQuery = (
  value: string,
  query: PostgrestFilterBuilder<any>
): PostgrestFilterBuilder<any> => {
  query = query
    .like("address", `%${value}%`)
    .or("")
    .like("job_title", `%${value}%`);
  return query;
};

const buildSortQuery = (
  value: string,
  query: PostgrestFilterBuilder<any>
): PostgrestFilterBuilder<any> => {
  if (value === "hotJob") {
    query = query.order("hot_job", {
      ascending: false,
    });
  } else if (value === "datePosted") {
    query = query.order("date_posted", {
      ascending: false,
    });
  }
  return query;
};

// const perPage = 10;
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "POST") {
    try {
      const {
        job_title,
        apply_link,
        scraped_link,
        company,
        address,
        state,
        salary,
        job_type,
        nurse_type,
      } = req.body;

      const today = new Date();

      const newData: Job = {
        uuid: uuidv4(),
        hot_job: true,
        urgent_hire: false,
        date_posted: `${today.getFullYear()}-${
          today.getMonth() + 1
        }-${today.getDate()}`,
        created_at: new Date().toISOString(),

        job_title,
        apply_link,
        scraped_link,
        company,
        address,
        state,
        salary,
        job_type,
        nurse_type,
      };

      const { data, error } = await supabase
        .from("jobs")
        .insert([newData], { count: "exact" });
      console.log("Api data:", data, "Api error", error);

      return res.status(200).send(newData);
    } catch (error) {
      return res.status(500).send(error);
    }
  }

  if (req.method === "GET") {
    const params = Object.entries(req.query);

    console.log(params);

    if (params.length) {
      let query = supabase.from("jobs").select("*", { count: "exact" });

      params.forEach(([key, value]) => {
        if (key === "search") {
          query = buildFilterQuery(value as string, query);
        } else if (key === "sort") {
          console.log("sort query");
          query = buildSortQuery(value as string, query);
        } else if (key === "nurse_type") {
          query = buildSearchQuery('job_title', value, query);
        } else query = buildSearchQuery(key, value, query);
        // if (key === "address") {

        // } else if (value.length && typeof value !== "string") {
        //   query = query.in(key, [...(value as string[])]);
        // } else if (typeof value === "string") {
        //   query = query.eq(key, value);
        // }
      });

      const { error, data, count } = await query;

      if (!error) {
        return res.json({ jobs: data, count: count });
      } else {
        return res.status(400).send(error);
      }
    } else {
      const { error, data, count } = await supabase
        .from("jobs")
        .select("*", { count: "exact" });
      if (!error) {
        return res.json({ jobs: data, count: count });
      } else {
        return res.status(400).send(error);
      }
    }
  }

  return res.status(400).send({ error: "No such request" });

  // @ts-ignore
  // let { data, error, count } = await supabase
  //   .from("jobs")
  //   .select("*", { count: "exact" });

  // let page: number = 1;
  // let jobTypes: string[] = [];
  // let nurseTypes: string[] = [];
  // let locations: string[] = [];
  // let companies: string[] = [];
  // let groupBy = "";
  // let search = "";

  // if (req.method === "PUT") {
  //   const params = JSON.parse(req.body);
  //   console.log("params", params);
  //   page = params.page || 1;
  //   locations = params.locations || [];
  //   jobTypes = params.jobTypes || [];
  //   nurseTypes = params.nurseTypes || [];
  //   companies = params.companies || [];
  //   search = params.search || "";
  //   groupBy = params.groupBy || "";
  // }

  // if (!error) {
  //   res.json({ jobs: data, count: count });
  // } else {
  //   res.status(400).send(error);
  // }

  // const skip = (page - 1) * perPage;

  // const mappedNurseTypes = nurseTypes.map((nurseType) => {
  //   return /^R(egistered[-\s])?N(urse)?$/i.test(nurseType) /* === 'RN'*/
  //     ? "Registered Nurse"
  //     : /^A(ssistant[-\s])?i(n[-\s])?N(ursing)?$/i.test(
  //         nurseType
  //       ) /* === 'AIN'*/
  //     ? "Assistant in Nursing"
  //     : /^C(linical[-\s])?N(urse[-\s])?C(onsultant)?$/i.test(
  //         nurseType
  //       ) /* === 'CNC' ?*/
  //     ? "Clinical Nurse Consultant"
  //     : /^C(linical[-\s])?N(urse[-\s])?E(ducator)?$/i.test(
  //         nurseType
  //       ) /* === 'CNE' ?*/
  //     ? "Clinical Nurse Educator"
  //     : /^C(linical[-\s])?N(urse[-\s])?S(pecialist)?$/i.test(
  //         nurseType
  //       ) /* === 'CNS' ?*/
  //     ? "Clinical Nurse Specialist"
  //     : /^E(ndorsed[-\s])?E(nrolled[-\s])?N(urse)?$/i.test(
  //         nurseType
  //       ) /* === 'EEN' ?*/
  //     ? "Endorsed Enrolled Nurse"
  //     : /^E(nrolled[-\s])?N(urse)?$/i.test(nurseType) /* === 'EN' ?*/
  //     ? "Enrolled Nurse"
  //     : /^N(urse[-\s])?E(ducator)?$/i.test(nurseType) /* === 'NE' ?*/
  //     ? "Nurse Educator"
  //     : /^N(urse[-\s])?M(anager)?$/i.test(nurseType) /* === 'NM' ?*/
  //     ? "Nurse Manager"
  //     : /^N(urse[-\s])?U(nit[-\s])?M(anager)?$/i.test(
  //         nurseType
  //       ) /* === 'NUM' ?*/
  //     ? "Nurse Unit Manager"
  //     : /^N(urse[-\s])?P(ractitioner)?$/i.test(nurseType) /* === 'NUM' ?*/
  //     ? "Nurse Practitioner"
  //     : "Not Available";
  // });

  // const AND = [];
  // if (jobTypes.length)
  //   AND.push({
  //     OR: jobTypes.map((jobType) => {
  //       return { jobType: { contains: jobType } };
  //     }),
  //   });

  // if (companies.length)
  //   AND.push({
  //     OR: companies.map((company) => {
  //       return { company: { contains: company } };
  //     }),
  //   });

  // if (locations.length)
  //   AND.push({
  //     OR: locations.map((location) => {
  //       return { address: { contains: location } };
  //     }),
  //   });
  // if (search.length) {
  //   AND.push({
  //     OR: [
  //       { jobTitle: { contains: search } },
  //       { company: { contains: search } },
  //       { address: { contains: search } },
  //     ],
  //   });
  // }
  // if (nurseTypes.length)
  //   AND.push({
  //     OR: mappedNurseTypes.map((nurseType) => ({
  //       jobTitle: { contains: nurseType },
  //     })),
  //   });
  // //
  // const conditions = { skip, take: perPage };
  // console.log("AND", AND);
  // // @ts-ignore
  // if (AND.length) conditions.where = { AND };

  // if (groupBy === "hotJob") {
  //   // @ts-ignore
  //   conditions.orderBy = { hotJob: "desc" };
  // } else if (groupBy === "datePosted") {
  //   // @ts-ignore
  //   conditions.orderBy = { datePosted: "desc" };
  // }

  // // TODO check with client if the conditions have to be joined with OR or AND
  // console.log("conditions", conditions);
  // try {
  //   /* @ts-ignore*/
  //   const jobs = await prisma.job.findMany({
  //     orderBy: { jobTitle: "desc" },
  //     skip: 0,
  //     take: 10,
  //   });
  //   console.log("jobs", jobs);
  //   /* @ts-ignore*/
  //   const count = await prisma.job.count({ where: conditions.where });

  //   res.json({ jobs, count });
  // } catch (error) {
  //   console.log("error", error);
  //   res.json({ jobs: [], count: 0 });
  // }
}
