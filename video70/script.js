console.log("raghav")

// let boxes = document.getElementsByClassName("box")
let boxes = document.querySelector(".container").children
console.log(boxes)




function getRandomBgColor(){
    let val1 = Math.floor(Math.random()*255);
    let val2 = Math.floor(Math.random()*255);
    let val3 = Math.floor(Math.random()*255);

    return `rgb(${val1},${val2},${val3})`

}
function getRandomColor(){
    let val1 = Math.floor(Math.random()*255);
    let val2 = Math.floor(Math.random()*255);
    let val3 = Math.floor(Math.random()*255);

    return `rgb(${val1},${val2},${val3})`

}
Array.from(boxes).forEach(e =>{
e.style.backgroundColor = getRandomBgColor()
e.style.color = getRandomColor()
})