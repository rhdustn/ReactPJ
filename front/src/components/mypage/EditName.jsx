import React, { useEffect, useState } from 'react';
import { StyledProfileName } from './mypage.styled';


const EditName = ({ profileName, setProfileName, setProfileBtnChange }) => {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");

  const NameClick = () => {
    setEditing(true);
  };

  const NameBlur = () => {
    setEditing(false);
    if(name == '') {
      setProfileName(profileName)
      setProfileBtnChange(false)
    }else {
      setProfileName(name)
      setProfileBtnChange(true);
    }
  };

  useEffect(() => {
    console.log(profileName)
  }, [])


  return (
    <StyledProfileName onClick={NameClick}>
      {editing ? (
        <input
          type="text"
          value={name}
          onChange={(e) => {setName(e.target.value)}}
          onBlur={NameBlur}
          autoFocus
          maxLength={10}
        />
      ) : (
        name || profileName
      )}
    </StyledProfileName>
  );
};

export default EditName;