import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const fetchPostData = async (cookies) => {
    const cookie = cookies.get("jwtToken");
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
