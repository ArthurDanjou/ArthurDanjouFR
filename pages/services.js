import React from "react";
import "../public/style/style.scss";
import Head from "next/head";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Template from "../components/template/template";
import Services from "../components/services/services";

const WorkPage = () => {
    return (
        <div className="showcase">
            <Head>
                <title>Arthur Danjou | Mon Travail</title>
            </Head>
            <Header />
            <Template
                question="Ce que je propose"
                title="Mes Services"
                description="Choisissez l'offre qui vous correspond et qui répond le plus à vos critères et à vos attentes !"
            >
                <Services />
            </Template>
            <Footer />
        </div>
    )
}

export default WorkPage;