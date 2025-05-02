console.log("THIS IS PROMISES") 

let prom1 = new Promise((resolve, reject)=>{
    let a = Math.random();
    if(a < 0.5){
        reject("no random number is not supporting you")
    }
    else{
        setTimeout(()=>{
            console.log("yes i am done")
            resolve("harry")
        }, 3000);

    }
})
let prom2 = new Promise((resolve, reject)=>{
    let a = Math.random();
    if(a < 0.5){
        reject("no random number is not supporting you 2")
    }
    else{
        setTimeout(()=>{
            console.log("yes i am done 2")
            resolve("harry 2")
        }, 1000);

    }
})

// prom1.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//     console.log(err)
// })

let p3 = Promise.race([prom1, prom2])
p3.then((a) => {
    console.log(a)
}).catch((err) => {
    console.log(err)
});