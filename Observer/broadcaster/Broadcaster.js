module.exports = class Broadcaster {
  constructor() {
    this.channels = new Map();
  }
  /*
    String channel
    Listener listenerObj. Needs to implement action(message)
  */
  addListener(channel, listenerObj) {
    if (!isStringInstance(channel)) {
      console.error("Channel not a string");
      return;
    }

    if (typeof listenerObj.action === 'undefined') {
      console.error("Listener object doesn't implement action()");
      return;
    }

    if (!this.channels.has(channel)) {
      const listenerList = new Set();
      listenerList.add(listenerObj);
      this.channels.set(channel, listenerList);
      return;
    }

    const listenerList = this.channels.get(channel);
    listenerList.add(listenerObj);
  }

  sendMessage(channel, message) {
    if (!isStringInstance(channel)) {
      console.error("Channel not a string");
      return;
    }

    if (!this.channels.has(channel)) {
      console.error("Channel doesn't exist");
      return;
    }

    const listenerList = this.channels.get(channel);
    listenerList.forEach(listener => {
      listener.action(message);
    });
  }

  unlisten(channel, listenerObj) {
    if (!isStringInstance(channel)) {
      console.error("Channel not a string");
      return;
    }

    if (!this.channels.has(channel)) {
      return;
    }

    const listenerList = this.channels.get(channel);
    listenerList.delete(listenerObj);
  }
}

function isStringInstance(string) {
  return typeof string == 'string';
}