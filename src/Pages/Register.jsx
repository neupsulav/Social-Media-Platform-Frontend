import React, { useState } from "react";
import { BsPen } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const [user, setUser] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const handleInputs = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const { name, username, email, password, cpassword } = user;

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        username: username,
        password: password,
        cpassword: cpassword,
      }),
    });

    if (res.status === 400) {
      setErrorMessage("Please fill all the fields properly");
    } else if (res.status === 406) {
      setErrorMessage("Passwords does not match");
    } else if (res.status === 500) {
      setErrorMessage("Something went wrong, Internal server error");
    } else if (res.status === 403) {
      setErrorMessage("User already exists");
    } else {
      navigate("/login", {
        state: {
          msg: "User registration successful. We have sent you a mail. Please verify your email to login",
        },
      });
    }
  };
  return (
    <>
      {/* for displaying error message */}
      <div
        className={
          errorMessage ? "error_message show_error_message" : "error_message"
        }
      >
        <p>{errorMessage}</p>
      </div>

      {/* for registration page */}
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
                    value={user.name}
                    onChange={handleInputs}
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
                    value={user.username}
                    onChange={handleInputs}
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
                    value={user.email}
                    onChange={handleInputs}
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
                    value={user.password}
                    onChange={handleInputs}
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
                    value={user.cpassword}
                    onChange={handleInputs}
                  />
                </div>
              </div>
              <div>
                <button className="login_btn" onClick={postData}>
                  {" "}
                  Register{" "}
                </button>
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
