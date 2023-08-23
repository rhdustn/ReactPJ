import React, { useState } from 'react';
import axios from 'axios';
import { useQuery,useMutation } from 'react-query';
import { useParams } from 'react-router-dom';
import { CommentProflieImg, CommentContain, CommentContain2,
   Repliesdiv, RelpyInput, RelpyBtn,RelpyBtn2,CommentProflieImg2,Reasd,CommentEditInput,
   CommentEditButton,} from './boarddetail.styled';

const CommentList = ({ comments }) => {
  const [replies, setReplies] = useState([]);
  const [replyText, setReplyText] = useState('');
  const [editedComment, setEditedComment] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [activeCommentIndex, setActiveCommentIndex] = useState(null);
  const [isReplyVisible, setIsReplyVisible] = useState(false); 
  const { id } = useParams();

  const handleReplySubmit = async(commentIndex) => {
    if (replyText.trim() !== '') {
      const updatedReplies = [...replies];
      updatedReplies[commentIndex] = (updatedReplies[commentIndex] || []).concat(replyText);
      setReplies(updatedReplies);
      setReplyText('');
      setActiveCommentIndex(null);
      setIsReplyVisible(false); 
     

    }
  };
  const CommentView = async()=>{
    try {
      const response = await axios.get(`/post/commentlist`);
      console.log(response)
      const asd =response.data
      console.log("asd",asd)
      return response;
    } catch (error) {
      console.log(error)
    }

  }
  // 뮤테이션을 하면 다시 useQuery 가 실행 뮤테이션 사용하기 
  const { data, isLoading } = useQuery(['boardDetail', id], CommentView);
  console.log("data ",data)

  // 댓글수정
  const CommentEdit = async()=>{
    try {
      const response = await axios.post(`post/commentEdit/${id}`);
      console.log(response)
    } catch (error) {
      
    }
  }

  const handleEditCheck = (commentIndex) => {
    // 댓글 id 번호 찍힘
    console.log(commentIndex)

  };


  // 댓글삭제
    const CommentDelet = async(commentIndex)=>{
      console.log('asfsjkdfl;', commentIndex)
      try {
        const response = await axios.get(`/post/commentDelet/${commentIndex}`);
        console.log("222222222222222222",response)
        const data = response.data
        console.log("11111111111111111",data)
      } catch (error) {
        console.log("댓글 삭제 에러");
        console.log(error)
      }
    }
    const handleDeleteCheck = (commentIndex) => {
      console.log(commentIndex)
      const delcheck = window.confirm('정말로 댓글을 삭제하실건가요??');
      if (delcheck) {
        CommentDelet(commentIndex);
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
              {comment.user_id}
              </div>
              <div>
                {comment.detail}
              </div>
              <div>
                <div onClick={() => {
                  setActiveCommentIndex(commentIndex);
                  setIsReplyVisible(true); 
                }}>답글 달기</div>
              </div>
            </CommentContain2>
            <div onClick={() => handleEditCheck(comment.id)}>수정</div>
            <div onClick={() => handleDeleteCheck(comment.id)}>삭제</div>
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
          
          {comment.Recomments.length != 0 ? <> {comment.Recomments?.map((reply, replyIndex) => (
            <Repliesdiv key={replyIndex}>
              ➥
              <CommentProflieImg2 />
              <Reasd >
                <div>nickname</div>
                {reply.detail}
                </Reasd>   
            </Repliesdiv>
          ))}</> : <></>}
        </div>
      ))}
    </div>
  );
};

export default CommentList;
