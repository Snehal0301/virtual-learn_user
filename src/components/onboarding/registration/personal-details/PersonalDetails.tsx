import React from 'react'
import { info_btn } from '../../../../utils/svgIcons'
import './PersonalDetails.css'

const PersonalDetails = () => {
    return (
        <div className='outerRectangle'>
            <div className='innerRect'>

                <div className='heading'>Personal Details</div>
                <div className='heading2'>
                    Please fill out the fields below so we can learn some information about you.
                </div>


            </div>
            <div className='inputFields'>
                <form action="">
                    <input type="text" id="mobileNumber" name="mobileNumber" placeholder=" " />
                    <label htmlFor="mobileNumber">Mobile Number</label>
                    <input type="text" id="fullName" name="fullName" placeholder=" " />
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" id="UserName" name="UserName" placeholder=" " />
                    <label htmlFor="UserName">User Name</label>
                    <input type="email" id="email" name="email" placeholder=" " />
                    <label htmlFor="email">Email Id</label>
                    <input type="password" id="password" name="password" placeholder=" " />


                    <label htmlFor="password" >Password {info_btn}</label>
                    

                    <input type="ConfirmPassword" id="ConfirmPassword" name="ConfirmPassword" placeholder=" " />
                    <label htmlFor="ConfirmPassword">Confirm Password</label>


                    <button type="button">Verify</button>




                </form>
            </div>


        </div>
    )
}

export default PersonalDetails