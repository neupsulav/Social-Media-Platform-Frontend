import React from "react";
// import { Link } from "react-router-dom";
import { BsPen } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

const Register = () => {
  return (
    <>
      <div className="login_page">
        <div className="login_Container">
          <div className="login_form">
            <div className="login_image">
              <img
                src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7965.jpg"
                alt="registration"
              />
            </div>
            <div className="form">
              <div className="heading">
                <h1>Register</h1>
              </div>
              <div className="form_inputs">
                <div className="data_input">
                  <BsPen className="login_icons" />

                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    autoComplete="off"
                    required
                  />
                </div>

                <div className="data_input">
                  <BsPen className="login_icons" />
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Enter your username"
                    required
                  />
                </div>

                <div className="data_input">
                  <AiOutlineMail className="login_icons" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
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

                <div className="data_input">
                  <RiLockPasswordLine className="login_icons" />
                  <input
                    type="password"
                    id="cpassword"
                    name="cpassword"
                    placeholder="Enter password again"
                    required
                  />
                </div>
              </div>
              <div>
                <button className="login_btn"> Register </button>
              </div>
              {/* <div className="register_message">
                <p>
                  Haven't registered yet?{" "}
                  <Link to="/register" className="register_btn_link">
                    <button> Register</button>
                  </Link>
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
