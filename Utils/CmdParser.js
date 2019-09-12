module.exports = class CmdParser {
  constructor(input) {
    this.input = input;
    this.args = input.split(' ');
  }

  command() {
    return this.args[0];
  }

  param(order) {
    return this.args[order];
  }

  params(startIndex) {
    return this.args.slice(startIndex);
  }
}
