import React from "react";
import "../public/style/style.scss";
import Head from "next/head";
import Footer from "../components/footer/footer";
import Banner from "../components/Home/banner/banner";
import Header from "../components/header/header";
import About from "../components/Home/about/about";
import Skills from "../components/Home/skills/skills";
import Process from "../components/Home/process/process";
import Posts from "../components/Home/posts/posts";

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
          <Posts />
          <Footer />
      </div>
  )
};

export default HomePage;