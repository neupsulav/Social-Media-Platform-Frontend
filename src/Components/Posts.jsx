import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import Post from "./Post";
import { useNavigate } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const fetchPostData = async (cookies) => {
    const cookie = cookies.get("jwtToken");
    if (!cookie) {
      navigate("/login");
    }
    const res = await fetch("/api/post", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${cookie}`,
      },
    });

    const response = await res.json();
    setPosts(response);
  };

  useEffect(() => {
    const cookies = new Cookies();
    fetchPostData(cookies);
  }, []);

  return (
    <>
      {posts.map((post, index) => {
        return <Post props={post} key={index} />;
      })}
    </>
  );
};

export default Posts;
