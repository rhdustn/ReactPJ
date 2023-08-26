import React, { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useParams } from "react-router-dom";
import {
  CommentProflieImg, CommentContain, CommentContain2, Repliesdiv, RelpyInput, RelpyBtn,
  RelpyBtn2, CommentProflieImg2, Reasd, CommentEditInput, CommentEditButton, CommentDelButton,
  HandleEditCheck, InputContain, HandleDeleteCheck, CommentEditImg, ButtonBox, ShowButtonBox2,
  Xbtn,RelpyBtndiv,Nickname
} from './boarddetail.styled';
import LikesBtn from './LikesBtn';
import { ipUrl } from '../../util/util';

const CommentList = ({ comments }) => {
  const [replies, setReplies] = useState([]);
  const [replyText, setReplyText] = useState("");
  const [activeCommentIndex, setActiveCommentIndex] = useState(null);
  const [isReplyVisible, setIsReplyVisible] = useState(false);
  const [editInputIndex, setEditInputIndex] = useState(null);
  // const [showBoxes, setShowBoxes] = useState(Array(comments.length).fill(false));
  const [expandedCommentIndex, setExpandedCommentIndex] = useState(null);
  const { id } = useParams();
  const ImgPath = "/imgs/icons";

  const CommentView = async () => {
    try {
      const response = await ipUrl.get(`/post/commentlist`);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const { data, isLoading } = useQuery(["boardDetail", id], CommentView);

  const CommentEdit = async ({ commentIndex }) => {
    try {
      const response = await ipUrl.post(
        `/post/commentEdit/${commentIndex}`,
        { detail: document.querySelector("#commentEditInput").value },
        { withCredentials: true }
      );
      const data = response.data;

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const commentEditMutation = useMutation("commentEditMutation", CommentEdit);

  const handleEditCheck = (commentIndex) => {
    const updatedShowBoxes = [...expandedCommentIndex];
    updatedShowBoxes[commentIndex] = !updatedShowBoxes[commentIndex];
    setExpandedCommentIndex(updatedShowBoxes);
    setEditInputIndex(commentIndex);
  };

  const inputDelClick = () => {
    setEditInputIndex(null);
  };

  const inputEditClick = ({ commentIndex }) => {
    commentEditMutation.mutate({ commentIndex });
    // CommentEdit({ commentIndex })
  };

  const CommentDelet = async (commentIndex) => {
    try {
      const response = await ipUrl.get(`/post/commentDelet/${commentIndex}`);
    } catch (error) {
      console.log("댓글 삭제 에러");
      console.log(error);
    }
  };

  const handleDeleteCheck = (commentIndex) => {
    const delcheck = window.confirm("정말로 댓글을 삭제하실건가요??");
    if (delcheck) {
      CommentDelet(commentIndex);
    }
  };

  //======================================
  // 대댓글

  // 대댓글 보이기
  const ReCommentView = async () => {
    try {
      const response = await ipUrl.get(`/post/recommentlist`);
      return response;
    } catch (error) {
      console.log(error);
    }
  };


  // 대댓글 삭제
  const ReCommentDelete = async (replyIndex) => {
    try {

      const response = await ipUrl.get(`/post/deleteRecomment/${replyIndex}`);

      console.log(response);
    } catch (error) {
      console.log("댓글 삭제 에러");
      console.log(error);
    }
  };

  const handleReCommentDelete = (replyIndex) => {
    console.log(replyIndex)
    const delcheck = window.confirm('정말로 댓글을 삭제하실건가요??');

    if (delcheck) {
      ReCommentDelete(replyIndex);
    }
  };



  // 대댓글등록 Submit
  const handleReplySubmit = async (commentIndex) => {
    if (replyText.trim() !== "") {
      try {
        const response = await ipUrl.post(
          "/post/createRecomment",
          {
            detail: replyText,
            comment_id: commentIndex,
          },
          { withCredentials: true }
        );
        const updatedReplies = [...replies];
        updatedReplies[commentIndex] = (
          updatedReplies[commentIndex] || []
        ).concat(replyText);
        setReplies(updatedReplies);
        setReplyText("");
        setActiveCommentIndex(null);
        setIsReplyVisible(false);
      } catch (error) {
        console.error("대댓글 오류:", error);
      }
    }
  };

  const { data2, isLoading2 } = useQuery(["boardDetail", id], ReCommentView);

  const handleCancelReply = () => {
    setReplyText("");
    setIsReplyVisible(false);
    setActiveCommentIndex(null);
  };

  //====================================================

  const toggleShowBox = (commentIndex) => {
    if (expandedCommentIndex === commentIndex) {
      setExpandedCommentIndex(null); // 이미 확장된 댓글이면 닫습니다.
    } else {
      setExpandedCommentIndex(commentIndex); // 아니면 해당 댓글을 확장합니다.
    }
  };
  const XClick = () => {
    setExpandedCommentIndex(null);
  };

  // 지금 img = 이미지의 뎡로
  const ProImgPath = "/imgs/userplanimg/";

  return (
    <div>
      {comments.map((comment, commentIndex) => (
        <div key={commentIndex}>
          <CommentContain >
            <CommentProflieImg   src={ProImgPath+comment.Img} />            
            <CommentContain2>
              <Nickname>{comment.User}</Nickname>
              <div>{comment.detail}</div>
              <div>
                <RelpyBtndiv
                  onClick={() => {
                    setActiveCommentIndex(commentIndex);
                    setIsReplyVisible(true);
                  }}
                >
                  답글 달기
                </RelpyBtndiv>
              </div>
            </CommentContain2>
            <LikesBtn commentIndex={comment.id} />
            <div>
              {editInputIndex === comment.id && (
                <InputContain onClose={inputDelClick}>
                  <CommentEditInput
                    type="text"
                    placeholder={comment.detail}
                    id={"commentEditInput"}
                  />

                  <CommentEditButton
                    onClick={() => {
                      inputEditClick({ commentIndex: comment.id });
                    }}
                  >
                    edit
                  </CommentEditButton>
                  <CommentDelButton onClick={inputDelClick}>
                    del
                  </CommentDelButton>
                </InputContain>
              )}
            </div>
            <ButtonBox>
              <CommentEditImg
                onClick={() => toggleShowBox(commentIndex)}
                src={`${ImgPath}/more.png`}
              />
            </ButtonBox>
            {expandedCommentIndex === commentIndex && (
              <ShowButtonBox2 onClose={() => toggleShowBox(commentIndex)}>
                <div>
                  <div onClick={XClick}>🗙</div>
                  <HandleEditCheck onClick={() => handleEditCheck(comment.id)}>
                    수정
                  </HandleEditCheck>
                  <HandleDeleteCheck
                    onClick={() => handleDeleteCheck(comment.id)}
                  >
                    삭제
                  </HandleDeleteCheck>
                  <div></div>
                </div>
              </ShowButtonBox2>
            )}
          </CommentContain>
          {activeCommentIndex === commentIndex && isReplyVisible && (
            <div>
              <RelpyInput
                type="text"
                placeholder="대댓글 작성하기"
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
              />
              <RelpyBtn
                onClick={() => handleReplySubmit({ commentIndex: comment.id })}
              >
                등록
              </RelpyBtn>
              <RelpyBtn2 onClick={handleCancelReply}>취소</RelpyBtn2>
            </div>
          )}
          {(comment.Recomments && comment.Recomments.length !== 0) && (
            <>
              {comment.Recomments?.map((value, replyIndex) => (
                <Repliesdiv key={replyIndex}>
                  ➥
                  <CommentProflieImg2 src={ProImgPath+value.Img} />
                  <Reasd> 
                    {/* 일단 user_id 값만 가져옴 */}
                    <div>{value.User}</div> 
                    {value.detail}
                  </Reasd>
                    <Xbtn  onClick={() => handleReCommentDelete(value.id)}>🗙</Xbtn>
                </Repliesdiv>
              ))}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default CommentList;
