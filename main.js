// const fs = require("fs");
// fs.readFile("./hi.txt", "utf8", (err, data) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(data);
// });

// const fs = require("fs");
// fs.readFile("./hi.txt", "utf8", (err, data) => {
//     if(err){
//         console.log(err);
//     }
//     for (let i = 0; i < 5; i++) {
//         console.log(data); 
//     }
// });

// let sum = 0;
// function num1AndNum2 (num1, num2){
//     sum = num1+num2
//     console.log(sum);
// }
// num1AndNum2 (4, 5);

// var os = require('os');
// console.log("Platform: " + os.platform());
// console.log("Architecture: " + os.arch()); 

// const fs = require("fs");
// fs.readFile("./hi.txt", "utf8", (err, data) => {
//     if(err){
//         console.log(err);
//     }
//     const chalk = require("chalk");
//     console.log(chalk.blue("sync:", data));;
// });

// const data = fs.readFileSync("hi.txt", "utf8");
// console.log(chalk.blue("sync:", data));
// console.log("this is after");

// fs.appendFile("hi.txt", "with node.js", err =>{
//     if(err){
//         console.log(err);
//     }
// })

// fs.appendFileSync("hi.txt", "with node.js sync")

// const fs = require("fs");
// fs.readFile("./hi.txt", "utf8", (err, data) => {
//     if(err){
//         console.log(err);
//     }
//     const chalk = require("chalk");
//     console.log(chalk.red("sync:", data));;
// });

// var debug = require('debug')('http')
// var http = require('http')
// var name = 'My App';

// debug('booting %o', name);

// http.createServer(function(req, res){
//   debug(req.method + ' ' + req.url);
//   res.end('hello\n');
// }).listen(3000, function(){
//   debug('listening');
// });

// require('./worker');

// function num1AndNum2 (num1, num2){
//     let sum
//     sum = num1+num2
//     return sum;
// }
// console.log(num1AndNum2 (4, 5));

// function num1TimeNum2 (num1, num2){
//     let sum
//     sum = num1*num2
//     return sum;
// }
// console.log(num1TimeNum2 (4, 5));

// function num1MiNum2 (num1, num2){
//     let sum
//     sum = num1-num2
//     return sum;
// }
// console.log(num1MiNum2 (6, 5));

// function num1DiNum2 (num1, num2){
//     let sum
//     sum = num1/num2
//     return sum;
// }
// console.log(num1DiNum2 (28, 14));

// const sumFunction = require("./modules.js");
// console.log(sumFunction.logSumFunction(9,5));

// const multiFunction = require("./modules.js");
// console.log(multiFunction.logMultiFunction(10,6));

// const miFunction = require("./modules.js");
// console.log(miFunction.logMiFunction(11,7));

// const diFunction = require("./modules.js");
// console.log(diFunction.logDiFunction(12,4));

// const logFunction = require("./modules");

// logFunction.logFunction("problem");

// const addTextFunction = require("./modules.js")
// addTextFunction.addTextFunction("add new info");
// addTextFunction.addTextToFileFunction("brande new info");

// console.log(addTextFunction.logAsyncFunction("./only text.txt")); 

// console.log(addTextFunction.logSyncFunction("only text.txt"));

// ////
// השימוש במודולים צד שלישי חוסך בזמן

