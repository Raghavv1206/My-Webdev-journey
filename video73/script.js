function views1(views){
        let viewStr = views.toString(); 
        let m = Math.floor(views / 1000000);
        let k = Math.floor(views / 1000);
    
        if (viewStr.length >= 7) {
            return `${m}M views`;
        } else if (viewStr.length >= 4) {
            return `${k}K views`;
        } else {
            return `${views} views`;
        }
    }

function monthsold1(monthsold){
    let mon1 = Math.floor(monthsold/12);
    let mon2 = monthsold
    if(monthsold==1){
        return `${mon2} Month ago`;
    }
    else if(monthsold<12){
        return `${mon2} Months ago`;
    }
    else if(mon1==1){
        return`${mon1} year old`
    } 
    else{
        return `${mon1} years old`;
    }
}
function createCard1(title, cName, views, monthsold, duration, thumbnail) {

    let cont = document.querySelector(".container")
    cont.insertAdjacentHTML("afterbegin", `
    <div class="card">
        <img src="${thumbnail}" alt="thumbnail">
        <div class="side">
            <div class="title">${title}</div>
            <div class="info">
                <ul>
                    <li class="cName">${cName}</li>
                    <li class="views">${views1(views)}</li>
                    <li class="monthsold">${monthsold1(monthsold)}</li>
                </ul>
            </div>
            <span class="time">${duration}</span>
        </div>
    </div>
   `)
}

function createCard(title, cName, views, monthsold, duration, thumbnail){
    views1(views);
    monthsold1(monthsold);
    createCard1(title, cName, views, monthsold, duration, thumbnail);

}

createCard("introduction to backend | sigma web dev video #1", "CodeWithHarry", 56000000, 25, "31:22", "hqdefault.avif")
createCard("introduction to backend | sigma web dev video #2", "CodeWithHarry", 56, 2, "31:00", "hqdefault.avif")
createCard("introduction to backend | sigma web dev video #3", "CodeWithHarry", 567367, 32, "31:00", "hqdefault.avif")