// global object
console.log(global);

global.setTimeout(() => {
  console.log("Timeout");
  clearInterval(int);
}, 3000);

const int = setInterval(() => {
  console.log("1 second.");
}, 1000);

// current dir
console.log(__dirname);
// current file
console.log(__filename);
