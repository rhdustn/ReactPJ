import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Main, BoardLine, TitleStyle, SubContentStyle } from '../components/boarddetail/boarddetail.styled';
import { ImgSlice, DayBtn, PlanBtn, DayPopup, BoardPlan, Comment } from '../components/boarddetail';
import BottomNav from '../components/nav/BottomNav';
import axios from 'axios';

const BoardDetail = () => {
  const [popup, setPopup] = useState(false);
  const { id } = useParams();
  const boardData = useSelector(state => state.BoardDetailSlice);

  const BoardDetailView = async () => {
    try {
      const response = await axios.get(`/post/allboard/${id}`);
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const { data, isLoading } = useQuery(['boardDetail', id], BoardDetailView);

  const DayBtnClick = () => {
    console.log("팝업창 클릭 됨?");
    setPopup(true);
  };

  return (
    <div>
      <Main>
        <ImgSlice />
        <TitleStyle>{boardData.title}</TitleStyle>
        <SubContentStyle>{boardData.detail}</SubContentStyle>
        <div>
          <DayBtn DayBtnClick={DayBtnClick} />
          <PlanBtn />
        </div>
        {popup && <DayPopup onClose={() => setPopup(false)} />}
        <BoardPlan />
        <Comment />
        <BoardLine />
        <BottomNav />
      </Main>
    </div>
  );
};

export default BoardDetail;
