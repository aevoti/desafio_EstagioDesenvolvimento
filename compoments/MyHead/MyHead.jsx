/* eslint-disable @next/next/no-css-tags */
import Head from "next/head";

export default function MyHead({ title }) {


    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />

            {/* <link id="layout-css" rel="stylesheet" type="text/css" href='primereact/resources/primereact.min.css' />
            <link id="layout-css" rel="stylesheet" type="text/css" href='primeicons/primeicons.css' />
            <link id="layout-css" rel="stylesheet" type="text/css" href='primeflex/primeflex.css' />

            <link id="layout-css" rel="stylesheet" type="text/css" href='primereact/resources/themes/lara-light-indigo/theme.css' />
            <link id="layout-css" rel="stylesheet" type="text/css" href='primereact/resources/primereact.css' /> */}
            {/* <link rel="stylesheet" href="https://unpkg.com/primeicons@5.0.0/primeicons.css"/> */}
        </Head>
    )
}
