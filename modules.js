// const chalk = require("chalk");
// const logString = (string) =>{
//     console.log(string);
// }
// module.exports.logFunction = logString;

// const num1AndNum2= (num1, num2)=>{
//     return num1+num2;
// }
// module.exports.logSumFunction = num1AndNum2;

// function num1TimeNum2 (num1, num2){
//     return num1*num2;
// }
// module.exports.logMultiFunction = num1TimeNum2;

// function num1MiNum2 (num1, num2){
//     return num1-num2;
// }
// module.exports.logMiFunction = num1MiNum2;

// function num1DiNum2 (num1, num2){
//     return num1/num2;
// }
// module.exports.logDiFunction = num1DiNum2;

// const array = [1,2,3,4,5];
// function arrayOfNum(){
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) { 
//     sum += array[i];
//     }
//     console.log(sum);
//     console.log(chalk.blue(sum));
//     console.log(chalk.bold.yellow(sum));
// }
// arrayOfNum()

// const fs = require("fs");
// function addText (ex1){
//     fs.appendFile("only text.txt", ex1,err=>{
//         if (err) throw err;
//     })
// }

// function logAsync(path) {
//     fs.readFile(path,"utf8",(err,data)=>{
//         if(err){
//             console.log(err);
//         }else{
//             console.log(data);
//         }
//     })
// }


// function logSync(ex3) {
//     console.log(fs.readFileSync(ex3,"shjfbhsdjbh"));
// }

// module.exports.addTextFunction= addText;
// module.exports.logAsyncFunction = logAsync;
// module.exports.logSyncFunction = logSync;

// const fs = require("fs");
// function addTextToFile (ex1){
//     fs.appendFile("only text.txt", ex1,err=>{
//         if (err){
//             console.log(err);
//         }
//     })
// }
// module.exports.addTextToFileFunction = addTextToFile