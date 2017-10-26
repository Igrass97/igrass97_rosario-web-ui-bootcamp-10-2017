"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = function () {
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

module.exports = EventEmitter;