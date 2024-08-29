import React, { useContext } from "react";
import "./Signup.scss";
import { LoginImg } from "../../components/common/SvgImg/SvgImg";
import { Button, Col, Form, Input, Row } from "antd";
import FacebookImg from "../../assets/social/facebook.png";
import LinkedInImg from "../../assets/social/linkedin.png";
import GoogleImg from "../../assets/social/google.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const Signup = () => {
  const { createUser } = useContext(AuthContext);

  // Signup Hanndler
  const handleSignup = (values) => {
    const { name, email, password } = values;
    createUser(email, password, name)
      .then((result) => {
        const user = result.user;

        // update displayName
        updateProfile(user, { displayName: name });
      })
      .catch((error) => {
        // console.log(error.message);
      });
  };

  return (
    <div className="signup-area">
      <div className="signup-left">
        <div className="signup-left-container">
          <LoginImg />
        </div>
      </div>
      <div className="signup-right">
        <h2>Sign Up</h2>
        <div className="signup-form">
          <Form onFinish={handleSignup} layout="vertical" requiredMark={false}>
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
                      Name
                    </span>
                  }
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Please input your name!",
                    },
                    {
                      min: 2,
                      message: "Name must be at least 2 characters long!",
                    },
                  ]}
                >
                  <Input size="large" placeholder="Your name" />
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
                      Email
                    </span>
                  }
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your email!",
                    },
                    {
                      pattern:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Please enter a valid email address!",
                    },
                  ]}
                >
                  <Input size="large" placeholder="Your email" />
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
                  <Input.Password size="large" placeholder="Your password" />
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
                    Sign Up
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
        <p style={{ textAlign: "center" }}>Or sign up with</p>
        <div className="signup-with-social">
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
          Already have an account?{" "}
          <Link to="/login">
            <span style={{ color: "red", fontWeight: "600" }}>Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
