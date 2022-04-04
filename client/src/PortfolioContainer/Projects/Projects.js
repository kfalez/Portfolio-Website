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
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1800,
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
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="projects-carousel"
              {...options}
            >
              {/*Infodemic Project  */}
              <div className="col-lg-12">
                <div className="projects-item">
                  <div className="projects-comment">
                    <p>
                      <h4>
                        COVID-19 Twitter Misinformation NLP Machine Learning
                        Research Project
                      </h4>
                      <h6>Machine Learning</h6>
                      Developed multiple ML algorithms to classify 31,000 tweets
                      related to COVID-19 as factual/false. Tweets scraped using
                      Twitter API.
                    </p>
                    <div className="project-info">
                      <img
                        src="img/projects/tweets.jpg"
                        alt="check internet connection!"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
              {/* Infodemic Project */}
              <div className="col-lg-12">
                <div className="projects-item">
                  <div className="projects-comment">
                    <p>
                      <h4>
                        COVID-19 Twitter Misinformation NLP Machine Learning
                        Research Project
                      </h4>
                      <h6>Machine Learning</h6>
                      Developed multiple ML algorithms to classify 31,000 tweets
                      related to COVID-19 as factual/false. Tweets scraped using
                      Twitter API.
                    </p>
                    <div className="project-info">
                      <img
                        src="img/projects/tweets.jpg"
                        alt="check internet connection!"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
              {/* Vet App */}
              <div className="col-lg-12">
                <div className="projects-item">
                  <div className="projects-comment">
                    <p>
                      <h4>
                        COVID-19 Twitter Misinformation NLP Machine Learning
                        Research Project
                      </h4>
                      <h6>Machine Learning</h6>
                      Developed multiple ML algorithms to classify 31,000 tweets
                      related to COVID-19 as factual/false. Tweets scraped using
                      Twitter API.
                    </p>
                    <div className="project-info">
                      <img
                        src="img/projects/tweets.jpg"
                        alt="check internet connection!"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
              {/* Movie Ticket App */}
              <div className="col-lg-12">
                <div className="projects-item">
                  <div className="projects-comment">
                    <p>
                      <h4>
                        COVID-19 Twitter Misinformation NLP Machine Learning
                        Research Project
                      </h4>
                      <h6>Machine Learning</h6>
                      Developed multiple ML algorithms to classify 31,000 tweets
                      related to COVID-19 as factual/false. Tweets scraped using
                      Twitter API.
                    </p>
                    <div className="project-info">
                      <img
                        src="img/projects/tweets.jpg"
                        alt="check internet connection!"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
              {/* FLYHT Capstone */}
              <div className="col-lg-12">
                <div className="projects-item">
                  <div className="projects-comment">
                    <p>
                      <h4>
                        COVID-19 Twitter Misinformation NLP Machine Learning
                        Research Project
                      </h4>
                      <h6>Machine Learning</h6>
                      Developed multiple ML algorithms to classify 31,000 tweets
                      related to COVID-19 as factual/false. Tweets scraped using
                      Twitter API.
                    </p>
                    <div className="project-info">
                      <img
                        src="img/projects/tweets.jpg"
                        alt="check internet connection!"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
              {/* PIPPA */}
              <div className="col-lg-12">
                <div className="projects-item">
                  <div className="projects-comment">
                    <p>
                      <h4>
                        COVID-19 Twitter Misinformation NLP Machine Learning
                        Research Project
                      </h4>
                      <h6>Machine Learning</h6>
                      Developed multiple ML algorithms to classify 31,000 tweets
                      related to COVID-19 as factual/false. Tweets scraped using
                      Twitter API.
                    </p>
                    <div className="project-info">
                      <img
                        src="img/projects/tweets.jpg"
                        alt="check internet connection!"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="check your internet!" />
      </div>
    </div>
  );
}
