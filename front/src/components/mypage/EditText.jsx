import React from 'react'
import styled from "styled-components"

const Text = styled.div`
position: absolute;  
  left: 50%;
  top: 45%;
  transform: translate(-50%, -45%);
width: 250px;
font-size: 12px;
`

const EditText = () => {
  return (
    <Text>한글/영어/숫자/밑줄/띄어쓰기를 사용할 수 있습니다</Text>
  )
}

export default EditText