import styled, { keyframes } from "styled-components";

export const PerDayBox = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  padding: 30px 0 30px 0;
`;
export const PerDayDate = styled.div`
  width: 100%;
  height: 30px;
  position: absolute;
  top: 0;
  display: flex;

  & p {
    margin: 0;
    font-size: 20px;
  }
  & span {
    font-weight: bold;
    margin: 0 10px 0 0;
  }
`;

export const PerDayAttraction = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;
export const RouteBox = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
`;
export const RouteNumber = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  & div {
    width: 22px;
    height: 22px;
    border-radius: 100%;
    background-color: #277bc0;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 17px;
    font-weight: bold;
  }
  & span {
    height: 100%;
    width: 1px;
    background-color: silver;
    position: absolute;
    z-index: -10;
  }
`;
export const RoutePlace = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  & div {
    width: 100%;
    height: 90%;
    background-color: white;
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
    box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.35);
  }
  & div img {
    height: 80%;
    position: absolute;
    right: 10px;
    border-radius: 10px;
  }
`;

export const BtnBox = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 30px 10px 30px;
  box-sizing: border-box;
`;
export const SavePlanBtn = styled.div`
  padding: 15px;
  box-sizing: border-box;
  width: 100%;
  height: 20px;
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

export const PlanBottomBox = styled.div`
  width: 50%;
  height: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 10px 10px 70px 10px;
`;


export const PlanMidBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateY(-50%);
  
  width: 40%;
  height: 80%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: start;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  padding: 10px;
  & #gmp-map {
        width : 100%;
        height: 100%;
  }

  & html, body {
        height: 100%;
        margin: 0;
        padding: 0;
  }

  & #test1{
    width: 100%;
    height: 100%;
  }
  /* 3번째 테스트 */
  & #container {
    height: 100%;
    width: 100%;
    display: flex;
  }

  & #sidebar {
    flex-basis: 15rem;
    flex-grow: 1;
    padding: 1rem;
    max-width: 30rem;
    height: 100%;
    box-sizing: border-box;
    overflow: auto;
  }

  & #map {
    flex-basis: 0;
    flex-grow: 4;
    height: 100%;
  }
`;

export const PlanTopBox = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 50px 10px 10px 10px;
`;

export const Title = styled.div`
  font-size: 44px;
  font-weight: bold;
  padding: 5px 0 5px 0;
`;
export const Date = styled.div`
  font-size: 30px;
  padding: 5px 0 5px 0;
`;
export const Selected = styled.div`
  font-size: 18px;
  padding: 0 0 5px 0;
`;
