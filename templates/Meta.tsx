import {NextSeo} from 'next-seo';
import Head from 'next/head';
import {useRouter} from 'next/router';

import {AppConfig} from '../utils/AppConfig';

type IMetaProps = {
    title: string;
    description: string;
    canonical?: string;
};

const Meta = (props: IMetaProps) => {
    const router = useRouter();

    return (
        <>
            <Head>
                <meta charSet="UTF-8" key="charset"/>
                <meta property='og:locale' content='en_AU'/>
                <meta property='og:type' content='website'/>
                <meta property='og:title' content='Registered Nurse Jobs'/>
                <meta property='og:url' content='https://nurseseeking.com/jobs'/>
                <meta property='og:site_name' content='nurse seeking'/>
                <meta property='og:image' content='https://nurseseeking.com/images/open-graph/jobs.png'/>
                <meta property='og:description'
                      content='Registered nurse jobs. The best nurse jobs all in one place. RNs, CNCs, AIN, EN, managers and more.'/>
                <meta property='twitter:card' content='summary_large_image'/>
                <meta property='twitter:description'
                      content='The best nurse jobs all in one place. RNs, CNCs, AIN, EN, managers and more.'/>
                <meta property='twitter:title' content='The Best Nurse Jobs ➔ All in one place // nurse seeking'/>
                <meta property='twitter:site' content='@nurseseeking'/>
                <meta property='twitter:image' content='https://nurseseeking.com/images/open-graph/jobs.png'/>
                <meta property='twitter:creator' content='@nurseseeking'/>
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1"
                    key="viewport"
                />
                <link
                    rel="apple-touch-icon"
                    href={`${router.basePath}/apple-touch-icon.png`}
                    key="apple"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href={`${router.basePath}/favicon-32x32.png`}
                    key="icon32"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href={`${router.basePath}/favicon-16x16.png`}
                    key="icon16"
                />
                <link
                    rel="icon"
                    href={`${router.basePath}/favicon.ico`}
                    key="favicon"
                />

                <script type="application/ld+json">{`
                {
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "sameAs": [
                        "https://www.facebook.com/nurseseeking",
                        "https://www.twitter.com/nurseseeking",
                        "https://www.linkedin.com/nurseseeking",
                        "https://www.youtube.com/nurseseeking",
                        "https://www.instagram.com/nurseseeking"
                    ],
                    "url": "https://www.nurseseeking.com",
                    "address": {
                        "@type": "PostalAddress",
                        "addressCountry": "AU",
                        "addressLocality": "Sydney",
                        "addressRegion": "NSW",
                        "postalCode": "2000",
                        "streetAddress": "1 Farrer Place",
                    },
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "areaServed": "AU",
                        "availableLanguage": "English",
                        "contactType": "customer service",
                        "email": "og@nurseseeking.com",
                        "telephone": "+1 223-224-1124",
                        "logo": "https://www.nurseseeking.com/images/logo/"
                    },
                }
                `}</script>
            </Head>
            <NextSeo
                title={props.title}
                description={props.description}
                canonical={props.canonical}
                openGraph={{
                    title: props.title,
                    description: props.description,
                    url: props.canonical,
                    locale: AppConfig.locale,
                    site_name: AppConfig.site_name,
                }}
            />
        </>
    );
};

export {Meta};
