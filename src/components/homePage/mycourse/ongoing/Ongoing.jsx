import React from "react";
import "./Ongoing.css";

const Ongoing = () => {
    const ongoingCourses = [
      {
        image: require("../../../../assets/images/Servant-Leadership 1.png"),
        title: "Art & Illustration",
        chapters: "15/20 Chapters",
      },
      {
        image: require("../../../../assets/images/Servant-Leadership 1.png"),
        title: "Art & Illustration",
        chapters: "15/20 Chapters",
      }, {
        image: require("../../../../assets/images/Servant-Leadership 1.png"),
        title: "Art & Illustration",
        chapters: "15/20 Chapters",
      }, {
        image: require("../../../../assets/images/Servant-Leadership 1.png"),
        title: "Art & Illustration",
        chapters: "15/20 Chapters",
      },
      {
        image: require("../../../../assets/images/Servant-Leadership 1.png"),
        title: "Art & Illustration",
        chapters: "15/20 Chapters",
      },
    ];
  return (
      <div className="ongoing-section">
     { ongoingCourses.map((ele,i)=>{
        return(
      <div className="ongoing-parent" key={i}>
            <div className="ongoing-images">
              <div className="ong-overlay"></div>
          <img
            src={ele.image}
            alt=""
            className="ong-img"
          />
          <div className="chap-progress">
            <p className="Ongoing-text">Ongoing</p>
            <div className="chap-descp">
              <p>{ele.title}</p>
              <p>{ele.chapters}</p>
            </div>
          </div>
          <button className="btn-continue-ongoing">Continue</button>
        </div>
      </div>
        )
     })
      }
    </div>
  );
};

export default Ongoing;

/*

 */