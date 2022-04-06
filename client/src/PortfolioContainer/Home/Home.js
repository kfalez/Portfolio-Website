import React from "react";
import Profile from "./Profile/Profile.js";
import Header from "./Header/Header.js";
import Footer from "./Footer/Footer.js";
import ScrollButton from "../ScrollButton/ScrollButton.js";
import "./Home.css";

export default function Home(props) {
  return (
    <div className="home-container" id={props.id || ""}>
      <Header />
      <Profile />
      <ScrollButton />
      <Footer />
    </div>
  );
}
