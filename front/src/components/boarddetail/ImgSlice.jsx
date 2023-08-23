import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ImgBox, ImgBoxContainer, Image, ImageBtnPre, ImageBtnNext } from './boarddetail.styled'

const imgPath = '/imgs/userplanimg'


const ImgSlice = () => {
  const { id } = useParams();
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? imgArr.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === imgArr.length - 1 ? 0 : prevIndex + 1));
  };

  const BoardDetailImg = async ({ queryKey }) => {
    try {
      const response = await axios.get(`/post/detail/${queryKey[1]}`);
      return response.data
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log('hi')
  })
  const { data, isLoading } = useQuery(['boardDetail', id], BoardDetailImg);
console.log(data.data.images)
const imgArr = JSON.parse(data.data.images)



  return (
    <div>
      {data && <ImgBoxContainer>
        <ImageBtnPre onClick={prevImage}>◀️</ImageBtnPre>
        <ImgBox style={{ transform: `translateX(-${currentImageIndex * (100 / imgArr.length)}%)` }}>
          {imgArr.map((image, index) => (
            <Image key={index} src={imgPath+"/"+image} style={{ width: '400px' }} alt={`Image ${index + 1}`} />
          ))}
        </ImgBox>
        <ImageBtnNext onClick={nextImage}>▶️</ImageBtnNext>
      </ImgBoxContainer>}

    </div>
  )
}

export default ImgSlice