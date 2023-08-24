import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import {
  Main, BoardLine, TitleStyle, SubContentStyle, ButtonBox, ShowButtonBox,
  EditImg, HeaderDiv, EditBtnStyle, DelBtnStyle
} from '../components/boarddetail/boarddetail.styled';
import { ImgSlice, DayBtn, PlanBtn, DayPopup, BoardPlan, Comment } from '../components/boarddetail';
import BottomNav from '../components/nav/BottomNav';
import axios from 'axios';
import { create } from '../redux/features/post';

const BoardDetail = () => {
  const [popup, setPopup] = useState(false);
  const [showBox, setShowBox] = useState(false)
  const [currentUser, setCurrentUser] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate()
  const dispatch = useDispatch();
  
  const ImgPath = "/imgs/icons"




  const boardEditClick = () => {
    navigate(`/boardedit/${id}`)
  }

  const BoardDetailView = async ({ queryKey }) => {
    try {
      console.log(queryKey)
      const response = await axios.get(`/post/detail/${queryKey[1]}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  const { data, isLoading } = useQuery(['boardDetail', id], BoardDetailView);
  console.log("sssssssssssssssss", data)

  
  const boardDelet = async () => {
    try {
      const response = await axios.get(`/post/delete/${id}`);
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
    const check = window.confirm('정말로 게시글을 삭제하실건가요??');
    if (check) {
      boardDelet();
    }
  };

  useEffect(() => {
    if (data) {
      dispatch(create(data))

    }
    console.log(data)
  }, [data])

  const DayBtnClick = () => {
    setPopup(true);
  };
  const ShowboxClick = () => {
    setShowBox(true)
  }
  const XClick = () => {
    setShowBox(false)
  }
  // 글을 쓴 유저만 편집 아이콘이 보이게
  const writer = currentUser && data && currentUser.id === data.data.user_id;

  return (
    <div>
      <HeaderDiv>
        travel opener 리뷰 게시판
        {writer&&(
          <ButtonBox onClick={ShowboxClick}>
            <EditImg src={`${ImgPath}/more.png`} alt="" srcset="" /></ButtonBox>
        )}
        {showBox && <ShowButtonBox onClose={() => setShowBox(false)} >
          <div>
            <EditBtnStyle onClick={boardEditClick}>수정</EditBtnStyle>
            <DelBtnStyle onClick={handleDeleteCheck}>삭제</DelBtnStyle>
          </div></ShowButtonBox>}
      </HeaderDiv>
      {data && <Main onClick={XClick}>

        <ImgSlice />
        <TitleStyle>{data.data.title}</TitleStyle>
        <SubContentStyle>{data.data.detail}</SubContentStyle>
        <div>
          <DayBtn DayBtnClick={DayBtnClick} />
          <PlanBtn />
        </div>
        {popup && <DayPopup onClose={() => setPopup(false)} />}

        <BoardPlan />
        <Comment comments={data.commentdata} />
        <BoardLine />
        <BottomNav />

      </Main>}

    </div>

  );
};

export default BoardDetail;
