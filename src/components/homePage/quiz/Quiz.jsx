import React, { useEffect, useState } from 'react';
import Countdown from 'react-countdown';
import { useDispatch, useSelector } from 'react-redux';
import { showQuizModal } from '../../../redux/reducers/Conditions';

import {
  closeIcon,
  nextIcon,
  previousIcon,
  timerIcon,
} from '../../../utils/svgIcons';
import Timer from '../../../utils/Timer';
import './Quiz.css';
import QuizBody from './QuizBody';
import QuizModal from './QuizModal';

const Quiz = () => {
  const dispatch = useDispatch();

  const [time, setTime] = useState(0);

  const quizModal = useSelector((state) => state.loginConditions.quizModal);

  // const renderer = ({ minutes, seconds, completed }) => {
  //   if (completed) {
  //     alert('time up');
  //     return <div>Completed</div>;
  //   } else {
  //     return (
  //       <span>
  //         {minutes}:{seconds}
  //       </span>
  //     );
  //   }
  // };

  return (
    <div className="quiz">
      <div className="quiz-header">
        <div className="quizHeaderTitle">Module Test 2</div>
        <div className="quizHeaderTime">
          <div className="quizHeaderTimeIcon">{timerIcon}</div>
          <div className="quiz-HeaderTimeText">
            <Timer />
            {/* <Countdown
                date={Date.now() + 480000}
                intervalDelay={0}
                precision={3}
                renderer={renderer}
              /> */}
            remaining
          </div>
        </div>
        <div
          className="quiz-HeaderCloseIcon"
          onClick={() => {
            dispatch(showQuizModal(true));
          }}
        >
          {closeIcon}
        </div>
      </div>
      <QuizBody />
    </div>
  );
};

export default Quiz;
