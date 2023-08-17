import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Main,BoardLine } from '../components/boarddetail/boarddetail.styled';
import { PostContent,PostTitle,PostBtn } from '../components/post/post.style';
import { PostPlan,ImgUpload } from '../components/post';
import axios from'axios'

const Post = () => {
    const [title,setTitle]=useState();
    const [detail,setDetail]=useState();
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const navigate = useNavigate()
    
    const handlePostSubmit = async() => {
      try {
        const response = await axios.post("http://localhost:8080/post/write", {title, detail,uploadedFiles },{withCredentials:true});
        const data = response.data; 
        if(data=="create success"){
          navigate("/board")
        }
      } catch (error) {
        console.log(error)
      }
    }

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
      };

    const handleDetailChange = (e) => {
        setDetail(e.target.value);
    };
    const handleFileUpload = (files) => {
      setUploadedFiles(files);
    };
  return (
    <div>
        postpage
        <Main>
            <ImgUpload name='images' onUpload={handleFileUpload}/>
            <PostTitle type='text'name='title'placeholder='제목을 입력하세요'onChange={handleTitleChange}/>
            <PostContent type='text'name='detail'placeholder='내용을 입력하세요'onChange={handleDetailChange}/>
            <PostPlan/>
            <PostBtn onClick={handlePostSubmit}>등록하기</PostBtn>
      </Main>
    </div>
  )
}

export default Post