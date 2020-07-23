let reverseString = (str) => {
    if(typeof str !== "string") {
        throw new TypeError("Must be a string")
    }
    return str.split("").reverse().join("");
};

module.exports = reverseString;
