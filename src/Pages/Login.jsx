import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Login = () => {
  const location = useLocation();
  //   const [successMessage, setSuccessMessage] = useState(false);

  //   if (location.state) {
  //     setSuccessMessage(true);
  //   }

  return (
    <>
      {location.state ? (
        <div
          className={
            location.state.msg
              ? "success_message show_success_msg"
              : "success_message"
          }
        >
          <p>{location.state.msg}</p>
          {/* {location.state.msg && <p>{location.state.msg}</p>} */}
        </div>
      ) : (
        <div></div>
      )}
      <div className="login_page">
        <div className="login_Container">
          <div className="login_form">
            <div className="login_image">
              <img src="https://www.go.ooo/img/bg-img/Login.jpg" alt="login" />
            </div>
            <div className="form">
              <div className="heading">
                <h1>Login</h1>
              </div>
              <div className="form_inputs">
                <div className="data_input">
                  <AiOutlineMail className="login_icons" />

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    autoComplete="off"
                    required
                  />
                </div>

                <div className="data_input">
                  <RiLockPasswordLine className="login_icons" />
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </div>
              <div>
                <button className="login_btn"> Login </button>
              </div>
              <div className="register_message">
                <p>
                  Haven't registered yet?
                  <Link to="/register" className="register_btn_link">
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
