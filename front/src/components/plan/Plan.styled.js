import styled, {keyframes} from 'styled-components'

// PlanTop
export const PlanTopBox = styled.div`
    width: 100%; height: auto;
    box-sizing: border-box;
    display: flex; flex-direction: column;
    align-items: start;
    padding: 50px 10px 10px 10px;
`

export const Title = styled.div`
    font-size: 24px;
    font-weight: bold;
    padding: 5px 0 5px 0;
`
export const Date = styled.div`
    font-size: 12px;
    padding: 5px 0 5px 0;
`
export const Selected = styled.div`
    font-size: 12px;
    padding: 0 0 5px 0;
`

// ---------------------------------- //

// PlanMid
export const PlanMidBox = styled.div`
    width: 100%; height: 200px;
    box-sizing: border-box;
    display: flex; flex-direction: column;
    align-items: start;
    padding: 10px;
    z-index: 100;
    background-color: white;

    & div {
        width: 100%; height: 100%;
    }
    html, body {
        height: 100%;
        margin: 0;
        padding: 0;
    }
`

// ---------------------------------- //

// PlanBottom
export const PlanBottomBox = styled.div`
    width: 100%; height: auto;
    box-sizing: border-box;
    display: flex; flex-direction: column;
    padding: 10px 10px 70px 10px;
`

// 하루 일정
export const PerDayBox = styled.div`
    width: 100%; height: auto;
    position: relative;
    padding: 30px 0 30px 0;

    &:hover {
        background-color: #edebeb;
    }
`
export const PerDayDate = styled.div`
    width: 100%; height: 30px;
    position: absolute; top: 0;
    display: flex; align-items: center;
    padding: 0 10px 0 10px;
    box-sizing: border-box;

    & p {
        margin: 0;
        font-size: 14px;
    }
    & span {
        font-weight: bold;
        margin: 0 10px 0 0;
    }
`
export const PerDayAttraction = styled.div`
    width: calc(100% - 10px); height: auto;
    display: flex; flex-direction: column;
`
export const RouteBox = styled.div`
    width: 100%; height: 80px;
    display: flex;
`
export const RouteNumber = styled.div`
    width: 10%; height: 100%;
    display: flex;
    justify-content: center; align-items: center;
    position: relative;

    & div {
        width: 22px; height: 22px;
        border-radius: 100%;
        background-color: #277bc0;
        display: flex; justify-content: center; align-items: center;
        color: white;
        font-size: 12px; font-weight: bold;
    }
    & span {
        height: 100%; width: 1px;
        background-color: silver;
        position: absolute;
        z-index: -10;
    }
`
export const RoutePlace = styled.div`
    width: 90%; height: 100%;
    display: flex; justify-content: center; align-items: center;
    position: relative;

    & div {
        width: 100%; height: 90%;
        background-color: white;
        border-radius: 10px;
        display: flex; align-items: center;
        padding: 10px;
        box-sizing: border-box;
        box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.35);
    }
    & div img {
        height: 80%;
        position: absolute; right: 10px;
        border-radius: 10px;
    }
`
export const EditPlanBtn = styled.div`
    padding: 15px;
    box-sizing: border-box;
    width: 100%; height: 20px;
    display: flex; justify-content: center; align-items: center;
    border-radius: 5px;
    border: 1px solid silver;
    color: #277bc0;
    font-size: 14px; font-weight: bold;
    cursor: pointer;
    margin: 0 5px 0 5px;
    background-color: white;
`

// 저장 버튼
export const BtnBox = styled.div`
    width: 100%; height: auto;
    padding: 10px 30px 10px 30px;
    box-sizing: border-box;
    display: flex;
`
export const SavePlanBtn = styled.div`
    padding: 15px;
    box-sizing: border-box;
    width: 100%; height: 20px;
    display: flex; justify-content: center; align-items: center;
    border-radius: 15px;
    background-color: #277bc0;
    color: white;
    font-size: 16px; font-weight: bold;
    cursor: pointer;
`