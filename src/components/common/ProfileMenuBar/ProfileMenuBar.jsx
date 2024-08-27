import React, { useContext } from "react";
import "./ProfileMenuBar.scss";
import { AuthContext } from "../../../providers/AuthProvider";
import { Avatar, Divider, Dropdown } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";

const ProfileMenuBar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  // Handle Logout
  const handleLogout = () => {
    logOutUser()
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };

  const items = [
    {
      key: "1",
      label: (
        <div className="profile-info" style={{ cursor: "auto" }}>
          <span style={{ fontWeight: "600", fontSize: "16px" }}>
            {user?.displayName}
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
