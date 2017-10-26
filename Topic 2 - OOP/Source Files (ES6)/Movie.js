import EventEmitter from "./EventEmitter.js";
import Actor from "./Actor.js";

class Movie extends EventEmitter{
  constructor(title, duration, year){
    super();
    this._title = title;
    this._duration = duration;
    this._year = year;
    this._cast = [];
  }

  play() {
    //The first argument is the name of the event, and the second is the argument for the logger.
    this.emit("play", "The event 'play' has been emmited");
  }

  pause() {
    this.emit("pause");
  }

  resume() {
    this.emit("resume");
  }
  
  addCast(cast) {
    //If the argument is an Actor, then push it directly.
    if (cast instanceof Actor){
      this._cast.push(cast);
      //If not, ask if the argument is an array.
    } else if (Array.isArray(cast)) {
      cast.forEach(actor => {
        //If it is an array, then explore the array adding ONLY the Actor objects in it.
        if (actor instanceof Actor){
          this._cast.push(actor);
        } else {
          //Notify when an element in the array is not an actor.
          console.log("The element " + actor + " is not an Actor");
        }
      });
    } else {
      //Notify when the argument is not an actor or an array.
      console.log("The argument is't an Actor or an Array.")
    }
  }
}

module.exports = Movie;