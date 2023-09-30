import React, { useState } from "react";
import {
  //   AiOutlineLike,
  AiFillLike,
  AiOutlineSend,
  AiOutlineDown,
  AiOutlineUp,
} from "react-icons/ai";
import { CiSquareChevLeft, CiSquareChevRight } from "react-icons/ci";
import Comments from "./Comments";
import Cookies from "universal-cookie";

const Post = ({ props }) => {
  const [seeComments, setSeeComments] = useState(false);
  const [likes, setLikes] = useState(props.likes.length);
  const [imgIndex, setImgIndex] = useState(0);
  const cookies = new Cookies();
  const cookie = cookies.get("jwtToken");
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);
  const [seeMore, setSeeMore] = useState(false);

  const makeComment = (event) => {
    let newText = event.target.value;
    setComment(newText);
  };

  // for sending comment to backend
  const sendComment = async () => {
    if (comment) {
      await fetch(`/api/post/comment/${props._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookie}`,
        },
        body: JSON.stringify({
          commentContent: comment,
        }),
      });

      setComment("");
    }
  };

  // for fetching comments
  const fetchComments = async () => {
    const data = await fetch(`/api/post/${props._id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${cookie}`,
      },
    });

    let postData = await data.json();

    setCommentList(postData.comments);
  };

  // for checking index value
  const checkNumber = (number) => {
    if (number > props.images.length - 1) {
      return 0;
    } else if (number < 0) {
      return props.images.length - 1;
    } else {
      return number;
    }
  };

  // slider left btn click
  const leftButtonClick = () => {
    setImgIndex((index) => {
      let newNumber = index + 1;
      return checkNumber(newNumber);
    });
  };

  // slider right btn click
  const rightButtonClick = () => {
    setImgIndex((index) => {
      let newNumber = index - 1;
      return checkNumber(newNumber);
    });
  };

  const likeBtnClicked = async () => {
    await fetch(`api/post/like/${props._id}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${cookie}`,
      },
    });

    const data = await fetch(`/api/post/${props._id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${cookie}`,
      },
    });

    let postData = await data.json();

    setLikes(postData.likes.length);
  };

  return (
    <>
      <div className="post">
        <div className="post_identity">
          <img src={props.createdBy.image} alt="profile" />
          <div className="post_username">
            <p className="post_name">{props.createdBy.name}</p>

            <p>{props.createdAt.substring(0, 10)}</p>
          </div>
        </div>
        <div className="post_content">
          {props.caption ? (
            <p
              className="post_caption"
              onClick={() => {
                setSeeMore(!seeMore);
              }}
            >
              {seeMore
                ? props.caption
                : `${props.caption.substring(0, 300)}.....`}
              {/* <button>{seeMore ? "See less" : "See more"}</button> */}
            </p>
          ) : (
            <div></div>
          )}

          <div
            className={
              props.images.length > 0 ? "post_images" : "hide_post_images"
            }
          >
            <div
              className={
                props.images.length > 1
                  ? "swipe_btn swipe_left"
                  : "swipe_btn swipe_left hide_btn"
              }
            >
              <CiSquareChevLeft onClick={leftButtonClick} />
            </div>

            <div
              className={
                props.images.length > 1
                  ? "swipe_btn swipe_right"
                  : "swipe_btn swipe_right hide_btn"
              }
            >
              <CiSquareChevRight onClick={rightButtonClick} />
            </div>
            <img src={props.images[imgIndex]} alt="" />
          </div>

          {/* {props.images ? (
            <div className="post_images">
              <div
                className={
                  props.images.length > 1
                    ? "swipe_btn swipe_left"
                    : "swipe_btn swipe_left hide_btn"
                }
              >
                <CiSquareChevLeft onClick={leftButtonClick} />
              </div>

              <div
                className={
                  props.images.length > 1
                    ? "swipe_btn swipe_right"
                    : "swipe_btn swipe_right hide_btn"
                }
              >
                <CiSquareChevRight onClick={rightButtonClick} />
              </div>
              <img src={props.images[imgIndex]} alt="" />
            </div>
          ) : (
            <div></div>
          )} */}
        </div>
        <div className="like_comment_section">
          <div className="like_section">
            <button className="like_btn" onClick={likeBtnClicked}>
              <AiFillLike className="like_icon" />
            </button>
            <p>
              <b>{likes}</b> likes
            </p>
          </div>
          <div className="comment_section">
            <input
              type="text"
              id="comment"
              name="comment"
              value={comment}
              onChange={makeComment}
              placeholder="Write a comment..."
            />
            <button className="comment_btn" type="submit" onClick={sendComment}>
              <AiOutlineSend />
            </button>
          </div>
        </div>

        {seeComments ? (
          <button
            className="see_comments"
            onClick={() => {
              setSeeComments(!seeComments);
            }}
          >
            Hide Comments <AiOutlineUp />
          </button>
        ) : (
          <button
            className="see_comments"
            onClick={() => {
              setSeeComments(!seeComments);
              fetchComments();
            }}
          >
            See comments <AiOutlineDown />
          </button>
        )}

        {seeComments ? (
          <div className="comments">
            {commentList.map((comment, cmtIndex) => {
              return <Comments data={comment} key={cmtIndex} />;
            })}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};

export default Post;
