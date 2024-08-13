import React, { useEffect, useState } from "react";
import { Menu, Button, Drawer, Input } from "antd";
import { MenuOutlined, ShoppingOutlined } from "@ant-design/icons";
import "./Header.scss";
import LogoBlack from "../../../assets/auto-care-black.png";
import { Link, useLocation } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";

const Header = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);
  const location = useLocation();

  const pathToKeyMap = {
    "/": "1",
    "/about": "2",
    "/users": "3",
    "/blog": "4",
    "/contact": "5",
  };

  const currentKey = pathToKeyMap[location.pathname];
  const [selectedKey, setSelectedKey] = useState(currentKey);

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

  useEffect(() => {
    console.log("Location changed:", location.pathname);
    const pathToKeyMap = {
      "/": "1",
      "/about": "2",
      "/users": "3",
      "/blog": "4",
      "/contact": "5",
    };

    const currentKey = pathToKeyMap[location.pathname] || "1";
    console.log("Setting selectedKey to:", currentKey);
    setSelectedKey(currentKey);
  }, [location.pathname]);

  console.log("selectedKey", selectedKey);
  console.log("path", currentKey);

  return (
    <div className="header">
      <div className="header-left">
        <Link to="/">
          <div className="logo">
            <img src={LogoBlack} alt="Auto Care Logo" width="300" />
          </div>
        </Link>
      </div>
      {!isMobile && (
        <div className="header-middle">
          <div className="desktop-menu">
            <Menu
              style={{ width: "400px", border: "none" }}
              mode="horizontal"
              defaultSelectedKeys={[selectedKey]}
              onClick={(e) => setSelectedKey(e.key)}
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
          <Button type="dashed" className="appointment-btn custom-btn">
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
              title={
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={LogoBlack}
                    alt="Auto Care Logo"
                    style={{
                      width: "200px",
                      marginRight: "8px",
                    }}
                  />
                </div>
              }
              placement="right"
              onClose={onClose}
              open={drawerVisible}
            >
              <Menu
                mode="vertical"
                defaultSelectedKeys={[currentKey]}
                onClick={(e) => setSelectedKey(e.key)}
                items={menuItems}
              />
              <Input
                style={{ marginBottom: "8px" }}
                placeholder="Search here..."
              />
              <Button
                type="primary"
                block
                className="appointment-btn custom-btn-deep"
              >
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
