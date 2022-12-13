import React, { useEffect, useState } from "react";
import "./Profile.css";
import {
  closeProfile,
  editProfile,
  privacyIcon,
  rightArrowPrivacy,
} from "../../../../utils/svgIcons";
import { useDispatch, useSelector } from "react-redux";
import {
  editProfileSection,
  notificationSection,
  privacySection,
  profileDrawer,
  profileSection,
  settingsSection,
  showChangePasswordSection,
  termsSection,
} from "../../../../redux/reducers/headerProfileOptions";
import ChangePassword from "../changePassword/ChangePassword";
import EditProfile from "../edit-profile/EditProfile";
import profileData from "../../../../api-results/ProfileResults.json";
import axios from "axios";

const Profile = () => {
  const dispatch = useDispatch();
  const handleProfileClose = () => {
    dispatch(profileDrawer(false));
    dispatch(notificationSection(false));
    dispatch(settingsSection(false));
    dispatch(termsSection(false));
    dispatch(privacySection(false));
  };

  const [profileData, setProfileData] = useState("");
  const showChangePassword = () => {
    dispatch(showChangePasswordSection(true));
  };
  const handleEditSection = () => {
    dispatch(editProfileSection(true));
  };

  const changePasswordState = useSelector(
    (state) => state.headerProfile.showChangePassword
  );
  const editState = useSelector((state) => state.headerProfile.editSection);

  useEffect(() => {
    axios
      .get(
        `http://virtuallearnapp2-env.eba-wrr2p8zk.ap-south-1.elasticbeanstalk.com/user/myProfile`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        }
      )
      .then((res) => {
        setProfileData(res.data);
      });
  }, []);

  const renderElement = () => {
    if (changePasswordState) {
      return <ChangePassword />;
    }
    if (editState) {
      return <EditProfile />;
    } else {
      return (
        <div className="drawer-profile">
          <div className="drawer-profile-header">
            <div className="drawer-profile-clear" onClick={handleProfileClose}>
              {closeProfile}
            </div>

            <div className="drawer-profile-name">
              <p className="drawer-profile-profile">Profile</p>
              <div className="drawer-profile-edit" onClick={handleEditSection}>
                {editProfile}
              </div>
            </div>

            <div className="profile-logo-name">
              <div className="profile-img-frame">
                <img src={profileData.profilePhoto} />
              </div>
              <div className="profile-image-name">
                <p className="name">{profileData.fullName}</p>
                <p className="role">{profileData.occupation}</p>
              </div>
            </div>
          </div>
          <div className="drawer-profile-body">
            <div className="progress-details">
              <div className="progress-1">
                <p className="progress-digit">{profileData.courseCompleted}</p>
                <p className="progress-content">Courses</p>
              </div>
              <div className="progress-1">
                <p className="progress-digit">
                  {profileData.chaptersCompleted}
                </p>
                <p className="progress-content">Chapters</p>
              </div>
              <div className="progress-1">
                <p className="progress-digit">{profileData.testsCompleted}</p>
                <p className="progress-content">Test</p>
              </div>
            </div>

            <div className="personal-details-section">
              <p className="personal-details-title">Personal Details</p>
              <div className="personal-section-1">
                <div className="personal-detail-section">
                  <p className="pd-title">Name</p>
                  <p className="pd-value">{profileData.fullName}</p>
                </div>
                <div className="personal-detail-section">
                  <p className="pd-title">Username</p>
                  <p className="pd-value">{profileData.userName}</p>
                </div>
                <div className="personal-detail-section">
                  <p className="pd-title">Email ID</p>
                  <p className="pd-value">{profileData.email}</p>
                </div>
                <div className="personal-detail-section">
                  <p className="pd-title">Mobile Number</p>
                  <p className="pd-value">{profileData.mobileNumber}</p>
                </div>
                <div className="personal-detail-section">
                  <p className="pd-title">Occupation</p>
                  <p className="pd-value">{profileData.occupation}</p>
                </div>
                {profileData.dob && (
                  <div className="personal-detail-section">
                    <p className="pd-title">Date of Birth</p>
                    <p className="pd-value">7 July 1981</p>
                  </div>
                )}
                <div
                  className="personal-detail-section  password-chng"
                  onClick={showChangePassword}
                >
                  <div className="personal-detail-section-1">
                    <div className="privacy-icon">{privacyIcon}</div>
                    <div className="privacy-icon-detail">
                      <p className="privacy-privacy">Privacy</p>
                      <p className="privacy-password-title">Change Password</p>
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
      );
    }
  };
  return <>{renderElement()}</>;
};

export default Profile;
