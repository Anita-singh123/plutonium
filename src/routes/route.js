const { log } = require('console');
const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

// router.get('/test-me', function (req, res) {
//     console.log('My batch is', abc.name)
//     abc.printName()
//     logger.welcome()

//     res.send('My second ever api!')
// });

// router.get('/students', function (req, res){
//     let students = ['Sabiha', 'Neha', 'Akash']
//     res.send(students)
// })

// router.get('/student-details/:name', function(req, res){
/*
params is an attribute inside request that contains 
dynamic values.
This value comes from the request url in the form of an 
object where key is the variable defined in code 
and value is what is sent in the request
*/

//let requestParams = req.params

// JSON strigify function helps to print an entire object
// We can use any ways to print an object in Javascript, JSON stringify is one of them
// console.log("This is the request "+ JSON.stringify(requestParams))
// let studentName = requestParams.name
// console.log('Name of the student is ', studentName)

// res.send('Dummy response')

// router.get('/movies', function (req,res){
//     let arr=['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
//     res.send(arr)
// })


// router.get('/movies/:indexNumber', function (req,res){
//     let params=req.params
//     let result= params.indexNumber
//     // console.log(result);

//     let arr = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
//     if(result>=arr.length){
//         res.send("this indexNumber is not present")
//     }
//     res.send(arr[result]);
// })


// router.get('/films', function (req,res){
//     let arr=[ {
//         id: 1,
//         name: "The Shining"
//        }, {
//         id: 2,
//         name: "Incendies"
//        }, {
//         id: 3,
//         name: "Rang de Basanti"
//        }, {
//         id: 4,
//         name: "Finding Nemo"
//        }]

//        res.send(arr)
// })

// router.get('/films/:filmId', function (req,res){
//     let params= req.params
//     let result = params.filmId
//     //console.log(result);
//     let arr=[ {
//         id: 1,
//         name: "The Shining"
//        }, {
//         id: 2,
//         name: "Incendies"
//        }, {
//         id: 3,
//         name: "Rang de Basanti"
//        }, {
//         id: 4,
//         name: "Finding Nemo"
//        }]
//      for(let i of arr){
//         if(i.id==result){
//             res.send(i)
//         }
//      }
//      res.send("this is not find")

// })

router.get("/sol1", function (req, res) {
    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
    let array = [1, 2, 3, 4, 5, 7, 8, 9,]
    let x = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== x) {
            console.log(x);
            break;
        }
        x++;
    }
});



//logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
router.get("/sol2", function (req, res) {
    let array = [33, 34, 35, 37, 38, 39];
    let x = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== x) {
            console.log(x);
            break;
        }
        x++;
    }
});





module.exports = router;