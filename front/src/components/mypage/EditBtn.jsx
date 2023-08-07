import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const Button = styled.div`
position: absolute;
left: 50%;
top: 40%;
transform: translate(-50%, -40%);
width: 250px;
border-radius:  5px;
height: 50px;
background-color: ${props => props.change ? '#3e7bff' : '#d6d6d6'};
color: ${props =>props.change ? 'white' :'#989898'};
display: flex;
justify-content: center;
align-items: center;
`;

const EditBtn = ({ change }) => {
return (
  <Button change={change}>
    수정 완료
  </Button>
);
};

export default EditBtn;