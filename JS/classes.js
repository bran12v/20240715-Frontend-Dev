/**
 * Class are present in JS but they are essentially just syntatic "sugar" for constructor functions
 */

class Animal extends Object {
    #name;
    #age;

    constructor(name, age) {
        super();
        this.#name = name;
        this.#age = age;
    }

    get name() {
        return this.#name;
    }
    get age () {
        return this.#age;
    }

    set name(name) {
        this.#name = name;
    }
    set age(age) {
        this.#age = age;
    }

    static height = 4;

    static sleep() {
        console.log("Zzzzzzzzzzz");
    }
}

const dog = new Animal("dog", 1);
dog.sleep();