const accountNo = 20955550461
let accountName = "bhupendra verma"
var accountPassword = "9585dgyg56sdf"
accountCity = "lakhimpur"
// accountNo = 76
console.log(accountNo); 
accountName = "Akash Verma"
accountPassword = "vcjhv625v3qf"
accountCity = "lucknow"
console.table([accountNo,accountName,accountPassword,accountCity]) //to print data in table form

//var in not prefered to use it make issue of scope.
//without declaring a datatype we can make an variable with asigning value.
// var don't know scope { }
//const variable can't change
//let is prefers to use

// "use strict" treat code as newer version.
// console.alert("hello")
//Data Types
//Number
//bigint
//String 
//boolean
//null //it also a stand alone value which is null type
//undefine //value is not defined
//Symbol //used for unique
//object
//array

//'typeof'  to check datatypes used
console.log(typeof undefined) //output is undefined
console.log(typeof null); //output is object

// let score = 933
// console.log(score);
// var  scoreInNumber =Number(score)
// console.log(typeof scoreInNumber);
// console.log(scoreInNumber);

// let score = "58he"
// console.log(score);
// var  scoreInNumber =Number(score)
// console.log(typeof scoreInNumber); //number
// console.log(scoreInNumber); //Nan

// let score = "Bhuvie"
// console.log(score);
// var  scoreInNumber =Number(score)
// console.log(typeof scoreInNumber); //number
// console.log(scoreInNumber); //Nan

// let score = null
// console.log(score);
// var  scoreInNumber =Number(score)
// console.log(typeof scoreInNumber); //number
// console.log(scoreInNumber); //0

// let score = undefined
// console.log(score);
// var  scoreInNumber =Number(score)
// console.log(typeof scoreInNumber); //number
// console.log(scoreInNumber); //NaN

let score = NaN
console.log(score);
var  scoreInNumber =Number(score)
console.log(typeof scoreInNumber); //number
console.log(scoreInNumber); //NaN 

let name="bhupendra"
let contact = 8953839475
console.log(`my name is ${name.toUpperCase()} and my contact no is ${contact}`)

const myName=new String("   Bhupendra verma    ");
console.log(myName);
console.log(myName.charAt(6));
console.log(myName.indexOf('e'));
console.log(myName.toUpperCase());
console.log(myName.length);
const newString=myName.substring(0,8)
const newString1=myName.slice(0,9)
console.log(newString);
console.log(newString1);
console.log(myName.trim());
console.log(myName.trimStart());
console.log(myName.trimEnd());

let url = "https://bhuvie.com/%bhuvie%verma"
console.log(url.replace('%',""));//it replace the first % symbol only
console.log(url.replace(/%/g,""));//it replace all % in the URL
let str="hello bhuvie how are you";
console.log(str.split(" "));

