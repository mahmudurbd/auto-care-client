import React from "react";
import "./CallToAction.scss";
import { Image } from "antd";
import TimeTableImg from "../../../assets/timetable.png";
import LocationImg from "../../../assets/location.png";
import PhoneImg from "../../../assets/phone.png";

const CallToAction = () => {
  return (
    <div className="call-to-action-area">
      <div className="call-to-action-wrapper">
        <div className="call-to-action-item">
          <div className="call-action-left">
            <img src={TimeTableImg} />
          </div>
          <div className="call-action-right">
            <span className="top">We are open monday-friday</span>
            <br />
            <span className="bottom">7:00 am - 9:00 pm</span>
          </div>
        </div>
        <div className="call-to-action-item">
          <div className="call-action-left">
            <img src={PhoneImg} />
          </div>
          <div className="call-action-right">
            <span className="top">Have a question?</span>
            <br />
            <span className="bottom">+2546 251 2658</span>
          </div>
        </div>
        <div className="call-to-action-item">
          <div className="call-action-left">
            <img src={LocationImg} />
          </div>
          <div className="call-action-right">
            <span className="top">Need a repair? our address</span>
            <br />
            <span className="bottom">Liza Street, New York</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
