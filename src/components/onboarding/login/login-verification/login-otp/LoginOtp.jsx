import './LoginOtp.css'
import OTPInput, { ResendOTP } from "otp-input-react";
import React, { useState } from 'react'

const LoginVerfication = () => {
    const [OTP, setOTP] = useState("");
    return (
        <div className='login-verification'>
            <p className='login-verification-heading'>Verify Account</p>
            <p className='login-verification-content'>Please fill in the verification code that has been sent to your mobile number.</p>
            <form className='login-verification-form'>
                <div className="otp">
                    <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={4} otpType="number" disabled={false} inputStyles={
                        {

                            width: '30%',
                            outline: 'none',
                            fontSize: '20px',
                            paddingBottom:'15px',
                            backgroundColor: 'transparent',
                            color: 'white',
                            borderTop: 'none',
                            borderLeft: 'none',
                            borderRight: 'none',
                            borderBottom: '1px solid rgba(255, 255, 255, 0.411)'
                        }

                    } />
                    {/* <ResendOTP onResendClick={() => console.log("Resend clicked")} /> */}
                    <p className='resend-otp'>Didn’t receive a code? <span> Resend</span></p>
                </div>
                <button className='verify-otp-button'>Verify</button>
            </form>


        </div>
    )
}

export default LoginVerfication