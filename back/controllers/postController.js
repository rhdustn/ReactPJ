const { User, Board, Comment, Recomment } = require("../models")

// 글 리스트를 보여줄 수 있는 컨트롤러
exports.allBoard = async (req, res) => {
    try {
        const temp = await Board.findAll({ include: [{ model: User }] })
        const data = temp.map((value) => {
            
            return { ...value.dataValues, User: value.dataValues.User.profile_img }
        })
        res.json(data)
    } catch (error) {
        console.log("allboard 오류터짐")
        console.log(error)
    }
}
// 글 리스트를 보여줄 수 있는 컨트롤러
// exports.allBoard = async (req, res) => {
//     try {
//         const data = await Board.findAll({include:[{model:User}]})
//         const newData=data.map((value)=>{
//             return {...value.dataValues,User:value.dataValues.User.profile_img}
//         })
//         res.json({ data, newData })
//         console.log(newData)
//     } catch (error) {
//         console.log("allboard 오류터짐")
//         console.log(error)
//     }
// }

// 글 작성 컨트롤러
exports.createBoard = async (req, res) => {
    const { title, detail } = req.body
    const userId = req.decoded
    const UserFront_id = userId.front_id
    const userinfo = await User.findOne({ where: { user_id: UserFront_id } })
    const usernick = userinfo.nickname
    const userID = userinfo.id
    const tempImgArr = req.files.map((img) => {
        return img.filename
    })

    const imgFiles = JSON.stringify(tempImgArr)


    // const { filename } = req.file
    await Board.create({
        title: title,
        detail: detail,
        images: imgFiles,
        likes: 0,
        views: 0,
        nickname: usernick,
        user_id: userID

    })
    res.send("create success")
}

// 상세페이지
exports.detailBoard = async (req, res) => {
    const { id } = req.params
    const data = await Board.findOne({ where: { id: id } });
    const commentdata = await Comment.findAll({ where: { board_id: id }, include: [{ model: Recomment }, { model: User }] })
    const recommentArr = commentdata.map(async (value, index) => {
        const recommentdata = await Recomment.findAll({ where: { comment_id: value.dataValues.id } })
        return recommentdata
    })
    const newComment = commentdata.map((value) => {
        console.log(value.User.dataValues.nickname, '뉴커멘asdawrwqrqw')
        return { ...value.dataValues, User: value.User.dataValues.nickname, Img: value.User.dataValues.profile_img }
    })
    console.log(newComment, '뉴커멘')
    res.json({ data, commentdata: newComment, recommentArr })
    // res.json({data,commentdata,recommentArr});


}
// exports.detailBoard = async (req, res) => {
//     const { id } = req.params
//     const data = await Board.findOne({ where: { id: id } });
//     res.send(data);

// }
// 게시글 수정
exports.editBoard = async (req, res) => {
    const { id } = req.params;
    const { title, detail } = req.body
    const tempImgArr = req.files.map((img) => {
        return img.filename
    })
    const imgFiles = JSON.stringify(tempImgArr)
    try {
        await Board.update({ title, detail, images: imgFiles }, { where: { id } })
        res.send("success")
    } catch (error) {
        console.log("글 수정 컨트롤러 에러")
        console.log(error)

    }

}
// 게시글 삭제
exports.deleteBoard = async (req, res) => {
    try {
        const { id } = req.params;
        await Board.destroy({ where: { id } });
        res.send("delete success")
    } catch (error) {
        console.log(error)
        console.log("글 삭제 컨트롤러 에러남")
    }
}


