import React from "react";
import {
  PlanInfoBox,
  TopNavBox,
  TopNavBtn,
  PlanInfoTitle,
  PlantInfoDate,
} from "./NavPc.styled";

import back from "../../img/icons/back.png";

const TopNavPc = ({ isScrolled, gptAnswerSaved }) => {
  return (
    <>
      <TopNavBox>
        <TopNavBtn>
          <img src={back}></img>
        </TopNavBtn>
        {/* 스크롤 내려가면 뜰 부분 */}
        {isScrolled && (
          <PlanInfoBox>
            <PlanInfoTitle>{gptAnswerSaved.location}</PlanInfoTitle>
            <PlantInfoDate>
              {gptAnswerSaved.startDate} ~ {gptAnswerSaved.endDate}
            </PlantInfoDate>
          </PlanInfoBox>
        )}
      </TopNavBox>
    </>
  );
};

export default TopNavPc;
