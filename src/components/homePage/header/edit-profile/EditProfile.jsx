import React, { useEffect, useState } from "react";
import "./EditProfile.css";
import "../profile/Profile";
import {
  editProfileSection,
  profileDrawer,
  showChangePasswordSection,
} from "../../../../redux/reducers/headerProfileOptions";
import { useDispatch, useSelector } from "react-redux";
import { arrowRight } from "../../../../utils/svgIcons";
import { editProfile } from "./../../../../utils/svgIcons";
import { type } from "./../../../../redux/store/store";
import { useFormik } from "formik";
import { editSchema } from "./edit-schema";
import axios from "axios";

const EditProfile = () => {
  const [editProfileData, setEditProfileData] = useState("");
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(editProfileSection(false));
  };
  const EditProfileData = [
    {
      id: 1,
      title:
        "You scored 80% in Chapter 3 - Setting up a new project, of Course - Learn Figma - UI/UX Design Essential Training.",
      image: require("../../../../assets/images/dhoni.png"),
      time: "5 mins ago",
    },
  ];
  const { errors, values, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        editPfullname: editProfileData.fullName,
        editPUsername: editProfileData && editProfileData.userName,
        editPEmail: editProfileData && editProfileData.email,
        MobileNo: editProfileData && editProfileData.mobileNumber,
        gender: editProfileData && editProfileData.gender,
        editPDOB: "",
        editPOccupation: editProfileData && editProfileData.occupation,
        TwitterURL: "Meow",
        FacebookURL: "",
      },
      validationSchema: editSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });
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
        setEditProfileData(res.data);
      });
  }, []);
  console.log("EditData", editProfileData);
  return (
    <div className="drawer-profile">
      <div className="drawer-profile-header">
        <div className="drawer-profile-clear" onClick={handleClick}>
          {arrowRight}
        </div>
        <div className="editprofiletext">Edit Profile</div>
        <div className="editProfileImage">
          <img src={editProfileData && editProfileData.profilePhoto} alt="" />
        </div>
      </div>
      <div className="EditForm">
        <form action="" className="editProfileForm" onSubmit={handleSubmit}>
          <div className="edit-error-input">
            <input
              type="text"
              id="editPfullname"
              name="editPfullname"
              placeholder=" "
              className="editPInput"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.editPfullname}
              autoComplete="off"
            />
            <label htmlFor="" className="editprofilelabel">
              Full Name
            </label>

            {errors.editPfullname && touched.editPfullname ? (
              <>
                <div className="edit-error-line"></div>
                <p className="edit-form-error">{errors.editPfullname}</p>
              </>
            ) : null}
          </div>

          <div className="edit-error-input">
            <input
              type="text"
              id="editPUsername"
              name="editPUsername"
              placeholder=" "
              className="editPInput"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.editPUsername}
              autoComplete="off"
            />
            <label htmlFor="" className="editprofilelabel">
              Username
            </label>
            {errors.editPUsername && touched.editPUsername ? (
              <>
                <div className="edit-error-line"></div>
                <p className="edit-form-error">{errors.editPUsername}</p>
              </>
            ) : null}
          </div>

          <div className="edit-error-input">
            <input
              type="email"
              id="editPEmail"
              name="editPEmail"
              placeholder=" "
              className="editPInput"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.editPEmail}
              autoComplete="off"
            />
            <label htmlFor="" className="editprofilelabel">
              Email Id
            </label>
            {errors.editPEmail && touched.editPEmail ? (
              <>
                <div className="edit-error-line"></div>
                <p className="edit-form-error">{errors.editPEmail}</p>
              </>
            ) : null}
          </div>

          <div className="edit-error-input">
            <input
              type="text"
              id="editPmobile"
              name="MobileNo"
              placeholder=" "
              className="editPInput"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.MobileNo}
              autoComplete="off"
            />
            <label htmlFor="" className="editprofilelabel">
              Mobile Number
            </label>
            {errors.MobileNo && touched.MobileNo ? (
              <>
                <div className="edit-error-line"></div>
                <p className="edit-form-error">{errors.MobileNo}</p>
              </>
            ) : null}
          </div>

          <div className="edit-error-input">
            <input
              type="text"
              id="editPOccupation"
              name="editPOccupation"
              placeholder=" "
              className="editPInput"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.editPOccupation}
              autoComplete="off"
            />
            <label htmlFor="" className="editprofilelabel">
              Occupation
            </label>
            {errors.editPOccupation && touched.editPOccupation ? (
              <>
                <div className="edit-error-line"></div>
                <p className="edit-form-error">{errors.editPOccupation}</p>
              </>
            ) : null}
          </div>

          <div className="genderSection">
            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
              id="gender"
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="none" selected>
                Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">other</option>
            </select>
          </div>
          <input
            type="date"
            id="editPDOB"
            name="editPDOB"
            placeholder=" "
            className="editPInput"
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
          />
          <label htmlFor="" className="editprofilelabel">
            Date Of Birth
          </label>

          <div className="edit-error-input">
            <input
              type="url"
              id="editPTwitter"
              name="TwitterURL"
              placeholder=" "
              className="editPInput"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.TwitterURL}
              autoComplete="off"
            />
            <label htmlFor="" className="editprofilelabel">
              Twitter Link
            </label>
            {errors.TwitterURL && touched.TwitterURL ? (
              <>
                <div className="edit-error-line"></div>
                <p className="edit-form-error">{errors.TwitterURL}</p>
              </>
            ) : null}
          </div>

          <div className="edit-error-input">
            <input
              type="url"
              id="editPFacebook"
              name="FacebookURL"
              placeholder=" "
              className="editPInput"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.FacebookURL}
              autoComplete="off"
            />
            <label htmlFor="" className="editprofilelabel">
              Facebook Link
            </label>
            {errors.FacebookURL && touched.FacebookURL ? (
              <>
                <div className="edit-error-line"></div>
                <p className="edit-form-error">{errors.FacebookURL}</p>
              </>
            ) : null}
          </div>
          <button type="submit" className="editPbtn">
            save
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
