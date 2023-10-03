import React from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const UserIntro = ({ props }) => {
  // const navigate = useNavigate();
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

            {/* <p
              onClick={() => {
                return navigate(`/${props._id}`);
              }}
              className="user_intro_name"
            >
              <b>{props.name}</b>
            </p> */}

            {/* <p
              onClick={() => {
                navigate('/props.username');
              }}
            >
              {props.name}
            </p> */}

            <p className="user_intro_username">{props.username}</p>
          </div>
        </div>
        {/* <button
          className="recommendation_follow_btn"
          onClick={() => {
            followUser(props._id);
          }}
        >
          Follow
        </button> */}
      </div>
    </>
  );
};

export default UserIntro;
