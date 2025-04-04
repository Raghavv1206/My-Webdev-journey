

let random = Math.random()
let a = prompt("Enter first number")
let c = prompt("Enter operation")
let b = prompt("Enter second number")

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**"
}

console.log(random)
// perform correct calculation

if(random > 0.1){
console.log(`The result is ${a} ${c} ${b}`)
alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}

else{
    c = obj[c]
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
}