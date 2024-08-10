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
        <Col
          xs={24}
          sm={{ span: 12, offset: 0 }}
          md={{ span: 12, offset: 0 }}
          lg={{ span: 12, offset: 0 }}
          style={{ marginBottom: "20px" }}
        >
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
            <p style={{ width: "60%" }}>
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
        <Col
          xs={24}
          sm={{ span: 6, offset: 6 }}
          md={{ span: 6, offset: 6 }}
          lg={{ span: 3, offset: 1 }}
          style={{ marginBottom: "20px" }}
        >
          <h3 style={{ color: "white" }}>About</h3>
          <p>Home</p>
          <p>Service</p>
          <p>Contact</p>
        </Col>
        <Col
          xs={24}
          sm={{ span: 12, offset: 0 }}
          md={{ span: 12, offset: 0 }}
          lg={{ span: 3, offset: 1 }}
          style={{ marginBottom: "20px" }}
        >
          <h3 style={{ color: "white" }}>Company</h3>
          <p>Why Car Doctor</p>
          <p>About</p>
        </Col>
        <Col
          xs={24}
          sm={{ span: 6, offset: 6 }}
          md={{ span: 6, offset: 6 }}
          // lg={4}
          lg={{ span: 3, offset: 1 }}
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
