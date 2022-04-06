import React from "react";
import Typical from "react-typical";
import './Profile.css';

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/kelten-falez-3100a845/" target="_blank">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://github.com/kfalez" target="_blank">
                <i className="fa fa-github-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hi! My name is <span className="highlighted-text">Kelten</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Innovator 💭",
                    1000,
                    "Full Stack Developer 💻",
                    1000,
                    "Data Scientist 🔬",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Enthusiastic software engineering graduate with a background in
                petroleum engineering.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Contact Me{" "}
            </button>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
