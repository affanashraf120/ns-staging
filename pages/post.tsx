import { useState } from "react"
import axios from 'axios'
import { useRouter } from "next/router"
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import jobTypes from '../data/job-types.json'
// import nurseTypes from '../data/nurse-types.json'


axios.defaults.headers = {
    // @ts-ignore
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}

const Post = () => {

    const { register, handleSubmit } = useForm()

    const [loading, setLoading] = useState(false)
    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    // const [company, setCompany] = useState('')
    // const [title, setTitle] = useState('')
    // const [type, setType] = useState('')
    // const [location, setLocation] = useState('')
    // const [link, setLink] = useState('')

    const router = useRouter()

    // const handleChange = (e: any) => {
    //     const field = e.target.id
    //     const value = e.target.value

    //     field === 'name' && setName(value) ||
    //         field === 'email' && setEmail(value) ||
    //         field === 'company' && setCompany(value) ||
    //         field === 'title' && setTitle(value) ||
    //         field === 'job-type' && setType(value) ||
    //         field === 'job-location' && setLocation(value) ||
    //         field === 'job-link' && setLink(value)
    // }

    // const onCreateJob = (e: any) => {
    //     e.preventDefault()
    //     setLoading(true)
    //     axios.post(`/api/jobs    `, {
    //         // name,
    //         // email,
    //         jobTitle: title,
    //         address: location,
    //         company,
    //         jobType: type,
    //         link: link
    //     })
    //         .then(() => router.replace('/jobs'))
    //         .catch(err => console.error(err))
    //         .finally(() => setLoading(false))
    // }

    const onSubmit = async (data: any) => {
        console.log(data)
        setLoading(true)
        try {
            await axios.post('/api/jobs', {
                ...data
            })
            setLoading(false)
            router.replace('/jobs')
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    return (
        <section className="relative py-12 bg-gray-900 sm:py-16 lg:py-20">
            <div className="absolute inset-0 overflow-hidden">
                <Image className="object-cover object-bottom w-full h-full transform rotate-180 opacity-10"
                    width="100%" height="100%"
                    src="https://cdn.rareblocks.xyz/collection/clarity/images/features/6/background-pattern.png"
                    alt="" />
            </div>

            <div className="relative max-w-md mx-auto mt-10 lg:max-w-xl">
                <div className="absolute inset-x-1.5 top-8 -inset-y-4">
                    <div className="w-full h-full mx-auto rotate-180 rounded-3xl opacity-90 blur-xl filter"
                        style={{ background: 'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)' }}></div>
                </div>

                <div className="relative overflow-hidden bg-white rounded-2xl lg:rounded-3xl">
                    <div className="px-6 py-7 sm:px-12 sm:py-10">
                        <div className="text-center">
                            <h1 className="text-3xl font-bold text-gray-900 font-pj sm:text-4xl xl:text-5xl">Post a
                                nurse
                                job</h1>
                            <p className="mt-6 text-lg font-normal text-gray-600 font-pj">Post a job today & start
                                growing
                                your business</p>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="fullname"
                                        className="text-base font-medium text-gray-900 font-pj">Name</label>
                                    <div className="mt-2.5">
                                        <input {...register('fullname')} placeholder="Full name" required
                                            className="block w-full px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email"
                                        className="text-base font-medium text-gray-900 font-pj">Email</label>
                                    <div className="mt-2.5">
                                        <input {...register('email')} placeholder="Email address" required
                                            className="block w-full px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="company"
                                        className="text-base font-medium text-gray-900 font-pj">Company</label>
                                    <div className="mt-2.5">
                                        <input {...register('company')} placeholder="Company Name" required
                                            className="block w-full px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="address"
                                        className="text-base font-medium text-gray-900 font-pj">Address</label>
                                    <div className="mt-2.5">
                                        <input {...register('address')} placeholder="Address" required
                                            className="block w-full px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="state"
                                        className="text-base font-medium text-gray-900 font-pj">State</label>
                                    <div className="mt-2.5">
                                        <input {...register('state')} placeholder="State Name" required
                                            className="block w-full px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="job_title"
                                        className="text-base font-medium text-gray-900 font-pj">Job Title</label>
                                    <div className="mt-2.5">
                                        <input {...register('job_title')}
                                            placeholder="Job title"
                                            required
                                            className="block w-full px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="job-type" className="font-medium text-gray-900 font-pj">Job Type</label>
                                    <div className="mt-2.5">
                                        <select {...register(('job_type'))}
                                            required
                                            className="block w-full py-4 pl-5 pr-12 text-base font-normal text-black placeholder-gray-600 bg-white border border-gray-300 rounded-xl focus:border-black focus:ring-1 focus:ring-black font-pj focus:outline-none"
                                        >
                                            <option value="">-- Select an option --</option>
                                            {jobTypes.map(({ name, slug }) => (
                                                <option value={slug} key={slug}>{name}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* <div>
                                    <label htmlFor="job-type" className="font-medium text-gray-900 font-pj">Nurse Type</label>
                                    <div className="mt-2.5">
                                        <select {...register(('nurse_type'))}
                                            required
                                            className="block w-full py-4 pl-5 pr-12 text-base font-normal text-black placeholder-gray-600 bg-white border border-gray-300 rounded-xl focus:border-black focus:ring-1 focus:ring-black font-pj focus:outline-none"
                                        >
                                            <option value="">-- Select an option --</option>
                                            {nurseTypes.map((e) => (
                                                <option value={e.slug} key={e.slug}>{e?.abv}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div> */}

                                <div>
                                    <label htmlFor="salary"
                                        className="text-base font-medium text-gray-900 font-pj">Salary ($)</label>
                                    <div className="mt-2.5">
                                        <input {...register('salary')} placeholder="USD" required
                                            className="block w-full px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="apply_link"
                                        className="text-base font-medium text-gray-900 font-pj">Link to Application</label>
                                    <div className="mt-2.5">
                                        <input {...register('apply_link')} placeholder="APPLY URL" required
                                            className="block w-full px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="scraped_link"
                                        className="text-base font-medium text-gray-900 font-pj">Scraped URL</label>
                                    <div className="mt-2.5">
                                        <input {...register('scraped_link')} placeholder="Scraped URL" required
                                            className="block w-full px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900"
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className={`flex items-center justify-center w-full px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj hover:bg-gray-600 ${loading ? "disabled:opacity-50" : ""}`}
                                    disabled={loading}
                                >
                                    {loading ? 'Posting ...' : 'Post Your Job'}
                                </button>
                            </div>
                        </form>

                        <svg className="w-auto h-4 mx-auto mt-8 text-gray-300" viewBox="0 0 172 16" fill="none"
                            stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <line y1="-0.5" x2="18.0278" y2="-0.5"
                                transform="matrix(-0.5547 0.83205 0.83205 0.5547 11 1)" />
                            <line y1="-0.5" x2="18.0278" y2="-0.5"
                                transform="matrix(-0.5547 0.83205 0.83205 0.5547 46 1)" />
                            <line y1="-0.5" x2="18.0278" y2="-0.5"
                                transform="matrix(-0.5547 0.83205 0.83205 0.5547 81 1)" />
                            <line y1="-0.5" x2="18.0278" y2="-0.5"
                                transform="matrix(-0.5547 0.83205 0.83205 0.5547 116 1)" />
                            <line y1="-0.5" x2="18.0278" y2="-0.5"
                                transform="matrix(-0.5547 0.83205 0.83205 0.5547 151 1)" />
                            <line y1="-0.5" x2="18.0278" y2="-0.5"
                                transform="matrix(-0.5547 0.83205 0.83205 0.5547 18 1)" />
                            <line y1="-0.5" x2="18.0278" y2="-0.5"
                                transform="matrix(-0.5547 0.83205 0.83205 0.5547 53 1)" />
                            <line y1="-0.5" x2="18.0278" y2="-0.5"
                                transform="matrix(-0.5547 0.83205 0.83205 0.5547 88 1)" />
                            <line y1="-0.5" x2="18.0278" y2="-0.5"
                                transform="matrix(-0.5547 0.83205 0.83205 0.5547 123 1)" />
                            <line y1="-0.5" x2="18.0278" y2="-0.5"
                                transform="matrix(-0.5547 0.83205 0.83205 0.5547 158 1)" />
                            <line y1="-0.5" x2="18.0278" y2="-0.5"
                                transform="matrix(-0.5547 0.83205 0.83205 0.5547 25 1)" />
                            <line y1="-0.5" x2="18.0278" y2="-0.5"
                                transform="matrix(-0.5547 0.83205 0.83205 0.5547 60 1)" />
                            <line y1="-0.5" x2="18.0278" y2="-0.5"
                                transform="matrix(-0.5547 0.83205 0.83205 0.5547 95 1)" />
                            <line y1="-0.5" x2="18.0278" y2="-0.5"
                                transform="matrix(-0.5547 0.83205 0.83205 0.5547 130 1)" />
                            <line y1="-0.5" x2="18.0278" y2="-0.5"
                                transform="matrix(-0.5547 0.83205 0.83205 0.5547 165 1)" />
                            <line y1="-0.5" x2="18.0278" y2="-0.5"
                                transform="matrix(-0.5547 0.83205 0.83205 0.5547 32 1)" />
                            <line y1="-0.5" x2="18.0278" y2="-0.5"
                                transform="matrix(-0.5547 0.83205 0.83205 0.5547 67 1)" />
                            <line y1="-0.5" x2="18.0278" y2="-0.5"
                                transform="matrix(-0.5547 0.83205 0.83205 0.5547 102 1)" />
                            <line y1="-0.5" x2="18.0278" y2="-0.5"
                                transform="matrix(-0.5547 0.83205 0.83205 0.5547 137 1)" />
                            <line y1="-0.5" x2="18.0278" y2="-0.5"
                                transform="matrix(-0.5547 0.83205 0.83205 0.5547 172 1)" />
                            <line y1="-0.5" x2="18.0278" y2="-0.5"
                                transform="matrix(-0.5547 0.83205 0.83205 0.5547 39 1)" />
                            <line y1="-0.5" x2="18.0278" y2="-0.5"
                                transform="matrix(-0.5547 0.83205 0.83205 0.5547 74 1)" />
                            <line y1="-0.5" x2="18.0278" y2="-0.5"
                                transform="matrix(-0.5547 0.83205 0.83205 0.5547 109 1)" />
                            <line y1="-0.5" x2="18.0278" y2="-0.5"
                                transform="matrix(-0.5547 0.83205 0.83205 0.5547 144 1)" />
                        </svg>

                        <p className="mt-5 text-base font-normal text-center text-gray-900 font-pj">Got
                            questions? <a
                                href="#" title=""
                                className="font-bold rounded hover:underline focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">Contact
                                Us</a></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Post