import Link from "next/link";
import React from "react";

const About = () => {
    return (
        <div>
            <section className="relative py-12 sm:py-16 lg:pb-40">
                <div className="absolute bottom-0 right-0 overflow-hidden">
                    <img
                        className="w-full h-auto origin-bottom-right transform scale-150 lg:w-auto lg:mx-auto lg:object-cover lg:scale-75"
                        src="public/images/background-pattern.png"
                        alt=""
                    />
                </div>

                <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-y-4 lg:items-center lg:grid-cols-2 xl:grid-cols-2">
                        <div className="text-center xl:col-span-1 lg:text-left md:px-16 lg:px-0 xl:pr-20">
                            <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">
                                Welcome to nurse seeking
                            </h1>
                            <p className="mt-2 text-lg text-gray-600 sm:mt-6 font-inter">
                                We believe that healthcare jobs are the future.
                            </p>
                            <Link href='/jobs' >
                                <a
                                    title=""
                                    className="inline-flex px-8 py-4 mt-8 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl sm:mt-10 font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                    role="button"
                                >
                                    See Jobs
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white sm:py-16 lg:py-20">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
                            Frequently Asked Questions
                        </h2>
                        <p className="max-w-lg mx-auto mt-6 text-base text-gray-600 font-pj">
                            You can easily find a job or hire a nurse.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto mt-8 sm:mt-14">
                        <div x-data="{ active: 1 }" className="space-y-4">
                            <div className="relative">
                                <div className="absolute -inset-1">
                                    <div
                                        className="w-full h-full mx-auto opacity-30 blur-lg filter"
                                        style={{
                                            background:
                                                "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                                        }}
                                    ></div>
                                </div>

                                <div
                                    x-data="{
                          id: 1,
                          get expanded() {
                              return this.active === this.id
                          },
                          set expanded(value) {
                              this.active = value ? this.id : null
                          },
                      }"
                                    role="region"
                                    className="relative overflow-hidden bg-white border border-gray-200 rounded-xl"
                                >
                                    <h3>
                                        <button className="flex items-center justify-between w-full px-6 py-5 text-xl font-bold text-left text-gray-900 sm:p-8 font-pj">
                                            <span>What is nurse seeking?</span>
                                            <span
                                                x-show="expanded"
                                                aria-hidden="true"
                                                className="ml-4"
                                            >
                                                <svg
                                                    className="w-6 h-6 text-gray-900"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M20 12H4"
                                                    />
                                                </svg>
                                            </span>
                                            <span
                                                x-show="!expanded"
                                                aria-hidden="true"
                                                className="ml-4"
                                            >
                                                <svg
                                                    className="w-6 h-6 text-gray-900"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M12 4v16m8-8H4"
                                                    />
                                                </svg>
                                            </span>
                                        </button>
                                    </h3>

                                    <div x-show="expanded" x-collapse>
                                        <div className="px-6 pb-6 sm:px-8 sm:pb-8">
                                            nurse seeking is a job board that offers a wide variety of
                                            the best nursing jobs, RNs, Midwives, ENs, and more on
                                            thousands of Australian nursing jobs. You can see all the
                                            jobs you want, whenever you want without a single search.
                                            There&apos;s always a new to opportunity to discover and
                                            new jobs are added every day!.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                x-data="{
                          id: 2,
                          get expanded() {
                              return this.active === this.id
                          },
                          set expanded(value) {
                              this.active = value ? this.id : null
                          },
                      }"
                                role="region"
                                className="overflow-hidden bg-white border border-gray-200 rounded-xl"
                            >
                                <h3>
                                    <button className="flex items-center justify-between w-full px-6 py-5 text-xl font-bold text-left text-gray-900 sm:p-8 font-pj">
                                        <span> How many nurse jobs are there on nurse seeking right now? </span>
                                        <span x-show="expanded" aria-hidden="true" className="ml-4">
                                            <svg
                                                className="w-6 h-6 text-gray-900"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M20 12H4"
                                                />
                                            </svg>
                                        </span>
                                        <span
                                            x-show="!expanded"
                                            aria-hidden="true"
                                            className="ml-4"
                                        >
                                            <svg
                                                className="w-6 h-6 text-gray-900"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M12 4v16m8-8H4"
                                                />
                                            </svg>
                                        </span>
                                    </button>
                                </h3>

                                <div x-show="expanded" x-collapse>
                                    <div className="px-6 pb-6 sm:px-8 sm:pb-8">
                                      There are thousands of jobs available to search and apply for right now.
                                    </div>
                                </div>
                            </div>

                            <div
                                x-data="{
                                        id: 3,
                                        get expanded() {
                                            return this.active === this.id
                                        },
                                        set expanded(value) {
                                            this.active = value ? this.id : null
                                        },
                                    }"
                                role="region"
                                className="overflow-hidden bg-white border border-gray-200 rounded-xl"
                            >
                                <h3>
                                    <button className="flex items-center justify-between w-full px-6 py-5 text-xl font-bold text-left text-gray-900 sm:p-8 font-pj">
                                        <span>
                                            {" "}
                                            How can I be the first to find out when there are new nurse jobs on nurse seeking?{" "}
                                        </span>
                                        <span x-show="expanded" aria-hidden="true" className="ml-4">
                                            <svg
                                                className="w-6 h-6 text-gray-900"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M20 12H4"
                                                />
                                            </svg>
                                        </span>
                                        <span
                                            x-show="!expanded"
                                            aria-hidden="true"
                                            className="ml-4"
                                        >
                                            <svg
                                                className="w-6 h-6 text-gray-900"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M12 4v16m8-8H4"
                                                />
                                            </svg>
                                        </span>
                                    </button>
                                </h3>

                                <div x-show="expanded" x-collapse>
                                    <div className="px-6 pb-6 sm:px-8 sm:pb-8">
                                    New nurse jobs are added every day! 
                                    We will be launching jobs alerts soon. 
                                    Signing up for job alerts will help you keep
                                    up-to-date with the latest nurse opportunities in your inbox today. 

                                    </div>
                                </div>
                            </div>

                            <div
                                x-data="{
                                          id: 4,
                                          get expanded() {
                                              return this.active === this.id
                                          },
                                          set expanded(value) {
                                              this.active = value ? this.id : null
                                          },
                                      }"
                                role="region"
                                className="overflow-hidden bg-white border border-gray-200 rounded-xl"
                            >
                                <h3>
                                    <button className="flex items-center justify-between w-full px-6 py-5 text-xl font-bold text-left text-gray-900 sm:p-8 font-pj">
                                        <span> What jobs can I find on nurse seeking?  </span>
                                        <span x-show="expanded" aria-hidden="true" className="ml-4">
                                            <svg
                                                className="w-6 h-6 text-gray-900"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M20 12H4"
                                                />
                                            </svg>
                                        </span>
                                        <span
                                            x-show="!expanded"
                                            aria-hidden="true"
                                            className="ml-4"
                                        >
                                            <svg
                                                className="w-6 h-6 text-gray-900"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M12 4v16m8-8H4"
                                                />
                                            </svg>
                                        </span>
                                    </button>
                                </h3>

                                <div x-show="expanded" x-collapse>
                                    <div className="px-6 pb-6 sm:px-8 sm:pb-8">
                                        All the nurse jobs in Australia!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
