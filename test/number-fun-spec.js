const assert = require('assert')
const { returnsThree, reciprocal } = require("../problems/number-fun")

describe("returnsThree()", ()=> {
    it('function returns 3', () =>{
        assert.strictEqual(returnsThree(), 3)
    })
})

describe("reciprocal()", () =>{
    context("if number is valid", () => {

        it('returns reciprocal of number', () =>{
            let = test1 = 5;
            let = expected1 = 1/5;

            let test2 = 10;
            let expected2 = 1/10;

            assert.strictEqual(reciprocal(test1), expected1);
            assert.deepEqual(reciprocal(test2), expected2);
        })

    })

    context("number is invalid", () => {
        it('should throw error', ()=> {
            assert.throws(()=>{reciprocal(.5)}, TypeError);
            assert.throws(()=> {reciprocal(1000000000)}, TypeError);
        })
    })

})
