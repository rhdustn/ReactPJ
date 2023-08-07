import React,{ useState } from 'react'
import { EditBtn,EditImg,EditName,ArrowBtn,EditText } from '../components/mypage'
import styled from 'styled-components';

const EditProflie = () => {
const Main = styled.div`
width: 400px;
height: 800px;
position: relative;
left: 50%;
transform: translate(-50%);

`
  const [profileBtnChange, setProfileBtnChange] = useState(false);
  const [profileName, setProfileName] = useState("");
  return (
    <div>
       <Main>
        <ArrowBtn/>
        <EditImg/>
        <EditName setProfileBtnChange={setProfileBtnChange}/>
        <EditBtn change={profileBtnChange}/>
        <EditText/>
        </Main>
        
    </div>
  )
}

export default EditProflie