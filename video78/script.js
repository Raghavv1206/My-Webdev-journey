

const additem = async (item)=>{
    await randomdelay();
    let div = document.createElement("div");
    div.innerHTML = item;
    document.body.append(div)

}
const randomdelay = ()=>{
    return new Promise((resolve, reject) => {
        timeout = Math.floor(Math.random()*6)+1;
        setTimeout(()=>{
            resolve()
        },timeout*1000)
    })
}

async function main() { 

    let t = setInterval(()=>{
        let last = document.body.lastElementChild;
        if(last.innerHTML.endsWith("...")){
            last.innerHTML = last.innerHTML.slice(0,last.innerHTML.length-3)
        }
    else{
        last.innerHTML = last.innerHTML + "."

}
    },200);
    

let text=["initializing hacking","reading your files detected","password file detected","sending all passwords and personal files to server","cleaning up"]

for(const item of text){
    await additem(item)
}
await randomdelay()
clearInterval(t);
}

main()