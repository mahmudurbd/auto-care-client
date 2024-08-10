import React, { useEffect, useState } from "react";
import { Menu, Button, Drawer, Input } from "antd";
import { MenuOutlined, ShoppingOutlined } from "@ant-design/icons";
import "./Header.scss";
import LogoBlack from "../../../assets/auto-care-black.png";
import { Link } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";

const Header = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onClose = () => {
    setDrawerVisible(false);
  };

  const menuItems = [
    {
      key: "1",
      label: <Link to="/">Home</Link>,
    },
    {
      key: "2",
      label: <Link to="/about">About</Link>,
    },
    {
      key: "3",
      label: <Link to="/users">Services</Link>,
    },
    {
      key: "4",
      label: <Link to="/login">Blog</Link>,
    },
    {
      key: "5",
      label: <Link to="/login">Contact</Link>,
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="header">
      <div className="header-left">
        <Link to="/">
          <div className="logo">
            <img src={LogoBlack} alt="Auto Care Logo" />
          </div>
        </Link>
      </div>
      {!isMobile && (
        <div className="header-middle">
          <div className="desktop-menu">
            <Menu
              style={{ width: "400px", border: "none" }}
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              items={menuItems}
            />
          </div>
        </div>
      )}
      <div className="header-right">
        <div className="icon-area">
          <Searchbar />
          <div className="shopping-cart">
            <ShoppingOutlined />
          </div>
        </div>
        {!isMobile && (
          <Button type="dashed" className="appointment-btn">
            Appointment
          </Button>
        )}
        {isMobile && (
          <div className="mobile-menu-area">
            <Button
              className="mobile-menu-btn"
              type="text"
              icon={<MenuOutlined />}
              onClick={showDrawer}
            />
            <Drawer
              title="Auto Care"
              placement="right"
              onClose={onClose}
              open={drawerVisible}
            >
              <Menu
                mode="vertical"
                defaultSelectedKeys={["1"]}
                items={menuItems}
              />
              <Input
                style={{ marginBottom: "8px" }}
                placeholder="Search here..."
              />
              <Button type="primary" block className="appointment-btn">
                Appointment
              </Button>
            </Drawer>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
