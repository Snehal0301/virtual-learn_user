import React, { useEffect, useState } from 'react';
import Countdown from 'react-countdown';

import {
  closeIcon,
  nextIcon,
  previousIcon,
  timerIcon,
} from '../../../utils/svgIcons';
import './Quiz.css';
import QuizBody from './QuizBody';

const Quiz = () => {
  const renderer = ({ minutes, seconds, completed }) => {
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
            {
              <Countdown
                date={Date.now() + 480000}
                intervalDelay={0}
                precision={3}
                renderer={renderer}
              />
            }
            mins remaining
          </div>
        </div>
        <div className="quiz-HeaderCloseIcon">{closeIcon}</div>
      </div>
      <QuizBody />
    </div>
  );
};

export default Quiz;
