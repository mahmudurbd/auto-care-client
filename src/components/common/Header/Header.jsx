import React, { useContext, useEffect, useState } from "react";
import { Menu, Button, Drawer, Input } from "antd";
import { MenuOutlined, ShoppingOutlined } from "@ant-design/icons";
import "./Header.scss";
import LogoBlack from "../../../assets/auto-care-black.png";
import { Link, useLocation } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";
import { AuthContext } from "../../../providers/AuthProvider";
import ProfileMenuBar from "../ProfileMenuBar/ProfileMenuBar";

const Header = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);
  const [searchbarHide, setSearchbarHide] = useState(window.innerWidth <= 768);
  const location = useLocation();
  const { user, logOutUser } = useContext(AuthContext);

  const pathToKeyMap = {
    "/": "1",
    "/about": "2",
    "/users": "3",
    "/bookings": "4",
    "/login": "5",
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
      label: user?.email ? <Link to="/bookings">My Booking</Link> : null,
    },
    {
      key: "5",
      label: !user?.email ? <Link to="/login">Login</Link> : null,
    },
  ].filter((item) => item.label);

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
    const handleSearchbarHide = () => {
      setSearchbarHide(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleSearchbarHide);
    return () => {
      window.removeEventListener("resize", handleSearchbarHide);
    };
  }, []);

  useEffect(() => {
    const currentKey = location.pathname
      ? pathToKeyMap[location.pathname]
      : "1";
    setSelectedKey(currentKey);
  }, [location.pathname]);

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
              selectedKeys={[selectedKey]}
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
                selectedKeys={[selectedKey]}
                onClick={(e) => setSelectedKey(e.key)}
                items={menuItems}
              />
              {searchbarHide && (
                <Input
                  size="large"
                  style={{ marginBottom: "8px", marginTop: "5px" }}
                  placeholder="Search here..."
                />
              )}
              <Button
                style={{ marginTop: "5px" }}
                type="primary"
                block
                className="appointment-btn custom-btn-deep"
              >
                Appointment
              </Button>
            </Drawer>
          </div>
        )}

        {user?.email && <ProfileMenuBar />}
      </div>
    </div>
  );
};

export default Header;
