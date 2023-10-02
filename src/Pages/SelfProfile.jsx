import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Cookies from "universal-cookie";
import UserIntro from "../Components/UserIntro";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Post from "../Components/Post";

const SelfProfile = () => {
  const cookies = new Cookies();
  const cookie = cookies.get("jwtToken");
  const [profileData, setProfileData] = useState();
  const [ifDataFetched, setIfDataFetched] = useState(false);
  // to check if to show following modal
  const [followingModal, setFollowingModal] = useState(false);
  // to check if to show followers modal
  const [followersModal, setFollowersModal] = useState(false);
  // for list of people following
  const [following, setFollowing] = useState({});
  // for list of followers
  const [followers, setFollowers] = useState({});

  const fetchProfileData = async () => {
    const res = await fetch("api/profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${cookie}`,
      },
    });

    const response = await res.json();
    // console.log(response);
    setProfileData(response);
    // console.log(profileData);
    setIfDataFetched(true);
  };

  const fetchFollowingData = async () => {
    const res = await fetch("api/profile/following", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${cookie}`,
      },
    });

    const response = await res.json();
    setFollowing(response);
  };

  const fetchFollowersData = async () => {
    const res = await fetch("api/profile/followers", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${cookie}`,
      },
    });

    const response = await res.json();
    // console.log(response);
    setFollowers(response);
  };

  useEffect(() => {
    fetchProfileData();
    fetchFollowingData();
    fetchFollowersData();
  }, []);

  if (ifDataFetched) {
    return (
      <>
        <div className="profile_container">
          <div className="profile_identity">
            <img src={profileData.profileData.image} alt="profile" />
            <p className="user_name">{profileData.profileData.name}</p>
            <p>{profileData.profileData.username}</p>
            <p>{profileData.profileData.email}</p>
            <div className="profile_follow">
              <div
                className="following"
                onClick={() => {
                  setFollowingModal(!followingModal);
                }}
              >
                <p>
                  <b>{`${following.length} following`}</b>
                </p>
              </div>
              <div
                className="followers"
                onClick={() => {
                  setFollowersModal(!followersModal);
                }}
              >
                <p>
                  <b>{`${followers.length} followers`}</b>
                </p>
              </div>
            </div>
            <div className="profile_post_section">
              <h1>Posts</h1>
              <div className="profile_posts">
                {profileData.userPosts.map((post, index) => {
                  return <Post props={post} key={index} />;
                })}
              </div>
            </div>
          </div>
        </div>

        {followingModal && (
          <div className="following_modal">
            <div className="overlay">
              <div className="following_modal_content">
                <h4>List of people you are following</h4>
                <div className="following_list_modal">
                  {following.map((item, index) => {
                    return <UserIntro props={item} key={index} />;
                  })}
                </div>
                <button
                  className="close-modal-btn"
                  onClick={() => {
                    setFollowingModal(!followingModal);
                  }}
                >
                  <AiOutlineCloseCircle className="close_following_modal" />
                </button>
              </div>
            </div>
          </div>
        )}

        {followersModal && (
          <div className="followers_modal">
            <div className="overlay">
              <div className="followers_modal_content">
                <h4>List of your followers</h4>
                <div className="followers_list_modal">
                  {followers.map((item, index) => {
                    return <UserIntro props={item} key={index} />;
                  })}
                </div>
                <button
                  className="close-modal-btn"
                  onClick={() => {
                    setFollowersModal(!followersModal);
                  }}
                >
                  <AiOutlineCloseCircle className="close_followers_modal" />
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
};

export default SelfProfile;
