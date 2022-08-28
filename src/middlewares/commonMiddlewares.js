
const mid1 = function (req, res, next) {
    let data = req.headers.isFreeAppUser
    if (data) {
        req["isFreeAppUser"]=data
        next()
    }
    else {
        return res.send({ msg: "the request is missing a mandatory header" })
    }
}

module.exports.mid1 = mid1


