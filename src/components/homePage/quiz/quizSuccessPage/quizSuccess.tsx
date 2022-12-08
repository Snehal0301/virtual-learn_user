import React from 'react';
import '../../../../views/onboarding/success_page/Success_Page.css';

const QuizSuccess = () => {
  return (
    <div className="succesContainer">
      <div className="successContent">
        <div className="successImage">
          <img
            src={require('../../../../assets/images/img_moduletest_success_illustration 1.png')}
            alt="module test success"
          />
        </div>
        <div className="successText">Congratulations!</div>
        <div className="successDesc">
          You have completed{' '}
          <span style={{ fontWeight: '900' }}>
            Chapter 3 - Setting up a new project
          </span>{' '}
          from Course: Learn Figma - UI/UX Design Essential Training
        </div>
        <div className="getStarted" style={{ cursor: 'pointer' }}>
          Result
        </div>
      </div>
    </div>
  );
};

export default QuizSuccess;
