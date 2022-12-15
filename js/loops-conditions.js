// Loops
/*
- These are statements that help us iterate through
a particular set of code/function, until a 
condition is met.

There are different types of loops namely:
1. while loop:
    Syntax: while(condition){
        // Code to be executed
    }

2. Typical forloop:
    Syntax: for(initialization; condition; increment){
        //code to be executed
    }

3. do-while

4. for-in loop: Used to loop through a list. It identifies
keys/indexes in a list.
    Syntax: for(var item in list){
        // code to be executed for each item
    }

5. for-of loop: Used to loop through lists too.
It shows the item values, rather than showing
the item key/index like the for-in.
    Syntax: for(var item of list){
        // code to be executed for each item
    }

6. .forEach() loop: It is used to loop through 
lists. It can identify both the key/index and the
value of an item in a list.
    Syntax: listName.forEach((value, key) => {
        // code to be executed for each item
    });

*/

function demonstrateWhileLoop(x){
    var i = 0;
    while(i < x){
        console.log("Friday!!!!");
        i++;
    }
}

function demonstrateForLoop(x){
    for(let i=0; i<x; i++){
        console.log("Number "+i);
    }
}

function demonstrateForInLoop(list){
    for(var item in list){
        console.log(list[item]);
    }
}

function demonstrateForOfLoop(list){
    for(var item of list){
        console.log(item);
    }
}

function demonstrateForEach(list){
    list.forEach((value, key) => {
        console.log("Key= "+key+" Value= "+value);
    });
}
/* TODO: Go look at:
     1. anonymous functions in js
     2. arrow functions in js
     3. How to import files in javascript: try import loops-conditions.js into app.js
*/

let myArray = ["apple", "samsung", "oppo", "Huawei", "Nokia"];
let randomObjects = ["apple", "mangoes", "duster", "clothe", "windows"];

randomObjects.forEach((value)=>{
    value += "s";
    console.log(value);
});


