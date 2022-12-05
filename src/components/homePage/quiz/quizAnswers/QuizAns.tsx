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
              {answers && answers.question}
            </div>
            <div
              className={
                answers.answer === 'Correct Answer'
                  ? 'quizAns-headerQuesResult correctAns'
                  : 'quizAns-headerQuesResult wrongAns'
              }
            >
              {answers && answers.answer}
            </div>
          </div>
          <div className="quizAns-Body">
            <div className="quizAns-bodyQuestion">
              {answers && answers.ques}
            </div>
            <div className="quizAnz-bodyQuestionOptions">
              {answers &&
                answers.answers.map((ele: any, i: any) => {
                  console.log('ele', ele);

                  return (
                    <div
                      className={
                        ele === answers.cor
                          ? 'quizAns-bodyOptions quizAns-bodyOptionIconCorrect'
                          : ele !== answers.cor && ele === answers.sel
                          ? 'quizAns-bodyOptions quizAns-bodyOptionIconWrong'
                          : 'quizAns-bodyOptions'
                      }
                      key={i}
                    >
                      <div className="quizAns-bodyOptionIcon">
                        {ele === answers.cor
                          ? correctOptionEllipse
                          : ele !== answers.cor && ele === answers.sel
                          ? wrongOptionEllipse
                          : optionEllipse}
                      </div>
                      <div className="quizAns-bodyOptionText">{ele}</div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default QuizAns;
