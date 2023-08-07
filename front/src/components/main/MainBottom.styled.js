import styled from 'styled-components'

export const MainBottomBox = styled.div`
    width: 100%; height: auto;
    padding: 10px;
    box-sizing: border-box;
    display: flex; flex-direction: column;
    align-items: center;
    margin: 0 0 10px 0;
    padding: 0 0 70px 0;
`

export const SmallLabel = styled.div`
    width: 100%;
    text-align: start;
    font-size: 14px; font-weight: bold;
    color: #1c2120;
    padding: 10px 30px 10px 30px;
    box-sizing: border-box;
`

export const SelectBox = styled.div`
    width: 100%; height: auto;
    display: flex; flex-wrap: wrap;
    padding: 0 30px 0 30px;
    box-sizing: border-box;
    margin: 0 0 10px 0;
`
export const Select = styled.div`
    font-size: 14px; font-weight: bold;
    width: auto; height: 30px;
    border-radius: 25px;
    background-color: ${(props) => props.back || '#edebeb'};
    color: ${(props) => props.font || '#9b9a9a'};
    display: flex; justify-content: center; align-items: center;
    padding: 15px;
    box-sizing: border-box;
    margin: 0 10px 7px 0;
    cursor: pointer;
`

export const BtnBox = styled.div`
    width: 100%; height: auto;
    padding: 10px 30px 10px 30px;
    box-sizing: border-box;
`
export const MakePlanBtn = styled.div`
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