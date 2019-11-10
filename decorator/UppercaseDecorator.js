class UppercaseDecorator {
  constructor(modifierInstance) {
    this.predecessorModifier = modifierInstance;
  }

  modify() {
    const input = this.predecessorModifier.modify();
    return input.toUpperCase();
  }
}

module.exports = UppercaseDecorator
