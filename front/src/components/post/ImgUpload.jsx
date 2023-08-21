import React, { useRef, useState } from 'react';
import { UploadImgContain,UploadBtn,DeleteBtn,ShowImg,ImgContain,ImgStyle } from './post.style';

const ImgUpload = ({ onUpload, files }) => {
  const [imageFiles, setImageFiles] = useState([]);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setImageFiles([...imageFiles, ...selectedFiles]);
    onUpload([...files, ...selectedFiles])
  };
  const handleImageDelete = (index) => {
    const updatedFiles = imageFiles.filter((_, i) => i !== index);
    setImageFiles(updatedFiles);
  };

  const inputRef = useRef(null);

  const handleAddButtonClick = () => {
    inputRef.current.click();
  };

  return (
    <div>
      <UploadImgContain>
        {imageFiles.map((file, index) => (
          <ShowImg key={index} style={{ display: 'flex', alignItems: 'center' }}>
            <ImgContain>
            <DeleteBtn onClick={() => handleImageDelete(index)}>🗙</DeleteBtn>
            <ImgStyle
              src={URL.createObjectURL(file)}
              alt={`Image ${index}`}
            />
         </ImgContain> 
         </ShowImg>
        ))}
        <input
          type="file"
          multiple
          style={{ display: 'none' }}
          ref={inputRef}
          onChange={handleFileChange}
        />
      </UploadImgContain>
      <br/>
      <UploadBtn onClick={handleAddButtonClick}>Add Images</UploadBtn>
      <br/>
      <br/>
    </div>
  );
};

export default ImgUpload;