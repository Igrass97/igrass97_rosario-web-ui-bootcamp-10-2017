"use strict";

var _EventEmitter = require("./EventEmitter.js");

var _EventEmitter2 = _interopRequireDefault(_EventEmitter);

var _Actor = require("./Actor.js");

var _Actor2 = _interopRequireDefault(_Actor);

var _Movie = require("./Movie.js");

var _Movie2 = _interopRequireDefault(_Movie);

var _Logger = require("./Logger.js");

var _Logger2 = _interopRequireDefault(_Logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sw = new _Movie2.default("sw", 13, 13);
var logger = new _Logger2.default();
sw.on("play", logger.log);
sw.play();