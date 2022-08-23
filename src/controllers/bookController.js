
const bookModels = require('../models/bookModels');
const bookModel = require('../models/bookModels')

const createBook = async function (req, res){
    const data = req.body;
    const savedData = await bookModel.create(data);
    res.send({"status": true, "msg": savedData})
}

const getBook = async (req,res) => {
    const data = await bookModels.find()
    res.send({"status": true, "msg": data})

}

// module.exports.createBook = createBook
// module.exports.getBook= getBook

module.exports = {createBook, getBook}
