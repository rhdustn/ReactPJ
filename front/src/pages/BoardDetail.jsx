import React, { useState } from 'react';
import { Main,BoardLine } from '../components/boarddetail/boarddetail.styled';
import { ImgSlice, Title, SubContent, DayBtn, PlanBtn,
   DayPopup,BoardPlan,Comment, } from '../components/boarddetail';
import BottomNav from '../components/nav/BottomNav';

const BoardDetail = () => {
  const [popup, setPopup] = useState(false);

  const DayBtnClick = () => {
    setPopup(true);
  };

  return (
    <div>
      <Main>
        BoardDetail
        <ImgSlice />
        <Title />
        <SubContent />
        <div>
          <DayBtn DayBtnClick={DayBtnClick}/>
          <PlanBtn />
        </div>
        {popup && <DayPopup onClose={() => setPopup(false)} />}
        <BoardPlan/>
        <Comment/>
       <BoardLine/>
       <BottomNav/>
      </Main>
    </div>
  );
};

export default BoardDetail;