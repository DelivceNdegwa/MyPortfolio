let x = 10.5;
let y = 10;
let salutation = "Hello Javascript";
let isWednesday = false;
let fruits = ["orange", "pineapple", "apple", "mangoes"];
let studentsMap = new Map();


function displaySum(){
var sum = x+y;
return sum;
}

function displaySalutation(name){
alert("Hello "+name);
}

function bakeCake(cakeType, numOfKgs, occasion){
    var bakeMessage = "You are baking a "+cakeType+" cake of "+numOfKgs+"kgs, for a "+occasion+" occasion.";
    return bakeMessage;
}

//[Create a function, that will take in the name of a user and display to them the date today]

//alert(displaySum());
//displaySalutation("Del");
alert(bakeCake(10, "black forest", "graduation"));

