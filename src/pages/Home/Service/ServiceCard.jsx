import React from "react";
import "./ServiceCard.scss";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Image } from "antd";
import { Link } from "react-router-dom";

const ServiceCard = ({ serviceItem }) => {
  const { title, price, image_url, _id } = serviceItem;
  return (
    <div className="service-card-area">
      <div className="service-card-top">
        <Image className="service-img" preview={false} src={image_url} alt="" />
      </div>
      <span style={{ fontSize: "18px", fontWeight: 700, color: "#444" }}>
        {title}
      </span>
      <div className="service-card-bottom">
        <span style={{ fontSize: "15px", fontWeight: 600 }}>
          Price: ${price}
        </span>
        <Link style={{ color: "#ff3811" }} to={`/service-details/${_id}`}>
          <ArrowRightOutlined className="custom-arrow-icon" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
