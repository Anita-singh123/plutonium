const express = require('express');
const _ = require('underscore')
const lodash = require('lodash')

const abc = require('../introduction/intro')
const loggerModule = require('../logger/logger.js')
const formatterModule = require('../validator/formatter')
const helperModule = require('../util/helper')
const router = express.Router();

router.get('/test-me', function (req, res) {
    let month = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
    console.log(lodash.chunk(month, 3));

    let oddNumber = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    console.log(lodash.tail(oddNumber));

    let num = lodash.union([3, 4, 3, 5, 6, 5, 4, 3], [3, 5, 6, 3, 7, 6], [4, 5, 3, 2, 1, 6, 5, 7], [4, 5, 3, 2, 6, 7, 3, 8], [4, 3, 2, 6, 5, 7, 8, 2])
    console.log(num);

    let frompairs = lodash.fromPairs([['horror','The Shining'],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]])
    console.log(frompairs)

        

    res.send('My second ever api!')
});


router.get('/test-you', function (req, res) {
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data', function (req, res) {

})
module.exports = router;
// adding this comment for no reason