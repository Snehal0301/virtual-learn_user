import "../registrationform/RegistrationForm.css";
import React from "react";
import { Formik, useFormik } from "formik";
import { facebook, google } from "../../../../utils/svg";
import { mobilenumberSchema } from "./schema/MobileSchema";

const RegistrationForm = () => {
  const { values, errors, handleChange, touched, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        mobilenumber: "",
      },
      validationSchema: mobilenumberSchema,
      onSubmit: (values, action) => {
           console.log(values);
        action.resetForm();
    
      },
    });

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

        <form className="login-password-form" onSubmit={handleSubmit}>
          <div className="error-line-registration">
          <input
            className="login-input"
            type="text"
            id="mobilenumber"
            name="mobilenumber"
            value={values.mobilenumber}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder=" "
            autoComplete="off"
            required
          />
          <label className="login-password-label">Mobile Number</label>
          {errors.mobilenumber && touched.mobilenumber ? (
            <>
              <div className="error-line"></div>
              <p className="form-errors">{errors.mobilenumber}</p>
            </>
          ) : null}
          </div>
          <button type="submit" className="reset-password">
            Continue
          </button>
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