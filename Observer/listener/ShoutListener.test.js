const ShoutListener = require('./ShoutListener');

test('Should repeat the message n times', () => {
  const mockLogger = {
    info: jest.fn()
  }
  const shout = new ShoutListener(mockLogger);
  const message = 'hello';
  shout.action(message);
  expect(mockLogger.info).toHaveBeenCalledTimes(1);
  expect(mockLogger.info).toHaveBeenCalledWith(message.toUpperCase());
})
