const {User} = require("../models")

exports.getUserInfo = async (req, res) => {
    const {front_id} = req.decoded;
    console.log(front_id)

    try {
        
    } catch (error) {
        console.log(error);
    }
}