import React from "react";

const Comments = ({ data }) => {
  return (
    <>
      <div className="comment_container">
        <img src={data.image} alt="profile" />
        <div className="comment_username">
          <p className="comment_user_name">
            <b>{data.name}</b>
          </p>

          <p>{data.commentContent}</p>
        </div>
      </div>
    </>
  );
};

export default Comments;
