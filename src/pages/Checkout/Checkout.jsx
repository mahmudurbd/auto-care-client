import React, { useContext, useEffect } from "react";
import "./Checkout.scss";
import BillBoard from "../../components/common/BillBoard/BillBoard";
import { Link, useLocation } from "react-router-dom";
import { Button, Col, Form, Input, Row, message } from "antd";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "antd/es/form/Form";

const Checkout = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const { TextArea } = Input;
  const location = useLocation();
  const [form] = useForm();
  const { serviceDetailsData } = location.state || {};
  console.log(serviceDetailsData);
  const [messageApi, contextHolder] = message.useMessage();
  const items = [
    {
      title: <Link to="/">Home</Link>,
    },
    {
      title: "Check Out",
    },
  ];

  useEffect(() => {
    if (user?.email) {
      form.setFieldsValue({
        email: user?.email,
      });
    }
  }, [user]);

  const handleCheckoutForm = (values) => {
    console.log(values);
    const { name, date, PhoneNumber, email, price, service_name } = values;
    const booking = {
      name,
      date,
      PhoneNumber,
      email,
      price,
      service_name,
      image_url: serviceDetailsData?.image_url,
    };
    console.log("bookings", booking);
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          messageApi
            .open({
              type: "loading",
              content: "Loading..",
              duration: 2.5,
            })
            .then(() => message.success("Booked service successfully", 2.5))
            .catch((err) => {
              message.error(`${err}`, 2.5);
            });
        }
      });
  };
  return (
    <>
      {contextHolder}
      <div className="checkout-area">
        <BillBoard title="Check Out" items={items} />
        <div className="checkout-form-area">
          <Form
            form={form}
            onFinish={handleCheckoutForm}
            layout="vertical"
            requiredMark={false}
            initialValues={{
              email: user?.email,
              price: serviceDetailsData?.price,
              service_name: serviceDetailsData?.title,
            }}
          >
            <Row gutter={32}>
              <Col xs={24} sm={24} md={12} xl={12} xxl={12}>
                <Form.Item
                  name="name"
                  label={
                    <span
                      style={{
                        fontWeight: 600,
                        fontSize: "15px",
                        color: "#444",
                      }}
                    >
                      Your Name
                    </span>
                  }
                  rules={[
                    {
                      required: true,
                      message: "Please input your your name!",
                    },
                  ]}
                >
                  <Input placeholder="Your Name" size="large" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12} xl={6} xxl={6}>
                <Form.Item
                  name="service_name"
                  label={
                    <span
                      style={{
                        fontWeight: 600,
                        fontSize: "15px",
                        color: "#444",
                      }}
                    >
                      Booking Service Name
                    </span>
                  }
                  rules={[
                    {
                      required: true,
                      message: "Please input your service name!",
                    },
                  ]}
                >
                  <Input readOnly placeholder="Your Name" size="large" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12} xl={6} xxl={6}>
                <Form.Item
                  name="price"
                  label={
                    <span
                      style={{
                        fontWeight: 600,
                        fontSize: "15px",
                        color: "#444",
                      }}
                    >
                      Due Amount
                    </span>
                  }
                  rules={[
                    {
                      required: true,
                      message: "Please input your due!",
                    },
                  ]}
                >
                  <Input
                    prefix="$"
                    placeholder="Your Due"
                    size="large"
                    readOnly
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12} xl={12} xxl={12}>
                <Form.Item
                  name="date"
                  label={
                    <span
                      style={{
                        fontWeight: 600,
                        fontSize: "15px",
                        color: "#444",
                      }}
                    >
                      Date
                    </span>
                  }
                  rules={[
                    {
                      required: true,
                      message: "Please input your date!",
                    },
                  ]}
                >
                  <Input type="date" size="large" />
                </Form.Item>
              </Col>

              <Col xs={24} sm={24} md={12} xl={12} xxl={12}>
                <Form.Item
                  name="PhoneNumber"
                  label={
                    <span
                      style={{
                        fontWeight: 600,
                        fontSize: "15px",
                        color: "#444",
                      }}
                    >
                      Phone Number
                    </span>
                  }
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone number!",
                    },
                    {
                      pattern: /^[0-9]{10,11}$/,
                      message:
                        "Please enter a valid 10 or 11-digit phone number!",
                    },
                  ]}
                >
                  <Input placeholder="Your Phone" size="large" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12} xl={12} xxl={12}>
                <Form.Item
                  name="email"
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
                  rules={[
                    {
                      required: true,
                      message: "Please input your email address!",
                    },
                    {
                      pattern:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Please enter a valid email address!",
                    },
                  ]}
                >
                  <Input readOnly placeholder="Your Email" size="large" />
                  {/* <input
                  readOnly
                  defaultValue={user?.email}
                  placeholder="Your Email"
                /> */}
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={24} xl={12} xxl={12}>
                <Form.Item
                  name="address"
                  label={
                    <span
                      style={{
                        fontWeight: 600,
                        fontSize: "15px",
                        color: "#444",
                      }}
                    >
                      Address
                    </span>
                  }
                  rules={[
                    {
                      required: true,
                      message: "Please input your address!",
                    },
                  ]}
                >
                  <Input placeholder="Your Address" size="large" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  name="message"
                  label={
                    <span
                      style={{
                        fontWeight: 600,
                        fontSize: "15px",
                        color: "#444",
                      }}
                    >
                      Message
                    </span>
                  }
                  // rules={[
                  //   {
                  //     required: true,
                  //     message: "Please input your username!",
                  //   },
                  // ]}
                >
                  <TextArea size="large" rows={6} placeholder="Your Message" />
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
    </>
  );
};

export default Checkout;
