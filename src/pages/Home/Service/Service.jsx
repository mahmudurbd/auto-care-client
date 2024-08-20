import React, { useEffect, useState } from "react";
import "./Service.scss";
import ServiceCard from "./ServiceCard";
import { Button } from "antd";

const Service = () => {
  const [serviceData, setServiceData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServiceData(data);
      });
  }, []);

  return (
    <div className="service-area">
      <div className="service-text-content custom-text-center-content">
        <h2>Service</h2>
        <h1>Our Service Area</h1>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className="service-card-wrapper">
        {serviceData?.map((item) => (
          <ServiceCard key={item._id} serviceItem={item} />
        ))}
      </div>
      <div style={{ textAlign: "center" }}>
        <Button className="custom-btn">More Services</Button>
      </div>
    </div>
  );
};

export default Service;
