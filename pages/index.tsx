/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const Page = () => {
    return (
        <div className="relative py-4 md:py-6">
            <section className="relative py-12 sm:py-16 lg:pb-40">
                <div className="absolute bottom-0 right-0 overflow-hidden">
                    <img
                        className="w-full h-auto origin-bottom-right transform scale-150 lg:w-auto lg:mx-auto lg:object-cover lg:scale-75"
                        src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/background-pattern.png"
                        alt=""
                    />
                </div>

                <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-y-4 lg:items-center lg:grid-cols-2 xl:grid-cols-2">
                        <div className="text-center xl:col-span-1 lg:text-left md:px-16 lg:px-0 xl:pr-20">
                            <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">
                                Find your perfect nursing job
                            </h1>
                            <p className="mt-2 text-lg text-gray-600 sm:mt-6 font-inter">
                                All the nursing jobs in one place.
                            </p>

                            <Link href="/jobs">
                                <a
                                    role="button"
                                    className="inline-flex px-8 py-4 mt-8 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl sm:mt-10 font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                >
                                    See jobs
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative py-12 overflow-hidden bg-gray-50 sm:py-16 lg:py-20 xl:py-32">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 xl:grid-cols-2">
                        <div className="px-8 text-center xl:text-left xl:pr-16 md:max-w-2xl md:mx-auto xl:max-w-none">
                            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
                                The best companies for aussie nurse jobs
                            </h2>
                            <p className="mt-6 text-lg font-normal text-gray-600 font-pj">
                                Get thousands of nurse job opportunities in Australia, all in
                                one place, for free.
                            </p>
                        </div>

                        <div className="relative mt-8 sm:mt-12 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mt-0">
                            <div className="absolute inset-16">
                                <div
                                    className="w-full h-full mx-auto rotate-180 opacity-30 rounded-3xl blur-lg filter"
                                    style={{
                                        background:
                                            "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                                    }}
                                ></div>
                            </div>

                            <div className="relative space-y-5">
                                <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                                    <div className="flex items-center justify-center px-6 py-4 mx-auto overflow-hidden bg-white rounded-lg shadow-lg w-44 md:w-full">
                                        <img
                                            className="w-auto h-8"
                                            src="assets/images/health-nsw-gov-au.png"
                                            alt=""
                                        />
                                    </div>

                                    <div className="flex items-center justify-center px-6 py-4 mx-auto overflow-hidden bg-white rounded-lg shadow-lg w-44 md:w-full">
                                        <img
                                            className="w-auto h-8"
                                            src="assets/images/bupa-com-au.png"
                                            alt=""
                                        />
                                    </div>

                                    <div className="flex items-center justify-center px-6 py-4 mx-auto overflow-hidden bg-white rounded-lg shadow-lg w-44 md:w-full">
                                        <img
                                            className="w-auto h-8"
                                            src="assets/images/health-qld-gov-au.png"
                                            alt=""
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 xl:translate-x-6">
                                    <div className="flex items-center justify-center px-6 py-4 mx-auto overflow-hidden bg-white rounded-lg shadow-lg w-44 md:w-full">
                                        <img
                                            className="w-auto h-8"
                                            src="assets/images/healthscope-com-au.png"
                                            alt=""
                                        />
                                    </div>

                                    <div className="flex items-center justify-center px-6 py-4 mx-auto overflow-hidden bg-white rounded-lg shadow-lg w-44 md:w-full">
                                        <img
                                            className="w-auto h-8"
                                            src="assets/images/sahealth-sa-gov-au.png"
                                            alt=""
                                        />
                                    </div>

                                    <div className="flex items-center justify-center px-6 py-4 mx-auto overflow-hidden bg-white rounded-lg shadow-lg w-44 md:w-full">
                                        <img
                                            className="w-auto h-8"
                                            src="assets/images/alfredhealth-org-au.png"
                                            alt=""
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 xl:translate-x-12">
                                    <div className="flex items-center justify-center px-6 py-4 mx-auto overflow-hidden bg-white rounded-lg shadow-lg w-44 md:w-full">
                                        <img
                                            className="w-auto h-8"
                                            src="assets/images/redcross-org-au.png"
                                            alt=""
                                        />
                                    </div>

                                    <div className="flex items-center justify-center px-6 py-4 mx-auto overflow-hidden bg-white rounded-lg shadow-lg w-44 md:w-full">
                                        <img
                                            className="w-auto h-8"
                                            src="assets/images/regis-com-au.png"
                                            alt=""
                                        />
                                    </div>

                                    <div className="flex items-center justify-center px-6 py-4 mx-auto overflow-hidden bg-white rounded-lg shadow-lg w-44 md:w-full">
                                        <img
                                            className="w-auto h-8"
                                            src="assets/images/ncnhealth-org-au.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-b xl:bg-gradient-to-r from-transparent via-transparent to-gray-50"></div>
            </section>

            <section className="py-12 bg-white sm:py-16 lg:py-20">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="text-center lg:flex lg:items-center lg:justify-between lg:text-left">
                        <h2 className="max-w-xl mx-auto text-4xl font-bold text-gray-900 lg:mx-0 font-pj lg:pr-8 xl:pr-0">
                            The best jobs in your inbox daily, for free. Cancel anytime.
                        </h2>

                        <div className="flex-shrink-0 mt-8 sm:flex sm:items-center sm:justify-center lg:mt-0 lg:justify-end sm:space-x-5">
                            <a
                                href="#"
                                title=""
                                className="
                        inline-flex
                        items-center
                        justify-center
                        w-full
                        px-6
                        py-3
                        text-base
                        font-bold
                        text-gray-900
                        transition-all
                        duration-200
                        border-2 border-gray-400
                        sm:w-auto
                        rounded-xl
                        font-pj
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
                        hover:bg-gray-900
                        focus:bg-gray-900
                        hover:text-white
                        focus:text-white
                        hover:border-gray-900
                        focus:border-gray-900
                    "
                                role="button"
                            >
                                See all jobs first
                            </a>

                            <div className="relative inline-flex w-full mt-5 group sm:w-auto sm:mt-0">
                                <div
                                    className="absolute duration-1000 rotate-180 transitiona-all opacity-70 -inset-px rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"
                                    style={{
                                        background:
                                            "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                                    }}
                                ></div>

                                <a
                                    href="#"
                                    title=""
                                    className="
                            relative
                            inline-flex
                            items-center
                            justify-center
                            w-full
                            px-6
                            py-3
                            text-base
                            font-bold
                            text-white
                            transition-all
                            duration-200
                            bg-gray-900
                            border-2 border-transparent
                            lg:w-auto
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
                            font-pj
                            hover:bg-opacity-90
                            rounded-xl
                        "
                                    role="button"
                                >
                                    Jobs in your inbox
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white sm:py-16 lg:py-20">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="px-8 py-10 overflow-hidden lg:px-24 md:py-20 bg-gray-50 rounded-3xl">
                        <div className="max-w-lg mx-auto text-center">
                            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">Hiring Nurses?</h2>
                        </div>

                        <ul className="flex flex-col items-center justify-center mt-8 space-y-5 sm:mt-12 lg:mt-16 md:flex-row md:space-y-0 md:space-x-12">
                            <li className="flex items-center text-gray-900">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="ml-3 text-lg font-bold font-pj"> Post your job in minutes </span>
                            </li>

                            <li className="flex items-center text-gray-900">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="ml-3 text-lg font-bold font-pj"> Enhance your employer branding </span>
                            </li>

                            <li className="flex items-center text-gray-900">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="ml-3 text-lg font-bold font-pj"> Hire the best nurses </span>
                            </li>
                        </ul>

                        <div className="mt-8 text-center sm:mt-12">
                            <div className="relative inline-flex group">
                                <div
                                    className="absolute duration-1000 rotate-180 transitiona-all opacity-70 -inset-px rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"
                                    style={{
                                        background: "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)"
                                    }}
                                ></div>
                                <Link href="/post" >
                                    <a

                                        className="relative inline-flex items-center justify-center py-3.5 text-base font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent px-9 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj hover:bg-opacity-90 rounded-xl"
                                        role="button"
                                    >
                                        Post A Job
                                    </a>
                                </Link>
                            </div>

                            <p className="mt-5 text-sm font-normal text-gray-500 font-pj">Start for free</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Page;
