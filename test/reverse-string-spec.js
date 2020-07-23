const chai = require('chai')
const spies = require('chai-spies')
const expect = chai.expect;
chai.use(spies)

const reverseString = require('../problems/reverse-string')

describe("reverseString()", () => {
    it("should return input string, reversed", () => {
        let input = "fun";
        let output = "nuf";

        expect(reverseString(input)).to.equal(output);
    })

    it("should throw error when passed non-string", ()=> {
        expect(() => reverseString([1, 2, 3])).to.throw(TypeError)
    })

})
