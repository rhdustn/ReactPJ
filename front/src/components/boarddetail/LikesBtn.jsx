import React, { useEffect, useState } from 'react'
import { LikeSize } from './boarddetail.styled'
import { ipUrl } from '../../util/util';

const LikesBtn = ({commentIndex}) => {
    const ImgPath = "/imgs/icons"
    const [likes, setLikes] = useState("")
    //params로 갖고온 param
    const param=5


    const LikesClick =async()=>{
      try {
        const response = await ipUrl.post(
            `/post/updateLikes`,{comment_id:commentIndex},{withCredentials:true}
            )
            setLikes(!likes);
            if(likes === false){
              UnlikeComment()
            }
      } catch (error) {
          console.log(error)
      }
      const UnlikeComment = async (comment_id) => {
        try {
          await ipUrl.delete(`/post/deleltlikes/${comment_id}`, { withCredentials: true });
        } catch (error) {
          console.error('Error removing like:', error);
        }
      };
   

      ipUrl.get(`/post/${5}`)
    }


    // 해당 user_id가 좋아요한 comment_id에 대한 likes 보이기
     const LikesView = async()=>{

     }
     // 좋아요 등록, 해제
     const updateLikes = async()=>{
      
     
     }

  return (
    <div>
        <LikeSize onClick={LikesClick}  
        src={likes ? `${ImgPath}/like3.png` : `${ImgPath}/like1.png`}
         alt="" />
    </div>
  )
}

export default LikesBtn