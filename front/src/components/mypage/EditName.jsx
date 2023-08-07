import React, { useState } from 'react';
import styled from 'styled-components';

const StyledProfileName = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -30%);
  font-weight: 600;
  cursor: pointer;
  border-bottom: 2px solid #64a7fe;
`;

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
        name || 'Profile Edit Name'
      )}
    </StyledProfileName>
  );
};

export default EditName;