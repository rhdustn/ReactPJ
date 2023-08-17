import { styled } from "styled-components";

const PostTitle = styled.input`
  color: rgb(58, 58, 58);
  width: 90%; 
  height: 35px; 
  padding: 10px;
  border: 2px solid #ccc; 
  border-radius: 8px;
  box-sizing: border-box;
  font-weight: bold;
  font-size: 15px;
  line-height: 1.2;
  letter-spacing: 0px;
  outline: none;
  margin-top: 15px;

  &:focus {
    border-color: #007bff; /* 포커스 시 테두리 색 변경 */
  }
`;
const PostContent = styled.textarea`
 margin-top: 15px;
  width: 350px;
  height: 150px; 
  color: rgba(58, 58, 58, 0.8);
  font-size: 15px;
  background-color: #f0f0f0; 
  border: 1px solid #ccc; 
  border-radius: 8px; 
  padding: 10px; 
  resize: vertical; 
  outline: none;
`
const PostPlanContainer = styled.div`
width: 400px;
height: 600px;
`
const PostBtn = styled.button`
    width: 150px;
    height: 50px;
    float: none;
    font-weight: bold;
    text-align: center;
    font-size: 14px;
    border-radius: 4px;
    padding: 7px 12px;
    border: 1px solid rgb(54, 143, 255);
    background-color: rgb(54, 143, 255);
    color: white;
    margin-top: 10px;
`
const UploadImgContain = styled.div`
position: relative;
width: 400px;
height: 300px;
border: 1px solid #E2E2E2;
display: flex;
overflow-x: scroll;
`
const UploadImg = styled.div`
margin-top: 10ox;
padding: 6px 15px;
background: var(--main-color-2);
color: black;
cursor: pointer;
margin-bottom: 30px;
`

const ImgInputBtn = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%,-40%);
  display: none; 
`;

const ShowImg = styled.div`
width: 400px;
height: 300px;
`
const UploadBtn = styled.button`
width: 100px;
height: 30px;
border-radius: 10px;
background-color: rgb(54, 143, 255);
position: absolute;
transform: translate(-50%);
color:white;
border: none;
`
const DeleteBtn = styled.button`
position: absolute;
border: none;
font-size: 20px;
color: red;
background-color: transparent;
`
const ImgContain = styled.div`
position: relative;
`
const ImgStyle = styled.img`
width: 200px;
height: 300px;
`


export {PostContent,PostTitle,PostPlanContainer,PostBtn,UploadImgContain,UploadImg
,ImgInputBtn,ShowImg,UploadBtn,DeleteBtn,ImgContain,ImgStyle
}