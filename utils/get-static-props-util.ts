export default async function getStaticPropsUtil(location: string) {
  const result = await fetch(`/api/jobs`, {
    method: "PUT",
    body: JSON.stringify({
      page: 1,
      locations: [location],
    }),
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);

      return { count: 0, jobs: [] };
    });
  return { props: { total: result.count, jobList: result.jobs } };
}
