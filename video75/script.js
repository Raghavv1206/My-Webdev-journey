console.log("harry is a hacker")
console.log("rohan is a hecker");

setTimeout(()=>{
    console.log("i am inside settimeout");
},0);

setTimeout(()=>{
    console.log("i am inside settimeout2");
},0);

console.log("the end")

const callback = (arg) => {
    console.log(arg)
}

const loadscript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
        sc.onload = callback("harry");
        document.head.append(sc)
    
  
}

loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)
