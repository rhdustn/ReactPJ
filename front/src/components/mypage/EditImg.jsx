import React, { useState, useRef } from 'react';
import styled from 'styled-components';

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

const EditImg = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null); 

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <StyledProfileImg onClick={handleImageClick} preview={imagePreview}>
        {selectedFile ? selectedFile.name : 'imgs'}
      </StyledProfileImg>
      <InputBtn>
        <input
          type="file"
          name="file"
          onChange={handleFileChange}
          ref={fileInputRef} 
          style={{ display: 'none' }}
        />
        <button type="button" onClick={handleButtonClick}>
          파일 등록하기
        </button>
      </InputBtn>
    </>
  );
};

export default EditImg;