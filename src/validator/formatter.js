let trim = function () {
    let name = "   FunctionUp     "
    console.log('trimmed name is ' ,name.trim());
}

let lowerCase = function () {
    let name = "FUNCTIONUP"
    console.log('Name in lowerCase is',name.toLowerCase());
}

let UpperCase = function () {
    let name = "functionup"
    console.log('Name is UpperCase is', name.toUpperCase());
}

module.exports.trim = trim
module.exports.lowerCase = lowerCase
module.exports.UpperCase = UpperCase
