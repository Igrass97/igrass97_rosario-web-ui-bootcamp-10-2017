class EventEmmiter {
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

  emit(eventName) {
    if (this._events[eventName]) {
      this._events[eventName].forEach((callback) => {
        callback.apply(this);
      });
    } else {
      console.log("The event doesn't exists");
    }
  }

  off(eventName, callback){
    let callbacks = this._events[eventName];
    let index = callbacks.indexOf(callback);
      callbacks.splice(index, 1);
      console.log(index);
  }
}

class Movie extends EventEmmiter{
  constructor(title, duration, year){
    super();
    this._title = title;
    this._duration = duration;
    this._year = year;
  }

  play() {
    this.emit("play");
  }
  pause() {
    this.emit("pause");
  }
  resume() {
    this.emit("resume");
  }
  
}

function start(){
  console.log("Movie " + this._title + " started");
}

let sw = new Movie("sw", 126, "1993");

sw.on("play", start );

sw.play();

console.log(sw);

sw.off("play", start);