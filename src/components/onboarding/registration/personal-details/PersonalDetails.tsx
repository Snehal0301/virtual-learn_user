import React, { useState } from 'react';
import { info_btn } from '../../../../utils/svgIcons';
import './PersonalDetails.css';
import { signupSchema } from './schema';
import { Formik, useFormik } from 'formik';
import ReactTooltip from 'react-tooltip';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
    registerPersonalDetails,
    registerSuccess,
} from '../../../../redux/reducers/loginConditions';

const PersonalDetails = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [personaldata, setpersonaldata] = useState({})

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
            // console.log(values)
            setpersonaldata(values)
            action.resetForm()
            dispatch(registerSuccess(true));
            navigate('/accountCreatedSuccessfully');
        }

    })

    return (
        <div className='personaldetails-outerRectangle'>
            <div className='personaldetails-innerRect'>

                <div className='personalDetails-heading'>Personal Details</div>
                <div className='personalDetails-heading2'>
                    Please fill out the fields below so we can learn some information about you.
                </div>


            </div>
            <div className='inputFields'>
                <form onSubmit={handleSubmit} className='personalDetailsform'>
                    <div className="personal-input">
                        <input type="text" className='PeronsalDetailsInput'
                            id="mobileNumber"
                            name="mobileNumber"
                            placeholder=" "
                            value={values.mobileNumber}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            autoComplete="off"
                        // maxLength={10}
                        />
                        <label htmlFor="mobileNumber" className='PersonalDetailslabel'>Mobile Number</label>
                        {errors.mobileNumber && touched.mobileNumber ?
                            (<>
                                <div className="personal-error-line"></div>
                                <p className='personaldetail-form-error'>{errors.mobileNumber}</p>
                            </>
                            )
                            : null}
                    </div>
                    <div className="personal-input">
                        <input type="text" className='PeronsalDetailsInput'
                            id="fullName"
                            name="fullName"
                            placeholder=" "
                            value={values.fullName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            autoComplete="off"
                        />
                        <label htmlFor="fullName" className='PersonalDetailslabel'>Full Name</label>
                        {errors.fullName && touched.fullName ?
                            (<>
                                <div className="personal-error-line"></div>
                                <p className='personaldetail-form-error'>{errors.fullName}</p>
                            </>
                            )
                            : null}

                    </div>

                    <div className="personal-input">

                        <input type="text" className='PeronsalDetailsInput'
                            id="UserName"
                            name="UserName"
                            placeholder=" "
                            value={values.UserName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            autoComplete="off"
                        />
                        <label htmlFor="UserName" className='PersonalDetailslabel'>User Name</label>
                        {errors.UserName && touched.UserName ? (<>
                            <div className="personal-error-line"></div>
                            <p className='personaldetail-form-error'>{errors.UserName}</p>
                        </>
                        )
                            : null}
                    </div>

                    <div className="personal-input">

                        <input
                            type="email" className='PeronsalDetailsInput'
                            id="email"
                            name="email"
                            placeholder=" "
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            autoComplete="off"
                        />
                        <label htmlFor="email" className='PersonalDetailslabel'>Email Id</label>
                        {errors.email && touched.email ?
                            (<>
                                <div className="personal-error-line"></div>
                                <p className='personaldetail-form-error'>{errors.email}</p>
                            </>
                            )
                            : null}

                    </div>

                    <div className="personal-input">

                        <input
                            type="password" className='PeronsalDetailsInput'
                            id="password"
                            name="password"
                            placeholder=" "
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            autoComplete="off"
                        />


                        <label htmlFor="password" className='PersonalDetailslabel'  >Password
                            <div data-tip="React-tooltip" data-for='sadFace' className='personalDetailstooltip'>{info_btn}</div>
                            <ReactTooltip id='sadFace' type='light' effect='solid' place="right">
                                <span className='personalSpan'><p>Our minimum Requirment</p>
                                    At least 6 characters long with one number,
                                    one uppercase letter,
                                    and one lowercase letter.</span>
                            </ReactTooltip>
                        </label>


                        {errors.password && touched.password ? (<>
                            <div className="personal-error-line"></div>
                            <p className='personaldetail-form-error'>{errors.password}</p>
                        </>
                        )
                            : null}
                    </div>
                    <div className="personal-input">

                        <input type="password" className='PeronsalDetailsInput'
                            id="ConfirmPassword"
                            name="ConfirmPassword"
                            placeholder=" "
                            value={values.ConfirmPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            autoComplete="off"
                        />
                        <label htmlFor="ConfirmPassword" className='PersonalDetailslabel'>Confirm Password</label>
                        {errors.ConfirmPassword && touched.ConfirmPassword ?
                            (<>
                                <div className="personal-error-line"></div>
                                <p className='personaldetail-form-error'>{errors.ConfirmPassword}</p>
                            </>
                            )
                            : null}

                    </div>


                    <button type="submit" className='personalDetailsbtn'>Verify</button>

                </form>



            </div>
        </div>
    )
};

export default PersonalDetails;
