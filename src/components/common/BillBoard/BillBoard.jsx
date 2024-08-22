import React from "react";
import "./BillBoard.scss";
import BannerImg from "../../../assets/banner-2.jpg";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

const BillBoard = ({ title, items }) => {
  console.log(items);
  return (
    <div className="billboard">
      <div className="billboard-img">
        <h2 className="billboard-text">{title}</h2>
        <img src={BannerImg} alt="" />
        <span className="billboard-background-overlay"></span>
        <Breadcrumb className="custom-breadcumb" items={items} />
      </div>
    </div>
  );
};

export default BillBoard;
