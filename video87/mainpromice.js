import fs from 'fs/promises'

let a = await fs.readFile("raghav2.txt")

let b = await fs.appendFile("raghav2.txt" , "\n \n \n \n this is amazing promise")

console.log(a.toString(), b)