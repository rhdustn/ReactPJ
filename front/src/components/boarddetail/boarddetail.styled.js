import styled,{keyframes} from 'styled-components';

const Main = styled.div`
width: 400px;
height: 800px;
`
const ImgBoxContainer = styled.div`
width: 400px;
height: 250px;
display: flex;
overflow: hidden;
`
const ImgBox = styled.div`
/* 나중에 이미지를 넣게 된다면 width를 100%만 주고 height는 안줌  */
width: 400px;
background-color: beige;
display: flex;
transition: transform 0.3s ease;
`
 const Image = styled.img`
  width: 400px;
`;
const TitleStyle = styled.div`
    box-sizing: border-box;
    overflow-wrap: break-word;
    color: rgb(58, 58, 58);
    float: none;
    font-weight: bold;
    white-space: pre-line;
    padding: 0px 30px;
    font-size: 24px;
    line-height: 1.2;
    letter-spacing: 0px;
    display: flex;
`
const SubContentStyle = styled.div`
    box-sizing: border-box;
    overflow-wrap: break-word;
    color: rgba(58, 58, 58, 0.8);
    float: none;
    font-weight: 500;
    white-space: pre-line;
    padding: 20px 30px 0px;
    font-size: 16px;
    line-height: 1.62;
    letter-spacing: 0px;
    display: flex;
`
const Popup = styled.div`
position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`
const slideInFromBottom = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;
const PopupContent = styled.div`
position: absolute;
bottom:0%;
 background-color: white;
 width: 380px;
  padding: 5px;
  border-top-left-radius:10px;
border-top-right-radius:10px;
animation: ${slideInFromBottom} 0.3s ease-in-out;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`
const DayList = styled.ul`
display: flex;
flex-direction: column;
align-items: flex-start;
list-style-type: none;
padding: 5px;
font-size: 20px;
`
const DayListli = styled.li`
margin-bottom: 10px;
margin-left: 15px;
`

const BtnStyle = styled.button`
    width: 150px;
    height: 30px;
    border: 2px solid LightGray;
    background-color: white;
    border-radius: 3px;
    margin: 5px;
`

export {
    Main, ImgBoxContainer, ImgBox,Image, TitleStyle, SubContentStyle,
    Popup, PopupContent, DayList, DayListli,BtnStyle
}