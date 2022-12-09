import React from 'react';
import './QuizAns.css';
import '../Quiz.css';
import { useSelector } from 'react-redux';
import {
  correctOptionEllipse,
  optionEllipse,
  wrongOptionEllipse,
} from '../../../../utils/svgIcons';

const QuizAns = () => {
  const answers = useSelector((state: any) => state.quizAnswer.value);

  console.log('answers', answers);

  return (
    <>
      {JSON.stringify(answers) !== '{}' && (
        <div className="quizAns">
          <div className="quizAns-header">
            <div className="quizAns-headerQuesNum">
              {answers && answers.questionName}
            </div>
            <div
              className={
                answers.correctAnswer === answers.userAnswer
                  ? 'quizAns-headerQuesResult correctAns'
                  : 'quizAns-headerQuesResult wrongAns'
              }
            >
              {answers.correctAnswer === answers.userAnswer
                ? 'Correct Answer'
                : 'Wrong Answer'}
            </div>
          </div>
          <div className="quizAns-Body">
            <div className="quizAns-bodyQuestion">
              {answers && answers.ques}
            </div>
            <div className="quizAnz-bodyQuestionOptions">
              <div
                className={
                  answers.option_1 === answers.correctAnswer
                    ? 'quizAns-bodyOptions quizAns-bodyOptionIconCorrect'
                    : answers.option_1 !== answers.correctAnswer &&
                      answers.option_1 === answers.userAnswer
                    ? 'quizAns-bodyOptions quizAns-bodyOptionIconWrong'
                    : 'quizAns-bodyOptions'
                }
              >
                <div className="quizAns-bodyOptionIcon">
                  {answers.option_1 === answers.correctAnswer
                    ? correctOptionEllipse
                    : answers.option_1 !== answers.correctAnswer &&
                      answers.option_1 === answers.userAnswer
                    ? wrongOptionEllipse
                    : optionEllipse}
                </div>
                <div className="quizAns-bodyOptionText">{answers.option_1}</div>
              </div>
              <div
                className={
                  answers.option_2 === answers.correctAnswer
                    ? 'quizAns-bodyOptions quizAns-bodyOptionIconCorrect'
                    : answers.option_2 !== answers.correctAnswer &&
                      answers.option_2 === answers.userAnswer
                    ? 'quizAns-bodyOptions quizAns-bodyOptionIconWrong'
                    : 'quizAns-bodyOptions'
                }
              >
                <div className="quizAns-bodyOptionIcon">
                  {answers.option_2 === answers.correctAnswer
                    ? correctOptionEllipse
                    : answers.option_2 !== answers.correctAnswer &&
                      answers.option_2 === answers.userAnswer
                    ? wrongOptionEllipse
                    : optionEllipse}
                </div>
                <div className="quizAns-bodyOptionText">{answers.option_2}</div>
              </div>
              <div
                className={
                  answers.option_3 === answers.correctAnswer
                    ? 'quizAns-bodyOptions quizAns-bodyOptionIconCorrect'
                    : answers.option_3 !== answers.correctAnswer &&
                      answers.option_3 === answers.userAnswer
                    ? 'quizAns-bodyOptions quizAns-bodyOptionIconWrong'
                    : 'quizAns-bodyOptions'
                }
              >
                <div className="quizAns-bodyOptionIcon">
                  {answers.option_3 === answers.correctAnswer
                    ? correctOptionEllipse
                    : answers.option_3 !== answers.correctAnswer &&
                      answers.option_3 === answers.userAnswer
                    ? wrongOptionEllipse
                    : optionEllipse}
                </div>
                <div className="quizAns-bodyOptionText">{answers.option_3}</div>
              </div>
              <div
                className={
                  answers.option_4 === answers.correctAnswer
                    ? 'quizAns-bodyOptions quizAns-bodyOptionIconCorrect'
                    : answers.option_4 !== answers.correctAnswer &&
                      answers.option_4 === answers.userAnswer
                    ? 'quizAns-bodyOptions quizAns-bodyOptionIconWrong'
                    : 'quizAns-bodyOptions'
                }
              >
                <div className="quizAns-bodyOptionIcon">
                  {answers.option_4 === answers.correctAnswer
                    ? correctOptionEllipse
                    : answers.option_4 !== answers.correctAnswer &&
                      answers.option_4 === answers.userAnswer
                    ? wrongOptionEllipse
                    : optionEllipse}
                </div>
                <div className="quizAns-bodyOptionText">{answers.option_4}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default QuizAns;
