class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        return `Hello ${this.name}`
    }
}

module.exports = Person
