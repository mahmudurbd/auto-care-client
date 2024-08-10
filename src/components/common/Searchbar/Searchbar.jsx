import React, { useEffect, useRef, useState } from "react";
import "./Searchbar.scss";
import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const Searchbar = () => {
  const [expanded, setExpanded] = useState(false);
  const searchBarRef = useRef();

  // Search Toggler
  const toggleSearch = () => {
    setExpanded(!expanded);
  };

  // Searchbar Hiding Handler
  const handleClickOutside = (event) => {
    if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
      setExpanded(false);
    }
  };

  useEffect(() => {
    if (expanded) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [expanded]);

  return (
    <div
      ref={searchBarRef}
      className={`search-bar ${expanded ? "expand" : ""}`}
    >
      <Input
        className="search-input"
        placeholder="Search here..."
        style={{ width: expanded ? 200 : 0, opacity: expanded ? 1 : 0 }}
      />
      <Button
        onClick={toggleSearch}
        className="search-btn"
        type="text"
        icon={<SearchOutlined />}
      />
    </div>
  );
};

export default Searchbar;
