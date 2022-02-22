import { useEffect, useState } from "react";
import { FilterModal } from "../../components/home/FilterModal";
import { Pagination } from "../../components/home/Pagination";
import { RelatedSearches } from "../../components/home/RelatedSearches";
import { SearchModal } from "../../components/home/SearchModal";
import { SingleJobPost } from "../../components/home/SingleJobPost";
import Loading from "../../components/Loading";
import useDidMountEffect from "../../hooks/useDidMountEffect";

export async function getStaticProps() {
    const result = await fetch(`${process.env.HOST_URL}/api/jobs`, {
        method: "PUT",
        body: JSON.stringify({
            page: 1,
        }),
    })
        .then((res) => res.json())
        .catch((err) => {
            console.log(err);

            return { count: 0, jobs: [] };
        });
    return { props: { total: result.count, jobList: result.jobs } };
}

const Jobs = (props: HomePageProps) => {
    // TODO check if path is jobs and do accordingly
    //
    // @ts-ignore
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [jobs, setJobs] = useState(props.jobList);
    const [jobsCount, setJobsCount] = useState(props.total);
    // const router = useRouter();

    const [jobTypes, setJobTypes] = useState("");
    const [locations, setLocations] = useState("");
    const [nurseTypes, setNurseTypes] = useState("");
    const [sortOption, setSortOption] = useState<"hotJob" | "datePosted">(
        "hotJob"
    );
    const [searchQuery, setSearchQuery] = useState("");

    const fetchJobs = () => {
        setLoading(true);

        fetch(`/api/jobs`, {
            method: "PUT",
            body: JSON.stringify({
                page: currentPage,
                locations: locations.length ? locations.split(",") : [],
                nurseTypes: nurseTypes.length ? nurseTypes.split(",") : [],
                jobTypes: jobTypes.length ? jobTypes.split(",") : [],
                groupBy: sortOption,
                search: searchQuery,
            }),
        })
            .then((res) => res.json())
            .then(({ jobs, count }) => {
                console.log(jobs);
                setJobs(jobs);
                setJobsCount(count);
            })
            .finally(() => setLoading(false));
    };

    useDidMountEffect(fetchJobs, [
        currentPage,
        jobTypes,
        locations,
        nurseTypes,
        sortOption,
        searchQuery,
    ]);

    useEffect(() => {
        setJobs(props.jobList);
        setJobsCount(props.total);
    }, [props]);

    const updateCurrentPage = (page: number) => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setCurrentPage(page);
    };

    const onFiltersUpdated = (filters: FilterUpdates) => {
        setJobTypes(filters.jobTypes.join(","));
        setLocations(filters.locations.join(","));
        setNurseTypes(filters.nurseTypes.join(","));
    };

    const onSearch = (query: string) => {
        console.log(query);
        setSearchQuery(query);
    };

    const onSortOptionChange = (e: any) => {
        setSortOption(e.target.value);
    };

    return (
        <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center xl:max-w-4xl">
                    <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj mb-14">
                        The best nursing jobs in Australia
                    </h1>
                </div>
            </div>

            <SearchModal onSearch={onSearch} />

            <div className="container max-w-3xl mt-5 mx-auto">
                <FilterModal onFiltersUpdated={onFiltersUpdated} />
                <hr className="border-gray-200 my-5" />
                <div className="flex justify-between items-center px-3 text-sm">
                    <div>{jobsCount} Jobs</div>
                    <div>
                        Sorted By:
                        <select
                            name="relevance"
                            value={sortOption}
                            onChange={onSortOptionChange}
                        >
                            <option value="hotJob">Relevance</option>
                            <option value="datePosted">Date</option>
                        </select>
                    </div>
                </div>

                {loading ? (
                    <Loading />
                ) : (
                    <div className="space-y-6 mt-10">
                        {jobs?.map((job) => (
                            <SingleJobPost key={job.id} job={job} />
                        ))}
                    </div>
                )}

                <Pagination
                    onPageChanged={(page) => updateCurrentPage(page)}
                    currentPage={currentPage}
                    total={Math.ceil(jobsCount / 20)}
                />
                <RelatedSearches />
            </div>
            {/* {
                router.pathname === '/jobs' && <div className="container mx-auto">
                    <JobFilters />
                </div>
            } */}

            {/* <hr className="border-gray-300 my-20" /> */}
        </section>
    );
};

export default Jobs;
