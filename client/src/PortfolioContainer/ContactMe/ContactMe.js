import React, { useState } from "react";
import Typical from "react-typical";
import axios from 'axios';
import {toast} from 'react-toastify';

import imgBack from "../../../src/images/mail.jpg";
import load1 from "../../../src/images/load2.gif";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading.js";
import ScrollService from "../../Utilities/ScrollService.js";
import Animations from "../../Utilities/Animations.js";
import "./ContactMe.css";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const submitForm = async(e)=> {
      e.preventDefault();
      try {
        let data={
            name,
            email,
            message,
        };
        setBool(true)
        const res = await axios.post(`/contact`, data)
        // return message from backend upon error / success
        if(name.length === 0 || email.length === 0 || message.length === 0) {
            setBanner(res.data.msg)
            toast.error(res.data.msg)
            setBool(false)
        }
        else if(res.status === 200) {
            setBanner(res.data.msg)
            toast.success(res.data.msg)
            setBool(false)

            setName("");
            setEmail("");
            setMessage("");
        }

      } catch (error) {
          console.log(error)
      }
      let data={
          name,
          email,
          message,
      };
  }

  return (
    <div className="main-container" id={props.id || ""}>
      <ScreenHeading subHeading={"Let's Connect!"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <Typical
              loop={Infinity}
              steps={["Connect With Me 📧", 1000, "", 1000]}
            />
          </h2>
          <a
            href="https://www.linkedin.com/in/kelten-falez-3100a845/"
            target="_blank"
          >
            <i className="fa fa-linkedin-square"></i>
          </a>
          <a href="https://github.com/kfalez" target="_blank">
            <i className="fa fa-github-square"></i>
          </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Create Your Email Here:</h4>
            <img src={imgBack} alt="check your internet!" />
          </div>
          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={handleName} value={name} />

            <label htmlFor="email">Email</label>
            <input type="email" onChange={handleEmail} value={email} />

            <label htmlFor="message">Message</label>
            <textarea type="text" onChange={handleMessage} value={message} />

            <div className="send-btn">
              <button type="submit">
                send
                <i className="fa fa-paper-plane" />
                {bool ?(<b className='load'>
                    <img src={load1} alt='image error'/>
                </b>
                ) : (
                    ""
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
