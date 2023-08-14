import React, { useState } from 'react';
import { CommentProflieImg, CommentContain, CommentContain2 } from './boarddetail.styled';
import ReComment from './ReComment';

const CommentList = ({ comments }) => {
  const [replyComments, setReplyComments] = useState(Array(comments.length).fill([]));

  const handleReCommentSave = (commentIndex, replyIndex, newComment) => {
    const newReplyComments = [...replyComments];
    newReplyComments[commentIndex] = [
      ...(newReplyComments[commentIndex] || []),
      newComment
    ];
    setReplyComments(newReplyComments);
  };

  return (
    <div>
      {comments.map((comment, commentIndex) => (
        <CommentContain key={commentIndex}>
          <CommentProflieImg>
            Img
          </CommentProflieImg>
          <CommentContain2>
            <div>
              nickname
            </div>
            <div>
              {comment}
            </div>
            <ReComment
              initComment=""
              onSave={(newComment) => handleReCommentSave(commentIndex, 0, newComment)}
            />
            {replyComments[commentIndex] &&
              replyComments[commentIndex].map((reply, replyIndex) => (
                <ReComment
                  key={replyIndex}
                  initComment={reply}
                  onSave={(newReply) =>
                    handleReCommentSave(commentIndex, replyIndex + 1, newReply)
                  }
                />
              ))}
          </CommentContain2>
        </CommentContain>
      ))}
    </div>
  );
};

export default CommentList;