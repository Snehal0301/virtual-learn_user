import './Quiz.css';
import { MultiStepForm, Step } from 'react-multi-form';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showQuizModal, testShow } from '../../../redux/reducers/Conditions';
import QuizModal from './QuizModal';
import { testSuccess } from '../../../redux/reducers/testSlice';

const QuizBody = () => {
  const [active, setActive] = useState(1);
  const dispatch = useDispatch();

  const quizData = useSelector((state) => state.test.data.data);

  let userAnswer = [];

  const submitQuizHandler = (e) => {
    e.preventDefault();
    var form = document.getElementById('quiz');

    quizData.questions.forEach((element) => {
      userAnswer.push({
        questionId: element.questionId,
        correctAnswer: form.elements[`Id${element.questionId}`].value,
      });
    });

    const submitData = { testId: quizData.testId, userAnswers: userAnswer };

    console.log('submit', submitData);

    dispatch(showQuizModal(false));
    dispatch(testShow(false));
    dispatch(testSuccess());
    dispatch(showQuizModal(false));
  };

  return (
    <form className="quiz-body" onSubmit={submitQuizHandler} id="quiz">
      <div className="quiz-bodyQuestionForm">
        <MultiStepForm activeStep={active}>
          {quizData &&
            quizData.questions &&
            quizData.questions.map((ele, i) => {
              return (
                <div key={i}>
                  <Step label={i}>
                    <div className="quiz-questionNum">
                      {' '}
                      Question {i + 1} of {quizData.questions.length}
                    </div>

                    <div className="quiz-question">{ele.questionName}</div>
                    <div className="quiz-options">
                      <div className="quiz-eachOption">
                        <input
                          type="radio"
                          name={`Id${ele.questionId}`}
                          value={ele.option_1}
                          id="accent"
                        />
                        <label htmlFor="accent" className="quiz-eachOptionBox">
                          {ele.option_1}
                        </label>
                        <label
                          htmlFor="accent"
                          className="quiz-accentLabel"
                        ></label>
                      </div>
                      <div className="quiz-eachOption">
                        <input
                          type="radio"
                          name={`Id${ele.questionId}`}
                          value={ele.option_2}
                          id="accent"
                        />
                        <label htmlFor="accent" className="quiz-eachOptionBox">
                          {ele.option_2}
                        </label>
                        <label
                          htmlFor="accent"
                          className="quiz-accentLabel"
                        ></label>
                      </div>
                      <div className="quiz-eachOption">
                        <input
                          type="radio"
                          name={`Id${ele.questionId}`}
                          value={ele.option_3}
                          id="accent"
                        />
                        <label htmlFor="accent" className="quiz-eachOptionBox">
                          {ele.option_3}
                        </label>
                        <label
                          htmlFor="accent"
                          className="quiz-accentLabel"
                        ></label>
                      </div>
                      <div className="quiz-eachOption">
                        <input
                          type="radio"
                          name={`Id${ele.questionId}`}
                          value={ele.option_4}
                          id="accent"
                        />
                        <label htmlFor="accent" className="quiz-eachOptionBox">
                          {ele.option_4}
                        </label>
                        <label
                          htmlFor="accent"
                          className="quiz-accentLabel"
                        ></label>
                      </div>
                    </div>
                  </Step>
                </div>
              );
            })}
        </MultiStepForm>
      </div>
      {quizData && (
        <div className="quiz-footer">
          <div className="quiz-footerText">
            <div className="quiz-footerChapter">
              Chapter {quizData.chapterNumber}
            </div>
            <div className="quiz-footerChapterTitle">
              {quizData.chapterName}
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
              className={
                active === (quizData.questions && quizData.questions.length)
                  ? 'quiz-buttonsSubmit'
                  : ''
              }
              disabled={
                active === (quizData.questions && quizData.questions.length)
              }
            >
              {active === (quizData.questions && quizData.questions.length) ? (
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
      )}
      <QuizModal time={0} />
    </form>
  );
};

export default QuizBody;
