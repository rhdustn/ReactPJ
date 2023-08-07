import styled, {keyframes} from 'styled-components'

export const PlanBottomBox = styled.div`
    width: 100%; height: auto;
    box-sizing: border-box;
    display: flex; flex-direction: column;
    border: 1px solid;
    padding: 10px;
`

export const PerDayBox = styled.div`
    width: 100%; height: auto;
    border: 1px solid;
    position: relative;
    padding: 20px 0 20px 0;
`
export const PerDayDate = styled.div`
    width: 100%; height: 20px;
    position: absolute; top: 0;
    border: 1px solid;
    display: flex;

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
    width: 100%; height: auto;
    border: 1px solid;
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

    & div {
        width: 22px; height: 22px;
        border-radius: 100%;
        background-color: #277bc0;
        display: flex; justify-content: center; align-items: center;
        color: white;
        font-size: 12px; font-weight: bold;
    }
`
export const RoutePlace = styled.div`
    width: 90%; height: 100%;
    display: flex; justify-content: center; align-items: center;

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
        height: 100%;
    }
`