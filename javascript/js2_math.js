console.log("hello world!");
const score=new Number(50000000)
const score1=500;
console.log(typeof score) //object
console.log(typeof score1) //number

console.log(score.toFixed(5)) //500.00000
console.log(score.toString().length)
console.log(score.toLocaleString())
console.log(score.toLocaleString('en-IN'))

console.log(`Math.abs(05785) : ${Math.abs(-5785)}`); //give positive no.
console.log(`Math.round(25.65) : ${Math.round(25.65)}`);
console.log(`Math.floor(315.25) : ${Math.floor(315.85)}`);
console.log(Math.ceil(325.142));
console.log(Math.sqrt(5));
console.log(Math.min(60,10,20,80,40,9,20));
console.log(Math.max(60,10,20,80,40,9,20));
console.log(Math.floor(Math.random()*10+1)+1)
console.log(Math.floor(Math.random()*10+1)+1)


///METHOD to make random number between two number
function getRandomNumber(min, max){
    return (Math.floor(Math.random()*(max-min+1)+ min))
}
const randomValue=getRandomNumber(10,100);
console.log(randomValue);
console.log(getRandomNumber(10,100));
console.log(getRandomNumber(10,100));
console.log(getRandomNumber(10,100));
const mydate=new Date()
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleTimeString());
