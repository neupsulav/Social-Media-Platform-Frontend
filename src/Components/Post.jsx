import React from "react";
import { AiOutlineLike, AiFillLike, AiOutlineSend } from "react-icons/ai";

const Post = () => {
  return (
    <>
      <div className="post">
        <div className="post_identity">
          <img
            src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
            alt="profile"
          />
          <div className="post_username">
            <p className="post_name">Name</p>

            <p>2020-09-28</p>
          </div>
        </div>
        <div className="post_content">
          <p className="post_caption">This is a caption</p>
          <div className="post_images">
            <img
              src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="like_comment_section">
          <button className="like_btn">
            <AiOutlineLike className="like_icon" />
          </button>
          <div className="comment_section">
            {/* <div className="comment_input"> */}
            <input
              type="text"
              id="comment"
              name="comment"
              placeholder="Write a comment..."
            />
            <button className="comment_btn" type="submit">
              <AiOutlineSend />
            </button>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
