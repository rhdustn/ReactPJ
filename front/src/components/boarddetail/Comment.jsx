import React, { useState } from 'react'
import { CommentContainer,CommentMain } from './boarddetail.styled'
import {CommentList,CommentForm} from './index'

const Comment = ({comments}) => {
  console.log(comments)

  const CommentSubmit = () => {

  };
  return (
    <div>
      <CommentContainer>
      <CommentMain>
      <CommentList comments={comments}/>
      </CommentMain>
      <CommentForm onCommentSubmit={CommentSubmit}/>
      </CommentContainer>
      </div>
  )
}

export default Comment