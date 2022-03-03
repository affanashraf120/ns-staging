import React from "react";
import employers from "../data/employers.json";
import locations from "../data/locations.json";
import nurseTypes from "../data/nurse-types.json";
import nurseTypeLocations from "../data/nurse-type-locations.json";
import { GetStaticProps } from "next";
import Jobs from "../components/Jobs";

export async function getStaticPaths() {
    return {
        paths: [
            ...employers,
            ...locations,
            ...nurseTypes,
            ...nurseTypeLocations,
        ].map((e) => {
            return {
                params: { slug: e.slug },
            };
        }),
        fallback: false,
    };
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    console.log(ctx.params?.slug)
    try {
        const response = await fetch(`${process.env.HOST_URL}/api/jobs`, {
            method: "GET"
        })
        const { jobs, count } = await response.json()

        return {
            props: { jobs, count }
        }
    } catch (error) {
        console.log(error)
        return {
            props: { jobs: [], count: 0 }
        }
    }
};

const Page = (props: HomePageProps) => {
    return <Jobs jobs={props.jobs} count={props.count} />;
};

export default Page;
