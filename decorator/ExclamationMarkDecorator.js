class ExclamationMarkDecorator {
  constructor(modifierInstance) {
    this.predecessorModifier = modifierInstance;
  }

  modify() {
    const input = new String(this.predecessorModifier.modify());
    return input.concat('!');
  }
}

module.exports = ExclamationMarkDecorator;
