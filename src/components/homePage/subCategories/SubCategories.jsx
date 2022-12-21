import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CatSubCategories } from "../../../redux/reducers/CategoriesSubCategories";
import { start_pauseIcon } from "../../../utils/svgIcons";
import { start_timeIcon } from "../../../utils/svgIcons";
import { courseOverview } from "../../../redux/reducers/courseOverview";
import { chapterResponse } from "../../../redux/reducers/chapterResponses";

const SubCategories = () => {
  const categoriesSubCategoriesdata = useSelector(
    (state) => state.CatSubCategories.data
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // console.log(
  //   "categoriesSubCategoriesdata",
  //   categoriesSubCategoriesdata.data[0].categoryName
  // );

  console.log("dfjkbnj", categoriesSubCategoriesdata);
  return (
    <div className="subCategoryCat">
      <div className="homeCategories-head-link">
        <span>
          <Link
            to="/categories"
            style={{ color: "var(--blueFont)", cursor: "pointer" }}
          >
            Categories &nbsp; &nbsp; {">"} &nbsp;
          </Link>
          &nbsp;
        </span>
        <span>
          <Link
            to="/categories/design"
            style={{ color: "var(--blueFont)", cursor: "pointer" }}
            // onClick={componentUnMount}
            // onClick={dispatch(mycoursetabToggleState(2))}
          >
            {(categoriesSubCategoriesdata &&
              categoriesSubCategoriesdata.data &&
              categoriesSubCategoriesdata.data.length > 0 &&
              categoriesSubCategoriesdata.data[0].categoryName) ||
              "Category"}
            &nbsp; &nbsp; {">"} &nbsp;
          </Link>
          &nbsp; Sub Category
        </span>

        {/* {overviewData && overviewData.courseName && overviewData.courseName} */}
      </div>

      {/* <div className="home-categories-section2">
        <div className="home-categories-courses-started">
          Courses to get you started
        </div>
        <div className="home-categories-seeall"></div>
      </div> */}
      {categoriesSubCategoriesdata &&
      categoriesSubCategoriesdata.data &&
      categoriesSubCategoriesdata.data.length > 0 ? (
        <div className="choice-your-course-card">
          <div className="choice-your-course-choice1">
            {categoriesSubCategoriesdata &&
              categoriesSubCategoriesdata.data &&
              categoriesSubCategoriesdata.data.length > 0 &&
              categoriesSubCategoriesdata.data.map((item) => (
                <div
                  className="choice-your-coursesubcategory-image"
                  onClick={() => {
                    dispatch(courseOverview(item.courseId));
                    dispatch(chapterResponse(item.courseId));
                    navigate("/myCourses/ongoingCourse");
                  }}
                >
                  <img src={item.coursePhoto} alt="" />

                  <div className="choiceYourCourse-title-chapter">
                    <div className="choice-your-coursesubcategory-title">
                      {item.courseName}
                    </div>
                    <div className="choice-your-cahpbtn">
                      <div className="choice-your-coursechapter">
                        {item.chapterCount} chapters
                      </div>
                    
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ) : (
        <div>No Courses Available</div>
      )}
    </div>
  );
};

export default SubCategories;
