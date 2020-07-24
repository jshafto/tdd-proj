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

    let newName = 'velma';
    let newAge = 12;
    beforeEach("create new person", () => {
        person = new Person(name, age);
        person2 = new Person(name2, age2);
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
                let result = person.sayHello();
                expect(result).to.eql(expected);
            })
        })
        describe("prototype.visit()", ()=> {
            it("should return string person visited the passed-in instance Person", () =>{
                let expected = `${name} visited ${name2}`;
                let result = person.visit(person2);
                expect(result).to.eql(expected);
            })
        })

        describe("prototype.switchVisit()", () => {
            it("should return string passed-in instance Person visited person", ()=> {
                let expected = `${name2} visited ${name}`;
                let result = person.switchVisit(person2);
                expect(result).to.eql(expected);
            })
            it("should call the visit method", () => {
                let visitSpy = chai.spy.on(person2, 'visit');
                person.switchVisit(person2);
                expect(visitSpy).to.have.been.called.once;
            })
        })

        describe("prototype.update()", () => {
            context("if argument is not an object", ()=>{
                it("returns TypeError", () => {
                    expect(()=> {person.update("watman")}).to.throw(TypeError);
                })
            })
            context("if argument is an object that doesn't have both a name and age property", ()=>{
                it("returns TypeError", () => {
                    expect(()=> {person.update({name: "phil"})}).to.throw(TypeError);
                })
            })
            context("if argument is an object", () => {
                it("should be updated to match the passed-in object's values", () => {
                    person.update({name: newName, age: newAge});
                    expect(person.name).to.eql(newName);
                    expect(person.age).to.eql(newAge);
                })
            })
        })

        describe("prototype.tryUpdate()", ()=> {
            context("if prototype.update is successfully invoked", ()=> {
                it("should return true", ()=> {
                    let attempt = person.tryUpdate({name: newName, age: newAge});
                    expect(attempt).to.be.true;
                })
                it("should have been updated", () => {
                    person.tryUpdate({name: newName, age: newAge});
                    expect(person.name).to.eql(newName);
                    expect(person.age).to.eql(newAge);
                })
            })
            context("if prototype.update is not successful", () => {
                it("should return false", () => {
                    let attempt = person.tryUpdate({name: "phil"});
                    expect(attempt).to.be.false;
                })
            })
        })



    })
    describe("static methods", () => {
        describe("greetAll()", () => {
            it("should return an array with the sayHello string for each person in array", () => {
                let inputArr = [person, person2];
                let expected = [person.sayHello(), person2.sayHello()];

                expect(Person.greetAll(inputArr)).to.eql(expected);

            })
        })
    })




})
