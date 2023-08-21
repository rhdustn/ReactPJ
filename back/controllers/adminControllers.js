const {User} = require("../models")

// 모든 유저 정보 가져오기
exports.getUsers = async (req, res) => {
    try {
        const data = await User.findAll();
        console.log(data);
        res.json(data);
    } catch (error) {
        console.log(error)
    }
}

// 승인
exports.authUser = async (req, res) => {
    const user_id = req.params.id;
    try {
        const user = await User.findAll({where : {user_id}})
        await User.update({is_accept : true}, {where : {user_id}})
        res.json("success")
    } catch (error) {
        console.log(error);
    }
}

// 강등
exports.unauthUser = async (req, res) => {
    const user_id = req.params.id;
    try {
        const user = await User.findAll({where : {user_id}})
        await User.update({is_accept : false}, {where : {user_id}})
        res.json("success")
    } catch (error) {
        console.log(error);
    }
}

// 거절 & 삭제
exports.deleteUser = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
    }
}