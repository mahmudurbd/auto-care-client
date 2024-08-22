import React from "react";
import "./Checkout.scss";
import BillBoard from "../../components/common/BillBoard/BillBoard";
import { Link } from "react-router-dom";
import { Button, Col, Form, Input, Row } from "antd";

const Checkout = () => {
  const { TextArea } = Input;
  const items = [
    {
      title: <Link to="/">Home</Link>,
    },
    {
      title: "Check Out",
    },
  ];
  return (
    <div className="checkout-area">
      <BillBoard title="Check Out" items={items} />
      <div className="checkout-form-area">
        <Form layout="vertical">
          <Row gutter={32}>
            <Col md={24} xl={12} xxl={12}>
              <Form.Item
                name="fristname"
                rules={[
                  {
                    required: true,
                    message: "Please input your last name!",
                  },
                ]}
              >
                <Input placeholder="First Name" size="large" />
              </Form.Item>
            </Col>
            <Col md={24} xl={12} xxl={12}>
              <Form.Item
                //label="Last Name"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your last name!",
                  },
                ]}
              >
                <Input placeholder="Last Name" size="large" />
              </Form.Item>
            </Col>
            <Col md={24} xl={12} xxl={12}>
              <Form.Item
                //label="Frist Name"
                name="fristname"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <Input placeholder="Your Phone" size="large" />
              </Form.Item>
            </Col>
            <Col md={24} xl={12} xxl={12}>
              <Form.Item
                //label="Last Name"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your email address!",
                  },
                ]}
              >
                <Input placeholder="Your Email" size="large" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                //label="Last Name"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <TextArea rows={6} placeholder="Your Message" />
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
                  Order Confirm
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default Checkout;
