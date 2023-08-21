import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ImgBox, ImgBoxContainer, Image, ImageBtnPre, ImageBtnNext } from './boarddetail.styled'

const images = [
  
];


const ImgSlice = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const BoardDetailImg = async ({ queryKey }) => {
    try {
      const response = await axios.get(`/post/detail/${queryKey[1]}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log('hi')
  })
  const { data, isLoading } = useQuery(['boardDetail', id], BoardDetailImg);


  return (
    <div>
      {data && <ImgBoxContainer>
        <ImageBtnPre onClick={prevImage}>◀️</ImageBtnPre>
        <ImgBox style={{ transform: `translateX(-${currentImageIndex * (100 / images.length)}%)` }}>
          {images.map((image, index) => (
            <Image key={index} src={image} style={{ width: '400px' }} alt={`Image ${index + 1}`} />
          ))}
        </ImgBox>
        <ImageBtnNext onClick={nextImage}>▶️</ImageBtnNext>
      </ImgBoxContainer>}

    </div>
  )
}

export default ImgSlice