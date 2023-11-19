import React from "react";
import Sidebar from "../Components/Sidebar";
import PostsContainer from "../Components/PostsContainer";
import RecommendationContainer from "../Components/RecommendationContainer";
import SidebarFullScreen from "../Components/SidebarFullScreen";
import { MdPostAdd } from "react-icons/md";
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsCardText } from "react-icons/bs";
import Cookies from "universal-cookie";

const Home = () => {
  // for cookie
  const cookies = new Cookies();
  const cookie = cookies.get("jwtToken");

  // to show or hide create post modal
  const [createPost, setCreatePost] = useState(false);

  // to store post data
  const [caption, setCaption] = useState("");
  const [postImages, setPostImages] = useState([]);

  const handleCaptionInput = (event) => {
    setCaption(event.target.value);
  };

  const handleImageInput = (event) => {
    const chosenFiles = Array.prototype.slice.call(event.target.files);
    setPostImages(chosenFiles);
  };

  const submitData = async () => {
    const formData = new FormData();

    for (let i = 0; i < postImages.length; i++) {
      formData.append(postImages[i]);
    }

    // console.log(postImages);

    const res = await fetch("/api/post/create", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${cookie}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        caption: caption,
        images: formData,
      }),
    });

    const response = await res.json();
    console.log("done");
    console.log(response);
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
                      value={caption}
                      onChange={handleCaptionInput}
                    />
                  </div>

                  <div className="post_image_container">
                    <input
                      name="images"
                      type="file"
                      accept="images/*"
                      multiple="multiple"
                      onChange={handleImageInput}
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="create_post_submit_btn"
                      onClick={submitData}
                    >
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
