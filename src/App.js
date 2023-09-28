import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Error from "./Pages/Error";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
