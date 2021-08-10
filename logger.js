// const EventEmitter = require("events");
// class MyEmitter extends EventEmitter {}
// const myEmitter = new MyEmitter();
// myEmitter.on("event", () => console.log("event was fired"));
// myEmitter.emit("event");
// const EventEmitter = require("events");
// class MyEmitter extends EventEmitter {}
// const myEmitter = new MyEmitter();
// myEmitter.on("myEvent", () => console.log("my event is fired awais"));
// myEmitter.emit("myEvent");

// const path = require("path");
// const os = require("os");
// console.log(path);
// console.log(__dirname);

// const path = require("path");
// const fs = require("fs");

// fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//   if (err) throw err;
//   console.log("folder created succssfully");
// });
// fs.writeFile(
//   path.join(__dirname, "/test", "hello.html"),
//   "hello awais this is test",
//   (err) => {
//     if (err) throw err;
//     console.log("file created succssfully and write");
//   }
// );

// fs.rename(
//   path.join(__dirname, "/test", "test.html"),
//   path.join(__dirname, "/test", "testTwo.html"),
//   (err) => {
//     if (err) throw err;
//     console.log("file renamed successfully");
//   }
// );

const EventEmitter = require("events");

const uuid = require("uuid");

class Logger extends EventEmitter {
  log(msg) {
    this.emit("message", { id: uuid.v4(), msg });
  }
}
// module.exports = Logger;

const Logger = require("./logger");
const logger = new Logger();
logger.on("message", (data) => console.log("this is string data", data));
logger.log("dsdsdsdsdsd");
