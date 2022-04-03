import React from "react";
import Profile from "./Profile/Profile.js";
import Footer from "./Footer/Footer.js";
import Header from "./Header/Header.js";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <Header />
      <Profile />
      <Footer />
    </div>
  );
}
