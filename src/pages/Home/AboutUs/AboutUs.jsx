import React from "react";
import "./AboutUs.scss";
import { Button, Col, Image, Row } from "antd";
import PrimaryImg from "../../../assets/about/about-primary.png";
import SecondaryImg from "../../../assets/about/about-secondary.png";

const AboutUs = () => {
  return (
    <div className="about-area">
      <Row className="about-area-wrapper">
        <Col className="about-left" xs={24} sm={24} md={24} lg={24} xl={12}>
          <div className="about-image-wrapper">
            <div className="primary-image">
              <Image preview={false} src={PrimaryImg} alt="" />
              {/* <img src={PrimaryImg} alt="" /> */}
            </div>
            <div className="secondary-image">
              <Image preview={false} src={SecondaryImg} alt="" />
              {/* <img src={SecondaryImg} alt="" /> */}
            </div>
          </div>
        </Col>
        <Col className="about-right" xs={24} sm={24} md={24} lg={24} xl={12}>
          <div className="about-text-content">
            <h2>About Us</h2>
            <h1>We are qualified & of experience in this field</h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <p>
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.
            </p>
            <div className="aboutUs-btn">
              <Button className="custom-btn-deep">Get More Info</Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;
