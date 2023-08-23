const {User} = require("../models")

exports.getUserInfo = async (req, res) => {
    const {front_id} = req.decoded;
    console.log(front_id)

    try {
        res.json(front_id)
    } catch (error) {
        console.log(error);
    }
}