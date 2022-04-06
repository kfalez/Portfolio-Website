import React from "react";
import ScrollService from "../../Utilities/ScrollService";
import "./ScrollButton.css";

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const myButton = document.getElementById("scroller");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

export default function ScrollButton() {
  return (
    <div className="scroll-container" id="scroller">
      <button
        className="btn-scroll"
        onClick={() => ScrollService.scrollHandler.scrollToHome()}
      >
        {" "}
        <i className="fa fa-arrow-up"></i>
      </button>
    </div>
  );
}
