const chai = require('chai')
const spies = require('chai-spies')
const expect = chai.expect;
chai.use(spies)

const myMap = require("../problems/my-map")

describe("myMap()", () =>{
    let test;
    let cb;

    beforeEach("set up new array", ()=>{
        test = [1, 2, 3, 4]
        cb = (num) => num*2;
    })

    it("does not mutate original array", () =>{
        let original = test.slice()
        myMap(test,cb);
        expect(original).to.eql(test);
    })

    it("does not call Array.map()", ()=>{
        const spyingMap = chai.spy.on(test, "map")
        myMap(test, cb)
        expect(spyingMap).to.not.have.been.called()

    })

    it("ensure passed in callback is invoked once for each element",()=>{
        const spyingCB = chai.spy(cb)
        myMap(test, spyingCB)
        expect(spyingCB).to.have.been.called.exactly(test.length)
    })

    it("applies function to each element in array", () =>{
        let expected = [2, 4, 6, 8]
        expect(myMap(test, cb)).to.eql(expected)
    })


})
