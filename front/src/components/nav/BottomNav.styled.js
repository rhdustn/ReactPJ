import styled from 'styled-components'

export const BottomNavBox = styled.div`
    width: 100%;
    height: 60px;
    position: fixed; bottom: 0;
    border-top: 1px solid #edebeb;
    background-color: white;
    display: flex;
    justify-content: center; align-items: center;
`

export const BottomNavBtn = styled.div`
    width: 100px; height: 100%;
    display: flex; flex-direction: column;
    justify-content: center; align-items: center;
    box-sizing: border-box;
    cursor: pointer;

    & img {
        height: 60%;
    }
    & .profile_img {
        border-radius: 100%;
        border: 1px solid silver;
    }
    & p {
        margin: 0;
        font-size: 13px;
        color: #737373; // #a6a6a6
    }
`