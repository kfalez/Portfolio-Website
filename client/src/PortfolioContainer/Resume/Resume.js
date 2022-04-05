import React, { useState, useEffect } from "react";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import "./Resume.css";

const Resume =(props) =>{
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});
  
    let fadeInScreenHandler = (screen) => {
      if (screen.fadeScreen !== props.id) return;
      Animations.animations.fadeInScreen(props.id);
    };
    const fadeInSubscription =
      ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  
    const ResumeHeading = (props) => {
      return (
          <div className="resume-heading">
            <div className="resume-main-heading">
              <div className="heading-bullet"></div>
              <span>{props.heading ? props.heading : ""}</span>
              {props.fromDate && props.toDate ? (
                <div className="heading-date">
                  {props.fromDate + "-" + props.toDate}
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div className="resume-sub-heading">
              <span>{props.subHeading ? props.subHeading : ""}</span>
            </div>
            <div className="resume-heading-description">
              <span>{props.description ? props.description : ""}</span>
            </div>
          </div>
        );
      };
  
    const resumeBullets = [
      { label: "Education", logoSrc: "education.svg" },
      { label: "Experience", logoSrc: "work-history.svg" },
      { label: "Programming Skills", logoSrc: "programming-skills.svg" },
      { label: "Latest Projects", logoSrc: "projects.svg" },
      { label: "Interests", logoSrc: "interests.svg" },
    ];
  
    const programmingSkillDetails = [
      { skill: "Java", ratingPercentage: 75 },
      { skill: "Python", ratingPercentage: 70 },
      { skill: "C", ratingPercentage: 60 },
      { skill: "C++", ratingPercentage: 65 },
      { skill: "JavaScript", ratingPercentage: 85 },
      { skill: "CSS", ratingPercentage: 65 },
      { skill: "ReactJS", ratingPercentage: 80 },
      { skill: "NodeJS", ratingPercentage: 70 },
      { skill: "SQL", ratingPercentage: 75 },
      { skill: "AWS", ratingPercentage: 75 },
    ];
  
    const projectDetails = [
      {
        title: "Veterinary App",
        duration: { fromDate: "Oct", toDate: "Dec 2021" },
        description:
          "A full-stack application developed for the Veterinary School of Medicine. Multiple user roles utilizing Restful API.",
        subHeading: "Tech-Stack: Java, Spring Boot, MySQL and ReactJS",
      },
      {
        title: "Movie-Theatre-Ticket-Reserveration-App",
        duration: { fromDate: "Oct", toDate: "Dec 2021" },
        description:
          "A Java application using utlizing MVC design pattern that simulates reserving seats and movie tickets at a theatre.",
        subHeading: "Tech-Stack: Java, JDBC, MySQL and Swing",
      },
    //   {
    //     title:
    //       "COVID-19 Twitter Misinformation NLP Machine Learning Research Project",
    //     duration: { fromDate: "Sep 2021", toDate: "Dec 2021" },
    //     description:
    //       "Developing multiple ML algorithms to classify 31,000 tweets related to COVID-19 as factual/false. Tweets scraped using Twitter API.",
    //     subHeading:
    //       "Tech-Stack: Python (pandas + NumPy) and Apache Spark (PySpark) ",
    //   },
    //   {
    //     title: "U of C Hackathon - 2022 (PIPPA)",
    //     duration: { fromDate: "Feb 2022", toDate: "Feb 2022" },
    //     description:
    //       "Full Stack application developed for 2022 Hackathon. Developed to educate and provide insight to common pressure point related injuries for bed-restricted patients.",
    //     subHeading: "Tech-Stack: Java, Spring Boot and ReactJS",
    //   },
    //   {
    //     title: "Personal Website",
    //     duration: { fromDate: "Apr 2022", toDate: "Apr 2022" },
    //     description:
    //       "Portfolio website created to showcase my work and experience.",
    //     subHeading: "Tech-Stack: ReactJS, Boostrap ",
    //   },
      {
        title: "FLYHT Capstone Project",
        duration: { fromDate: "Jan", toDate: "Apr 2022" },
        description:
          "Developed a proof-of-concept machine learning application used to predict an aircraft engine's ​performance.​ Developed front-end client application to make inferences through deployed model",
        subHeading:
          "Tech-Stack: Amazon Web Services (Docker, Lambda, API Gateway, Sagemaker and Glue) and ReactJS",
      },
    ];
  
    const resumeDetails = [
      <div className="resume-screen-container" key="education">
        <ResumeHeading
          heading={"University of Calgary"}
          subHeading={"Master of Engineering - MEng, Software Engineering"}
          fromDate={"Apr 2021"}
          toDate={"Apr 2022"}
        />
        <ResumeHeading
          heading={"Montana Tech of the University of Montana"}
          subHeading={"Bachelor of Science - BS, Petroleum Engineering"}
          fromDate={"Aug 2017"}
          toDate={"Dec 2019"}
        />
        <ResumeHeading
          heading={"Southern Alberta Institute of Technology"}
          subHeading={"PET, Petroleum Engineering Technology"}
          fromDate={"Sep 2015"}
          toDate={"Apr 2017"}
        />
      </div>,
  
      //Work experience
      <div className="resume-screen-container" key="Experience">
        <ResumeHeading
          heading={"Vermilion Energy Inc."}
          subHeading={"Engineer-In-Training Consultant"}
          fromDate={"Feb "}
          toDate={"May 2021"}
        />
        <ResumeHeading
          heading={"Vermilion Energy Inc."}
          subHeading={"New Graduate Production Engineer"}
          fromDate={"Jan"}
          toDate={"May 2020"}
        />
        <ResumeHeading
          heading={"Vermilion Energy Inc."}
          subHeading={"Field Operator Summer Student"}
          fromDate={"May"}
          toDate={"Aug 2019"}
        />
        <ResumeHeading
          heading={"Secure Energy Services Inc."}
          subHeading={"Drilling Fluid Tech Summer Student"}
          fromDate={"May"}
          toDate={"Aug 2018"}
        />
        <ResumeHeading
          heading={"Tiger Eye Energy Ltd."}
          subHeading={"Engineering Summer Student"}
          fromDate={"May"}
          toDate={"Aug 2017"}
        />
        </div>,
  
        //programming experience
        <div
          className="resume-screen-container programming-skills-container"
          key="programming-skills"
        >
          {programmingSkillDetails.map((skill, index) => (
            <div className="skill-parent" key={index}>
              <div className="heading-bullet"></div>
              <span>{skill.skill}</span>
              <div className="skill-percentage">
                <div
                  style={{ width: skill.ratingPercentage + "%" }}
                  className="active-percentage-bar"
                ></div>
              </div>
            </div>
          ))}
        </div>,
  
        <div className="resume-screen-container" key="projects">
          {projectDetails.map((projectsDetails, index) => (
            <ResumeHeading
              key={index}
              heading={projectsDetails.title}
              subHeading={projectsDetails.subHeading}
              description={projectsDetails.description}
              fromDate={projectsDetails.duration.fromDate}
              toDate={projectsDetails.duration.toDate}
            />
          ))}
        </div>,
  
        <div className="resume-screen-container" key="interests">
          <ResumeHeading
            heading="Health and Fitness"
            description="In my sparetime I enjoy working out and exploring new recipes in the kitchen. I have learned that health is very important when it comes to productivity!"
          />
          <ResumeHeading
            heading="Skiing"
            description="I have had a passion for skiing since middle school. Skiing helps me to relax while exploring new places."
          />
      </div>,
    ];
  
    const handleCarousal = (index) => {
      let offsetHeight = 360;
      let newCarousalOffset = {
          style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
      };
      setCarousalOffSetStyle(newCarousalOffset);
      setSelectedBulletIndex(index);
    };
  
    const getBullets = () => {
      return resumeBullets.map((bullet, index) => (
        <div
          onClick={() => handleCarousal(index)}
          className={
            index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
          }
          key={index}
        >
          <img
            className="bullet-logo"
            src={require(`../../assets/Resume/${bullet.logoSrc}`)}
            alt="Check your internet connection!"
          />
          <span className="bullet-label">{bullet.label}</span>
        </div>
      ));
    };
  
    const getResumeScreen = () => {
      return (
        <div
          style={carousalOffSetStyle.style}
          className="resume-details-carousal"
        >
          {resumeDetails.map((ResumeDetail) => ResumeDetail)}
        </div>
      );
    };
  
    useEffect(() => {
      return () => {
        /* UNSUBSCRIBE THE SUBSCRIPTIONS */
        fadeInSubscription.unsubscribe();
      };
    }, [fadeInSubscription]);
  
    return (
        <div
          className="resume-container screen-container"
          id={props.id || ""}
        >
          <div className="resume-content">
            <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
            <div className="resume-card">
              <div className="resume-bullets">
                <div className="bullet-container">
                  <div className="bullet-icons"></div>
                  <div className="bullets">{getBullets()}</div>
                </div>
              </div>
    
              <div className="resume-bullet-details">{getResumeScreen()}</div>
            </div>
          </div>
        </div>
      );
    };
  export default Resume;