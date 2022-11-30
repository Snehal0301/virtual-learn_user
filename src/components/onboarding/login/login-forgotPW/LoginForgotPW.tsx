import '../login-auth/LoginAuth.css'
import * as yup from 'yup'
import 'yup-phone'
import { useState } from 'react'

const LoginForgotPW = () => {
  const [invalidPhone, setInvalidPhone] = useState(false)
  const [mobileNum, setMobileNum] = useState('')

  const phoneSchema = yup.string().phone().required()
  const phoneNumValidation = (e: any) => {
    setMobileNum(e.target.value)
    ;(async () => {
      setInvalidPhone(await phoneSchema.isValid(e.target.value)) // → true
    })()
  }

  const submithandler = (e: any) => {
    const mobileNum = e.target.mobileNum.value
    console.log('mobile no', mobileNum)
  }
  return (
    <div className="loginAuth">
      <div className="loginAuth-title">Forgot Password</div>
      <div className="loginAuth-text">
        Please enter your phone number. You will receive a code to create a new
        password.
      </div>

      <div className="loginAuth-Form">
        <form className="loginAuth-FormContainer" onSubmit={submithandler}>
          {' '}
          <div className="loginAuth-FormInput">
            <input
              type="text"
              name="mobileNum"
              id="mobileNum"
              placeholder="Enter your mobile number"
              className={
                mobileNum === ''
                  ? 'loginAuth-formInput'
                  : invalidPhone
                  ? 'loginAuth-formInput loginAuth-formInputSuccess'
                  : 'loginAuth-formInput loginAuth-formInputError'
              }
              onChange={phoneNumValidation}
            />
            {/* loginAuth-formInputSuccess */}
            {/* loginAuth-formInputError */}
            <label htmlFor="mobileNum">Enter your mobile number</label>
          </div>
          <button className="loginAuth-formSubmit">Send</button>
        </form>
      </div>
    </div>
  )
}

export default LoginForgotPW
