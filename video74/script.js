let button = document.getElementById("btn")

// list of all mouse Events
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events


button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML = "<b>yayy! you were clicked</b> enjoy your click"
})
button.addEventListener("contextmenu", ()=>{
    alert("Dont hack us by right click please")
})
document.addEventListener("keydown", (e)=>{
    console.log(e.key, e.keyCode)
})