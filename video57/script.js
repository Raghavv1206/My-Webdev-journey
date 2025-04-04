console.log("i am a turorial on loops")

let a = 1;
for (let i = 0; i < 100; i++) {
    console.log(a+i);
    
}

let obj = {
    name : "raghav",
    role: "programmer",
    company:"cwh ai"
}
for (const key in obj) {
     {
        const element = obj[key];
        console.log(key)
    }
}

for (const c of "raghav") {
    console.log(c)
}

// let i=0;
// while (i<6) {
//     console.log(i);
//     i++;
// }

// let i=10;
// do {
//     console.log(i);
//     i++;
// } while (i<6);

