import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { LikeSize2 } from './boarddetail.styled'

const BoardLikes = ({board_id}) =>{
    const ImgPath = "/imgs/icons"
    const [boardLikes, setBoardLikes] = useState(false)



    const LikesClick =async()=>{
      try {
        const response = await axios.post(
            // `/post/updateLikes`,{comment_id:commentIndex},{withCredentials:true}
            )
            console.log(response)
      } catch (error) {
        
      }
      setBoardLikes(!boardLikes);

    }
    useEffect(() => {
      if(boardLikes ==false){
        console.log("하트 비워짐")
      }else{
        console.log("하트 채움")

      }
    }, [boardLikes])


    // 해당 user_id가 좋아요한 comment_id에 대한 likes 보이기
     const LikesView = async()=>{

     }
     // 좋아요 등록, 해제
     const updateLikes = async()=>{
      
     
     }

  return (
    <div>
        <LikeSize2 onClick={LikesClick}  
        src={boardLikes ? `${ImgPath}/like3.png` : `${ImgPath}/like1.png`}
         alt="" />
    </div>
  )
}

export default BoardLikes