import React from "react";
import "../public/style/style.scss";
import Head from "next/head";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Template from "../components/template/template";

const WorkPage = () => {
    return (
        <div className="showcase">
            <Head>
                <title>Arthur Danjou | Mon Travail</title>
            </Head>
            <Header />
            <Template
                question="Mes projets"
                title="Mon Travail"
                description="Ayez un aperçu de mon travail et de mes projets professionnels et personnels."
            >
                Mon travail
            </Template>
            <Footer />
        </div>
    )
}

export default WorkPage;