import React,{useState,useEffect} from "react";
import axios from "axios";
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

    const [ongoingData, setongoingData] = useState([])
    useEffect(() => {
      axios
      .get(
        `http://virtuallearnapp2-env.eba-wrr2p8zk.ap-south-1.elasticbeanstalk.com/user/ongoingCourses`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('Token')}` },
        }
      )
      .then((res) => {
        setongoingData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
    }, [])

    console.log(ongoingData);
  return (
      <div className="ongoing-section">
     { ongoingData.map((ele,i)=>{
        return(
      <div className="ongoing-parent" key={i}>
            <div className="ongoing-images">
              <div className="ong-overlay"></div>
          <img
            src={ele.coursePhoto}
            alt=""
            className="ong-img"
          />
          <div className="chap-progress">
            <p className="Ongoing-text">Ongoing</p>
            <div className="chap-descp">
              <p>{ele.courseName}</p>
              <p>{ele.completedChapter}/{ele.totalChapter} Chapters</p>
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