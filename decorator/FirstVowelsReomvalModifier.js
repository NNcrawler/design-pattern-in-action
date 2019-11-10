class FirstVowelsReomvalModifier {
  constructor(modifierInstance) {
    this.predecessorModifier = modifierInstance;
  }

  modify() {
    const input = new String(this.predecessorModifier.modify());
    return input.replace(/[aiueo]/i, '');
  }
}

module.exports = FirstVowelsReomvalModifier;
