module.exports = class RepeaterListener {
  constructor(times=1, logger=console, name='Default') {
    if (typeof times != 'number') {
      throw new Error('Times expected to be number');
    }

    this.times = times;
    this.name = name;
    this.logger = logger;
  }

  action(message) {
    console.info(`Message from repeater ${this.name}`);
    for (let i = 0; i < this.times; i++) {
      this.logger.info(message)
    }
  }
}