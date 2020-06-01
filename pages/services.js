import React from "react";
import "../public/style/style.scss";
import Head from "next/head";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

const ServicesPage = () => {
    return (
        <div className="services">
            <Head>
                <title>Arthur Danjou | Mes services</title>
            </Head>
            <Header />
            Service
            <Footer />
        </div>
    )
}

export default ServicesPage;