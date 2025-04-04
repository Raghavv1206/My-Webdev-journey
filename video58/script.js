function nice(name){
    console.log("hey " + name + "you are nice!");
    console.log("hey " + name + "you are nice!");
    console.log("hey " + name + "you are good!");
    console.log("hey " + name + "your tshirt is nice!");
    console.log("hey " + name + "your course is good too!");
}

function sum(a,b, c=3){
    // console.log(a+b)
    return a+b;
}

// nice("raghav")
// nice("hanu")

// sum(3,5)

result1= sum(3,5);
result2= sum(7,5);
result3= sum(3,13,1);
console.log("the sum of these number is ",result1)
console.log("the sum of these number is ",result2)
console.log("the sum of these number is ",result3)


const func1 = (x)=>{
console.log("i am an arrow function", x)
}

func1(34);
func1(66);
func1(84);