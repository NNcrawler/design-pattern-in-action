const Broadcster = require('./Broadcaster');

test('Should add listener', () => {
  const broadcaster = new Broadcster();
  const mockListner = {
    action: jest.fn()
  };

  const newChannel = 'newChannel';
  broadcaster.addListener(newChannel, mockListner);
  broadcaster.sendMessage(newChannel, 'Hello');

  expect(mockListner.action).toBeCalled();
  expect(mockListner.action).toHaveBeenCalledWith('Hello');
})

test('Should not create new channel when exist', () => {
  const broadcaster = new Broadcster();
  const mockListner1 = {
    action: jest.fn()
  }
  const mockListner2 = {
    action: jest.fn()
  }

  const newChannel = 'newChannel';
  broadcaster.addListener(newChannel, mockListner1);
  broadcaster.addListener(newChannel, mockListner2);
  broadcaster.sendMessage(newChannel, 'Hello');

  expect(mockListner1.action).toBeCalled();
  expect(mockListner2.action).toBeCalled();
})

test('Should not only invoke listener that belong to same channel', () => {
  const broadcaster = new Broadcster();
  const mockListner1 = {
    action: jest.fn()
  }
  const mockListner2 = {
    action: jest.fn()
  }
  const channel1 = 'channel1';
  const channel2 = 'channel2';

  broadcaster.addListener(channel1, mockListner1);
  broadcaster.addListener(channel2, mockListner2);
  broadcaster.sendMessage(channel1, 'Hello');

  expect(mockListner1.action).toBeCalled();
  expect(mockListner2.action).toHaveBeenCalledTimes(0);
})

test('Should delete listener', () => {
  const broadcaster = new Broadcster();
  const mockListner = {
    action: jest.fn()
  }
  const channel = 'newChannel';

  broadcaster.addListener(channel, mockListner);
  broadcaster.unlisten(channel, mockListner);
  broadcaster.sendMessage(channel, 'Hello');

  expect(mockListner.action).toHaveBeenCalledTimes(0);
})