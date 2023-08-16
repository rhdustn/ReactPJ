import React, { useRef, useState } from 'react'
import { UploadImg,UploadImgContain,ImgInputBtn } from './post.style'

const ImgUpload = () => {
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
  return (
    <div>
        <UploadImgContain> 
        <ImgInputBtn>
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
        </ImgInputBtn>
        </UploadImgContain>
        <UploadImg/>
    </div>
  )
}

export default ImgUpload