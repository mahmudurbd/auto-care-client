import React from "react";
import "./CartItem.scss";
import { CloseCircleFilled } from "@ant-design/icons";
import { Button } from "antd";

const CartItem = ({ bookingItem }) => {
  const { image_url, service_name, warranty, service_level, price, date } =
    bookingItem;
  return (
    <div className="cart-item-area">
      <div className="cart-item-wrapper">
        <div className="img-content-area">
          <CloseCircleFilled style={{ fontSize: "25px" }} />
          <div className="cart-img">
            <img src={image_url} width="150" height="150" />
          </div>
          <div className="text-content">
            <span style={{ fontSize: "20px", fontWeight: "600" }}>
              {service_name}
            </span>
            <br />
            <span style={{ fontSize: "13px", color: "#A2A2A2" }}>
              Warranty: {warranty}
            </span>
            <br />
            <span style={{ fontSize: "13px", color: "#A2A2A2" }}>
              Service Level: {service_level}
            </span>
          </div>
        </div>
        <div className="price">
          <h4>$ {price}</h4>
        </div>
        <div className="date">
          <span>{date}</span>
        </div>
        <div className="status">
          <Button className="custom-btn-deep status-btn">Pending</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
