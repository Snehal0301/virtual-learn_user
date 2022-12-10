import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import {
  resultShow,
  testShow,
  testSuccess,
} from '../../../../redux/reducers/Conditions';
import { testSuccessRed } from '../../../../redux/reducers/SuccessTestRed';
import { testisSuccess } from '../../../../redux/reducers/testSlice';
import '../../../../views/onboarding/success_page/Success_Page.css';

const QuizSuccess = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(testShow(false));
    dispatch(testisSuccess());
    dispatch(testSuccess(false));
  }, []);

  const showResults = useSelector((state: any) => state.testSuccessRed.value);

  useEffect(() => {
    showResults && navigate('/testResults');
  }, [showResults]);

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
        <div
          className="getStarted"
          style={{ cursor: 'pointer' }}
          onClick={() => {
            dispatch(testSuccessRed(true));
          }}
        >
          Result
        </div>
      </div>
    </div>
  );
};

export default QuizSuccess;
