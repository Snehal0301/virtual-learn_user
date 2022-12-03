import "./Categories.css";
import React from "react";
import { design } from "../../../../utils/svgIcons";
const Categories = () => {
  const CategoriesHome = [
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
    <div className="categories-homepage">
      <div className="breadcrumbs-categories">
        <ul className="breadcrumb-categories">
          <li>
            <a href="#">Categories</a>
          </li>
        </ul>
      </div>
      <div className="categories-body">
        <p className="categories-body-choose">
          Please choose a topic on which you want to start a course.
        </p>
        <div className="categories-body-display">
          {CategoriesHome.map((ele, i) => {
            return (
              <div
                className="categoriesDisplay-home-parent categories-home-chipBorder"
                key={i}
              >
                <div className="categories-home-Icons">{design}</div>
                <div className="categories-home-Names">{ele}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
