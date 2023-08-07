import styled from 'styled-components'

export const TopNavBox = styled.div`
    width: 100%;
    height: 50px;
    position: fixed; top: 0;
    background-color: white;
    display: flex;
`
export const TopNavBtn = styled.div`
    width: 50px; height: 100%;
    display: flex; justify-content: center; align-items: center;

    & img {
        width: 40%;
    }
`

export const PlanInfoBox = styled.div`
    height: 100%;
    display: flex; flex-direction: column;
    justify-content: center;
    align-items: start;
`

export const PlanInfoTitle = styled.p`
    font-size: 14px;
    font-weight: bold;
    margin: 0;
`

export const PlantInfoDate = styled.p`
    font-size: 10px;
    margin: 0;
`