import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Ongoing.css";
import { courseOverview } from "../../../../redux/reducers/courseOverview";
import { chapterResponse } from "../../../../redux/reducers/chapterResponses";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { tabToggleState } from "../../../../redux/reducers/myCourseReducer";

const Ongoing = () => {
  const [ongoingData, setongoingData] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(
        `http://virtuallearn-env.eba-6xmym3vf.ap-south-1.elasticbeanstalk.com/user/ongoingCourses`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("Token")}`,
          },
        }
      )
      .then((res) => {
        setongoingData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // console.log(ongoingData);
  return (
    <div className="ongoing-section">
      {
        ongoingData.length ==0?
        (
          <>
          <div className="ongoingEmptyImage"><img src={require("../../../../assets/images/start-courses-image/EmptyImage.png")} alt="" /></div>
          <div className="ogoingNotEnrolled">You have not enrolled to any course</div>
          </>
        ):
        (
          <div className="ongoingSectionMap">
            {ongoingData.map((ele, i) => {
        return (
          <div className="ongoing-parent" key={i}>
            <div className="ongoing-images">
              <div className="ong-overlay"></div>
              <img src={ele.coursePhoto} alt="" className="ong-img" />
              <div className="chap-progress">
                <p className="Ongoing-text">Ongoing</p>
                <div className="chap-descp">
                  <p>{ele.courseName}</p>
                  <p>
                    {ele.completedChapter}/{ele.totalChapter} Chapters
                  </p>
                </div>
              </div>
              <button
                className="btn-continue-ongoing"
                onClick={() => {
                  dispatch(courseOverview(ele.courseId));
                  dispatch(chapterResponse(ele.courseId));
                  dispatch(tabToggleState(2))
                  navigate("/myCourses/ongoingCourse");
                }}
              >
                Continue
              </button>
            </div>
          </div>
        );
      })}
          </div>
        )
      }
      
    </div>
  );
};

export default Ongoing;

/*

 */
