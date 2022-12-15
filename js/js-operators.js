// Arithmetic operators
function modulusCalculator(num1, num2){
    return num1 % num2;
}

// Comparison operators
function greaterThanCalculator(num1, num2){
    return num1 > num2;
}

function comparisonEquivalence(stringA, stringB){
    return stringA == stringB;
}

function isEvenNumber(x){
    var modulusX = modulusCalculator(x,2);
    var isEven = false;

    if(modulusX === 0){
        isEven = true;
    }
    
    return isEven;
}

// Logical operators
function authenticateUser(username, password){
    var defaultUsername = "delivce";
    var defaultPassword = "my_password134";

    if(username === defaultUsername && password === defaultPassword){
        alert("Your credentials have been validated");
    }
    else{
        alert("Incorrect username or password");
    }
}

function orderFood(foodInput){

    var food = foodInput.toLowerCase();
    if(food === "chips" || food === "cake"){
        alert("Food is available.");
    }
    else{
        alert("Sorry we do not have that food currently");
    }
}

function negateStatement(statementValue){
    var negatedValue = !statementValue;
    return negatedValue;
}


/* 
Assignment Operators: They are used to give value to a variable. These values can either be the variable's
initial value, or a modified value
They include: =, +=, *=, /=, -=, %=

NB: A const variable will only work with the '=' assignment operator, and it will only take a value
once, as its nature does not allow it to change in value.
*/
function incrementByN(originalValue, incrementValue){
    originalValue /= incrementValue;
    return originalValue;
}

/* 
Ternary operator: A ternary operator is used to check a true condition in a statement. It works as a 
simplified if else conditional statement
SYNTAX: statement? condition1 : condition2;
Condition 1 will be taken if our statement is true.
Condition 2 will be taken if our statement is false
*/

function checkTruth(definedStatement){
    definedStatement? "This statement is true.": "This statement is false.";
}
/* TODO: 
1. Simplify orderFood logic, to remove the if else statement and replace it with a ternary operator
2. Simplify authenticateUser logic, to remove the if else statement and replace it with a ternary operator
3. Go look at bitwise operators and unary operators
*/

// alert(checkTruth(10>90));

/* Javascript maps */
/* 
A map is used to store items. These items contain a key and a value. The key makes the items to
be easily accessed. So we can only access a value by having its key.

We add values to a map object by using the key function .set(). 
-> Set takes two arguments,the first one is a key and the latter value.

.get(): takes one argument, a key, which will help us obtain the value of a map item
.delete(): takes one argument(a key), which helps us delete an item in our map
Eg: studentDetails.delete("name");

Other functions include: .clear() which removes all items from our map, .has() which helps us identify 
whether a map contains a particular item. 
TODO: Read more on map functions

*/

let studentDetailsObj = {
    name: "Hannah",
    age: 18,
    course: "Bachelor of commerce"
};

let studentDetailsObj2 = {
    name: "Adam",
    age: 21,
    course: "Diplomacy"
}

let studentDetailsObj3 = {
    name: "Mary",
    age: 22,
    course: "Food Science"
}

console.log(studentDetailsObj3.age);

let students = new Map()
students.set(1, studentDetailsObj);
students.set(2, studentDetailsObj2);
students.set(3, studentDetailsObj3);

var student = students.get(3);

alert(student.age);

// TODO: Create a map of your choice, and use .set() and .get() methods to add and read values
