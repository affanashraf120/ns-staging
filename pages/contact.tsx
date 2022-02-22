import React from 'react'

const Contact = () => {
    return (
        <section className="relative py-12 overflow-hidden bg-gray-50 sm:py-16 lg:py-20">
            <div className="absolute inset-x-0 top-80">
                <img className="w-full mx-auto opacity-5" src="https://cdn.rareblocks.xyz/collection/clarity/images/cta/4/background-pattern.png" alt="" />
            </div>

            <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-900 font-pj">Contact nurse seeking</h2>
                </div>

                <div className="relative max-w-md mx-auto mt-8 sm:mt-16">
                    <div className="absolute -inset-2">
                        <div className="w-full h-full mx-auto rotate-180 opacity-30 blur-lg filter" style={{
                            background: "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)"
                        }}></div>
                    </div>

                    <form action="#" method="POST" className="relative bg-white shadow-xl rounded-2xl">
                        <div className="p-8 sm:px-10">
                            <div className="space-y-5">
                                <div>
                                    <label htmlFor="" className="font-medium text-gray-900 font-pj"> Your name </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            placeholder="Enter your full name"
                                            className="block w-full px-5 py-4 text-base font-normal text-gray-900 placeholder-gray-600 bg-white border border-gray-300 rounded-xl focus:border-gray-900 focus:ring-1 focus:ring-gray-900 font-pj focus:outline-none"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="" className="font-medium text-gray-900 font-pj"> Email address </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            placeholder="Enter your email address"
                                            className="block w-full px-5 py-4 text-base font-normal text-gray-900 placeholder-gray-600 bg-white border border-gray-300 rounded-xl focus:border-gray-900 focus:ring-1 focus:ring-gray-900 font-pj focus:outline-none"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="" className="font-medium text-gray-900 font-pj"> How can we help? </label>
                                    <div className="mt-2.5">
                                        <select name="" id="" className="block w-full py-4 pl-5 pr-12 text-base font-normal text-black placeholder-gray-600 bg-white border border-gray-300 rounded-xl focus:border-black focus:ring-1 focus:ring-black font-pj focus:outline-none">
                                            <option value="">-- Select an option --</option>
                                            <option value="">I want to hire a nurse</option>
                                            <option value="">I&apos;m confused about how something works</option>
                                            <option value="">Something is broken</option>
                                            <option value="">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="" className="font-medium text-gray-900 font-pj"> What’s your question, comment, or issue?</label>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            placeholder="Share all the details. The more we know, the better we can help you."
                                            className="block w-full px-5 py-4 text-base font-normal text-gray-900 placeholder-gray-600 bg-white border border-gray-300 rounded-xl focus:border-gray-900 focus:ring-1 focus:ring-gray-900 font-pj focus:outline-none"
                                        />
                                    </div>
                                </div>


                                <div>
                                    <button
                                        type="submit"
                                        className="
                                    inline-flex
                                    items-center
                                    justify-center
                                    w-full
                                    px-8
                                    py-4
                                    text-base
                                    font-bold
                                    text-white
                                    transition-all
                                    duration-200
                                    bg-gray-900
                                    border border-transparent
                                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
                                    font-pj
                                    hover:bg-gray-600
                                    rounded-xl
                                "
                                    >
                                        Contact Us
                                    </button>

                                    <p className="mt-5 text-sm font-normal text-center text-gray-500 font-pj">We try to get back to all contact requests ASAP.</p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact