import styled from 'styled-components'
import { FadeInAni } from './MainTop.styled'

export const MainMidBox = styled.div`
    width: 100%; height: auto;
    box-sizing: border-box;
    display: flex; flex-direction: column;
    align-items: center;
    margin: 0 0 10px 0;
`

export const BigLabel = styled.div`
    width: 100%;
    text-align: start;
    font-size: 18px; font-weight: bold;
    color: #1c2120;
    padding: 10px 30px 10px 30px;
    box-sizing: border-box;
`

export const DateBoxWrap = styled.div`
    width: 100%; height: auto;
    display: flex; justify-content: center; align-items: center;
    box-sizing: border-box;
`

export const DateBox = styled.div`
    width: 170px; height: 30px;
    background-color: white;
    display: flex; align-items: center;
    box-sizing: border-box;
    margin: 0 5px 0 5px;
    border: 1px solid silver;
    border-radius: 5px;
    padding: 0 5px 0 5px;

    & input {
        width: 100%;
        border: none;
    }
`