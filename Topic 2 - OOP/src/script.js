import {EventEmitter} from "./EventEmitter.js";
import {Actor} from "./Actor.js";
import {Movie} from "./Movie.js";
import {Logger} from "./Logger.js";

let sw = new Movie("sw", 13, 13);
let logger = new Logger();
sw.on("play", logger.log);
sw.play();