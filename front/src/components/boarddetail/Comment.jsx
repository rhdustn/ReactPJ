import React, { useState } from 'react'
import { CommentContainer } from './boarddetail.styled'
import {CommentList,CommentForm} from './index'

const Comment = () => {
  const [comment,setComment]=useState([])

  const CommentSubmit = (newComment) => {
    setComment([...comment, newComment]);
  };
  return (
    <div>
      <CommentContainer>
      Comment
      <CommentList comments={comment}/>
      <CommentForm onCommentSubmit={CommentSubmit}/>
      </CommentContainer>
      </div>
  )
}

export default Comment