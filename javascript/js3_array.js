let myArray=[30,50,90,60,70,40,80,51,32,98,2]
console.log(myArray.includes(50)) //true:available
console.log(myArray.includes(90)) //false:unavailable
console.log(myArray.indexOf(60)) //false:unavailable
console.log(myArray.indexOf(90)) //-1:not found

let newArray=myArray.slice(1,6)
console.log(newArray) //50,90,60,70,40
console.log(myArray) //30,50,90,60,70,40,80,51,32,98,2
let newArray2=myArray.splice(1,6) //trim the original  array and 
console.log(newArray2) //50,90,60,70,40,80
console.log(myArray) //30,51,32,98,2

const userInfo={
    name:{
        userId:"bhupendra",
        userName:{
        fname:"bhuvie",
        lname:"verma",
        },
    },
    userEmail:"well@gmail.com",
}
// console.log(userInfo)
// console.log();
// console.log(userInfo.name)
// console.log();
// console.log(userInfo.name.userName.fname)
// console.log();
// console.log(userInfo.name.userId)
// console.log();
// console.log(userInfo.name.userName)
// console.log();
// console.log(userInfo.name.userName.fname)
// console.log();
// console.log(userInfo.name.userName.lname)
// console.log();
// console.log(userInfo.userEmail)

// const {lname} =userInfo.name.userName//now we can use lname again and again
// console.log(lname);

const {lname:lastName} =userInfo.name.userName//we can also change name of lname
console.log(lastName);

// function sum(num1,num2){
//     console.log(num1+num2);
// }
// const result = sum(2,6)
// console.log(result);//it print undefined bcoz fncs not returning any value
function subtraction(num1,num2){
    return num1-num2
}
const result1 = subtraction(65,6)
console.log("result : ", result1);
console.log(`result : ${result1}`);

function loginmsg(username){
    if(!username){
        console.log(`enter a username`)
        return
    }
    return `Mr. ${username} you have logged in`
}
const msg=loginmsg()
console.log(msg);

function addCartValue(...items) {
    items.forEach()
}