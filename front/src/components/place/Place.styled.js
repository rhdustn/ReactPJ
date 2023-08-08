import styled from 'styled-components'

// AddPlaceTop
export const AddPlaceTopBox = styled.div`
    width: 100%; height: auto;
    padding: 60px 0 0 0;
    box-sizing: border-box;
    display: flex; flex-direction: column;
    align-items: center;
    border-bottom: 1px solid silver;
`
export const InputBox = styled.div`
    width: 100%;
    height: 45px;
    color: white;
    background-color: white;
    display: flex; align-items: center;
    padding: 0 15px 0 15px;
    box-sizing: border-box;

    & img {
        width: 15px; height: 15px;
    }
    & input {
        width: 100%; height: 30px;
        padding: 10px 10px 10px 0;
        box-sizing: border-box;
        font-size: 14px;
        border: none; outline: none;
        font-size: 16px;
        color: #1c2120;
    }
`

// AddPlaceMid
export const AddPlaceMidBox = styled.div`
    width: 100%; height: auto;
    box-sizing: border-box;
    display: flex; flex-direction: column;
    align-items: center;
    padding: 60px 10px 0 10px;
`
export const Title = styled.div`
    width: 100%; height: 30px;
    text-align: start;
    font-weight: bold;
    padding: 0 5px 0 5px;
    box-sizing: border-box;
`
export const PlaceBox = styled.div`
    width: 100%; height: 60px;
    display: flex;
    align-items: center;
    position: relative;;
`
export const ImgBox = styled.div`
    width: 40px; height: 40px;
    position: absolute; left: 5px;
    overflow: hidden;

    & img {
        height: 100%;
    }
`
export const PlaceName = styled.div`
    width: calc(100% - 125px);
    height: 100%;
    display: flex; align-items: center;
    position: absolute; left: 55px;
    font-weight: bold;
`
export const SelectBtnBox = styled.div`
    width: 50px; height: 100%;
    display: flex; justify-content: center; align-items: center;
    position: absolute; right: 5px;
`
export const SelectBtn = styled.div`
    font-size: 14px; font-weight: bold;
    width: 100%; height: 30px;
    border-radius: 25px;
    background-color: ${(props) => props.back || '#edebeb'};
    color: ${(props) => props.font || '#9b9a9a'};
    display: flex; justify-content: center; align-items: center;
    box-sizing: border-box;
    cursor: pointer;
`

// AddPlaceBottom
export const ShowSelectedBox = styled.div`
    width: 100%; height: 100px;
    position: fixed; bottom: 40px;
    background-color: #edebeb;
    display: flex; align-items: center;
    overflow-x: scroll;
`
export const Selected = styled.div`
    width: 70px; height: 80px;
    position: relative;

    & img {
        width: 40px; height: 40px;
        position: absolute; top: 10px;
        left: 50%;
        transform: translateX(-50%);
    }
    & div {
        width: 40px; height: 20px;
        margin: 0;
        position: absolute; top: 55px;
        left: 50%;
        transform: translateX(-50%);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space:nowrap;
        font-size: 12px;
    }
`
export const AddBtn = styled.div`
    width: 100%; height: 40px;
    background-color: #277bc0;
    color: white;
    font-weight: bold;
    position: fixed; bottom: 0;
    display: flex; justify-content: center; align-items: center;
`