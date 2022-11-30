import React, { useState } from 'react'
import { info_btn } from '../../../../utils/svgIcons'
import './PersonalDetails.css'
import { signupSchema } from './schema'
import { Formik, useFormik } from 'formik'

const PersonalDetails = () => {


    const [formError, setformError] = useState(false)
    const { values, errors, handleChange, touched, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            email: "",
            UserName: "",
            password: "",
            ConfirmPassword: "",
            fullName: "",
            mobileNumber: ""

        },
        validationSchema: signupSchema,
        onSubmit: (values: any, action: any) => {
            console.log(values)
            action.resetForm()
        }
    })
    return (
        <div className='outerRectangle'>
            <div className='innerRect'>

                <div className='heading'>Personal Details</div>
                <div className='heading2'>
                    Please fill out the fields below so we can learn some information about you.
                </div>


            </div>
            <div className='inputFields'>
                <form onSubmit={handleSubmit}>
                    <input type="text"
                        id="mobileNumber"
                        name="mobileNumber"
                        placeholder=" "
                        value={values.mobileNumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <label htmlFor="mobileNumber">Mobile Number</label>
                    {errors.mobileNumber && touched.mobileNumber ?(<p className='form-error'>{errors.mobileNumber}</p> ):null}
                    <input type="text"
                        id="fullName"
                        name="fullName"
                        placeholder=" "
                        value={values.fullName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <label htmlFor="fullName">Full Name</label>
                    {errors.fullName && touched.fullName ?(<p className='form-error'>{errors.fullName}</p> ):null}

                    <input type="text"
                        id="UserName"
                        name="UserName"
                        placeholder=" "
                        value={values.UserName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <label htmlFor="UserName">User Name</label>
                    {errors.UserName && touched.UserName ?(<p className='form-error'>{errors.UserName}</p> ):null}

                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder=" "
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <label htmlFor="email">Email Id</label>
                    {errors.email && touched.email ?(<p className='form-error'>{errors.email}</p> ):null}
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder=" "
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />

                    <label htmlFor="password" >Password {info_btn}</label>
                    {errors.password && touched.password ?(<p className='form-error'>{errors.password}</p> ):null}


                    <input type="password"
                        id="ConfirmPassword"
                        name="ConfirmPassword"
                        placeholder=" "
                        value={values.ConfirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <label htmlFor="ConfirmPassword">Confirm Password</label>
                    {errors.ConfirmPassword && touched.ConfirmPassword ?(<p className='form-error'>{errors.ConfirmPassword}</p> ):null}
                

                <button type="button">Verify</button>

                </form>



            </div>


        </div>
    )
}

export default PersonalDetails