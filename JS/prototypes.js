/**
 * prototypes are JS means of incoperating inheritance into their language.
 * 
 * prototype - functions prototype ,,, ALL
 * __proto__ - objects prototype ,,, Individual
 */

// constructor function
// was used before ES6 for OOP when there wasn't class syntax added yet
function Animal(name, age) {
    this.name = name;
    this.age = age;
}

// essentially in JS we can treat functions as though they were a class
Animal.prototype.toString = function() {
    return `Animal: ${this.name}, ${this.age}`;
}
const ani = new Animal("dog", 2); // this is just like the objects we used before
console.log(ani.toString());

ani.favoriteFood = "Steak";
console.log(ani)
console.log(ani.__proto__ === Animal.prototype)

function Dog(name, age, owner) {
    Animal.call(this, name, age); // : base(name, age) in c#
    this.owner = owner;
}
const dog = new Dog("Jessica", 15, "Brandon");
console.log(dog);