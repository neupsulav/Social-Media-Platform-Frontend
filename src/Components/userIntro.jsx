import React from "react";
import Cookies from "universal-cookie";

const UserIntro = ({ props }) => {
  const cookies = new Cookies();
  const cookie = cookies.get("jwtToken");

  const followUser = async (id) => {
    await fetch(`api/user/follow/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${cookie}`,
      },
    });
  };

  // console.log(props._id);
  return (
    <>
      <div className="user_intro_container">
        <div className="user_identity">
          <img src={props.image} alt="userImg" />
          <div className="user_intro_username">
            <p className="user_intro_name">
              <b>{props.name}</b>
            </p>

            <p className="user_intro_username">{props.username}</p>
          </div>
        </div>
        <button
          className="recommendation_follow_btn"
          onClick={() => {
            followUser(props._id);
          }}
        >
          Follow
        </button>
      </div>
    </>
  );
};

export default UserIntro;
