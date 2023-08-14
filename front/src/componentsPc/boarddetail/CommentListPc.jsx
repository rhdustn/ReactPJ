import React from 'react';

const CommentListPc = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => (
        <div key={index}>
            img
            nickname
         {comment}
        </div>
      ))}
    </div>
  );
};

export default CommentListPc;