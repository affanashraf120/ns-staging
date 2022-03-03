import Jobs from '../../components/Jobs'

export async function getStaticProps() {
	try {
		const result = await fetch(`${process.env.HOST_URL}/api/jobs?sort=hotJob`, {
			method: 'GET',
		})
		const foo: any = await result.json()
		console.log(foo)
		return { props: {} }
	} catch (err) {
		console.log(err)
		return { props: {} }
	}
}

const Page = (props: HomePageProps) => {
	return (
		<>
			<Jobs jobs={props.jobs} count={props.count} />
		</>
	)
}

export default Page
