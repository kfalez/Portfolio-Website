import React, { useState, useEffect } from "react";
import {
  TOTAL_SCREENS,
  GET_SCREEN_INDEX,
} from "../../../Utilities/commonUtils";
import ScrollService from "../../../Utilities/ScrollService";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

export default function Header() {
  const [stickyClass, setStickyClass] = useState('');
  const [selectedScreen, setSelectedScreen] = useState(0);
  const [showHeaderOptions, setShowHeaderOptions] = useState(false);

  useEffect(() => {
    stickHeader();
    window.addEventListener('scroll', stickHeader);
    return () => window.removeEventListener('scroll', stickHeader);
  }, []);

  const stickHeader = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 0? setStickyClass('sticky-nav') : setStickyClass('');
    }
  };

  const updateCurrentScreen = (currentScreen) => {
    if (!currentScreen || !currentScreen.screenInView) return;
    let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);
    if (screenIndex < 0) return;
  };

  function delay(ms) {
    return new Promise((resolve) => {
       setTimeout(resolve, ms);
    })
 }

  //subscribe to observable
  let currentScreenSubscription =
    ScrollService.currentScreenBroadcaster.subscribe(updateCurrentScreen);

  const getHeaderOptions = () => {
    return TOTAL_SCREENS.map((Screen, i) => (
      <div
        key={Screen.screen_name}
        className={getHeaderOptionsClass(i)}
        onClick={() => (switchScreen(i, Screen))}
        
      >
        <span>{Screen.screen_name}</span>
      </div>
    ));
  };

  const getHeaderOptionsClass = (index) => {
    let classes = "header-option ";

    // if there is more than 1 screen displayed at the top as navigation, create space between the navigations
    if (index < TOTAL_SCREENS.length - 1) classes += "header-option-separator ";

    // have the name of the component marked as selected when clicked
    if (selectedScreen === index) classes += "selected-header-option ";
    return classes;
  };

  const switchScreen = (index, screen) => {
    let screenComponent = document.getElementById(screen.screen_name);
    if (!screenComponent) return;

    screenComponent.scrollIntoView({ behavior: "smooth" });
    setSelectedScreen(index);
    setShowHeaderOptions(false);
  };

  // implemented for 'About Me' fixes cropping
  // const switchTwice =(index, screen)=>{
  //   switchScreen(index, screen)
  //   if(screen.screen_name ==='About Me') setTimeout(() => { switchScreen(index, screen) }, 400)
  // }

  return (
    <div className={`header ${stickyClass}`}>
    <div
        className="header-container"
        onClick={() => setShowHeaderOptions(!showHeaderOptions)}

      >
        <div className="header-parent">
          <div
            className="header-hamburger"
            onClick={() => setShowHeaderOptions(!showHeaderOptions)}
          >
            <FontAwesomeIcon className="header-hamburger-bars" icon={faBars} />
          </div>
          <div className="header-logo">
            <span>Kelten Falez</span>
          </div>
          <div
            className={
              showHeaderOptions
                ? "header-options show-hamburger-options"
                : "header-options"
            }
          >
            {getHeaderOptions()}
          </div>
        </div>
      </div>
    </div>
  );
};

