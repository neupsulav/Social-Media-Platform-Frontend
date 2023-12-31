import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import Links from "./Links";

const SidebarFullScreen = () => {
  return (
    <>
      <div className="sidebar_full_screen">
        <div className="links">
          {Links.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.id}
                to={item.to}
                className="link_fullScreen_sidebar"
              >
                <Icon />
                <p>{item.name}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SidebarFullScreen;
