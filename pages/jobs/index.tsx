// import { JobFilters } from "../../components/home/JobFilters";
// import { RelatedSearches } from "../../components/home/RelatedSearches";
import Jobs from '../../components/Jobs'

export async function getStaticProps() {
	try {
		const result = await fetch(`${process.env.HOST_URL}/api/jobs?sort=hotJob`, {
			method: 'GET',
		})
		const foo: any = await result.json()
		return { props: { count: foo.count, jobs: foo.jobs } }
	} catch (err) {
		console.log(err)
		return { props: { count: 0, jobs: [] } }
	}
	// 	.then((res) => res.json())
	// 	.catch((err) => {
	// 		console.log(err)
	// 		return { count: 0, jobs: [] }
	// 	})
	// if (result && result.count && result.jobs)
	// 	return { props: { count: result.count, jobs: result.jobs } }
	// else return { props: { count: 0, jobs: [] } }
}

const Page = (props: HomePageProps) => {
	return (
		<>
			<Jobs jobs={props.jobs} count={props.count} />
			<div className='container mx-auto'>
				{/* <RelatedSearches /> */}
				{/* <JobFilters /> */}
			</div>
		</>
	)
}

export default Page
