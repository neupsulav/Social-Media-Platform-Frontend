import React from "react";
import { Link } from "react-router-dom";

const UserIntro = ({ props }) => {
  return (
    <>
      <div className="user_intro_container">
        <div className="user_identity">
          <img src={props.image} alt="userImg" />
          <div className="user_intro_username">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={`/${props.username}`}
            >
              <p className="user_intro_name">
                <b>{props.name}</b>
              </p>
            </Link>

            <p className="user_intro_username">{props.username}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserIntro;
