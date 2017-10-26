(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Actor = exports.Actor = function Actor(name, age) {
  _classCallCheck(this, Actor);

  this._name = name;
  this._age = age;
};

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = exports.EventEmitter = function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    this._events = {};
  }

  _createClass(EventEmitter, [{
    key: "on",
    value: function on(eventName, callback) {
      //If the event already exists, add a new callback.
      if (this._events[eventName]) {
        this._events[eventName].push(callback);
      } else {
        //If doesn't, create a new array with the name of the event and the callback as first element.
        this._events[eventName] = [callback];
      }
    }

    //The ...rest arguments, are passed to the callback function.

  }, {
    key: "emit",
    value: function emit(eventName) {
      for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        rest[_key - 1] = arguments[_key];
      }

      if (this._events[eventName]) {
        this._events[eventName].forEach(function (callback) {
          callback.apply(undefined, rest);
        });
      } else {
        console.log("The event doesn't exists.");
      }
    }
  }, {
    key: "off",
    value: function off(eventName, callback) {
      if (this._events[eventName]) {
        var callbacks = this._events[eventName];
        var index = callbacks.indexOf(callback);
        if (index !== -1) {
          callbacks.splice(index, 1);
        } else {
          console.log("Callback not found.");
        }
      } else {
        console.log("Event doesn't exists.");
      }
    }
  }]);

  return EventEmitter;
}();

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Logger = exports.Logger = function () {
  function Logger() {
    _classCallCheck(this, Logger);
  }

  _createClass(Logger, [{
    key: "log",
    value: function log(info) {
      console.log(info);
    }
  }]);

  return Logger;
}();

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Movie = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EventEmitter2 = require("./EventEmitter.js");

var _Actor = require("./Actor.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Movie = exports.Movie = function (_EventEmitter) {
  _inherits(Movie, _EventEmitter);

  function Movie(title, duration, year) {
    _classCallCheck(this, Movie);

    var _this = _possibleConstructorReturn(this, (Movie.__proto__ || Object.getPrototypeOf(Movie)).call(this));

    _this._title = title;
    _this._duration = duration;
    _this._year = year;
    _this._cast = [];
    return _this;
  }

  _createClass(Movie, [{
    key: "play",
    value: function play() {
      //The first argument is the name of the event, and the second is the argument for the logger.
      this.emit("play", "The event 'play' has been emmited");
    }
  }, {
    key: "pause",
    value: function pause() {
      this.emit("pause");
    }
  }, {
    key: "resume",
    value: function resume() {
      this.emit("resume");
    }
  }, {
    key: "addCast",
    value: function addCast(cast) {
      var _this2 = this;

      //If the argument is an Actor, then push it directly.
      if (cast instanceof _Actor.Actor) {
        this._cast.push(cast);
        //If not, ask if the argument is an array.
      } else if (Array.isArray(cast)) {
        cast.forEach(function (actor) {
          //If it is an array, then explore the array adding ONLY the Actor objects in it.
          if (actor instanceof _Actor.Actor) {
            _this2._cast.push(actor);
          } else {
            //Notify when an element in the array is not an actor.
            console.log("The element " + actor + " is not an Actor");
          }
        });
      } else {
        //Notify when the argument is not an actor or an array.
        console.log("The argument is't an Actor or an Array.");
      }
    }
  }]);

  return Movie;
}(_EventEmitter2.EventEmitter);

},{"./Actor.js":1,"./EventEmitter.js":2}],5:[function(require,module,exports){
"use strict";

var _EventEmitter = require("./EventEmitter.js");

var _Actor = require("./Actor.js");

var _Movie = require("./Movie.js");

var _Logger = require("./Logger.js");

var sw = new _Movie.Movie("sw", 13, 13);
var logger = new _Logger.Logger();
sw.on("play", logger.log);
sw.play();

},{"./Actor.js":1,"./EventEmitter.js":2,"./Logger.js":3,"./Movie.js":4}]},{},[5]);
