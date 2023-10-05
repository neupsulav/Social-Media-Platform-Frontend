import React from "react";
import Sidebar from "../Components/Sidebar";
import PostsContainer from "../Components/PostsContainer";
import RecommendationContainer from "../Components/RecommendationContainer";
import SidebarFullScreen from "../Components/SidebarFullScreen";
import { MdPostAdd } from "react-icons/md";
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsCardText } from "react-icons/bs";

const Home = () => {
  // to show or hide create post modal
  const [createPost, setCreatePost] = useState(false);

  // to store post data
  const [data, setData] = useState({
    caption: "",
    images: [],
  });

  let name, value;
  const handleInputs = (event) => {
    name = event.target.name;
    value = event.target.value;

    // setData({ ...data, [name]: value });
  };

  return (
    <>
      <Sidebar />
      <div className="home_page">
        <div
          className="create_post_btn"
          onClick={() => {
            setCreatePost(!createPost);
          }}
        >
          <MdPostAdd className="create_post_icon" />
          <p>Create a post</p>
        </div>
        <SidebarFullScreen />
        <PostsContainer />
        <RecommendationContainer />

        {createPost && (
          <div className="create_post_modal">
            <div className="overlay">
              <div className="create_post_modal_content">
                <h2>Create a post</h2>
                <div className="create_post_form">
                  {/* <label htmlFor="postCaption">Enter </label> */}
                  <div className="post_caption_container">
                    <BsCardText />
                    <input
                      type="text"
                      name="caption"
                      placeholder="Write your caption here..."
                      onChange={handleInputs}
                      value={data.caption}
                    />
                  </div>

                  <div className="post_image_container">
                    <input
                      name="images"
                      type="file"
                      accept="images/*"
                      multiple="multiple"
                    />
                  </div>

                  <div>
                    <button type="submit" className="create_post_submit_btn">
                      Create post
                    </button>
                  </div>
                </div>
                <button
                  className="close_post_modal_btn"
                  onClick={() => {
                    setCreatePost(!createPost);
                  }}
                >
                  <AiOutlineCloseCircle className="close_following_modal" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
