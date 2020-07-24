class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        return `Hello ${this.name}`
    }

    visit(person) {
        return `${this.name} visited ${person.name}`;
    }

    switchVisit(person) {
        return person.visit(this);
    }

    update(obj) {
        if (typeof obj !== "object") throw new TypeError("argument must be object");
        if (obj.name === undefined || obj.age === undefined) throw new TypeError("argument must have 'age' and 'name' properties")
        this.name = obj.name;
        this.age = obj.age;
    }
}

module.exports = Person
