const { User, Board } = require("../models")

// 글 리스트를 보여줄 수 있는 컨트롤러
exports.allBoard = async (req, res) => {
    try {
        const data = await Board.findAll()
        res.send(data)
    } catch (error) {
        console.log("allpost에서 오류터짐")
        console.log(error)
    }
}

// 글 작성 컨트롤러
exports.createBoard = async (req, res) => {
    const { title, detail } = req.body
    const { images } = req.file
    await Board.create({
        title: title,
        detail: detail,
        images: images
    })
    res.send("create success")
}

// 상세페이지
exports.detailBoard = async (req, res) => {
    const { id } = req.params
    const data = await Board.findOne({ where: { id: id } });
    console.log(data)
    res.send(data);

}
// 게시글 수정
exports.editBoard = async (req, res) => {
    const { id } = req.params;
    const { title, detail } = req.body
    const { images } = req.file
    try {
        await Board.update({ title, detail, images }, { where: { id } })
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
        await Board.destroy({where:{id}});
        res.send("delete success")
    } catch (error) {
        console.log(error)
        console.log("글 삭제 컨트롤러 에러남")
    }
}

