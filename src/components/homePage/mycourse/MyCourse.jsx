import React from "react";
import "./MyCourse.css";
import { emptyPageImg, design } from "../../../utils/svgIcons";
import Ongoing from "./ongoing/Ongoing";
import { NavLink, Route, Routes } from "react-router-dom";
import Completed from "./completed/Completed";

const MyCourse = () => {
  const Categories = [
    "Design",
    "Development",
    "Business",
    "Finance",
    "Health & Fitness",
    "Music",
    "IT & Software",
    "Marketing",
    "Lifestyle",
    "Photography",
  ];
  return (
    <div className="mycourse">
      <div className="breadcrumbs">
        <ul className="breadcrumb">
          <li>
            <a href="#">My Course</a>
          </li>
        </ul>
      </div>

      <div className="mycourse-body">
        <div className="mycourse-emptyImg-section">
          <div className="mycourse-imgSection">{emptyPageImg}</div>
          <div className="mycourse-imgText">
            <p>What will you learn first?</p>
          </div>
          <div className="mycourse-Desc">
            <p>Your courses will go here</p>
          </div>
        </div>
        <div className="mycourse-categoriesSection">
          <div className="categories-heading">
            <p>Categories</p>
          </div>
          <div className="categories-eachCategories">
            {Categories.map((ele, i) => {
              return (
                <div
                  className="categoriesDisplay-parent categories-chipBorder"
                  key={i}
                >
                  <div className="categoriesDisplay-Icons">{design}</div>
                  <div className="categoriesDisplay-Names">{ele}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* <Routes>
        <Route path="/ongoing" element={<Ongoing/>}></Route>
        <Route path="/completed" element={<Completed/>}></Route>
      </Routes> */}
      {/* <div className="nav-links">
        <NavLink to="/ongoing" className="ongoing-tab">
          <p>Ongoing</p>
        </NavLink>
        <NavLink to="/completed">
          <p>Completed</p>
        </NavLink>
      </div> */}
      {/* <Ongoing /> */}
      <Completed />
    </div>
  );
};

export default MyCourse;
