const chai = require('chai')
const spies = require('chai-spies')
const expect = chai.expect;
chai.use(spies)

const Person = require('../problems/person')

describe("Person class", () => {
    let person;
    let person2;
    let name2 = "bob"
    let age2 =35
    let name = "molly"
    let age = 30;

    beforeEach("create new person", () => {
        person = new Person(name, age);
        person2 = new Person()
    })
    describe("constructor", () => {
        it("should have constructor that sets name and age", ()=> {
            expect(person).to.have.property('name');
            expect(person).to.have.property('age');
        })

        it("should have constructor that sets name and age to constructor", () => {
            expect(person.name).to.eql(name);
            expect(person.age).to.eql(age)
        })
    })

    describe("instance methods", ()=> {
        describe("prototype.sayHello()", () => {
            it("should return `Hello ${name}`", () => {
                let expected = `Hello ${name}`;
                let huh = person.sayHello();
                expect(huh).to.eql(expected);
            })
        })

        describe("prototype.visit()", ()=> {
            it("should return string visited the passed-in instance Person", () =>{

            })
        })
    })



})
