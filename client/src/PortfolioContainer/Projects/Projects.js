import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import "./Projects.css";
import shape from "../../../src/assets/Projects/shape-bg.png";

export default function Projects(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 20,
    nav: true,
    // autoHeight: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    dotsContainer: ".owl-dots",
    autoplay: true,
    smartSpeed: 2000,
    autoplayHoverPause:true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div className="projects-container">
      <ScreenHeading
        title={"Projects"}
        subHeading={"My Projects I have Worked On"}
      />
      <section className="projects-section" id={props.id || ""}>
        <div className="container mt-5">
          <OwlCarousel
            className="owl-carousel"
            id="projects-carousel"
            {...options}
          >
            <div className="ms-2 me-2">
              <div className="card">
                <img
                  src="img/projects/tweets.jpg"
                  className="card-img-top"
                ></img>
                <div className="card-body">
                  <h5 className="card-title">
                    {" "}
                    COVID-19 Twitter Misinformation NLP Machine Learning
                    Research Project
                  </h5>
                  <p>
                    Developed multiple ML algorithms to classify 31,000 tweets
                    related to COVID-19 as factual/false. Tweets scraped using
                    Twitter API.
                  </p>
                  {/* <div class="box-btn">
                    <span>
                      <a href="#">Repo Link</a>
                    </span>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="ms-2 me-2">
              <div className="card">
                <img
                  src="img/projects/vet-app.jpg"
                  className="card-img-top"
                ></img>
                <div className="card-body">
                  <h5 className="card-title"> Veterinary App</h5>
                  <p>
                    Full stack Application developed for the Veterinary School
                    of Medicine to help manage and care for animals. Multiple
                    user roles utilizing Restful API This project involved
                    database design, API creation and authentication.
                  </p>
                  <div className="box-btn">
                    <span>
                      <a href="https://github.com/kfalez/Veterinary-Application" target="_blank">
                        Repo Link
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="ms-2 me-2">
              <div className="card">
                <img
                  src="img/projects/movie-ticket.jpg"
                  className="card-img-top"
                ></img>
                <div className="card-body">
                  <h5 className="card-title">
                    {" "}
                    Movie-Theatre-Ticket-Reserveration-App
                  </h5>
                  <p>
                    Full stack Java application using utlizing MVC design
                    pattern that simulates reserving seats and movie tickets at
                    a theatre. The design of this project focused on JDBC, and
                    Swing
                  </p>
                  <div className="box-btn">
                    <span>
                      <a href="https://github.com/kfalez/Movie-Theatre-Ticket-Reserveration-App" target="_blank">
                        Repo Link
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="ms-2 me-2">
              <div className="card">
                <img
                  src="img/projects/capstone.jpg"
                  className="card-img-top"
                ></img>
                <div className="card-body">
                  <h5 className="card-title"> FLYHT Capstone Project</h5>
                  <p>
                    Developed a proof-of-concept machine learning application
                    used to predict an aircraft engine's ​performance.​
                    Developed front-end client application to make inferences
                    through deployed model.
                  </p>
                  {/* <div class="box-btn">
                    <span>
                      <a href="#">Repo Link</a>
                    </span>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="ms-2 me-2">
              <div className="card">
                <img
                  src="img/projects/pippa.jpg"
                  className="card-img-top"
                ></img>
                <div className="card-body">
                  <h5 className="card-title">
                    {" "}
                    U of C Hackathon - 2022 (PIPPA)
                  </h5>
                  <p>
                    Application developed for 2022 Hackathon. Developed to
                    educate and provide insight to common pressure point related
                    injuries for bed-restricted patients. Functional log-in
                    feature.
                  </p>
                  <div class="box-btn">
                    <span>
                      <a href="https://github.com/kfalez/UofC-Hackathon-2022-PIPPA" target="_blank">
                        Repo Link
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="ms-2 me-2">
              <div className="card">
                <img
                  src="img/projects/portfolio-website.jpg"
                  className="card-img-top"
                ></img>
                <div className="card-body">
                  <h5 className="card-title"> Personal Website</h5>
                  <p>
                    My personal website designed to showcase my work and
                    experience. Created utilizing ReactJS, Boostrap, Rxjs, and
                    NodeJS.
                    <br></br>
                    <br></br>
                    <br></br>
                  </p>
                  <div className="box-btn">
                    <span>
                      <a href="https://github.com/kfalez/Portfolio-Website" target="_blank">
                        Repo Link
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="check your internet!" />
      </div>
    </div>
  );
}
