import React, { useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import Links from "./Links";

const Sidebar = () => {
  const [clicked, setClicked] = useState(false);

  const btnClicked = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <div className="sidebar_container">
        <div className="navbar_container">
          <h1>Social Media</h1>
        </div>
        <div className={clicked ? "sidebar_expand sidebar" : "sidebar"}>
          <button className="hamburger_icon_btn" onClick={btnClicked}>
            {clicked ? (
              <RxCross1 className="hamburger_icon color_prop" />
            ) : (
              <RxHamburgerMenu className="hamburger_icon" />
            )}
          </button>

          <div className="links">
            {Links.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.id} to="" className="link">
                  <Icon />
                  <p>{item.name}</p>
                </Link>
              );
            })}

            {/* <Link to="" className="link">
              <AiOutlineHome />
              <p>Home</p>
            </Link>

            <Link to="" className="link">
              <AiOutlineHome />
              <p>Home</p>
            </Link>

            <Link to="" className="link">
              <AiOutlineHome />
              <p>Home</p>
            </Link>

            <Link to="" className="link">
              <AiOutlineHome />
              <p>Home</p>
            </Link>

            <Link to="" className="link">
              <AiOutlineHome />
              <p>Home</p>
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
