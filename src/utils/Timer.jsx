import * as React from 'react';

const Timer = () => {
  const initialTimer = localStorage.getItem('timer') ?? 480;
  const timeoutId = React.useRef(null);
  const [timer, setTimer] = React.useState(initialTimer);

  const countTimer = React.useCallback(() => {
    if (timer <= 0) {
      localStorage.removeItem('timer');
      alert('timeUp');
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

  var minutes = Math.floor(timer / 60);

  return <div align="center">{minutes}</div>;
};

export default Timer;
