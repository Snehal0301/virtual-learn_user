import React from 'react'
import { facebookIcon, googleIcon } from '../../../../utils/svgIcons'
import './LoginAuth.css'

const LoginAuth = () => {
  return (
    <div className="loginAuth">
      <div className="loginAuth-title">Welcome Back!</div>
      <div className="loginAuth-text">
        Easy to learn anytime and anywhere. Login to your account
      </div>
      <div className="loginAuth-buttons">
        <button>{facebookIcon}</button>
        <button>{googleIcon}</button>
      </div>
      <div className="loginAuth-Form">
        <form className="loginAuth-FormContainer">
          {' '}
          <div className="loginAuth-FormInput">
            <input
              type="email"
              name="email"
              className="loginAuth-formInput"
              required
            />
            <label htmlFor="email" className="loginAuth-formLabel">
              Email
            </label>
          </div>
          <div className="loginAuth-FormInput">
            <input
              type="email"
              name="email"
              className="loginAuth-formInput"
              required
            />
            <label htmlFor="email" className="loginAuth-formLabel">
              PassWord
            </label>
          </div>
          <button className="loginAuth-formSubmit">Continue</button>
        </form>
        <div className="loginAuth-noAccount">
          Don’t have a account?{' '}
          <span className="loginAuth-regLink">Register</span>
        </div>
      </div>
    </div>
  )
}

export default LoginAuth
