const RepeaterListener = require('./RepeaterListener');

test('Should repeat the message n times', () => {
  const mockLogger = {
    info: jest.fn()
  }
  const repeater = new RepeaterListener(2, mockLogger);
  const message = 'hello';
  repeater.action(message);
  expect(mockLogger.info).toHaveBeenCalledTimes(2);
  expect(mockLogger.info).toHaveBeenCalledWith(message)
})
