import React, { useEffect, useState } from 'react';
import Countdown from 'react-countdown';
import { MultiStepForm, Step } from 'react-multi-form';
import { closeIcon, timerIcon } from '../../../utils/svgIcons';
import './Quiz.css';

const Quiz = () => {
  const [active, setActive] = useState(1);

  const items = [
    {
      question: 'Who invented JavaScript?',
      answers: ['Douglas Crockford', 'Sheryl Sandberg', 'Brendan Eich'],
      questionId: 'a',
    },
    {
      question: 'Which one of these is a JavaScript package manager?',
      answers: ['Node.js', 'TypeScript', 'npm'],
      questionId: 'b',
    },
    {
      question: 'Which tool can you use to ensure code quality?',
      answers: ['Angular', 'jQuery', 'RequireJS', 'ESLint'],
      questionId: 'c',
    },
  ];

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
        <div className="quiz-bodyQuestionForm">
          <MultiStepForm activeStep={active} className="hi">
            {items &&
              items.map((ele, i) => {
                return (
                  <div key={i}>
                    <Step label={i}>
                      <div className="quiz-question">{ele.question}</div>
                      <div className="quiz-options">
                        {ele.answers.map((option) => {
                          return (
                            <>
                              <input
                                type="radio"
                                name={ele.questionId}
                                value={option}
                              />
                              {option}
                            </>
                          );
                        })}
                      </div>
                    </Step>
                  </div>
                );
              })}
          </MultiStepForm>

          <button onClick={() => setActive(active - 1)} disabled={active === 1}>
            Previous
          </button>

          <button
            onClick={() => setActive(active + 1)}
            style={{ float: 'right' }}
            disabled={active === items.length}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
