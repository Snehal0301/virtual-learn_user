import "./LoginOtp.css";
import OTPInput, { ResendOTP } from "otp-input-react";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  changePassword,
  registerOtp,
} from "../../../../../redux/reducers/loginConditions";

const LoginVerfication = () => {
  const [OTP, setOTP] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  console.log("location", location.pathname);

  const changePass = useSelector((state) => state.loginConditions.passChange);

  const submitHandler = (e) => {
    e.preventDefault();
    if (location.pathname === "/onboarding/registerOtp") {
      dispatch(registerOtp(true));
      navigate("/onboarding/personalDetails");
    } else {
      dispatch(changePassword(true));
      navigate("/onboarding/changePassword");
    }
  };

  useEffect(() => {
    console.log("change pass", changePass);
  }, [changePass]); //when otp is valid(this comes from redux)

  return (
    <div className="login-verification">
      <p className="login-verification-heading">Verify Account</p>
      <p className="login-verification-content">
        Please fill in the verification code that has been sent to your mobile
        number.
      </p>
      <form className="login-verification-form" onSubmit={submitHandler}>
        <div className="otp">
          <OTPInput
            value={OTP}
            onChange={setOTP}
            autoFocus
            OTPLength={4}
            otpType="number"
            disabled={false}
            inputStyles={{
              width: "30%",
              outline: "none",
              fontSize: "20px",
              paddingBottom: "15px",
              backgroundColor: "transparent",
              color: "white",
              borderTop: "none",
              borderLeft: "none",
              borderRight: "none",
              borderBottom: "1px solid rgba(255, 255, 255, 0.411)",
            }}
          />
          {/* <ResendOTP onResendClick={() => console.log("Resend clicked")} /> */}
          <p className="resend-otp">
            Didn’t receive a code? <span> Resend</span>
          </p>
        </div>
        <button className="verify-otp-button">Verify</button>
      </form>
    </div>
  );
};

export default LoginVerfication;
