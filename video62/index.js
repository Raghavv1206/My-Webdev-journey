// Create a business name generator by combining list of adjectives and shop name and another word

// adjectives:
// crazy
// amazing 
// fire 

// Shop Name:
// Engine
// Foods
// Garments

// Another Word:
// Bros
// Limited 
// Hub

function adj(){
    if(random1==1){
        return "crazy";
    }
    else if(random1==2){
        return "amazing";
    }
    else if(random1==3){
        return "fire";
    }
    else{
       console.log("no value")
    }
}
function SN(){
    if(random2==1){
        return "Engine";
    }
    else if(random2==2){
        return "Foods";
    }
    else if(random2==3){
        return "Garments";
    }
    else{
       console.log("no value")
    }
}
function AW(){
    if(random3==1){
        return "Bros";
    }
    else if(random3==2){
        return "Limited";
    }
    else if(random3==3){
        return "Hub";
    }
    else{
       console.log("no value")
    }
}


random1 = Math.floor(Math.random()*3)+1;
random2 = Math.floor(Math.random()*3)+1;
random3 = Math.floor(Math.random()*3)+1;

Adjectives = adj();
ShopName = SN();
AnotherWord = AW();


console.log("this is name generator");
console.log(`the name is ${Adjectives} ${ShopName} ${AnotherWord}`);

