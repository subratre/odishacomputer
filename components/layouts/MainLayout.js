import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";
import TopBar from "./TopBar";

const MainLayout = (props) => {
  return (
    <>
      <TopBar />
      <Navigation />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
