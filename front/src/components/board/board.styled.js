import styled from 'styled-components';

 const Main = styled.div`
    display: inline-block;
    max-width: 354px;
    overflow: hidden;
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 20px;
    cursor: pointer;
    transform: translate(0,30px);
    position: relative;
    margin-top: 20px;

`
const ImgBox = styled.div`
width: 350px;
display: grid;
gap: 1px;
height: 150px;
border-top-left-radius:10px;
border-top-right-radius:10px;

`
const ShowImg = styled.img`
width: 350px;
height: 250px;
border-top-left-radius:10px;
border-top-right-radius:10px;
z-index: -1;
`
const Container = styled.div`
display: flex;
margin-left: 20px;
`
const MovePost = styled.div`
position: absolute;
right: 10%;
top: 4%;
`

const TextBox = styled.div`
position: relative;
border-top: none;
width: 350px;
display: grid;
gap: 1px;
height: 120px;
border-bottom-left-radius:10px;
border-bottom-right-radius:10px;
z-index: 5;
background-color: white;

`
const ProflieImg= styled.img`
position: absolute;
    top: 48%;
    left: 8%;
    width: 42px;
    height: 42px;
    border-radius: 100%;
    border: 2px solid white;
    z-index: 10;
   
   
`
const SmallText = styled.div`
position: absolute;
top: 25%;
left: 10%;
font-size: 14px;

`
const SubTitle = styled.div`
position: absolute;
top: 50%;
left: 10%;
font-size: 19px;
font-weight: 600;

`
const BottomBox = styled.div`
height: 100px;
width: 400px;
`

export {Main,ImgBox,Container,TextBox,ProflieImg,SmallText,SubTitle,MovePost,ShowImg,BottomBox}

