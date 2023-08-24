import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios'
import { useMutation, useQuery } from 'react-query';

import { StyledProfileImg,InputBtn } from './mypage.styled';


const EditImg = ({profileImg, setProfileImg}) => {
  const default_profile = '/imgs/profiles/default_profile.jpeg'

  const [selectedFile, setSelectedFile] = useState(profileImg);
  const [imagePreview, setImagePreview] = useState(profileImg);
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

  useEffect(() => {
    console.log(selectedFile)
  }, [selectedFile])

  useEffect(() => {
    if(profileImg == null) {
      setSelectedFile(default_profile)
      setImagePreview(default_profile)
    }
  }, [])

  return (
    <>
      <StyledProfileImg onClick={handleImageClick} preview={imagePreview}>
        {selectedFile ? '' : 'imgs'}
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