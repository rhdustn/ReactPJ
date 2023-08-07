import React from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


const StyleArrow = styled.div`
  position: absolute;
  left: 10%;
  top: 3%;
  cursor: pointer;
`;

const StyledImage = styled.img`
  width: 30px;
`;

const ArrowBtn = () => {
    const navigate = useNavigate();

  const handleImageClick = () => {
    navigate('/mypage'); 
  };

  return (
    <div>
      <StyleArrow onClick={handleImageClick}>
        <StyledImage src="https://cdn.icon-icons.com/icons2/1462/PNG/512/134leftarrow_100014.png" alt="" />
      </StyleArrow>
    </div>
  );
  
}

export default ArrowBtn