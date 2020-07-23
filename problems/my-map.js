const chai = require('chai')
let myMap = (arr, cb) => {
    let newArr = []
    arr.forEach((el) => newArr.push(cb(el)))
    return newArr

};



module.exports = myMap;
