import React from "react";
import { GetStaticProps } from "next";
import employers from "../../data/employers.json";
import locations from "../../data/locations.json";
import nurseTypes from "../../data/nurse-types.json";
import nurseTypeLocations from "../../data/nurse-type-locations.json";

export async function getStaticPaths() {
    return {
        paths: ["employer", "location", "nurse-type", "nurse-type-location"].map(
            (e) => {
                return {
                    params: { slug: e },
                };
            }
        ),
        fallback: false,
    };
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    switch (ctx.params?.slug || "") {
        case "employer":
            return {
                props: { links: employers },
            };
        case "location":
            return {
                props: { links: locations },
            };
        case "nurse-type":
            return {
                props: { links: nurseTypes },
            };
        case "nurse-type-location":
            return {
                props: { links: nurseTypeLocations },
            };
        default:
            return {
                props: {},
            };
    }
};

type Props = {
    links: any[];
};

const Page = (props: Props) => {
    return (
        <div className="p-5 container mx-auto">
            <h4 className="text-3xl font-medium mb-6 mt-20">Nurse Jobs By</h4>

            <div className="grid grid-cols-2 lg:grid-cols-4 text-center lg:text-left gap-6 lg:gap-16 mt-10">
                {props.links && props.links.map((e, i) => (
                    <a
                        href={`${process.env.HOST_URL}/${e.slug}`}
                        className="text-base"
                        key={i}
                    >
                        {e.name}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Page;
