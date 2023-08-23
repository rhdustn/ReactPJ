import React, { useState } from 'react';
import { StyledProfileName } from './mypage.styled';


const EditName = ({ setProfileBtnChange }) => {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");

  const NameClick = () => {
    setEditing(true);
  };

  const NameChange = (e) => {
    const newName = e.target.value;
    setName(newName);

    if (newName === name) {
      setProfileBtnChange(false);
    } else {
      setProfileBtnChange(true);
    }
  };

  const NameBlur = () => {
    setEditing(false);
  };

  return (
    <StyledProfileName onClick={NameClick}>
      {editing ? (
        <input
          type="text"
          value={name}
          onChange={NameChange}
          onBlur={NameBlur}
          autoFocus
        />
      ) : (
        name || '닉네임 설정'
      )}
    </StyledProfileName>
  );
};

export default EditName;