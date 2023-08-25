const {User,LikeBoard} = require("../models")



exports.updateLikes = async (req, res) => {
   
    const board_id = req.body.board_id
    const userEmail = req.decoded.email;
    // req.decoded에 있는 email을 이용해서 User.findOne으로 해당 유저의 id를 찾고 그 아이디를 user_id에 삽입
  
    try {
      const user = await User.findOne({ where: { email: userEmail }})
      const user_id = user.id;
      const likeBoardData = await LikeBoard.create( { comment_id,user_id } );
      res.send(likeBoardData)
     
    } catch (error) {
      console.log("updateLikes에서 오류남")
     console.log(error)
    }
  }
  // 하트 삭제 컨트롤러
  
  exports.BoarddeleteLikes = async()=>{
    try {
      await LikeBoard.destroy({ where: { id } });
      res.send("BoarddeleteLikes success")
    } catch (error) {
      console.log("BoarddeleteLikes error")
      console.log(error)
    }
  }
  