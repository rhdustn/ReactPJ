import React, { useState } from 'react'
import axios from 'axios';
import { CommentFormdiv,CommentInput,CommentBtn } from './boarddetail.styled'
import { useParams } from 'react-router-dom';


const CommentForm = ({onCommentSubmit}) => {
    const [inputComment, setInputComment] = useState('');
    const {id} = useParams()

    const handleSubmit = async(e) => {
      e.preventDefault();
      if (inputComment === '') {
        return;
      }
      
      onCommentSubmit(inputComment);
      setInputComment('');
      console.log(inputComment)

      try {
        const response = 
        await axios.post(
            `/post/createComment`,{detail :inputComment,board_id:id},{withCredentials:true}
        )
        const data = response.data;
        console.log(data)
        if (data === "create success") {
          window.location.reload();
        }
      } catch (error) {
        console.log(error)
      }
    };
  return (
    <>
    <CommentFormdiv>
        <form onSubmit={handleSubmit}>
            <span>
                <CommentInput 
                type="text"
                value={inputComment}
                onChange={(e)=>setInputComment(e.target.value)}
                placeholder='댓글을 입력해주세요' />
            <CommentBtn>등록</CommentBtn>
            </span>
        </form>
    </CommentFormdiv>
    </>
  )
}

export default CommentForm