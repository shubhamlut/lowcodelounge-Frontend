import React, { useState } from "react";
import "../styles/Loginscreen.css";
import { useNavigate } from "react-router-dom";


const crudfunctions = require("../functions/crud");
const Loginscreen = () => {
  const navigate = useNavigate()
  //Hooks
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);


  //Functions
  const handleActionClick = async () => {
    let requestBody = {
      email: email,
      password: password,
    };
    let url = "http://localhost:5000/api/auth/login";

    const response = await crudfunctions.create(url, requestBody);
    if(response.success){
      setSuccessMsg(true)
      setErrorMsg(false)
      localStorage.setItem("token", response.jwtToken);
      navigate('/')
    }
    else{
      setErrorMsg(true)
      setSuccessMsg(false)
    }
  };

  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
  };
  //Component JSX
  return (
    <>
      <div className="loginwrapper">
        <div className="loginContainer">
          <div className="loginheader">
            <h3>Login</h3>
          </div>
          <div className="loginWrapper">
            <div className="loginContent">
              <input
                type="email"
                className="loginemail"
                id="email"
                name="email"
                placeholder="Email address"
                value={email}
                onChange={handleOnChangeEmail}
              />
              <input
                type="password"
                className="loginpassword"
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handleOnChangePassword}
              />
            </div>
            <div className="loginContentTwo">
              <span>
                <input
                  type="checkbox"
                  id="checkbox"
                  name="checkbox"
                  value="checked"
                />
                <label for="checkbox">Remember me</label>
              </span>
              <a href="https://www.example.com" target="_blank">
                Forgot password?
              </a>
            </div>
            <div className="loginButton">
              <input
                onClick={handleActionClick}
                type="submit"
                className="primary-button"
                value="Login"
              />
            </div>
            {errorMsg && (
              <div className="loginErrorMessage">
                Please enter valid credentials
              </div>
            )}
            {successMsg && <div className="loginSuccessMessage">Success</div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Loginscreen;
