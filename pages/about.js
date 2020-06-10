import React from "react";
import "../public/style/style.scss";
import Head from "next/head";
import Header from "../components/header/header";
import Template from "../components/template/template";
import Footer from "../components/footer/footer";
import About from "../components/about/about";

const AboutPage = () => {
    return (
        <div className="about">
            <Head>
                <link rel="shortcut icon" href="/favicon/favicon.ico" />
                <title>Arthur Danjou | A propos</title>
            </Head>
            <Header />
            <Template
                question="Qui suis-je ?"
                title="Jeune développeur et passionné par l'informatique"
                description="Vous allez tout apprendre sur moi, ma présentation, mes compétences, mes passions, mon parcours, comment je me suis formé... "
            >
                <About />
            </Template>
            <Footer />
        </div>
    )
}

export default AboutPage;