import { useEffect, useState } from "react";
import useDidMountEffect from "./useDidMountEffect";

interface Props {
  jobs?: Job[];
  count?: number;
}

const useJob = (props: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [jobs, setJobs] = useState<Job[]>(props.jobs || []);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(props.jobs || []);
  const [count, setCount] = useState<number>(props.count || 0);

  // Filter
  const [searchText, setSearchText] = useState<string>("");
  const [locations, setLocations] = useState<string[]>([]);
  const [jobTypes, setJobTypes] = useState<string[]>([]);
  const [nurseTypes, setNurseTypes] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<"hotJob" | "datePosted">(
    "hotJob"
  );

  const fetchJobs = async () => {
    setLoading(true);
    let queryParams = new URLSearchParams();
    if (jobTypes.length)
      jobTypes.forEach((jobType) => {
        queryParams.append("job_type", jobType);
      });
    if (locations.length)
      locations.forEach((address) => {
        queryParams.append("address", address);
      });
    // if (searchText) queryParams.append("search", searchText);
    if (nurseTypes.length)
      nurseTypes.forEach((nurseType) => {
        queryParams.append(
          "nurse_type",
          nurseType
            .split("-")
            .filter((e) => e !== "jobs")
            .join(" ")
        );
      });
    if (sortOption) queryParams.append("sort", sortOption);

    try {
      const response = await fetch(`/api/jobs?${queryParams}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .catch((err) => {
          console.log(err);

          return { count: 0, jobs: [] };
        });
      // @ts-ignore
      const { jobs, count } = response;
      setJobs(jobs);
      setCount(count);
      setLoading(false);
      console.log("res", count);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  const handleFilters = (filters: FilterUpdates) => {
    setJobTypes(filters.jobTypes);
    setLocations(filters.locations);
    setNurseTypes(filters.nurseTypes);
  };

  const handleSearch = (text: string) => {
    setSearchText(text);
  };

  const handleSort = (e: any) => {
    setSortOption(e.target.value);
  };

  useDidMountEffect(fetchJobs, [
    locations,
    // searchText,
    jobTypes,
    nurseTypes,
    sortOption,
  ]);

  useEffect(() => {
    if (searchText) {
      setFilteredJobs(
        jobs.filter(({ job_title, job_type, address, company }) => {
          let str = Object.values({
            job_title: job_title.toLocaleLowerCase(),
            job_type: job_type.toLocaleLowerCase(),
            address: address.toLocaleLowerCase(),
            company: company.toLocaleLowerCase(),
          });

          return str.join(" ").includes(searchText.toLocaleLowerCase());
        })
      );
    } else {
      setFilteredJobs(jobs);
    }
  }, [searchText, jobs]);

  return {
    jobs: filteredJobs,
    count,
    loading,
    sortOption,
    handleFilters,
    handleSearch,
    handleSort,
  };
};

export default useJob;
