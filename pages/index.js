import React from "react";
import "../public/style/style.scss";
import Head from "next/head";
import Footer from "../components/footer/footer";
import Banner from "../components/home/banner";
import Header from "../components/header/header";
import About from "../components/home/about";
import Skills from "../components/home/passions";
import Process from "../components/home/process";
import Contact from "../components/home/contact";

const HomePage = () => {
  return (
      <div className="home">
          <Head>
              <title>Arthur Danjou | Accueil</title>
          </Head>
          <Header />
          <Banner />
          <About />
          <Skills />
          <Process />
          <Contact />
          <Footer />
      </div>
  )
};

export default HomePage;