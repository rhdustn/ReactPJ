import styled,{keyframes} from 'styled-components';

const Main = styled.div`
width: 400px;
height: 800px;
`
const ImgBoxContainer = styled.div`
width: 400px;
height: 280px;
display: flex;
overflow: hidden;
position: relative;
`
const ImgBox = styled.div`
/* 나중에 이미지를 넣게 된다면 width를 100%만 주고 height는 안줌  */
width: 1200px;
height: 250px;
background-color: beige;
display: flex;
transition: transform 0.3s ease;

`
 const Image = styled.img`
  width: 400px;
  height: 250px;
  overflow-y: hidden;
`;
const ImageBtnPre = styled.button`
position: absolute;
top: 50%;
background: none;
color: white;
z-index: 2;
border: none;
transform: translate(0,-50%);
`
const ImageBtnNext = styled.button`
position: absolute;
background: none;
color: white;
right: 0%;
top: 50%;
z-index: 2;
border: none;
transform: translate(0,-50%);
`
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
const BoardLine = styled.div`
width: 400px;
height: 10px;
background-color: rgb(239, 239, 239);
margin-top: 30px;
`
const BoardPlanContainer = styled.div`
width: 400px;
height: 600px;
border: 1px solid;
`
const AddStyle = styled.button`
    width: 150px;
    height: 50px;
    display: inline-block;
    float: none;
    font-weight: bold;
    text-align: center;
    font-size: 14px;
    line-height: 17px;
    border-radius: 4px;
    padding: 7px 12px;
    border: 1px solid rgb(54, 143, 255);
    background-color: rgb(54, 143, 255);
    color: white;
    margin-top: 10px;
`
const imgStyle = {
  width: '18px'
  
};

const CommentContainer = styled.div`
width: 400px;
height: 400px;
position: relative;
`

const CommentMain = styled.div`
width: 400px;
height: 340px;
overflow: scroll;
position: relative;

`
const CommentFormdiv = styled.div`
list-style: none;
width: 400px;
height: 40px;
border-top: 2px solid;
border-color: rgb(239, 239, 239);;
position: absolute;
bottom: 6%;
display: flex;
justify-content: space-between;
justify-content: center;
align-items: center;
`
const CommentInput = styled.input`
  width: 300px;
  height: 38px;
  border: none;

`
const CommentBtn = styled.button`
border: none;
font-size: 15px;
background-color: white;
font-weight: bold;
color:lightblue;
outline: none;
position: absolute;
right: 1%;
top: 50%;
transform: translate(-1%,-50%);

&:hover {
    color: rgb(54, 143, 255);
  }

`
const CommentProflieImg = styled.div`
width: 30px;
height: 30px;
border: 1px solid;
border-radius: 50%;
`

const CommentContain = styled.div`
width: 400px;
border-top: 3px solid lightgray;
position: relative;
margin: 10px;
height: 50px;
align-items: center;
display: flex;
 
` 
const CommentContain2 = styled.div`
    display: flex;
    align-items: flex-start;
    width: 250px;
    flex-direction: column;
    margin-left: 15px;
    
`
const CommentContain3 = styled.div`
display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 10px;
`
const Recommentdiv = styled.div`
    position: absolute;
    right: 10%;
    top: 30%;
    `
const Recommentbox = styled.div`
position: absolute;
left: 16%;
bottom: 0%;
transform: translate(-16%);
  border: none;
`
const Repliesdiv = styled.div`
  list-style: none;
  display: flex;
  flex-direction: column;
    align-items: flex-start;
    margin-left: 50px;
    border-bottom: 1px solid lightgray;
    width: 270px;
    padding: 3px;
    position: relative;
  
`
const RelpyInput = styled.input`
width: 250px;
  height: 32px;
  font-size: 15px;
  border: 0;
  border-radius: 15px;
  outline: none;
  padding-left: 10px;
  background-color: rgb(233, 233, 233);
`
const RelpyBtn = styled.button`
background: lightblue;
border: none;
height: 32px;
border-radius: 15px;

`
const RelpyBtn2 = styled.button`
background: lightcoral;
border: none;
height: 32px;
border-radius: 15px;
margin-left: 5px;

`
const Replyspan = styled.span`
position: absolute;
right: 0%;
`




export {
    Main, ImgBoxContainer, ImgBox,Image, TitleStyle, SubContentStyle,
    Popup, PopupContent, DayList, DayListli,BtnStyle,ImageBtnPre,ImageBtnNext,
    BoardLine,BoardPlanContainer,AddStyle,imgStyle,CommentContainer,CommentMain,CommentFormdiv,
    CommentInput,CommentBtn,CommentProflieImg,CommentContain,CommentContain2,Recommentdiv,
    Recommentbox,CommentContain3,Repliesdiv,RelpyInput,RelpyBtn,RelpyBtn2,Replyspan
}