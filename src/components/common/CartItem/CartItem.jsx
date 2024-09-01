import React from "react";
import "./CartItem.scss";
import { CloseCircleFilled } from "@ant-design/icons";
import { Button } from "antd";
import toast, { Toaster } from "react-hot-toast";

const CartItem = ({ bookingItem, bookingList, setBookinglist }) => {
  const { _id, image_url, service_name, warranty, service_level, price, date } =
    bookingItem;
  console.log("Fronm CartItem", bookingList);

  const handleDeleteBookingItem = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          console.log(data);
          setBookinglist((prevList) =>
            prevList.filter((item) => item._id !== id)
          );
          toast.success("Booking item deleted successfully!");
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <>
      <Toaster />
      <div className="cart-item-area">
        <div className="cart-item-wrapper">
          <div className="img-content-area">
            <CloseCircleFilled
              onClick={() => handleDeleteBookingItem(_id)}
              style={{ fontSize: "25px" }}
            />
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
    </>
  );
};

export default CartItem;
