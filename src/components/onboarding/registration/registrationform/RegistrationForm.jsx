import "../registrationform/RegistrationForm.css";
import React from "react";
import { Formik, useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { facebook, google } from "../../../../utils/svg";
import { mobilenumberSchema } from "./schema/MobileSchema";
import { useDispatch } from "react-redux";
import { registerOtp } from "../../../../redux/reducers/Conditions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { values, errors, handleChange, touched, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        Mobilenumber: "",
      },
      validationSchema: mobilenumberSchema,
      onSubmit: (values, action) => {
        action.resetForm();
        mobileReg(values.Mobilenumber);
      },
    });

  const mobileReg = (mobileNum) => {
    fetch(
      "http://virtuallearnapp2-env.eba-wrr2p8zk.ap-south-1.elasticbeanstalk.com/newUser/continue",
      {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mobileNumber: mobileNum }),
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log("response", res);
        if (res.message === "OTP Valid For 2 Minutes") {
          dispatch(registerOtp(true));
          navigate("/onboarding/registerOtp");
          localStorage.setItem("regMobileNum", mobileNum);
        } else if (res.message === "Please Enter Valid Phone Number") {
          dispatch(registerOtp(false));
          showError(res.message);
        } else {
          dispatch(registerOtp(false));
          showError(res.message);
        }
      });
  };

  const showError = (msg) => {
    toast(
      <div className="loginAuth-showError">
        <div className="loginAuth-showErrorIcon">
          <img
            src={require("../../../../assets/icons/icn_invalid error.png")}
            alt="invalid"
          />
        </div>
        <div className="loginAuth-showErrorMessage">{msg}</div>
      </div>,
      {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        pauseOnHover: true,
        draggable: true,
      }
    );
  };

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

        <form className="login-password-form-reg" onSubmit={handleSubmit}>
          <div className="error-line-registration-reg">
            <input
              className="login-input-reg"
              type="text"
              id="Mobilenumber"
              name="Mobilenumber"
              value={values.Mobilenumber}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder=" "
              autoComplete="off"
              required
            />
            <label className="login-password-label-reg">Mobile Number</label>
            {errors.Mobilenumber && touched.Mobilenumber ? (
              <>
                <div className="error-line"></div>
                <p className="form-errors">{errors.Mobilenumber}</p>
              </>
            ) : null}
          </div>
          <button type="submit" className="reset-passwords">
            Continue
          </button>
        </form>

        <span className="already-text">
          Already have an account?
          <span
            className="login-text"
            onClick={() => {
              navigate("/onboarding/login");
            }}
          >
            {" "}
            Login
          </span>
        </span>
        <div className="face-goog-buttons">
          <button className="facebook-button">{facebook}</button>
          <button className="google-button">{google}</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RegistrationForm;
