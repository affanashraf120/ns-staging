import React from 'react'

const Page = () => {
    return (
        <section className="py-12 bg-gray-900 sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <p className="text-sm font-normal text-gray-300 font-pj">Nov 19, 2021</p>
                <h1 className="max-w-4xl mt-6 text-3xl font-bold text-white sm:text-4xl xl:text-5xl font-pj xl:max-w-5xl">Registered Nurse Job Description.</h1>

                <div className="grid grid-cols-1 mt-10 lg:grid-cols-12 lg:mt-24 gap-y-10 lg:gap-x-20">
                    <div className="lg:col-span-5">
                        <div className="overflow-hidden rounded-2xl lg:h-full max-h-96 lg:max-h-full">
                            <img className="object-cover lg:h-full" src="https://cdn.rareblocks.xyz/collection/clarity/images/long-form/2/img-blog.png" alt="" />
                        </div>
                        <div className="w-full h-full overflow-hidden rounded-2xl aspect-w-3 aspect-h-4 sm:aspect-h-3 lg:aspect-none">
                            <img className="object-cover w-full h-full lg:w-auto" src="https://cdn.rareblocks.xyz/collection/clarity/images/long-form/2/img-blog.png" alt="" />
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <p className="text-base font-normal leading-7 text-gray-300 font-pj">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa risus sed eget ornare posuere turpis vitae. Id elementum velit posuere vestibulum lectus id eu sollicitudin. Tellus amet bibendum sit mus phasellus quis duis lacus. Enim eget sagittis, auctor iaculis nulla semper. In
                            vitae neque integer integer metus, est, tristique fermentum tristique.
                        </p>

                        <h2 className="mt-10 text-2xl text-white font-pj font-bodl">Get everything from scratch</h2>
                        <p className="mt-6 text-base font-normal leading-7 text-gray-300 font-pj">
                            Massa risus sed eget ornare posuere turpis vitae. Id elementum velit posuere vestibulum lectus id eu sollicitudin. Tellus amet bibendum sit mus phasellus quis duis lacus. Enim eget sagittis, auctor iaculis nulla semper. In vitae neque integer integer metus, est, tristique
                            fermentum tristique.
                        </p>

                        <ul className="pl-5 mt-6 space-y-1 text-base font-normal leading-7 text-gray-300 list-disc list-outside font-pj">
                            <li>Id elementum velit posuere vestibulum lectus id eu sollicitudin.</li>
                            <li>Tellus amet bibendum sit mus phasellus quis duis lacus.</li>
                            <li>Enim eget sagittis, auctor iaculis nulla semper.</li>
                        </ul>

                        <h2 className="mt-10 text-2xl text-white font-pj font-bodl">Choose from 120+ UI blocks</h2>
                        <p className="mt-6 text-base font-normal leading-7 text-gray-300 font-pj">
                            Massa risus sed eget ornare posuere turpis vitae. Id elementum velit posuere vestibulum lectus id eu sollicitudin. Tellus amet bibendum sit mus phasellus quis duis lacus. Enim eget sagittis, auctor iaculis nulla semper. In vitae neque integer integer metus, est, tristique
                            fermentum tristique.
                        </p>
                        <p className="mt-6 text-base font-normal leading-7 text-gray-300 font-pj">Tellus amet bibendum sit mus phasellus quis duis lacus. Enim eget sagittis, auctor iaculis nulla semper. In vitae neque integer integer metus, est, tristique fermentum tristique.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Page