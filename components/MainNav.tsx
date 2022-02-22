// import {useState} from "react";
import Link from 'next/link'

const MainNav = () => {
    // const [collapsed, setCollapsed] = useState(true)
    return (
        /*<div className="max-w-full z-10 bg-gray-100 bg-opacity-50 overflow-hidden">
          <div className="relative flex flex-col lg:flex-row lg:items-center justify-between container max-w-6xl mx-auto">
            <a href="#" onClick={() => setCollapsed(!collapsed)} className="block lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="absolute right-3 top-3" viewBox="0 0 16 16">
                <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
              </svg>
            </a>
            <div className={`transition-all ${collapsed ? 'h-16' : 'h-auto'}`}>
              <ul id="main-menu" className="mx-3 py-4 flex flex-col lg:flex-row lg:items-center lg:space-x-10 space-y-5 lg:space-y-0">
                <li>
                  <a
                    className="inline-block lg:px-3 transition-all whitespace-nowrap overflow-hidden overflow-ellipsis text-black font-medium text-2xl lg:text-xl"
                    href="#"
                  >
                    Nurse Seeking
                  </a>
                </li>
                <li className="group relative tracking-wide">
                  <a
                    href="#"
                    className="inline-block transition-all whitespace-nowrap overflow-hidden overflow-ellipsis text-gray-800"
                  >
                    NURSE JOBS
                  </a>
                </li>
                <li className="group relative tracking-wide">
                  <a
                    href="#"
                    className="inline-block transition-all whitespace-nowrap overflow-hidden overflow-ellipsis text-gray-500"
                  >
                    FOR EMPLOYERS
                  </a>
                </li>
                <li className="group relative tracking-wide">
                  <a
                    href="#"
                    className="inline-block transition-all whitespace-nowrap overflow-hidden overflow-ellipsis text-gray-500"
                  >
                    CONTACT
                  </a>
                </li>
              </ul>

              <ul>
                <li>
                  <a
                    href="#"
                    className="inline-block m-3 lg:m-0 rounded-md border py-3 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 font-bold text-white"
                  >
                    Sign Up
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>*/
        <header className="relative py-4 md:py-6">
            <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <a href="#" title=""
                               className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                            <span
                                className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> nurse
                                seeking</span>
                            </a>
                        </Link>
                    </div>

                    <div className="flex lg:hidden">
                        <button type="button" className="text-gray-900">
                            <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                      d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>

                    <div
                        className="hidden lg:flex lg:ml-10 xl:ml-16 lg:items-center lg:justify-center lg:space-x-8 xl:space-x-16">
                        <Link href="/jobs">
                            <a href="#" title=""
                               className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Nurse
                                Jobs </a>
                        </Link>

                        <a href="#" title=""
                           className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Employers </a>

                        <a href="#" title=""
                           className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Contact </a>
                    </div>

                    <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-8 xl:space-x-10">
                        <a href="#" title=""
                           className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Sign
                            Up </a>

                        <Link href="/post">
                            <a title=""
                               className="px-5 py-2 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                               role="button">
                                Post a Job
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export {MainNav};
