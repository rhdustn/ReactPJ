import React, { useState } from 'react';
import { Main } from '../componentsPc/boarddetail/boarddetailPc.styled';
import { ImgSlicePc, TitlePc, SubContentPc, DayBtnPc, PlanBtnPc,
   DayPopupPc,BoardPlanPc,CommentPc } from '../componentsPc/boarddetail';

const BoardDetailPc = () => {
  const [popup, setPopup] = useState(false);

  const DayBtnClick = () => {
    setPopup(true);
  };

  return (
    <div>
      <Main>
        BoardDetail
        <ImgSlicePc />
        <TitlePc />
        <SubContentPc />
        <div>
          <DayBtnPc DayBtnClick={DayBtnClick}/>
          <PlanBtnPc />
        </div>
        {popup && <DayPopupPc onClose={() => setPopup(false)} />}
        <BoardPlanPc/>
        <CommentPc/>
      </Main>
    </div>
  );
};

export default BoardDetailPc;