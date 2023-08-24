const {User,LikeComment} = require("../models");

// 하트를 보여줄 수 있는 컨트롤러

exports.likeslist = async()=>{
    try {
        const data = await LikeComment.findAll()
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
  const userEmail = req.decoded.email;
  // req.decoded에 있는 email을 이용해서 User.findOne으로 해당 유저의 id를 찾고 그 아이디를 user_id에 삽입
  console.log("flgnfkngkfg", comment_id);
  try {
    const user = await User.findOne({ where: { email: userEmail }})
    const user_id = user.id;
    const likeData = await LikeComment.create( { comment_id,user_id } );
    console.log(likeData)
    res.send(likeData)
   
  } catch (error) {
    console.log("updateLikes에서 오류남")
   console.log(error)
  }
}
// 하트 삭제 컨트롤러

exports.deleteLikes = async()=>{
  try {
    await LikeComment.destroy({ where: { id } });
    res.send("deleteLikes success")
  } catch (error) {
    console.log("deleteLikes")
    console.log(error)
  }
}
