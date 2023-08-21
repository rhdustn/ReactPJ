import React,{ useState } from 'react'
import { EditBtn,EditImg,EditName,ArrowBtn,EditText } from '../components/mypage'
import styled from 'styled-components';
import TopNav from '../components/nav/TopNav';

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
      <TopNav />

       <Main>
        <EditImg/>
        <EditName setProfileBtnChange={setProfileBtnChange}/>
        <EditBtn change={profileBtnChange}/>
        <EditText/>
        </Main>
        
    </div>
  )
}

export default EditProflie