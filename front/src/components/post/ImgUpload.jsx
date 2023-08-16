import React, { useRef, useState } from 'react';
import { UploadImg, UploadImgContain, ImgInputBtn } from './post.style';

const ImgUpload = () => {
  const [showImages, setShowImages] = useState([]); 

  const addImages = (e) => {
    const imgList = e.target.files; 
    let images = [];

    for (let i = 0; i < imgList.length; i++) {
      const imageURL = URL.createObjectURL(imgList[i]);
      images.push(imageURL);
    }

    setShowImages([...showImages, ...images]);
  };

  return (
    <div>
      <UploadImgContain>
        <ImgInputBtn>
          <input
            type="file"
            name="file"
            multiple 
            onChange={addImages} 
          />
        </ImgInputBtn>
      </UploadImgContain>
      {showImages.map((imageURL, index) => (
        <UploadImg key={index} src={imageURL} alt={`Image ${index}`} />
      ))}
    </div>
  );
};

export default ImgUpload;