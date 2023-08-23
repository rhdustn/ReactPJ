import styled from 'styled-components';

const StyleArrow = styled.div`
  position: absolute;
  left: 10%;
  top: 3%;
  cursor: pointer;
`;

const StyledImage = styled.img`
  width: 30px;
`;
const Button = styled.div`
position: absolute;
left: 50%;
top: 40%;
transform: translate(-50%, -40%);
width: 250px;
border-radius:  5px;
height: 50px;
background-color: ${props => props.change ? '#3e7bff' : '#d6d6d6'};
color: ${props =>props.change ? 'white' :'#989898'};
display: flex;
justify-content: center;
align-items: center;
`;
const StyledProfileImg = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #ffd8de;
  position: absolute;  
  left: 50%;
  top: 15%;
  transform: translate(-50%, -15%);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer; 
  background-image: ${(props) => (props.preview ? `url(${props.preview})` : 'none')};
  background-size: cover;
  background-position: center;
`;

const InputBtn = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%,-40%);
  display: none; 
`;
const StyledProfileName = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -30%);
  font-weight: 600;
  cursor: pointer;
  border-bottom: 2px solid #64a7fe;

  & input {
    outline: none;
    border: none;
  }
`;

const Text = styled.div`
position: absolute;  
  left: 50%;
  top: 45%;
  transform: translate(-50%, -45%);
width: 250px;
font-size: 12px;
`

const EditNavigate = styled.div`
position: absolute;
right: 10%;
top: 5%;
`
const ProflieImg = styled.div`
width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #ffd8de;
  position: absolute;  
  left: 50%;
  top: 15%;
  transform: translate(-50%, -15%);
  
  `
  const ProfileName = styled.div`
  position: absolute;

  font-weight: 600;
  cursor: pointer;

  top: 30%;
  left: 50%;
  transform: translate(-50%, -30%);

`;
const TabMain = styled.div`
  position: absolute;
  top: 40%;
`;

const TabsContainer = styled.div`
  display: flex;
`;

const TabButton = styled.button`
  width: 100px;
  background-color: ${(props) => (props.active ? 'white' : 'white')};
  color: #676767;
  padding: 10px 20px;
  border: none;
  border-bottom: 2px solid ${(props) => (props.active ? '#5da0ff' : 'white')};
  cursor: pointer;
`;

const Content = styled.div`
  background-color: #f5f5f5;
  height: 400px;
  border-radius: 0 0 5px 5px;
`;

export {StyleArrow,StyledImage,Button,StyledProfileImg,InputBtn,StyledProfileName,
    Text, EditNavigate, ProflieImg, ProfileName, TabMain, TabsContainer, TabButton, 
    Content
}



