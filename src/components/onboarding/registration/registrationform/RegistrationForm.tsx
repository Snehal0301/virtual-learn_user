import "../registrationform/RegistrationForm.css";
import React from "react";
import { facebook, google } from "../../../../utils/svg";
const RegistrationForm = () => {
  return (
    <div className="registration-form">
      <div className="registration-form-container">
        <div className="new-account">
          <span className="new-account-text">New Account</span>
          <span className="create-account-text">
            Create a new account to get access to all courses by entering your
            mobile number.
          </span>
        </div>
        <form className="registration-form-content">
          <div className="input-field label-text">
            <input
              type="text"
              id="mobilenumber"
              name="mobilenumber"
              placeholder=" "
              maxLength={10}
              autoComplete="off"
            />
            <label>Mobile Number</label>
          </div>
          <div className="button-continue">
            <button type="submit">Continue</button>
          </div>
        </form>
        <span className="already-text">
          Already have an account?<span className="login-text"> Login</span>
        </span>
        <div className="face-goog-buttons">
          <button className="facebook-button">{facebook}</button>
          <button className="google-button">{google}</button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
