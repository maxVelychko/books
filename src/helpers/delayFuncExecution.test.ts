import delayFuncExecution from './delayFuncExecution';

jest.useFakeTimers();

describe('delayFuncExecution', () => {
  const ms = 250;
  let func: any;
  let funcDelayed: any;

  beforeEach(() => {
    func = jest.fn();
    funcDelayed = delayFuncExecution(func, ms);
  });

  afterAll(() => {
    jest.clearAllTimers();
  });

  it('does not execute function', () => {
    funcDelayed();
    funcDelayed();
    funcDelayed();

    expect(func).not.toBeCalled();
  });

  it('executes function until set time ends', () => {
    funcDelayed();
    funcDelayed();
    funcDelayed();

    jest.runAllTimers();

    expect(func).toBeCalled();
  });
});
