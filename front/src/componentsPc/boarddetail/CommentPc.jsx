import React, { useState } from 'react'
import { CommentContainer } from './boarddetailPc.styled'
import {CommentListPc,CommentFormPc} from './index'

const CommentPc = () => {
  const [comment,setComment]=useState([])

  const CommentSubmit = (newComment) => {
    setComment([...comment, newComment]);
  };
  return (
    <>
      <CommentContainer>
        <CommentListPc comments={comment}/>
        <CommentFormPc onCommentSubmit={CommentSubmit}/>
      </CommentContainer>
    </>
  )
}

export default CommentPc