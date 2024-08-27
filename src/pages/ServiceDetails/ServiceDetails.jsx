import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import "./ServiceDetails.scss";
import BillBoard from "../../components/common/BillBoard/BillBoard";
import { Button, Image } from "antd";
import TikIcon from "../../assets/green-tik-icon.png";

const ServiceDetails = () => {
  const [serviceDetailsData, setServiceDetailsData] = useState({});
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.pathname);

  const items = [
    {
      title: <Link to="/">Home</Link>,
    },
    {
      title: "Service Details",
    },
  ];

  useEffect(() => {
    fetch(`http://localhost:5000/services/${id}`)
      .then((res) => res.json())
      .then((data) => setServiceDetailsData(data));
  }, []);

  console.log(serviceDetailsData);
  const { description, image_url, price, title } = serviceDetailsData;

  // Handle Navigate
  const handleNavigate = () => {
    navigate("/checkout", { state: { serviceDetailsData } });
  };

  return (
    <div className="service-details">
      <BillBoard title="Service Details" items={items} />
      <div className="service-details-bottom">
        <div className="service-bottom-left">
          <div className="img-wrapper">
            <img src={image_url} alt="" />
          </div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div className="service-bottom-right">
          <div className="service-checklist">
            <h3>Services</h3>
            <div className="checklist-area">
              <div className="checklist-item">
                <div className="left">
                  <img src={TikIcon} alt="" width="50" />
                </div>
                <div className="right">
                  <span>Instant Car Services</span>
                </div>
              </div>
              <div className="checklist-item">
                <div className="left">
                  <img src={TikIcon} alt="" width="50" />
                </div>
                <div className="right">
                  <span>24/7 Quality Service</span>
                </div>
              </div>
              <div className="checklist-item">
                <div className="left">
                  <img src={TikIcon} alt="" width="50" />
                </div>
                <div className="right">
                  <span>Easy Customer Service</span>
                </div>
              </div>
              <div className="checklist-item">
                <div className="left">
                  <img src={TikIcon} alt="" width="50" />
                </div>
                <div className="right">
                  <span>Quality Cost Service</span>
                </div>
              </div>
            </div>
          </div>
          <div className="checkout-btn-area">
            <h2>Price ${price?.toFixed(2)}</h2>
            <Button onClick={handleNavigate} block className="custom-btn-deep">
              Proceed Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
