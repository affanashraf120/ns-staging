import Link from "next/link";
import React from "react";

const Header = () => {
    return (
        <header className="relative z-10 py-4 md:py-6">
            <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <a
                                title=""
                                className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                            >
                                <span className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                                    {" "}
                                    NURSE SEEKING
                                </span>
                            </a>
                        </Link>
                    </div>

                    <div className="flex lg:hidden">
                        <button type="button" className="text-gray-900">
                            <svg
                                className="w-7 h-7"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </button>
                    </div>

                    <div className="hidden lg:flex lg:ml-10 xl:ml-16 lg:items-center lg:justify-center lg:space-x-8 xl:space-x-16">
                        <Link href="/jobs">
                            <a
                                title=""
                                className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                            >
                                Nurse Jobs
                            </a>
                        </Link>

                        <Link href="#">
                            <a
                                title=""
                                className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                            >
                                {" "}
                                Employers{" "}
                            </a>
                        </Link>

                        <Link href="/contact">
                            <a
                                title=""
                                className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                            >
                                {" "}
                                Contact{" "}
                            </a>
                        </Link>
                    </div>

                    <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-8 xl:space-x-10">

                        <Link href="#" >
                            <a
                                title=""
                                className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                            >
                                {" "}
                                Sign Up{" "}
                            </a>
                        </Link>

                        <Link href="/post">
                            <a
                                title=""
                                className="px-5 py-2 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                role="button"
                            >
                                Post a Job
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </header >
    );
};

export default Header;
