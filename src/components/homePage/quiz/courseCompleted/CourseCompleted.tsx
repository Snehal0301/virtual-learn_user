import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showCertificate } from '../../../../redux/reducers/Conditions';
import '../../../../views/onboarding/success_page/Success_Page.css';
import Certificate from '../certificate/Certificate';
const CourseCompleted = () => {
  const dispatch = useDispatch();

  return (
    <div className="succesContainer">
      <div className="successContent" style={{ padding: '80px 0' }}>
        <div className="successImage" style={{ marginBottom: '60px' }}>
          <img
            src={require('../../../../assets/images/img_course complete_illustratipon 1.png')}
            alt="module test success"
          />
        </div>
        <div className="successText">Congratulations!</div>
        <div className="successDesc">
          You have completed the course:
          <span style={{ color: 'var(--black)' }}>
            {' '}
            Learn Figma - UI/UX Design Essential
          </span>{' '}
          Training with
        </div>
        <div
          style={{
            color: 'var(--correctGreen)',
            marginTop: '20px',
            fontFamily: 'Biko',
            fontSize: '64px',
          }}
        >
          90%
        </div>
        <div className="successDesc">Approval Rate</div>
        <div
          className="getStarted"
          style={{ cursor: 'pointer', fontSize: '24px' }}
          onClick={() => {
            dispatch(showCertificate(true));
          }}
        >
          View certificate
        </div>
      </div>
      <Certificate />
    </div>
  );
};

export default CourseCompleted;
