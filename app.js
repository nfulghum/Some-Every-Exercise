// some every exercise
// hasOddNumber
function hasOddNumber(arr) {
    return arr.some(function (num) {
        return num % 2 !== 0;
    })
}

// hasAZero
function hasAZero(num) {
    return num.toString().split('').some(function (val) {
        return val === '0';
    })
}

// hasOnlyOddNumbers
function hasOnlyOddNumbers(arr) {
    return arr.every(function (num) {
        return num % 2 !== 0;
    })
}

// hasNoDuplicates
function hasNoDuplicates(arr) {
    return arr.every(function (val) {
        return arr.indexOf(val) === arr.lastIndexOf(val);
    })
}

// hasCertainKey
function hasCertainKey(arr, key) {
    return arr.every(function (val) {
        return val[key];
    })
}

// hasCertainValue
function hasCertainValue(arr, key, value) {
    return arr.every(function (val) {
        return val[key] === value;
    })
}