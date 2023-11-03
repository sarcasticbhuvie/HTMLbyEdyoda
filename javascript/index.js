// var myAge=23;
// console.log(myAge)
var people=document.querySelector("h2")
// count.style.color="blue";
var count =0
function increment(){
    console.log("increment")
    count++;
    people.innerHTML=count;
}
function decrement(){
    console.log("decrement")
    count--;
    people.innerHTML=count;
}


