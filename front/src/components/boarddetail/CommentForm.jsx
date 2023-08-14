import React, { useState } from 'react'
import { CommentFormdiv,CommentInput,CommentBtn } from './boarddetail.styled'


const CommentForm = ({onCommentSubmit}) => {
    const [inputComment, setInputComment] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      if (inputComment === '') {
        return;
      }
      onCommentSubmit(inputComment);
      setInputComment('');
      console.log(inputComment)
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