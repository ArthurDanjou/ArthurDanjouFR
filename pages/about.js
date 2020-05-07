import React from "react";
import "../public/style/style.scss";
import Head from "next/head";
import Header from "../components/header/header";

const AboutPage = () => {
    return (
        <div className="about">
            <Head>
                <title>Arthur Danjou | A propos</title>
            </Head>
            <Header />
        </div>
    )
}

export default AboutPage;