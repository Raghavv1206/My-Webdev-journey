const fs = require("fs")

// console.log(fs)

console.log("starting");
// fs.writeFileSync("raghav.txt", "raghav is a good boy")

fs.writeFile("raghav2.txt", "raghav is a good boy ", ()=>{
    console.log("done");
    fs.readFile("raghav2.txt", (error, data)=>{
        console.log(error, data.toString())
    })
})

fs.appendFile("raghav2.txt" , "raghav" , (e , d)=>{
    console.log(d)
})
console.log("ending")