const { User, LikeComment, Comment } = require("../models");

// 하트를 보여줄 수 있는 컨트롤러

exports.likeslist = async (req, res) => {
  try {
    const { id } = req.params;

    const commentArr = await Comment.findAll({
      where: { board_id: id }, include: {
        model: LikeComment
      }
    })
    const temp = commentArr.map((value) => {
      return {
        ...value, LikeComments: value.dataValues.LikeComments.map((value2) => {
          return value2.dataValues
        })
      }

    })
    console.log('고연수 여신 .', temp)
    // const data = await LikeComment.findAll()
    res.json(data)
  } catch (error) {
    console.log("likeslist 오류터짐")
    console.log(error)
  }
}
// 하트가 true 면likeComment에 올라가는 컨트롤러
exports.updateLikes = async (req, res) => {
  // 일단 임시로 정적으로 넣은 comment_id를 넣음
  const comment_id = req.body.comment_id
  const userData = req.decoded;
  console.log("flgnfkngkfg", comment_id);
  const UserId = userData.front_id
  console.log(UserId)
  // req.decoded에 있는 user_id을 이용해서 User.findOne으로 해당 유저의 id를 찾고 그 아이디를 user_id에 삽입

  try {
    const user = await User.findOne({ where: { user_id: UserId } })
    const user_id = user.id;
    const likeData = await LikeComment.create({ comment_id, user_id });
    console.log(likeData)
    res.send(likeData)

  } catch (error) {
    console.log("updateLikes에서 오류남")
    console.log(error)
  }
}
// 하트 삭제 컨트롤러

exports.deleteLikes = async () => {
  const user_id = req.user.id;
  const comment_id = req.params.comment_id;
  try {
    await LikeComment.destroy({ where: { user_id, comment_id } });
    res.send("삭제됨?");
  } catch (error) {
    console.log("삭제됨:", error);
  }
}
