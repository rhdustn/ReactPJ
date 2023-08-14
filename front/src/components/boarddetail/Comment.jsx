import React, { useState } from 'react'
import { CommentContainer,CommentMain } from './boarddetail.styled'
import {CommentList,CommentForm} from './index'

const Comment = () => {
  const [comment,setComment]=useState([])

  const CommentSubmit = (newComment) => {
    setComment([...comment, newComment]);
  };
  return (
    <div>
      <CommentContainer>
      <CommentMain>
      <CommentList comments={comment}/>
      </CommentMain>
      <CommentForm onCommentSubmit={CommentSubmit}/>
      </CommentContainer>
      </div>
  )
}

export default Comment