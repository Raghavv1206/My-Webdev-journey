// create a faulty calculator using js 
// 1.this take 2 no from user as input 
// 2.it performs wrong operations as follows:

// + ----> -
// * ----> +
// - ----> /
// / ----> **

// it performs wrong operation 10% of the time



function sum(a, b) {
    return a + b;
}
function diff(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}
function expo(a,b){
    return a**b;
}

let random = Math.random()
let num1 = prompt("Enter first number")
let num2 = prompt("Enter second number")
let op = prompt("Enter operation")
let sum1 = sum(num1, num2);
let diff1 = diff(num1, num2);
let mul1 = mul(num1, num2);
let div1 = div(num1, num2);
let expo1 = expo(num1, num2);

if (op="+" && Math.random()>0.1) {
    console.log(sum1)
}
else if(op="+" && Math.random()<0.1){
    console.log(diff1)
}
else if(op="-" && Math.random()>0.1){
    console.log(diff1)
}
else if(op="-" && Math.random()<0.1){
    console.log(div1)
}
else if(op="*" && Math.random()>0.1){
    console.log(mul1)
}
else if(op="*" && Math.random()<0.1){
    console.log(sum1)
}
else if(op="/" && Math.random()>0.1){
    console.log(div1)
}
else if(op="*" && Math.random()<0.1){
    console.log(expo1)
}
else{
    
}
