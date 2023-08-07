import styled, {keyframes} from 'styled-components'

export const MainTopBox = styled.div`
    width: 100%; height: auto;
    background-color: #277bc0;
    border-radius: 0 0 30px 30px;
    padding: 10px;
    box-sizing: border-box;
    display: flex; flex-direction: column;
    align-items: center;
    margin: 0 0 20px 0;
`

export const LogoBox = styled.div`
    width: 100%; height: 50px;
    position: relative;
    box-sizing: border-box;

    & img {
        height: 100%;
        position: absolute; left: 10px;
    }
`

export const TextBox = styled.div`
    width: 100%;
    // height: 70%;
    display: flex; flex-wrap: wrap;
    margin: 0 0 20px 0;

    & img {
        width: 100%;
    }
`

export const InputBox = styled.div`
    width: 320px;
    height: 45px;
    border-radius: 25px;
    color: white;
    background-color: white;
    display: flex; align-items: center;
    padding: 0 30px 0 30px;
    box-sizing: border-box;
    margin: 0 0 20px 0;

    & img {
        width: 20px; height: 20px;
    }
    & input {
        width: 100%; height: 30px;
        padding: 10px 0 7px 10px;
        box-sizing: border-box;
        font-size: 18px;
        border: none; outline: none;
        font-size: 16px;
        color: #1c2120;
    }
`

