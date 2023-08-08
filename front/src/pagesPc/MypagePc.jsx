import React, { useEffect } from "react";
import {
  MypageImgPc,
  TapMenuPc,
  MypageNamePc,
  MoveEditPc,
} from "../componentsPc/mypage";
import styled from "styled-components";

const Main = styled.div`
  width: 400px;
  height: 800px;
  position: relative;
  left: 50%;
  transform: translate(-50%);
`;

const Mypage = () => {
  return (
    <div>
      <Main>
        <MoveEditPc />
        <MypageImgPc />
        <MypageNamePc />
        <TapMenuPc />
      </Main>
    </div>
  );
};

export default Mypage;
