import "./PrivacyPolicy.css";
import React from "react";
import { arrowRight } from "../../../../utils/svgIcons";
import { useDispatch, useSelector } from "react-redux";
import { profileDrawer } from "../../../../redux/reducers/headerProfileOptions";

const PrivacyPolicy = () => {

    const dispatch = useDispatch();
    const handleClick = () => {
      dispatch(profileDrawer(false));
    };

    return (
      <div className="drawer-profile">
        <div className="drawer-profile-header">
          <div className="drawer-profile-clear" onClick={handleClick}>
            {arrowRight}
          </div>
          <div className="settings-settings-text">
            <p>Privacy Policy</p>
          </div>
        </div>
        <div className="privacy-policy-phrases">
          <div className="para-1">
            <p>
              These Terms of Services ("Terms") were last updated on September
              16, 2020.
            </p>
          </div>
          <div className="para-2">
            <p>
              VirtualLearn’s mission is to improve lives through learning. We
              enable anyone anywhere to create and share educational courses
              (instructors) and to enroll in these educational courses to learn
              (students). We consider our marketplace model the best way to
              offer valuable educational content to our users. We need rules to
              keep our platform and services safe for you, us and our student
              and instructor community. These Terms apply to all your activities
              on the VirtualLearn mobile application and our APIs and other
              related services (“Services”).
            </p>
          </div>
          <div className="para-3">
            <p>
              If you publish a course on the VirtualLearn platform, you must
              also agree to the Instructor Terms. We also provide details
              regarding our processing of personal data of our students and
              instructors in our Privacy Policy. If you are using VirtualLearn
              as part of your employer’s VirtualLearn For Business learning and
              development program, you can consult our VirtualLearn for Business
              Privacy Statement.
            </p>
          </div>
        </div>
      </div>
    );
   
    
};

export default PrivacyPolicy;
