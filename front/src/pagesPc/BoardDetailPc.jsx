import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useQuery } from 'react-query';

import { create } from "../redux/features/post";


import TopNav from '../components/nav/TopNav';
import { Main, HeaderDivPc } from '../componentsPc/boarddetail/boarddetailPc.styled';
import { ImgSlicePc, TitlePc, SubContentPc, DayBtnPc, PlanBtnPc,
   DayPopupPc,BoardPlanPc,CommentPc } from '../componentsPc/boarddetail';
import {
  BoardLine,
  TitleStyle,
  SubContentStyle,
  ButtonBox,
  ShowButtonBox,
  EditImg,
  HeaderDiv,
  EditBtnStyle,
  DelBtnStyle,
  SubContentSpan
} from "../components/boarddetail/boarddetail.styled";

import { ipUrl } from "../util/util";

const BoardDetailPc = () => {
  const [trigger, setTrigger] = useState(false);
  const [popup, setPopup] = useState(false);
  const [showBox, setShowBox] = useState(false);

  const [boardLikes, setBoardLikes] = useState(false)


  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const ImgPath = "/imgs/icons";

  const boardEditClick = () => {
    navigate(`/boardedit/${id}`);
  };

  const BoardDetailView = async ({ queryKey }) => {
    try {
      console.log(queryKey);
      const response = await ipUrl.get(`/post/detail/${queryKey[1]}`);
      // setData(response.data);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  const likesView = async ({ queryKey }) => {
    try {
      const response = await ipUrl.get(`/post/likeslist/${queryKey[1]}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  const { data, isLoading, refetch } = useQuery(
    ["boardDetail", id],
    BoardDetailView
  );

  const likeData = useQuery(["commentLikes", id], likesView);

  const boardDelet = async () => {
    try {
      const response = await ipUrl.get(`/post/delete/${id}`);
      const data = response.data;
      if (data === "delete success") {
        navigate("/board");
      }
    } catch (error) {
      console.log("글 삭제 에러");
      console.log(error);
    }
  };
  const handleDeleteCheck = () => {
    const check = window.confirm("정말로 게시글을 삭제하실건가요??");
    if (check) {
      boardDelet();
    }
  };

  useEffect(() => {
    if (data) {
      dispatch(create(data));
      console.log(data, "xmfn");
    }
    console.log(data);
  }, [data]);

  useEffect(() => {
    refetch()
  }, [trigger]);

  const DayBtnClick = () => {
    setPopup(true);
  };
  const ShowboxClick = () => {
    setShowBox(!showBox);
  };

  return (
    <>
      <TopNav />

      <Main>

        <HeaderDivPc>
          {/* 좋아요 */}
          <img className='likeBtn' src={boardLikes ? `${ImgPath}/like3.png` : `${ImgPath}/like1.png`}></img>

          <ButtonBox onClick={ShowboxClick}>
            <EditImg src={`${ImgPath}/more.png`} alt="" srcset="" />
          </ButtonBox>
          {showBox && (
            <div className='dotBox' onClose={() => setShowBox(false)}>
              <div className='editDel'>
                <EditBtnStyle onClick={boardEditClick}>수정</EditBtnStyle>
                <DelBtnStyle onClick={handleDeleteCheck}>삭제</DelBtnStyle>
              </div>
            </div>
          )}
        </HeaderDivPc>

        {/* 이미지 슬라이드 */}
        <ImgSlicePc />

        {/* 내용 */}
        <TitlePc />
        <SubContentPc />

        {/* 버튼 */}
        <div className='btnBox'>
          <DayBtnPc DayBtnClick={DayBtnClick}/>
          <PlanBtnPc />
        </div>
        {popup && <DayPopupPc onClose={() => setPopup(false)} />}
        
        {/* 댓글 */}
        <CommentPc/>
      </Main>
    </>
  );
};

export default BoardDetailPc;