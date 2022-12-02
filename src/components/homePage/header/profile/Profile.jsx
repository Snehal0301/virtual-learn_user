import React from 'react'
import './Profile.css'
import { closeProfile, editProfile, privacyIcon, rightArrowPrivacy } from '../../../../utils/svgIcons'
import { useDispatch, useSelector } from 'react-redux'
import { editProfileSection, notificationSection, profileDrawer, profileSection, settingsSection, showChangePasswordSection } from '../../../../redux/reducers/headerProfileOptions'
import ChangePassword from '../changePassword/ChangePassword'
import EditProfile from '../edit-profile/EditProfile'


const Profile = () => {

    const dispatch = useDispatch()
    const handleProfileClose = () => {
        dispatch(profileDrawer(false))
        dispatch(notificationSection(false))
        dispatch(settingsSection(false))
    }

    const showChangePassword = () => {
        dispatch(showChangePasswordSection(true))
    }
    const handleEditSection = () => {
        dispatch(editProfileSection(true))
    }

    const changePasswordState = useSelector((state) => state.headerProfile.showChangePassword)
    const editState = useSelector((state) => state.headerProfile.editSection)


    const renderElement = () => {
        if (changePasswordState) {
            return <ChangePassword />
        }
        if (editState) {
            return <EditProfile />
        }
        else {
            return (
                <div className='drawer-profile'>
                    <div className="drawer-profile-header">
                        <div className="drawer-profile-clear" onClick={handleProfileClose}>
                            {closeProfile}
                        </div>

                        <div className="drawer-profile-name">
                            <p className='drawer-profile-profile'>Profile</p>
                            <div className="drawer-profile-edit" onClick={handleEditSection}>
                                {editProfile}
                            </div>
                        </div>

                        <div className="profile-logo-name">
                            <div className="profile-img-frame">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZea5hmBriu2GpLrDCzJoBnAFqT2hzJTuTBZ_oNRUJ5lztiO3Ujs8NngJ2BWiTqjmvfx8&usqp=CAU" alt="" />
                            </div>
                            <div className="profile-image-name">
                                <p className='name'>Mahendra Singh Dhoni</p>
                                <p className='role'>UX/UI Designer</p>
                            </div>
                        </div>
                    </div>
                    <div className="drawer-profile-body">
                        <div className="progress-details">
                            <div className="progress-1">
                                <p className='progress-digit'>06</p>
                                <p className='progress-content'>Courses</p>
                            </div>
                            <div className="progress-1">
                                <p className='progress-digit'>103</p>
                                <p className='progress-content'>Chapters</p>
                            </div>
                            <div className="progress-1">
                                <p className='progress-digit'>24</p>
                                <p className='progress-content'>Test</p>
                            </div>
                        </div>

                        <div className="personal-details-section">
                            <p className='personal-details-title'>Personal Details</p>
                            <div className="personal-section-1">
                                <div className="personal-detail-section">
                                    <p className='pd-title'>Name</p>
                                    <p className='pd-value'>Mahendra Singh Dhoni</p>
                                </div>
                                <div className="personal-detail-section">
                                    <p className='pd-title'>Username</p>
                                    <p className='pd-value'>Msdian</p>
                                </div>
                                <div className="personal-detail-section">
                                    <p className='pd-title'>Email ID</p>
                                    <p className='pd-value'>msd07@gmail.com</p>
                                </div>
                                <div className="personal-detail-section">
                                    <p className='pd-title'>Mobile Number</p>
                                    <p className='pd-value'>+91 9844635685</p>
                                </div>
                                <div className="personal-detail-section">
                                    <p className='pd-title'>Occupation</p>
                                    <p className='pd-value'>UX/UI Designer</p>
                                </div>
                                <div className="personal-detail-section">
                                    <p className='pd-title'>Date of Birth</p>
                                    <p className='pd-value'>7 July 1981</p>
                                </div>
                                <div className="personal-detail-section  password-chng" onClick={showChangePassword}>
                                    <div className="personal-detail-section-1">
                                        <div className="privacy-icon">{privacyIcon}</div>
                                        <div className="privacy-icon-detail">
                                            <p className='privacy-privacy'>Privacy</p>
                                            <p className='privacy-password-title'>Change Password</p>
                                        </div>
                                    </div>
                                    <div className="personal-detail-section-2">
                                        {rightArrowPrivacy}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
    return (
        <>

            {
                renderElement()
            }

        </>
    )
}

export default Profile