import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { testShow, testSuccess } from '../redux/reducers/Conditions';
import { FinalResult } from '../redux/reducers/finalResult';
import { finaltestShowPage } from '../redux/reducers/finalTestSuccess';
import { showSuccessPage } from '../redux/reducers/showSuccesspage';
import { answer } from '../redux/reducers/testAnswer';
import { answerHeader } from '../redux/reducers/testAnswerHeader';
import { testisSuccess } from '../redux/reducers/testSlice';

const Timer = () => {
  const initialTimer = localStorage.getItem('timer') ?? 480;
  const timeoutId = React.useRef(null);
  const [timer, setTimer] = React.useState(initialTimer);
  const quizData = useSelector((state) => state.test.data.data);
  const dispatch = useDispatch();
  let userAnswer = [];
  const countTimer = React.useCallback(() => {
    if (timer <= 0) {
      localStorage.removeItem('timer');
      alert('timeUp');
      var form = document.getElementById('quiz');

      quizData.questions.forEach((element) => {
        userAnswer.push({
          questionId: element.questionId,
          correctAnswer: form.elements[`Id${element.questionId}`].value,
        });
      });

      const submitData = { testId: quizData.testId, userAnswers: userAnswer };

      console.log('submit', submitData);

      fetch(
        `http://virtuallearnapp2-env.eba-wrr2p8zk.ap-south-1.elasticbeanstalk.com/user/${
          quizData.testName === 'Final Test' ? 'finalSubmit' : 'submit'
        }`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('Token')}`,
          },
          body: JSON.stringify(submitData),
        }
      )
        .then((res) => res.json())
        .then((res) => {
          console.log('resppp', res);
          if (res && res.chapterTestPercentage > 0) {
            if (quizData.testName === 'Final Test') {
              dispatch(finaltestShowPage(true));
              dispatch(FinalResult(`result?testId=${quizData.testId}`));
            } else {
              dispatch(testSuccess(true));
              dispatch(answerHeader(`resultHeader?testId=${quizData.testId}`));
              dispatch(answer(`resultAnswers?testId=${quizData.testId}`));
            }

            dispatch(testisSuccess());
            dispatch(showSuccessPage(true));
          } else if (res && res.chapterTestPercentage === 0) {
            alert('You have not met the minimum passing grade');
            dispatch(testShow(false));
            dispatch(testSuccess());
            dispatch(testisSuccess());
          } else {
            alert('Some error occured');

            dispatch(testShow(false));
            dispatch(testSuccess());
            dispatch(testisSuccess());
          }
        });
    } else {
      setTimer(timer - 1);
      localStorage.setItem('timer', timer);
    }
  }, [timer]);

  React.useEffect(() => {
    timeoutId.current = window.setTimeout(countTimer, 1000);
    // cleanup function
    return () => window.clearTimeout(timeoutId.current);
  }, [timer, countTimer]);

  var minutes = timer > 60 ? Math.floor(timer / 60) : timer;

  return (
    <div align="center">
      {minutes} {timer > 60 ? 'mins' : 'sec'}
    </div>
  );
};

export default Timer;
