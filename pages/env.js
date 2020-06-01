import React from "react";
import "../public/style/style.scss";
import Head from "next/head";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Template from "../components/template/template";
import Env from "../components/environnement/env";

const EnvPage = () => {
    return (
        <div className="env">
            <Head>
                <title>Arthur Danjou | Environnement</title>
            </Head>
            <Header />
            <Template
                question="Ce que j'utilise pour le développement !"
                title="Mon Environnement"
                description="Mon environnement de développement permet de gagner en productivité.
                En effet, je m'organise de la sorte à toujours optimiser mon temps de réflexion et de développement.
                Cette page liste donc tous mes logiciels et mon setup."
            >
                <Env />
            </Template>
            <Footer />
        </div>
    )
}

export default EnvPage;