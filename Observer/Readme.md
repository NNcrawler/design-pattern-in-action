# Observer
Coordination service is an example of observer pattern in action, such as Zookeeper. It has capability of notifying state changes to list of listener.

## Mini broadcaster
As an example I'm going to implement broadcaster. Following are the requirement:
- Have an Object call Brocaster. Broadcaster can register listener and send message.
- When message are sent action method will be called with message as params.
- Listener needs to follow action(\<message>) signature.

## How to run
```
npm start
```
### Available commands
- add-listener \<channel> shout \<listener-name>
- add-listener \<channel> repeater \<repat-times> \<listener-name>
- send-message \<channel> \<message>

## Example
```
>Action : add-listener channel-1 shout some-shouter
>Action : add-listener channel-1 repeater 3 3-times-repeater
>Action : send-message channel-1 some-message
```