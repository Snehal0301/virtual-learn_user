import { time } from 'console';
import React, { useEffect, useState } from 'react';
import Countdown from 'react-countdown';
import { closeIcon, timerIcon } from '../../../utils/svgIcons';
import './Quiz.css';

const Quiz = () => {
  const myQuestions = [
    {
      question: 'Who invented JavaScript?',
      answers: {
        a: 'Douglas Crockford',
        b: 'Sheryl Sandberg',
        c: 'Brendan Eich',
      },
      questionId: 'a',
    },
    {
      question: 'Which one of these is a JavaScript package manager?',
      answers: {
        a: 'Node.js',
        b: 'TypeScript',
        c: 'npm',
      },
      questionId: 'b',
    },
    {
      question: 'Which tool can you use to ensure code quality?',
      answers: {
        a: 'Angular',
        b: 'jQuery',
        c: 'RequireJS',
        d: 'ESLint',
      },
      questionId: 'c',
    },
  ];

  const renderer = ({ minutes, seconds, completed }: any) => {
    if (completed) {
      alert('time up');
      return <div>Completed</div>;
    } else {
      // Render a countdown
      return <span>{minutes}</span>;
    }
  };

  return (
    <div className="quiz">
      <div className="quiz-header">
        <div className="quizHeaderTitle">Module Test 2</div>
        <div className="quizHeaderTime">
          <div className="quizHeaderTimeIcon">{timerIcon}</div>
          <div className="quiz-HeaderTimeText">
            {' '}
            <Countdown
              date={Date.now() + 480000}
              intervalDelay={0}
              precision={3}
              renderer={renderer}
            />
            mins remaining
          </div>
        </div>
        <div className="quiz-HeaderCloseIcon">{closeIcon}</div>
      </div>
      <div className="quiz-body">
        <div className="quiz-bodyQuestionNum">Question 5 of 25</div>
        <form className="quiz-bodyQuestionForm"></form>
      </div>
      <div className="quiz-footer">Quiz Footer</div>
    </div>
  );
};

export default Quiz;
