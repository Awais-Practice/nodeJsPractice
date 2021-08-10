const EventEmitter = require("events");
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on("test", () => console.log("event fired "));
myEmitter.emit("test");
