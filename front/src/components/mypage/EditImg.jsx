import React, { useState, useRef } from 'react';
import axios from 'axios'
import { useMutation, useQuery } from 'react-query';

import { StyledProfileImg,InputBtn } from './mypage.styled';


const EditImg = () => {
  const default_profile = '/imgs/profiles/default_profile.jpeg'

  const [selectedFile, setSelectedFile] = useState(default_profile);
  const [imagePreview, setImagePreview] = useState(default_profile);
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


  // 로그인 유저 정보 가져오기
  const tryGetUserInfo = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/mypage/getInfo`)
      const data = response.data;
      console.log(data);
      return data;
    } catch (error) {
      console.log(error)
    }
  }

  const {data, isLoading} = useQuery(['getUser'], tryGetUserInfo)


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