import '../login-auth/LoginAuth.css'

const LoginForgotPW = () => {
  return (
    <div className="loginAuth">
      <div className="loginAuth-title">Forgot Password</div>
      <div className="loginAuth-text">
        Please enter your phone number. You will receive a code to create a new
        password.
      </div>

      <div className="loginAuth-Form">
        <form className="loginAuth-FormContainer">
          {' '}
          <div className="loginAuth-FormInput">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter your username"
              className="loginAuth-formInput "
            />
            {/* loginAuth-formInputSuccess */}
            {/* loginAuth-formInputError */}
            <label htmlFor="username">Enter your mobile number</label>
          </div>
          <button className="loginAuth-formSubmit">Send</button>
        </form>
      </div>
    </div>
  )
}

export default LoginForgotPW
