import React, { useEffect, useState } from 'react';
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


  const BoardDetailView = async ({queryKey}) => {
    try {
      console.log("==================")
      console.log(queryKey)
      const response = await axios.get(`/post/detail/${queryKey[1]}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    console.log('안녕')
  })

  const { data, isLoading } = useQuery(['boardDetail', id], BoardDetailView);

  const DayBtnClick = () => {
    console.log("팝업창 클릭 됨?");
    setPopup(true);
  };

  return (
    <div>
      {data&& <Main>
              <ImgSlice />
              <TitleStyle>{data.title}</TitleStyle>
              <SubContentStyle>{data.detail}</SubContentStyle>
              <div>
                <DayBtn DayBtnClick={DayBtnClick} />
                <PlanBtn />
              </div>
              {popup && <DayPopup onClose={() => setPopup(false)} />}
              <BoardPlan />
              <Comment />
              <BoardLine />
              <BottomNav />
            </Main>}
     
    </div>

  );
};

export default BoardDetail;
