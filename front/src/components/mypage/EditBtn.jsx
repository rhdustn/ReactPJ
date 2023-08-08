import React, { useState, useRef } from 'react';
import { Button } from './mypage.styled';



const EditBtn = ({ change }) => {
return (
  <Button change={change}>
    수정 완료
  </Button>
);
};

export default EditBtn;