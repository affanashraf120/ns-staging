import React from 'react';
import useJob from '../hooks/useJob';
import { FilterModal } from './home/FilterModal';
import { RelatedSearches } from './home/RelatedSearches';
import { SearchModal } from './home/SearchModal';
import { SingleJobPost } from './home/SingleJobPost';
import { useRouter } from 'next/router'
import Loading from './Loading';

const Jobs = (props: HomePageProps) => {

    const {
        count,
        loading,
        sortOption,
        jobs,
        handleSort,
        handleSearch,
        handleFilters
    } = useJob({
        jobs: props.jobs,
        count: props.count
    })

    const router = useRouter()

    return (
        <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center xl:max-w-4xl">
                    <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj mb-14">
                        The best nursing jobs in Australia
                    </h1>
                </div>
            </div>

            <SearchModal onSearch={handleSearch} />

            <div className="container max-w-3xl mt-5 mx-auto">
                <FilterModal onFiltersUpdated={handleFilters} />
                <hr className="border-gray-200 my-5" />
                <div className="flex justify-between items-center px-3 text-sm">
                    <div>{count} Jobs</div>
                    <div>
                        Sorted By:
                        <select
                            name="relevance"
                            value={sortOption}
                            onChange={handleSort}
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

                <br />

                {
                    router.pathname === '/jobs' && <div className="container mx-auto">
                        <RelatedSearches />
                    </div>
                }


                {/* <Pagination
                    onPageChanged={(page) => updateCurrentPage(page)}
                    currentPage={currentPage}
                    total={Math.ceil(jobsCount / 20)}
                />
                <RelatedSearches /> */}
            </div>
            {/* {
                router.pathname === '/jobs' && <div className="container mx-auto">
                    <JobFilters />
                </div>
            } */}

            {/* <hr className="border-gray-300 my-20" /> */}
        </section>
    );
}

export default Jobs