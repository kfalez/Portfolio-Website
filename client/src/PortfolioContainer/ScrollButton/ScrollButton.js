import React from "react";
import ScrollService from "../../Utilities/ScrollService";
import "./ScrollButton.css";


  
var myButton = document.getElementById("scroll-container");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  try {
    
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      console.log("yeah")
      console.log(myButton)
      myButton.style.display = "block";
    } else {
      console.log("yea2")
      myButton.style.display = "none";
    }
  } catch (error) {
    
  }

}

export default function ScrollButton() {
  return (
    <div className="scroll-container">
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