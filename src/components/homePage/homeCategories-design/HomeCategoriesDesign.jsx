import React, { useState, useEffect } from 'react';
import { start_pauseIcon } from '../../../utils/svgIcons';
import { start_timeIcon } from '../../../utils/svgIcons';

import axios from 'axios';
import './HomeCategoriesDesign.css';
import { useDispatch, useSelector } from 'react-redux';
import { basicCourse } from './../../../redux/reducers/basicCourses';
import { subCategories } from './../../../redux/reducers/subCategories';
import { homeCategory_sideArrow } from '../../../utils/svgIcons';
import { courseOverview } from '../../../redux/reducers/courseOverview';
import { chapterResponse } from '../../../redux/reducers/chapterResponses';
import { useNavigate } from 'react-router-dom';

const HomeCategoriesDesign = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const allcourseItem = useSelector((state) => state.allcourse.value);
  // console.log(allcourseItem);

  const basicCoursedata = useSelector((state) => state.basicCourse.data);
  const advancedCoursedata = useSelector((state) => state.advancedCourse.data);
  const subCategoriesdata = useSelector((state) => state.subCategories.data);

  const categoryName = useSelector((state) => state.basicCourse.category);

  return (
    <div className="homecategoriesdesign">
      <div className="homeCategories-head-link">
        {/* <div className='homeCategoriesHead'> Categories </div> */}
        <a href="#"> {categoryName}</a>
      </div>
      <div className="home-categories-section2">
        <div className="home-categories-courses-started">
          Courses to get you started
        </div>
        <div className="home-categories-seeall"></div>
      </div>
      <div className="home-categories-card">
        <div className="home-categories-choice1" >
          {basicCoursedata &&
            basicCoursedata.data &&
            basicCoursedata.data.slice(0, 4).map((item) => (
              <div
                className="home-categories-subcategory-image"
                onClick={() => {
                  dispatch(courseOverview(item.courseId));
                  dispatch(chapterResponse(item.courseId));
                  navigate('/myCourses/ongoingCourse');
                }}
              >
                <div className="home-categories-image-pause">
                  <div className="home-categories-overlay"></div>
                  <img src={item.coursePhoto} alt="" />
                  <div className="home-categories-pauseIcon">
                    {start_pauseIcon}
                  </div>
                </div>
                <div className="home-categories-subcategory-title">
                  {item.courseName}
                </div>
                <div className="home-categories-time">
                  <div className="home-categories-chapter2">
                    {item.chapterCount} Chapters
                  </div>
                  <div>{start_timeIcon}</div>
                  {item.courseDuration}
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="home-categories-section2">
        <div className="home-categories-courses-started">Featured Courses</div>
        <div className="home-categories-seeall"></div>
      </div>
      <div className="home-categories-card">
        <div className="home-categories-choice1">
          {advancedCoursedata &&
            advancedCoursedata.data &&
            advancedCoursedata.data.slice(0, 4).map((item) => (
              <div
                className="home-categories-subcategory-image"
                onClick={() => {
                  dispatch(courseOverview(item.courseId));
                  dispatch(chapterResponse(item.courseId));
                  navigate('/myCourses/ongoingCourse');
                }}
              >
                <div className="home-categories-image-pause">
                  <div className="home-categories-overlay"></div>
                  <img src={item.coursePhoto} alt="" />
                  <div className="home-categories-pauseIcon">
                    {start_pauseIcon}
                  </div>
                </div>
                <div className="home-categories-subcategory-title">
                  {item.courseName}
                </div>
                <div className="home-categories-time">
                  <div className="home-categories-chapter2">
                    {item.chapterCount} Chapters
                  </div>
                  <div>{start_timeIcon}</div>
                  {item.courseDuration}
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="home-categories-section2">
        <div className="home-categories-courses-started">Subcategories</div>
        <div className="home-categories-seeall"></div>
      </div>
      <div className="home-categories">
        <div className="home-categories-Body">
          {subCategoriesdata &&
            subCategoriesdata.data &&
            subCategoriesdata.data.map((ele, i) => {
              return (
                <div className="home-categories-Parent" key={i}>
                  {/* <div className="start-course-categories-Icon">
          {design}
        </div> */}
                  <div className="home-categories-Name">
                    {ele.subCategoryName}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="home-categories-section2">
        <div className="home-categories-courses-started">All Courses</div>
        <div className="home-categories-seeall"></div>
      </div>
      <div className="home-categories-card-allcourse">
        <div className="home-categories-choice1-allcourse">
          {allcourseItem.map((item) => (
            <div
              className="home-categories-subcategory-allcourse-image"
              onClick={() => {
                dispatch(courseOverview(item.courseId));
                dispatch(chapterResponse(item.courseId));
                navigate('/myCourses/ongoingCourse');
              }}
            >
              <div className="home-categories-image-allcourse-pause">
                <img src={item.coursePhoto} alt="" />
                <div className="home-categories-overlay-allcourse"></div>
              </div>
              <div className="home-categories-allcourse-ttlchapbtn">
                <div className="home-categories-subcategory-allcourse-title">
                  {item.courseName}
                </div>
                <div className="home-categories-allcourse-titleBtn">
                  <div className="home-categories-allcourse-chapter">
                    {item.chapterCount} Chapters
                  </div>
                  <button className="home-categories-allcourse-designbtn">
                    {item.categoryName}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeCategoriesDesign;
