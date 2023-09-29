import React from "react";
import Sidebar from "../Components/Sidebar";
import PostsContainer from "../Components/PostsContainer";
import RecommendationContainer from "../Components/RecommendationContainer";
import SidebarFullScreen from "../Components/SidebarFullScreen";

const Home = () => {
  return (
    <>
      <Sidebar />
      <div className="home_page">
        <SidebarFullScreen />
        <PostsContainer />
        <RecommendationContainer />
      </div>
    </>
  );
};

export default Home;
