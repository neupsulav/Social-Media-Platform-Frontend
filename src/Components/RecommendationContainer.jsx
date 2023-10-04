import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Cookies from "universal-cookie";
import UserIntro from "./UserIntro";

const RecommendationContainer = () => {
  const cookies = new Cookies();
  const cookie = cookies.get("jwtToken");
  const [profiles, setProfiles] = useState([]);

  const fetchdata = async () => {
    const res = await fetch("api/user/recommendations", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${cookie}`,
      },
    });

    const response = await res.json();

    setProfiles(response);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <div className="recommendation_container">
        <h1>Recommendations</h1>
        {profiles.map((profile) => {
          return <UserIntro props={profile} key={profile._id} />;
        })}
      </div>
    </>
  );
};

export default RecommendationContainer;
