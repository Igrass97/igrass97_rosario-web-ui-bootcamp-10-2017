export class EventEmitter {
  constructor(){
    this._events = {};
  }

  on(eventName, callback) {
    //If the event already exists, add a new callback.
    if (this._events[eventName]){
      this._events[eventName].push(callback);
    } else {
      //If doesn't, create a new array with the name of the event and the callback as first element.
      this._events[eventName] = [callback];
    }
  }

  //The ...rest arguments, are passed to the callback function.
  emit(eventName, ...rest) {
    if (this._events[eventName]) {
      this._events[eventName].forEach((callback) => {
        callback(rest);
      });
    } else {
      console.log("The event doesn't exists.");
    }
  }

  off(eventName, callback){
    if (this._events[eventName]){
      let callbacks = this._events[eventName];
      let index = callbacks.indexOf(callback);
      if (index !== -1){
        callbacks.splice(index, 1);
      } else {
        console.log("Callback not found.")
      }
    } else {
      console.log("Event doesn't exists.");
    } 
  }
}

