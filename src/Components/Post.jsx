import React, { useState } from "react";
import {
  AiOutlineLike,
  // AiFillLike,
  AiOutlineSend,
  AiOutlineDown,
} from "react-icons/ai";
import { CiSquareChevLeft, CiSquareChevRight } from "react-icons/ci";
import Comments from "./Comments";
// import Cookies from "universal-cookie";

const Post = ({ props }) => {
  const [seeComments, setSeeComments] = useState(false);

  const [imgIndex, setImgIndex] = useState(0);

  const checkNumber = (number) => {
    if (number > props.images.length - 1) {
      return 0;
    } else if (number < 0) {
      return props.images.length - 1;
    } else {
      return number;
    }
  };

  const leftButtonClick = () => {
    setImgIndex((index) => {
      let newNumber = index + 1;
      return checkNumber(newNumber);
    });
  };
  const rightButtonClick = () => {
    setImgIndex((index) => {
      let newNumber = index - 1;
      return checkNumber(newNumber);
    });
  };

  //   console.log(props._id);

  return (
    <>
      {/* {posts.map((post, index) => { */}
      {/* return ( */}
      <div className="post">
        <div className="post_identity">
          <img src={props.createdBy.image} alt="profile" />
          <div className="post_username">
            <p className="post_name">{props.createdBy.name}</p>

            <p>{props.createdAt.substring(0, 10)}</p>
          </div>
        </div>
        <div className="post_content">
          <p className="post_caption">{props.caption}</p>
          <div className="post_images">
            <div className="swipe_btn swipe_left">
              <CiSquareChevLeft onClick={leftButtonClick} />
            </div>

            <div className="swipe_btn swipe_right">
              <CiSquareChevRight onClick={rightButtonClick} />
            </div>
            <img src={props.images[imgIndex]} alt="postImages" />
          </div>
        </div>
        <div className="like_comment_section">
          <button className="like_btn">
            <AiOutlineLike className="like_icon" />
          </button>
          <div className="comment_section">
            <input
              type="text"
              id="comment"
              name="comment"
              placeholder="Write a comment..."
            />
            <button className="comment_btn" type="submit">
              <AiOutlineSend />
            </button>
          </div>
        </div>

        <button
          className="see_comments"
          onClick={() => {
            setSeeComments(!seeComments);
          }}
        >
          See comments <AiOutlineDown />
        </button>

        <div className="comments">
          {seeComments ? <Comments /> : <div></div>}
        </div>
      </div>
      {/* ); */}
      {/* })} */}
    </>
  );
};

export default Post;
