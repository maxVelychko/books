import { Func } from 'types/common';

const delayFuncExecution = (func: Func<void>, time: number) => {
  let startTime = 0;
  let lastParams: any;
  let timer: number;

  const executeAndReset = () => {
    window.clearTimeout(timer);
    func(...lastParams);
    startTime = 0;
  };

  return function (...params: any) {
    const currentTime = Date.now();
    lastParams = params;

    if (startTime === 0) {
      startTime = currentTime;
      timer = window.setTimeout(() => {
        executeAndReset();
      }, time);
    } else if (currentTime - startTime > time) {
      executeAndReset();
    }
  };
};

export default delayFuncExecution;
