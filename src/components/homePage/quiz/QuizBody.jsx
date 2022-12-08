import './Quiz.css';
import { MultiStepForm, Step } from 'react-multi-form';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showQuizModal } from '../../../redux/reducers/Conditions';
import QuizModal from './QuizModal';

const QuizBody = () => {
  const [active, setActive] = useState(1);
  const dispatch = useDispatch();

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

  const quizData = {
    testId: 17,
    chapterNumber: 6,
    chapterName: 'Conclusion',
    testName: 'Final Test',
    testDuration: '00:06:00',
    questionsCount: 5,
    questions: [
      {
        questionId: 20,
        questionName: 'How many letters are there in Tamil alphabets ',
        option_1: '49',
        option_2: '40',
        option_3: '43',
        option_4: '48',
        state1: false,
        state2: false,
        state3: false,
        state4: false,
      },
      {
        questionId: 25,
        questionName: 'How many letters are there in Tamil alphabets ',
        option_1: '49',
        option_2: '40',
        option_3: '43',
        option_4: '48',
        state1: false,
        state2: false,
        state3: false,
        state4: false,
      },
      {
        questionId: 40,
        questionName: 'What isa 0*2',
        option_1: '9',
        option_2: '2',
        option_3: '0',
        option_4: '0.2',
        state1: false,
        state2: false,
        state3: false,
        state4: false,
      },
      {
        questionId: 50,
        questionName: 'What isa UI',
        option_1: 'User Interface',
        option_2: 'User Intraface',
        option_3: 'User Interior',
        option_4: 'User Inter Data',
        state1: false,
        state2: false,
        state3: false,
        state4: false,
      },
      {
        questionId: 60,
        questionName: 'What isa API',
        option_1: 'Application Programming Interface',
        option_2: 'Application Programming Intraface',
        option_3: 'Application Programming Interior',
        option_4: 'Application Inter Data',
        state1: false,
        state2: false,
        state3: false,
        state4: false,
      },
    ],
  };

  const submitQuizHandler = (e) => {
    e.preventDefault();
    var form = document.getElementById('quiz');

    console.log('selected answers');

    items.forEach((element) => {
      console.log(
        element.questionId,
        ':',
        form.elements[element.questionId].value
      );
    });
    dispatch(showQuizModal(false));
  };

  return (
    <form className="quiz-body" onSubmit={submitQuizHandler} id="quiz">
      <div className="quiz-bodyQuestionForm">
        <MultiStepForm activeStep={active}>
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
          <button
            onClick={() => setActive(active - 1)}
            disabled={active === 1}
            type="button"
          >
            <img
              src={require('../../../assets/icons/previousIcon.png')}
              alt="previous"
            />
          </button>

          <button
            type="button"
            onClick={() => setActive(active + 1)}
            style={{ float: 'right' }}
            className={active === items.length ? 'quiz-buttonsSubmit' : ''}
            disabled={active === items.length}
          >
            {active === items.length ? (
              <span
                onClick={() => {
                  dispatch(showQuizModal(true));
                }}
              >
                submit
              </span>
            ) : (
              <img
                src={require('../../../assets/icons/nextIcon.png')}
                alt="next"
              ></img>
            )}
          </button>
        </div>
      </div>
      <QuizModal time={0} />
    </form>
  );
};

export default QuizBody;
