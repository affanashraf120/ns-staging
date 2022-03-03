/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

const HoneybadgerSourceMapPlugin = require('@honeybadger-io/webpack')
const { execSync } = require('child_process');
const {
    HONEYBADGER_API_KEY,
    HONEYBADGER_ASSETS_URL,
    HONEYBADGER_REPORT_DATA,
    NODE_ENV,
} = process.env
const HONEYBADGER_REVISION = execSync('git rev-parse HEAD').toString().trim()

module.exports = withBundleAnalyzer({
    poweredByHeader: false,
    // trailingSlash: true,
    basePath: '',
    // The starter code load resources from `public` folder with `router.basePath` in React components.
    // So, the source code is "basePath-ready".
    // You can remove `basePath` if you don't need it.
    reactStrictMode: true,
    images: {
        domains: ['cdn.rareblocks.xyz']
    },
    productionSourceMaps: true,
    env: {
        HONEYBADGER_API_KEY,
        HONEYBADGER_REVISION,
        HONEYBADGER_REPORT_DATA,
    },
    webpack: (config, options) => {
        if(
            HONEYBADGER_API_KEY &&
            HONEYBADGER_ASSETS_URL &&
            NODE_ENV === 'production'
        ) {
            config.devtool = 'hidden-source-map'
            config.plugins.push(
                new HoneybadgerSourceMapPlugin({
                    apiKey: HONEYBADGER_API_KEY,
                    assetsUrl: HONEYBADGER_ASSETS_URL,
                    revision: HONEYBADGER_REVISION
                })
            )
        }
        return config
    },
    i18n: {
        locales: ['en-US'],
        defaultLocale: 'en-US'
    }
});
