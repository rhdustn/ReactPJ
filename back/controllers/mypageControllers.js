const {User} = require("../models")

exports.getUserInfo = async (req, res) => {
    try {
        const {front_id} = req.decoded;
        const user = await User.findOne({where : {user_id : front_id}})
        console.log(user);
        res.json(user)
    } catch (error) {
        console.log(error);
    }
}