import React, { useContext, useEffect, useState } from "react";
import "./ProfileMenuBar.scss";
import { AuthContext } from "../../../providers/AuthProvider";
import { Avatar, Divider, Dropdown } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";

const ProfileMenuBar = () => {
  const [userName, setUserName] = useState("");
  const { user, logOutUser } = useContext(AuthContext);

  useEffect(() => {
    if (user?.email) {
      setUserName(user.displayName);
    } else {
      setUserName("Guest");
    }
  }, [user]);

  // Handle Logout
  const handleLogout = () => {
    logOutUser()
      .then(() => {})
      .catch((err) => {
        // console.log(err);
      });
  };

  const items = [
    {
      key: "1",
      label: (
        <div className="profile-info" style={{ cursor: "auto" }}>
          <span style={{ fontWeight: "600", fontSize: "16px" }}>
            {userName}
          </span>
          <p style={{ color: "#a7a4a4", marginTop: "2px" }}>{user?.email}</p>
        </div>
      ),
    },
    {
      key: "2",
      // danger: true,
      label: (
        <div className="logout-area">
          <Divider
            style={{
              margin: 0,
            }}
          />

          <span onClick={handleLogout}>Logout</span>
        </div>
      ),
      icon: <LogoutOutlined />,
    },
  ];

  // useEffect(() => {
  //   if (user?.displayName) {
  //     setUserName(user?.displayName);
  //   }
  // }, [user?.displayName]);

  return (
    <Dropdown
      className="profile-menubar-area"
      menu={{
        items,
      }}
      placement="bottomLeft"
      arrow
    >
      <Avatar
        style={{
          backgroundColor: "#fde3cf",
          color: "#f56a00",
        }}
        icon={<UserOutlined />}
      />
    </Dropdown>
  );
};

export default ProfileMenuBar;
