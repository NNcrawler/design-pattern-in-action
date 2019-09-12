module.exports = class ShoutListener{
  constructor(logger=console, name='default-shout') {
    this.logger = logger;
    this.name = name
  }

  action(message) {
    console.info(`Shout from ${this.name}`);
    this.logger.info(message.toUpperCase());
  }
}