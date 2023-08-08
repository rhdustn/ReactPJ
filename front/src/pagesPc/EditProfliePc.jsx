import React, { useState } from "react";
import {
  EditBtnPc,
  EditImgPc,
  EditNamePc,
  ArrowBtnPc,
  EditTextPc,
} from "../componentsPc/mypage";
import styled from "styled-components";

const EditProflie = () => {
  const Main = styled.div`
    width: 400px;
    height: 800px;
    position: relative;
    left: 50%;
    transform: translate(-50%);
  `;
  const [profileBtnChange, setProfileBtnChange] = useState(false);
  const [profileName, setProfileName] = useState("");
  return (
    <div>
      <Main>
        <ArrowBtnPc />
        <EditImgPc />
        <EditNamePc setProfileBtnChange={setProfileBtnChange} />
        <EditBtnPc change={profileBtnChange} />
        <EditTextPc />
      </Main>
    </div>
  );
};

export default EditProflie;
