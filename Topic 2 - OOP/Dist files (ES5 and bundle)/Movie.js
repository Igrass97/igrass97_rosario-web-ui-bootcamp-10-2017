"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EventEmitter2 = require("./EventEmitter.js");

var _EventEmitter3 = _interopRequireDefault(_EventEmitter2);

var _Actor = require("./Actor.js");

var _Actor2 = _interopRequireDefault(_Actor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Movie = function (_EventEmitter) {
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
      if (cast instanceof _Actor2.default) {
        this._cast.push(cast);
        //If not, ask if the argument is an array.
      } else if (Array.isArray(cast)) {
        cast.forEach(function (actor) {
          //If it is an array, then explore the array adding ONLY the Actor objects in it.
          if (actor instanceof _Actor2.default) {
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
}(_EventEmitter3.default);

module.exports = Movie;