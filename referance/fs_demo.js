const path = require("path");
const fs = require("fs");
// for folder create
// fs.mkdir(path.join(__dirname, "./test"), {}, (err) => {
//   if (err) throw err;
//   console.log("Folder Created successfully...");
// });

// create file and write too
// fs.writeFile(
// path.join(__dirname, "./test", "hello.html"),
// "Hello world My name is khan",
// (err) => {
//     if (err) throw err;
//     console.log("File created success fully and witten too...");

//     fs.appendFile(
//     path.join(__dirname, "./test", "hello.html"),
//     "this is oppend file test",
//     (err) => {
//         if (err) throw err;
//         console.log("File created success fully and witten too...");
//     }
//     );
// }
// );

// read file

// fs.readFile(
//   path.join(__dirname, "./test", "hello.html"),
//   "utf8",
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }
// );

// file renamed in this way

fs.rename(
  path.join(__dirname, "./test", "awais.html"),
  path.join(__dirname, "./test", "test.html"),
  (err) => {
    if (err) throw err;
    console.log("file renamed successfully");
  }
);
