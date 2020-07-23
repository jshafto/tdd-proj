let returnsThree = () => 3;

let reciprocal = (num) => {
    if (num < 1 || num > 1000000) throw new TypeError("Number must be between 1 and 1000000");
    return 1/num;
}



module.exports = {
    returnsThree: returnsThree,
    reciprocal: reciprocal
}
