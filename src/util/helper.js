let date = function () {
    let today = new Date()
    console.log(today.getDate());
}

let month = function () {
    let today = new Date()
    console.log(today.getMonth()+1);
}

let getBatchInfo = function () {
    console.log("Plutonium, Week3,Day5, the topic for today is Nodejs module system");
}

module.exports.date = date
module.exports.month = month
module.exports.getBatchInfo = getBatchInfo