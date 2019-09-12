const readline = require('readline');
const CmdParser = require('../Utils/CmdParser');
const Broadcaster = require('./broadcaster/Broadcaster');
const RepeaterListener = require('./listener/RepeaterListener');
const Shout = require('./listener/ShoutListener');

const rl = readline.createInterface(process.stdin, process.stdout);

const broadcaster = new Broadcaster();

function app() {
  rl.question('Action: ', (input) => {
    const cmdParser = new CmdParser(input);

    const consequences = {
      'add-listener': () => {
        const channel = cmdParser.param(1);
        const type = cmdParser.param(2);
        const args = cmdParser.params(3);
        const listener = listenerParser(type, args);
        
        broadcaster.addListener(channel, listener);
      },
      'send-message': () => {
        const channel = cmdParser.param(1);
        const message = cmdParser.param(2);
    
        broadcaster.sendMessage(channel, message);
      }
    }

    const act = consequences[cmdParser.command()];
    typeof act === 'function' ? act() : console.error('Err: Urecognizable command!');

    app();
  });
}

app();

function listenerParser(type, args) {
  const listeners = {
    repeater: (() =>{
      const echoTimes = parseInt(args[0]);
      const listenerName = args[1];
      return new RepeaterListener(echoTimes, console, listenerName);
    })(),
    shout: (() => {
      const listenerName = args[0];
      return new Shout(console, listenerName);
    })()
  }

  return listeners[type];
}