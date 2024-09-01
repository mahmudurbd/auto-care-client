import React, { useContext, useEffect, useState } from "react";
import "./Bookings.scss";
import BillBoard from "../../components/common/BillBoard/BillBoard";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import CartItem from "../../components/common/CartItem/CartItem";
import { Empty, Pagination, Skeleton } from "antd";

const Bookings = () => {
  const [bookingList, setBookinglist] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [progress, setProgress] = useState(true);
  const { user } = useContext(AuthContext);

  const items = [
    {
      title: <Link to="/">Home</Link>,
    },
    {
      title: "Cart Details",
    },
  ];

  useEffect(() => {
    setProgress(true);
    fetch(`http://localhost:5000/bookings?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setBookinglist(data);
        setProgress(false);
      });
  }, [user]);

  // Calculate the items to be shown on the current page

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = bookingList.slice(indexOfFirstItem, indexOfLastItem);
  console.log(currentItems);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  // Handle the page size change
  const onShowSizeChange = (current, size) => {
    setItemsPerPage(size);

    // Reset to first page when page size changes
    // setCurrentPage(1);
  };

  return (
    <div className="bookings-area">
      <BillBoard title="Cart Details" items={items} />
      <div className="bookings-bottom-area">
        <span style={{ fontWeight: "600", color: "#444", fontSize: "14px" }}>
          My Ordered Number: {bookingList?.length}
        </span>
        <div className="order-list">
          {progress ? (
            <Skeleton active />
          ) : currentItems.length > 0 ? (
            currentItems?.map((bookingItem) => (
              <CartItem
                key={bookingItem._id}
                bookingItem={bookingItem}
                bookingList={bookingList}
                setBookinglist={setBookinglist}
              />
            ))
          ) : (
            <Empty />
          )}
        </div>
        {bookingList.length > 0 && (
          <Pagination
            align="center"
            defaultCurrent={1}
            current={currentPage}
            pageSize={itemsPerPage}
            total={bookingList.length}
            onChange={onPageChange}
            showSizeChanger
            onShowSizeChange={onShowSizeChange}
            pageSizeOptions={["3", "5", "10", "20"]}
          />
        )}
      </div>
    </div>
  );
};

export default Bookings;
