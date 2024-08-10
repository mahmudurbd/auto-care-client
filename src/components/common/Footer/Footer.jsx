import React from "react";
import { Row, Col } from "antd";
import "./Footer.scss";
import {
  GoogleOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import Logo from "../../../assets/auto-care-white.png";

const Footer = () => {
  return (
    <div className="footer-area">
      <Row justify="space-around" gutter={32}>
        <Col xs={24} sm={12} md={12} lg={8} style={{ marginBottom: "20px" }}>
          <div
            style={{
              marginBottom: "10px",
              fontSize: "18px",
              fontWeight: "bold",
              marginLeft: "-5px",
            }}
          >
            <img src={Logo} alt="Auto Care" style={{ width: "300px" }} />
          </div>
          <div>
            <p>
              Edwin Diaz is a software and web technologies engineer, a life
              coach trainer who is also a serial.
            </p>
          </div>
          <div style={{ marginTop: "20px" }}>
            <GoogleOutlined style={{ fontSize: "24px", marginRight: "15px" }} />
            <TwitterOutlined
              style={{ fontSize: "24px", marginRight: "15px" }}
            />
            <InstagramOutlined
              style={{ fontSize: "24px", marginRight: "15px" }}
            />
            <LinkedinOutlined style={{ fontSize: "24px" }} />
          </div>
        </Col>
        <Col xs={24} sm={3} md={3} lg={3} style={{ marginBottom: "20px" }}>
          <h3 style={{ color: "white" }}>About</h3>
          <p>Home</p>
          <p>Service</p>
          <p>Contact</p>
        </Col>
        <Col xs={24} sm={12} md={12} lg={3} style={{ marginBottom: "20px" }}>
          <h3 style={{ color: "white" }}>Company</h3>
          <p>Why Car Doctor</p>
          <p>About</p>
        </Col>
        <Col
          xs={24}
          sm={3}
          md={3}
          lg={3}
          style={{
            marginBottom: "20px",
          }}
        >
          <h3 style={{ color: "white" }}>Support</h3>
          <p>Support Center</p>
          <p>Feedback</p>
          <p>Accessibility</p>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
