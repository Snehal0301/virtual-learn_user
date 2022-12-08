import React from 'react';
import { closeIcon, showAnsIcon } from '../../../../utils/svgIcons';
import './QuizResults.css';
import Drawer from 'react-modern-drawer';
import { useDispatch } from 'react-redux';
import { quizAnswer } from '../../../../redux/reducers/result';
import QuizAns from '../quizAnswers/QuizAns';

const QuizResults = () => {
  const dispatch = useDispatch();

  const results: any = [
    {
      question: 'Question1',
      answer: 'Correct Answer',
      ques: 'Who invented JavaScript?',
      answers: ['Douglas Crockford', 'Sheryl Sandberg', 'Brendan Eich'],
      questionId: 'a',
      sel: 'Douglas Crockford',
      cor: 'Douglas Crockford',
    },
    {
      question: 'Question2',
      answer: 'Correct Answer',
      ques: 'Which one of these is a JavaScript package manager?',
      answers: ['Node.js', 'TypeScript', 'npm'],
      questionId: 'b',
      sel: 'npm',
      cor: 'npm',
    },
    {
      question: 'Question3',
      answer: 'Wrong Answer',
      ques: 'Which tool can you use to ensure code quality?',
      answers: ['Angular', 'jQuery', 'RequireJS', 'ESLint'],
      questionId: 'c',
      sel: 'Angular',
      cor: 'ESLint',
    },
    // { question: 'Question4', answer: 'Correct Answer' },
    // { question: 'Question5', answer: 'Wrong Answer' },
    // { question: 'Question6', answer: 'Wrong Answer' },
    // { question: 'Question7', answer: 'Wrong Answer' },
    // { question: 'Question8', answer: 'Correct Answer' },
    // { question: 'Question9', answer: 'Correct Answer' },
    // { question: 'Question10', answer: 'Correct Answer' },
  ];

  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="quizResults">
      <div className="quizResults-header">
        <div className="quizResults-headerTitle">Module Test 2</div>
        <div className="quizResults-closeicon">{closeIcon}</div>
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
                  <div
                    className={
                      ele.answer === 'Correct Answer'
                        ? 'quizResults-bodyListItemContentAnswer quizResults-bodyListItemContentAnswerGreen'
                        : 'quizResults-bodyListItemContentAnswer quizResults-bodyListItemContentAnswerRed'
                    }
                  >
                    {ele.answer}
                  </div>
                </div>
                <div
                  className="quizResults-bodyListItemDrawer"
                  onClick={() => {
                    toggleDrawer();
                    dispatch(quizAnswer(ele));
                  }}
                >
                  {showAnsIcon}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="quizDrawerOverlay">
        {' '}
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className="quizResults-Drawer"
        >
          <div className="quizResults-DrawerBody">
            <QuizAns />
          </div>
          <div
            className="quizDrawerCloseIcon"
            onClick={() => {
              toggleDrawer();
            }}
          >
            {closeIcon}
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default QuizResults;
