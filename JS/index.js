// NOT JAVA
// Both Object Oriented and Functional programming

// scripting language
// console.log("Hello World!")

function sayHello(name, age) {
    console.log(`Hello ${name}, you are ${age} year(s) old!`); //template literal
    console.log("Hello " + name + ", you are " + age + " year(s) old!"); // basic
}

// sayHello("Brandon", 99);

// Variables
// var, global scoped - only use these for GLOBAL VARIABLES, if at all
function scopeShenanigans(){
    var me = "Brandon";
    console.log(me);
}
me = "you";
// scopeShenanigans();

// let, block scoped - function variables, mutable
function letFunction() {
    let example = "this is a let variable";
    console.log(example);
}
// letFunction();

// const, block scoped ALWAYS THE ORIGINAL VALUE, immutable
const pi = 3.14;
// pi = 3; // not allowed
// console.log(pi);


function impossible(person) {
    if (person == undefined) {
        console.log("This if statement will only evaluate true if the person is null/undefined");
    }
    if (person) {
        console.log("This will not run if the value is undefined or null as well as '', 0, -0")
    }
}

// impossible(-0);


function varFunction() {
    // variable hoisting
    // var x;
    // All variable declarations are moved to the top of their scope
    console.log(x);
    if (2 == 2) {
        var x = 'x';
        console.log(x);
    }
}
// varFunction();

function letFunction2() {
    // console.log(x); // still hoisted but not accessible
    if (2==2) {
        let x = 'x'; // block scoped
        console.log(x);
    }
}
// letFunction2();