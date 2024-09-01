import React, { useContext, useEffect } from "react";
import "./Checkout.scss";
import BillBoard from "../../components/common/BillBoard/BillBoard";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, Col, Form, Input, Row, Select } from "antd";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "antd/es/form/Form";
import toast, { Toaster } from "react-hot-toast";

const { Option } = Select;

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { TextArea } = Input;
  const location = useLocation();
  const [form] = useForm();
  const { serviceDetailsData } = location.state || {};
  console.log("service-details: ", serviceDetailsData);

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
        name: user?.displayName,
        email: user?.email,
        price: serviceDetailsData?.price,
        service_name: serviceDetailsData?.title,
      });
    }
  }, [user, serviceDetailsData]);

  const handleCheckoutForm = (values) => {
    const {
      name,
      date,
      PhoneNumber,
      email,
      price,
      service_name,
      warranty,
      service_level,
    } = values;
    const booking = {
      name,
      date,
      PhoneNumber,
      email,
      price,
      service_name,
      image_url: serviceDetailsData?.image_url,
      warranty,
      service_level,
    };

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
          toast.success("Booked Sevice Item Successfully!");
          navigate("/bookings");
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <>
      <Toaster />
      <div className="checkout-area">
        <BillBoard title="Check Out" items={items} />
        <div className="checkout-form-area">
          <Form
            form={form}
            onFinish={handleCheckoutForm}
            layout="vertical"
            requiredMark={false}
            // initialValues={{
            //   price: serviceDetailsData?.price,
            //   service_name: serviceDetailsData?.title,
            // }}
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
                  <Input readOnly placeholder="Your Name" size="large" />
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

              <Col xs={24} sm={24} md={12} xl={4} xxl={4}>
                <Form.Item
                  name="service_level"
                  label={
                    <span
                      style={{
                        fontWeight: 600,
                        fontSize: "15px",
                        color: "#444",
                      }}
                    >
                      Service Level
                    </span>
                  }
                  rules={[
                    {
                      required: true,
                      message: "Please select service level opition!",
                    },
                  ]}
                >
                  <Select placeholder="Select Service Level" size="large">
                    {serviceDetailsData?.service_level?.map((item) => (
                      <Option key={item.id} value={item.name}>
                        {item.name}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12} xl={4} xxl={4}>
                <Form.Item
                  name="warranty"
                  label={
                    <span
                      style={{
                        fontWeight: 600,
                        fontSize: "15px",
                        color: "#444",
                      }}
                    >
                      Warranty
                    </span>
                  }
                  rules={[
                    {
                      required: true,
                      message: "Please select warranty option!",
                    },
                  ]}
                >
                  <Select placeholder="Select Warranty" size="large">
                    {serviceDetailsData?.warranty?.map((item) => (
                      <Option key={item.id} value={item.name}>
                        {item.name}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12} xl={4} xxl={4}>
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
