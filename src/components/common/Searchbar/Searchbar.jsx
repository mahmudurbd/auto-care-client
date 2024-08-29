import React, { useEffect, useRef, useState } from "react";
import "./Searchbar.scss";
import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const Searchbar = () => {
  const [expanded, setExpanded] = useState(false);
  const searchBarRef = useRef();

  // Search Toggler
  const toggleSearch = () => {
    setExpanded((prev) => !prev);
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
    <>
      <Button
        onClick={() => toggleSearch()}
        className="search-btn"
        type="text"
        icon={<SearchOutlined />}
      />
      {expanded && (
        <>
          <div className="overlay" onClick={toggleSearch}></div>
          <div ref={searchBarRef} className="search-bar">
            <Input
              className="search-input"
              placeholder="Search here..."
              autoFocus
            />
          </div>
        </>
      )}
    </>
  );
};

export default Searchbar;
