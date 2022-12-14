import React from 'react';
import { design } from '../../../utils/svgIcons';

const EmptyCourse = () => {
  const Categories = [
    'Design',
    'Development',
    'Business',
    'Finance',
    'Health & Fitness',
    'Music',
    'IT & Software',
    'Marketing',
    'Lifestyle',
    'Photography',
  ];
  return (
    <div className="mycourse-body">
      <div className="mycourse-emptyImg-section">
        <div className="mycourse-imgSection">
          <img
            src={require('../../../assets/images/start-courses-image/img_my-course_empty.png')}
            alt=""
          />
        </div>
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
  );
};

export default EmptyCourse;
