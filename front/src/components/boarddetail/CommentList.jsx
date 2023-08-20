import React, { useState } from 'react';
import { CommentProflieImg, CommentContain, CommentContain2,
   Repliesdiv, RelpyInput, RelpyBtn,RelpyBtn2 } from './boarddetail.styled';

const CommentList = ({ comments }) => {
  const [replies, setReplies] = useState([]);
  const [replyText, setReplyText] = useState('');
  const [activeCommentIndex, setActiveCommentIndex] = useState(null);
  const [isReplyVisible, setIsReplyVisible] = useState(false); 

  const handleReplySubmit = (commentIndex) => {
    if (replyText.trim() !== '') {
      const updatedReplies = [...replies];
      updatedReplies[commentIndex] = (updatedReplies[commentIndex] || []).concat(replyText);
      setReplies(updatedReplies);
      setReplyText('');
      setActiveCommentIndex(null);
      setIsReplyVisible(false); 
    }
  };

  const handleCancelReply = () => {
    setReplyText(''); 
    setIsReplyVisible(false); 
  };

  return (
    <div>
      {comments.map((comment, commentIndex) => (
        <div key={commentIndex}>
          <CommentContain>
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
              <div>
                <div onClick={() => {
                  setActiveCommentIndex(commentIndex);
                  setIsReplyVisible(true); 
                }}>답글 달기</div>
              </div>
            </CommentContain2>
            <div>삭제</div>
            <div>수정</div>
            <div>DATE</div>
          </CommentContain>
          {activeCommentIndex === commentIndex && isReplyVisible && (
            <div>
              <RelpyInput
                type="text"
                placeholder="대댓글 작성하기"
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
              />
              <RelpyBtn onClick={() => handleReplySubmit(commentIndex)}>등록</RelpyBtn>
              <RelpyBtn2 onClick={handleCancelReply}>취소</RelpyBtn2>
            </div>
          )}

          {replies[commentIndex]?.map((reply, replyIndex) => (
            <Repliesdiv key={replyIndex}>
              <div>➥{reply}</div>
            </Repliesdiv>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CommentList;
