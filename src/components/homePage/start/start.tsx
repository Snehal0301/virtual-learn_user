import './Start.css';
import React, { useState } from 'react';

const Start = () => {

  return (
    <div className="start">
      <div className="start-greeting">Hello!</div>
      <div className="start-username">Mahendra Singh Dhoni</div>
      <div className="start-slideShow">SlideShow</div>
      <div className="start-ongoingCourses">Ongoing Courses</div>
      <div className="start-categories">Categories</div>
      <div className="start-courseChoice">Course choice</div>
      <div className="start-courseChoice">Top courses in business</div>
      <div className="start-courseChoice">Top courses in design</div>
      <button onClick={() => alert("Clicked")}>Click me</button>
    </div >
  );
};

export default Start;
