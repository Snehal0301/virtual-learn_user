import React, { useEffect } from 'react'
import { closeIcon, showAnsIcon } from '../../../../utils/svgIcons'
import './QuizResults.css'
import Drawer from 'react-modern-drawer'
import { useDispatch, useSelector } from 'react-redux'
import { quizAnswer } from '../../../../redux/reducers/result'
import QuizAns from '../quizAnswers/QuizAns'
import { answerHeader } from '../../../../redux/reducers/testAnswerHeader'

const QuizResults = () => {
  const dispatch = useDispatch()

  const resultsHeaderData = {
    chapterNumber: 6,
    chapterName: 'Conclusion',
    chapterTestPercentage: 60.0,
    courseName: 'UI-UX Design For Complete Beginners',
    passingGrade: 75,
    correctAnswers: 3,
    wrongAnswers: 2,
    totalNumberOfQuestions: 5,
  }

  useEffect(() => {
    dispatch(answerHeader('resultAnswers?testId=17'))
  }, [])

  const answers = useSelector

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
  ]

  const resultAnswers = [
    {
      questionId: 20,
      questionName: 'How many letters are there in Tamil alphabets ',
      option_1: '49',
      option_2: '40',
      option_3: '43',
      option_4: '48',
      correctAnswer: '48',
      userAnswer: '43',
      userAnswerStatus: '0',
    },
    {
      questionId: 25,
      questionName: 'How many letters are there in Tamil alphabets ',
      option_1: '49',
      option_2: '40',
      option_3: '43',
      option_4: '48',
      correctAnswer: '48',
      userAnswer: '43',
      userAnswerStatus: '0',
    },
    {
      questionId: 40,
      questionName: 'What isa 0*2',
      option_1: '9',
      option_2: '2',
      option_3: '0',
      option_4: '0.2',
      correctAnswer: '0',
      userAnswer: '0',
      userAnswerStatus: '1',
    },
    {
      questionId: 50,
      questionName: 'What isa UI',
      option_1: 'User Interface',
      option_2: 'User Intraface',
      option_3: 'User Interior',
      option_4: 'User Inter Data',
      correctAnswer: 'User Interface',
      userAnswer: 'User Interface',
      userAnswerStatus: '1',
    },
    {
      questionId: 60,
      questionName: 'What isa API',
      option_1: 'Application Programming Interface',
      option_2: 'Application Programming Intraface',
      option_3: 'Application Programming Interior',
      option_4: 'Application Inter Data',
      correctAnswer: 'Application Programming Interface',
      userAnswer: 'Application Programming Interface',
      userAnswerStatus: '1',
    },
  ]

  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <div className="quizResults">
      {resultsHeaderData && (
        <div className="quizResults-header">
          <div className="quizResults-headerTitle">
            Module Test {resultsHeaderData.chapterNumber}
          </div>
          <div className="quizResults-closeicon">{closeIcon}</div>
          <div className="quizResults-headerBody">
            <div className="quizResults-headerBodyResultMarks">
              {resultsHeaderData.chapterTestPercentage}
            </div>
            <div className="quizResults-headerBodyContents">
              <div className="quizResults-headerBodyContentsChapterName">
                Chapter {resultsHeaderData.chapterNumber}:{' '}
                {resultsHeaderData.chapterName}
              </div>
              <div className="quizResults-headerBodyContentsUnitName">
                Course: {resultsHeaderData.courseName}
              </div>
              <div className="quizResults-headerBodyContentsResults">
                <div className="quizResults-headerBodyContentsResultsBody">
                  <div className="quizResults-headerBodyContentsResultsBodyTitle">
                    Passing Grade
                  </div>
                  <div className="quizResults-headerBodyContentsResultsBodyResult">
                    {resultsHeaderData.passingGrade}/100
                  </div>
                </div>
                <div className="quizResults-headerBodyContentsResultsBody">
                  <div className="quizResults-headerBodyContentsResultsBodyTitle">
                    Correct
                  </div>
                  <div className="quizResults-headerBodyContentsResultsBodyResult">
                    {resultsHeaderData.correctAnswers}/
                    {resultsHeaderData.totalNumberOfQuestions}
                  </div>
                </div>
                <div className="quizResults-headerBodyContentsResultsBody">
                  <div className="quizResults-headerBodyContentsResultsBodyTitle">
                    Wrong
                  </div>
                  <div className="quizResults-headerBodyContentsResultsBodyResult">
                    {resultsHeaderData.wrongAnswers}/
                    {resultsHeaderData.totalNumberOfQuestions}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="quizResults-body">
        <div className="quizResults-bodyListTitle">List of Questions</div>
        <div className="quizResults-bodyList">
          {resultAnswers.map((ele: any, i: any) => {
            return (
              <div className="quizResults-bodyListItem" key={i}>
                <div className="quizResults-bodyListItemContent">
                  <div className="quizResults-bodyListItemContentQuestion">
                    Question {i + 1}
                  </div>
                  <div
                    className={
                      ele.correctAnswer === ele.userAnswer
                        ? 'quizResults-bodyListItemContentAnswer quizResults-bodyListItemContentAnswerGreen'
                        : 'quizResults-bodyListItemContentAnswer quizResults-bodyListItemContentAnswerRed'
                    }
                  >
                    {ele.correctAnswer === ele.userAnswer
                      ? 'Correct Answer'
                      : 'Wrong Answer'}
                  </div>
                </div>
                <div
                  className="quizResults-bodyListItemDrawer"
                  onClick={() => {
                    toggleDrawer()
                    dispatch(quizAnswer(ele))
                  }}
                >
                  {showAnsIcon}
                </div>
              </div>
            )
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
              toggleDrawer()
            }}
          >
            {closeIcon}
          </div>
        </Drawer>
      </div>
    </div>
  )
}

export default QuizResults
