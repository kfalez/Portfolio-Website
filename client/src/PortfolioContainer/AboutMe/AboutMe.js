import React, { useEffect } from "react";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading.js";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations.js";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  //declare static data and store in constant
  const SCREEN_CONSTANTS = {
    description:
      "Software engineering new graduate seeking opportunities in software development. I am passionate about code, debugging, Big-Data and all things tech! I enjoy working on complex problems that allow me to  enhance my skills as a developer.",
    highlights: {
      bullets: [
        "Full Stack Development",
        "Object-Oriented Design",
        "Rest APIs",
        "Software Testing",
        "Machine Learning",
        "Deep Learning",
      ],
      heading: "My Current Skill Set and Interests",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading
          title={"About Me"}
          subHeading={"My Background & Interests"}
        />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlights-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="img-wrapper">
              <img className="icon-img" src="img/icons/python.png" />
              <img className="icon-img" src="img/icons/java.png" />
              <img className="icon-img" src="img/icons/c.png" />
              <img className="icon-img" src="img/icons/cpp.png" />
              <img className="icon-img" src="img/icons/js.jpg" />
              <img className="icon-img" src="img/icons/react.png" />
              <img className="icon-img" src="img/icons/aws.png" />
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToContactMe()}
              >
                {""}
                Contact Me{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
