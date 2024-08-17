import React from "react";
import "./Login.scss";
import { LoginImg } from "../../components/common/SvgImg/SvgImg";
import { Button, Col, Form, Input, Row } from "antd";
import FacebookImg from "../../assets/social/facebook.png";
import LinkedInImg from "../../assets/social/linkedin.png";
import GoogleImg from "../../assets/social/google.png";
import { Link } from "react-router-dom";

const Login = () => {
  // Login Hanndler
  const handleLogin = (values) => {
    console.log(values);
  };
  return (
    <div className="login-area">
      <div className="login-left">
        <div className="login-left-container">
          <LoginImg />
        </div>
      </div>
      <div className="login-right">
        <h2>Login</h2>
        <div className="login-form">
          <Form onFinish={handleLogin} layout="vertical" requiredMark={false}>
            <Row>
              <Col span={24}>
                <Form.Item
                  label={
                    <span
                      style={{
                        fontWeight: 600,
                        fontSize: "15px",
                        color: "#444",
                      }}
                    >
                      Email
                    </span>
                  }
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                    {
                      pattern:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Please enter a valid email address!",
                    },
                  ]}
                >
                  <Input size="large" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  label={
                    <span
                      style={{
                        fontWeight: 600,
                        fontSize: "15px",
                        color: "#444",
                      }}
                    >
                      Password
                    </span>
                  }
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password size="large" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item>
                  <Button
                    className="custom-btn-deep"
                    block
                    type="primary"
                    htmlType="submit"
                  >
                    Sign In
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
        <p style={{ textAlign: "center" }}>Or sign in with</p>
        <div className="login-with-social">
          <div className="facebook">
            <img src={FacebookImg} alt="" width="22" />
          </div>
          <div className="linkedin">
            <img src={LinkedInImg} alt="" width="18" />
          </div>
          <div className="google">
            <img src={GoogleImg} alt="" width="15" />
          </div>
        </div>
        <p style={{ textAlign: "center", marginTop: "25px" }}>
          Have an account?{" "}
          <Link to="/">
            <span style={{ color: "red", fontWeight: "600" }}>Sign up</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
