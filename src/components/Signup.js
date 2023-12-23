import React, { useState } from "react";
import "../styles/Signup.css";
import { useNavigate } from "react-router-dom";
import crudfunctions from "../functions/crud";

const Signup = () => {
  //Hooks
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    location: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });
  const [invalidPassword, setinvalidPassword] = useState(true);

  const [errorMessage, setErrorMessage] = useState("");
  const [validationError, setValidationError] = useState(false);

  //Functions

  //   #1
  const handleOnChangeInput = (e) => {
    //we are using functional form here to get the previous state
    setFormValue((prevFormValue) => {
      const updatedFormValue = {
        ...prevFormValue,
        [e.target.name]: e.target.value,
      };
      if (e.target.name === "confirmPassword" || e.target.name === "password") {
        if (updatedFormValue.password === updatedFormValue.confirmPassword) {
          setinvalidPassword(false);
        } else {
          setinvalidPassword(true);
          setErrorMessage("Password and confirm password should match");
        }
      }

      return updatedFormValue;
    });
  };
  const navigate = useNavigate();

  //#2
  const handleActionClick = async (e) => {
    e.preventDefault();

    let requestBody = {
      name: formValue.name,
      email: formValue.email,
      password: formValue.password,
      location: formValue.location,
      gender: formValue.gender,
    };
    let url = "http://localhost:5000/api/auth/createUser";

    const response = await crudfunctions.create(url, requestBody);

    if (response.success) {
      localStorage.setItem("token", response.jwtToken);
      navigate("/");
    } else if (!response.success) {
      console.log(response);
      handleResponseError(response);
    }
  };

  const handleResponseError = (response) => {
    let errorMessages = "";
    if (response.jsonResponse && response.jsonResponse.errors) {
      errorMessages = response.jsonResponse.errors.map((error) => {
        return error.msg;
      });

      setErrorMessage(errorMessages.join(","));
      setValidationError(true);
    } else if (response.errors) {
      errorMessages = response.errors.map((error) => {
        return error.msg;
      });

      setErrorMessage(errorMessages.join(","));
      setValidationError(true);
    }
  };

  //Component JSX
  return (
    <>
      <div className="signupwrapper">
        <div className="signupContainer">
          <div className="signupheader">
            <h3>Create an LowCodeLounge Account</h3>
          </div>
          <div className="signupformWrapper">
            <form className="signupForm" onSubmit={handleActionClick} action="">
              <label htmlFor="">Name</label>
              <input
                className="formInput"
                name="name"
                onChange={handleOnChangeInput}
                type="text"
                value={formValue.name}
              />
              <label htmlFor="">Email</label>
              <input
                type="email"
                className="formInput"
                id="signupemail"
                name="email"
                onChange={handleOnChangeInput}
                placeholder="Email address"
                value={formValue.email}
              />
              <label htmlFor="">Location</label>
              <input
                type="text"
                className="formInput"
                id="location"
                onChange={handleOnChangeInput}
                name="location"
                value={formValue.location}
              />

              <label htmlFor="">Gender</label>
              <select
                onChange={handleOnChangeInput}
                className="dpFormInput"
                id="dropdown"
                name="gender"
                value={formValue.gender}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <label htmlFor="">Password</label>
              <input
                type="password"
                className="formInput"
                id="signupPassword"
                name="password"
                placeholder="Password"
                value={formValue.password}
                onChange={handleOnChangeInput}
              />
              <label htmlFor="">Confirm Password</label>
              <input
                type="text"
                className="formInput"
                id="confirmPassword"
                name="confirmPassword"
                value={formValue.confirmPassword}
                placeholder="Confirm Password"
                onChange={handleOnChangeInput}
              />
              {invalidPassword && (
                <p className="confirmPasswordErrorMsg">{errorMessage}</p>
              )}
              {validationError && (
                <p className="confirmPasswordErrorMsg">{errorMessage}</p>
              )}
              <button
                className={`createAccountBtn ${
                  invalidPassword ? "btnDisabled" : ""
                }`}
                onSubmit={handleActionClick}
              >
                <i class="fa-solid fa-lock" style={{ marginRight: "8px" }}></i>
                Create Account
              </button>
              <p className="signupTerms">
                By selecting Create Account, you agree to our Terms and have
                read and acknowledge our Global Privacy Statement.
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
