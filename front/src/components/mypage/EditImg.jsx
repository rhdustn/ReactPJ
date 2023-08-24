import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios'
import { useMutation, useQuery } from 'react-query';

import { StyledProfileImg,InputBtn } from './mypage.styled';


const EditImg = ({profileImg, setProfileImg}) => {

  const [selectedFile, setSelectedFile] = useState('');
  const [imagePreview, setImagePreview] = useState(selectedFile);
  const fileInputRef = useRef(null); 

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
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
    if(selectedFile != '') {
      console.log('dd')
      setProfileImg(selectedFile)
    }
  }, [selectedFile])

  return (
    <>
      <StyledProfileImg onClick={handleImageClick} preview={imagePreview}>
        {selectedFile ? '' : '프로필 선택'}
      </StyledProfileImg>
      <InputBtn>
        <input
          type="file"
          name="file"
          onChange={(e) => {
            handleFileChange(e)
          }}
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

export default React.memo(EditImg);