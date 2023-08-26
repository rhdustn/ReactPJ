import React, { useState } from 'react'
import { CommentFormdiv,CommentInput,CommentBtn } from './boarddetailPc.styled'


const CommentFormPc = ({onCommentSubmit}) => {
    const [inputComment, setInputComment] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      onCommentSubmit(inputComment);
      setInputComment('');
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

export default CommentFormPc