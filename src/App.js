import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import SelfProfile from "./Pages/SelfProfile";
import UserProfile from "./Pages/UserProfile";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/:username" element={<UserProfile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route exact path="/" element={<Home />} />
        <Route path="/*" element={<Error />} />
        <Route path="/profile" element={<SelfProfile />} />
      </Routes>
    </>
  );
};

export default App;
