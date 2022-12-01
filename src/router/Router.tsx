import React from 'react';
import HomePage from '../views/dashboard/HomePage';
import Onboarding from '../views/onboarding/onboarding';
import { Routes, Route, Navigate } from 'react-router-dom';
import RequireAuth from './ProtectedRoute';
import LoginAuth from '../components/onboarding/login/login-auth/LoginAuth';
import WelcomeScreen from '../components/onboarding/welcome/welcome';
import RegistrationForm from '../components/onboarding/registration/registrationform/RegistrationForm';
import LoginProtected from './loginProtected';
import LoginForgotPW from '../components/onboarding/login/login-forgotPW/LoginForgotPW';
import LoginVerfication from '../components/onboarding/login/login-verification/login-otp/LoginOtp';
import LoginPassword from '../components/onboarding/login/login-verification/login-password/LoginPassword';
import PasswordChanged from '../views/onboarding/password-changed/PasswordChanged';
import { useSelector } from 'react-redux';
import PersonalDetails from '../components/onboarding/registration/personal-details/PersonalDetails';
import Success_Page from '../views/onboarding/success_page/Success_Page';
const Router = () => {
  const showOtp = useSelector((state: any) => state.loginConditions.value);
  const changePass = useSelector(
    (state: any) => state.loginConditions.passChange
  );
  const changePassSuccess = useSelector(
    (state: any) => state.loginConditions.successPassChange
  );

  const otpReg = useSelector((state: any) => state.loginConditions.otpReg);
  const personalDetails = useSelector(
    (state: any) => state.loginConditions.personalDetails
  );
  const successReg = useSelector(
    (state: any) => state.loginConditions.successReg
  );

  console.log('pd', personalDetails);

  return (
    <>
      <Routes>
        <Route path="/onboarding" element={<Onboarding />}>
          <Route path="" element={<WelcomeScreen />} />
          <Route path="login" element={<LoginAuth />} />
          <Route path="forgotPassword" element={<LoginForgotPW />} />
          <Route
            path="otpVerification"
            element={
              <LoginProtected
                redirectTo="/onboarding/login"
                condition={showOtp}
              >
                <LoginVerfication />
              </LoginProtected>
            }
          />
          <Route
            path="changePassword"
            element={
              <LoginProtected
                redirectTo="/onboarding/login"
                condition={changePass}
              >
                <LoginPassword />
              </LoginProtected>
            }
          />

          <Route path="register" element={<RegistrationForm />} />
          <Route
            path="registerOtp"
            element={
              <LoginProtected
                redirectTo="/onboarding/register"
                condition={otpReg}
              >
                <LoginVerfication />
              </LoginProtected>
            }
          />
          <Route
            path="personalDetails"
            element={
              <LoginProtected
                redirectTo="/onboarding/register"
                condition={personalDetails}
              >
                <PersonalDetails />
              </LoginProtected>
            }
          />
        </Route>

        <Route
          path="passwordChangedSuccessfully"
          element={
            <LoginProtected
              redirectTo="/onboarding/login"
              condition={changePassSuccess}
            >
              <PasswordChanged />
            </LoginProtected>
          }
        />
        <Route
          path="accountCreatedSuccessfully"
          element={
            <LoginProtected redirectTo="/onboarding/login" condition={true}>
              <Success_Page />
            </LoginProtected>
          }
        />
        <Route
          path="/"
          element={
            <RequireAuth redirectTo="/onboarding">
              <HomePage />
            </RequireAuth>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default Router;
