import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Completed.css';
import Certificate from '../../quiz/certificate/Certificate';
import { useDispatch } from 'react-redux';
import { showCertificate } from '../../../../redux/reducers/Conditions';

const Completed = () => {
  const [completed, setcompleted] = useState([]);
  const [certificate, setCertificate] = useState();
  const [courseName, setCourseName] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        `http://virtuallearnapp2-env.eba-wrr2p8zk.ap-south-1.elasticbeanstalk.com/user/completedCourses`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('Token')}` },
        }
      )
      .then((res) => {
        setcompleted(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  console.log(completed);
  return (
    <>
      <div className="completed-section">
        {completed.map((ele, i) => {
          return (
            <div className="completed-parent" key={i}>
              <div className="completed-images">
                <div className="comp-overlay"></div>
                <img src={ele.coursePhoto} alt="" className="comp-img" />
                <div className="completed-chap-progress">
                  <p className="completed-text">Completed</p>
                  <div className="completed-chap-descp">
                    <p>{ele.courseName}</p>
                    <p>{ele.coursePercentage.toFixed(2)}% Approval Rate</p>
                  </div>
                </div>
                <button
                  className="btn-continue-completed"
                  onClick={() => {
                    dispatch(showCertificate(true));
                    setCourseName(ele.courseName);

                    axios
                      .get(
                        `http://virtuallearnapp2-env.eba-wrr2p8zk.ap-south-1.elasticbeanstalk.com/user/pdf?courseId=${ele.courseId}`,
                        {
                          headers: {
                            Authorization: `Bearer ${localStorage.getItem(
                              'Token'
                            )}`,
                          },
                        }
                      )
                      .then((res) => {
                        res &&
                          res.data &&
                          res.data.certificate &&
                          setCertificate(res.data.certificate);
                      })
                      .catch((err) => {
                        console.error(err);
                      });
                  }}
                >
                  View Certificate
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {courseName && certificate && (
        <Certificate certificate={certificate} name={courseName} />
      )}
    </>
  );
};

export default Completed;

/*

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
*/
