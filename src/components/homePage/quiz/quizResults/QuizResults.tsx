import React from 'react';
import './QuizResults.css';

const QuizResults = () => {
  const results: any = [
    { question: 'Question1', answer: 'Correct Answer' },
    { question: 'Question2', answer: 'Correct Answer' },
    { question: 'Question3', answer: 'Wrong Answer' },
    { question: 'Question4', answer: 'Correct Answer' },
    { question: 'Question5', answer: 'Wrong Answer' },
    { question: 'Question6', answer: 'Wrong Answer' },
    { question: 'Question7', answer: 'Wrong Answer' },
    { question: 'Question8', answer: 'Correct Answer' },
    { question: 'Question9', answer: 'Correct Answer' },
    { question: 'Question10', answer: 'Correct Answer' },
  ];

  return (
    <div className="quizResults">
      <div className="quizResults-header">
        <div className="quizResults-headerTitle">Module Test 2</div>
        <div className="quizResults-headerBody">
          <div className="quizResults-headerBodyResultMarks">80</div>
          <div className="quizResults-headerBodyContents">
            <div className="quizResults-headerBodyContentsChapterName">
              Chapter 3: Setting up a new project
            </div>
            <div className="quizResults-headerBodyContentsUnitName">
              Course: Learn Figma - UI/UX Design Essential Training
            </div>
            <div className="quizResults-headerBodyContentsResults">
              <div className="quizResults-headerBodyContentsResultsBody">
                <div className="quizResults-headerBodyContentsResultsBodyTitle">
                  Passing Grade
                </div>
                <div className="quizResults-headerBodyContentsResultsBodyResult">
                  75/100
                </div>
              </div>
              <div className="quizResults-headerBodyContentsResultsBody">
                <div className="quizResults-headerBodyContentsResultsBodyTitle">
                  Correct
                </div>
                <div className="quizResults-headerBodyContentsResultsBodyResult">
                  20/25
                </div>
              </div>
              <div className="quizResults-headerBodyContentsResultsBody">
                <div className="quizResults-headerBodyContentsResultsBodyTitle">
                  Wrong
                </div>
                <div className="quizResults-headerBodyContentsResultsBodyResult">
                  05/25
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="quizResults-body">
        <div className="quizResults-bodyListTitle">List of Questions</div>
        <div className="quizResults-bodyList">
          {results.map((ele: any, i: any) => {
            return (
              <div className="quizResults-bodyListItem" key={i}>
                <div className="quizResults-bodyListItemContent">
                  <div className="quizResults-bodyListItemContentQuestion">
                    {ele.question}
                  </div>
                  <div className="quizResults-bodyListItemContentAnswer">
                    {ele.answer}
                  </div>
                </div>
                <div className="quizResults-bodyListItemDrawer">{'>'}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuizResults;
