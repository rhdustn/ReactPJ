import styled, { keyframes } from "styled-components";

export const MainTopBox = styled.div`
  width: 100%;
  height: 90vh;
  background-color: #277bc0;
  border-radius: 0 0 30px 30px;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 20px 0;
`;

export const LogoBox = styled.div`
  width: 100%;
  height: 50px;
  position: relative;
  box-sizing: border-box;

  & img {
    height: 100%;
    position: absolute;
    left: 10px;
  }
`;

export const TextBox = styled.div`
  width: 100%;
  display: flex;
  /* flex-wrap: wrap; */
  margin: 0 0 20px 0;
  height: 80vh;

  & img {
    width: 100%;
  }
`;

export const InputBox = styled.div`
  width: 320px;
  height: 40px;
  border-radius: 25px;
  color: white;
  background-color: white;
  display: flex;
  align-items: center;
  padding: 0 30px 0 30px;
  box-sizing: border-box;
  margin: 0px 0 20px 0;

  & img {
    width: 20px;
    height: 20px;
  }
  & input {
    width: 100%;
    height: 40px;
    padding: 10px 0 7px 10px;
    box-sizing: border-box;
    font-size: 18px;
    border: none;
    outline: none;
    font-size: 16px;
    color: #1c2120;
  }
`;

export const MainMidBox = styled.div`
  width: 100%;
  height: 50vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 10px 0;
  margin-top: 10%;
`;

export const BigLabel = styled.div`
  width: 100%;
  text-align: start;
  font-size: 18px;
  font-weight: bold;
  color: #1c2120;
  padding: 10px 30px 10px 30px;
  box-sizing: border-box;
  font-size: 40px;
`;

export const DateBoxWrap = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

export const DateBox = styled.div`
  width: 170px;
  height: 40px;
  background-color: white;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  margin: 0 5px 0 5px;
  border: 1px solid silver;
  border-radius: 20px;
  padding: 0 10px 0 10px;
  & input {
    width: 100%;
    border: none;
    font-size: 17px;
    outline: none;
  }
`;

export const MainBottomBox = styled.div`
  width: 100%;
  height: auto;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 10px 0;
  padding: 0 0 70px 0;
`;

export const SmallLabel = styled.div`
  width: 100%;
  text-align: start;
  font-size: 14px;
  font-weight: bold;
  color: #1c2120;
  padding: 10px 30px 10px 30px;
  box-sizing: border-box;
`;

export const SelectBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  padding: 0 30px 0 30px;
  box-sizing: border-box;
  margin: 0 0 10px 0;
`;
export const Select = styled.div`
  font-size: 14px;
  font-weight: bold;
  width: auto;
  height: 30px;
  border-radius: 25px;
  background-color: ${(props) => props.back || "#edebeb"};
  color: ${(props) => props.font || "#9b9a9a"};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  box-sizing: border-box;
  margin: 0 10px 7px 0;
  cursor: pointer;
`;

export const BtnBox = styled.div`
  width: 100%;
  height: 40px;
  /* padding: 10px 30px 10px 30px; */
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
  margin-right: 15%;
`;
export const MakePlanBtn = styled.div`
  padding: 15px;
  box-sizing: border-box;
  width: 15%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: #277bc0;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;

// 로딩 창
export const LoadingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 2;
`;

export const LoadingImg=styled.div`


`
