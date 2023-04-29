import React from "react";
import { Header } from "../../components";
import Introduction from "./Introduction";
import Project from "./Project";
import Social from "./Social";
import Contact from "./Contacts";
import Photos from "./Photos";

function Home() {
  return (
    <div>
      <Header />
      <Introduction />
      <Project />
      <Social />
      <Contact />
      <Photos />
    </div>
  );
}

export default Home;
