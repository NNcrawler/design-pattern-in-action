# Observer
Coordination service is an example of observer pattern in action, such as Zookeeper. It has capability of notifying state changes to list of listener.

## Mini broadcaster
As an example I'm going to implement broadcaster. Following are the requirement:
- Have an Object call Brocaster. Role of broadcaster is maintaining list of listener on a channel.
  - Broadcaster(channel, message)
  - Listen(channel, listenerObj)
  - Unlisten(listenerObj)
- Listener that have action() method.
