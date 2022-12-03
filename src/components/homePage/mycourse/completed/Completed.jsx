import React from 'react'
import './Completed.css'
const Completed = () => {
  const completedCourses = [
    {
      image: require("../../../../assets/images/internal-marketing.png"),
      title: "Art & Illustration",
      chapters: "15/20 Chapters",
    },
  ];
  return completedCourses.map((ele, i) => {
    return (
      <div className="completed-parent" key={i}>
        <div className="completed-images">
          <img src={ele.image} alt="" className="comp-img" />
          <div className="completed-chap-progress">
            <p className="completed-text">Ongoing</p>
            <div className="completed-chap-descp">
              <p>{ele.title}</p>
              <p>{ele.chapters}</p>
            </div>
          </div>
          <button className="btn-continue-completed">Continue</button>
        </div>
      </div>
    );
  });
}

export default Completed