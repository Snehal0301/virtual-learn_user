import React from 'react';
import './QuizResults.css';

const QuizResults = () => {
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
      <div className="quizResults-body">Body</div>
    </div>
  );
};

export default QuizResults;
