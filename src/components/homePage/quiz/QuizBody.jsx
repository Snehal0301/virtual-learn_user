import './Quiz.css';
import { MultiStepForm, Step } from 'react-multi-form';
import React, { useState } from 'react';

const QuizBody = () => {
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

  return (
    <div className="quiz-body">
      <div className="quiz-bodyQuestionForm">
        <MultiStepForm activeStep={active} className="hi">
          {items &&
            items.map((ele, i) => {
              return (
                <div key={i}>
                  <Step label={i}>
                    <div className="quiz-questionNum">
                      {' '}
                      Question {i + 1} of {items.length}
                    </div>

                    <div className="quiz-question">{ele.question}</div>
                    <div className="quiz-options">
                      {ele.answers.map((option) => {
                        console.log(ele);
                        return (
                          <div className="quiz-eachOption">
                            <input
                              type="radio"
                              name={ele.questionId}
                              value={option}
                              id="accent"
                            />
                            <label
                              htmlFor="accent"
                              className="quiz-eachOptionBox"
                            >
                              {option}
                            </label>
                            <label
                              htmlFor="accent"
                              className="quiz-accentLabel"
                            ></label>
                          </div>
                        );
                      })}
                    </div>
                  </Step>
                </div>
              );
            })}
        </MultiStepForm>
      </div>
      <div className="quiz-footer">
        <div className="quiz-footerText">
          <div className="quiz-footerChapter">Chapter 3</div>
          <div className="quiz-footerChapterTitle">
            Setting up a new project
          </div>
        </div>
        <div className="quiz-buttons">
          <button onClick={() => setActive(active - 1)} disabled={active === 1}>
            <img
              src={require('../../../assets/icons/previousIcon.png')}
              alt="previous"
            />
          </button>

          <button
            onClick={() => setActive(active + 1)}
            style={{ float: 'right' }}
            disabled={active === items.length}
          >
            <img
              src={require('../../../assets/icons/nextIcon.png')}
              alt="next"
            ></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizBody;
