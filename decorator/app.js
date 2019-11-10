const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout)

const TextModifier = require('./TextModifier');
const UppercaseDecorator = require('./UppercaseDecorator');
const ExclamationMarkDecorator = require('./ExclamationMarkDecorator');
const FirstVowelsReomvalModifier = require('./FirstVowelsReomvalModifier');

let textmodifier;
function app() {
  rl.question('BASE TEXT: ', (input) => {
    textmodifier = new TextModifier(input);

    programLoop(textmodifier);
  })
}

function programLoop(textmodifier) {
  const AVAILABLE_INPUT = `1) TRANSFORM TO UPPERCASE
  \n2) ADD EXCLAMATION MARK
  \n3) REMOVE FIRST VOWELS ENCOUNTERED
  \n4) EXECUTE
  \nCOMMAND: `;

  rl.question(AVAILABLE_INPUT, (input) => {
    switch (parseInt(input)) {
      case 1:
        textmodifier = new UppercaseDecorator(textmodifier);
        break;
      case 2:
        textmodifier = new ExclamationMarkDecorator(textmodifier);
        break;
      case 3:
        textmodifier = new FirstVowelsReomvalModifier(textmodifier);
        break;
      case 4:
        console.log(textmodifier.modify());
        process.exit(0);
        break
      default:
        console.log('Command doesn\'t exist');
        break;
    }

    programLoop(textmodifier);
  })
}

app();
