import React from "react";
import "./itservices.css";
import Loader from "../Loader";
import Navbar from "../Navbar";
import Footer from "../Footer";
import InnerBanner from "../InnerBanner";
import ThreeScene from "../Appcontainer/ThreeScene";
import { Helmet } from "react-helmet";

const UiUxDesign = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>UI UX Design</title>
        <meta name="description" content="aboutpage" />
        <meta name="keywords" content="about page" />
      </Helmet>
      <Loader />
      <Navbar />
      <ThreeScene />
      <InnerBanner />
      <section></section>
      <Footer />
    </div>
  );
};

export default UiUxDesign;