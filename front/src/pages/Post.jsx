import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ImgSlice} from '../components/boarddetail';
import { Main,BoardLine } from '../components/boarddetail/boarddetail.styled';
import { PostContent,PostTitle,PostBtn } from '../components/post/post.style';
import { PostPlan,ImgUpload } from '../components/post';


const Post = () => {
    const [title,setTitle]=useState();
    const [content,setContent]=useState();
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleTitleChange = (e) => {
        setTitle(e.target.value);
      };
      const handleContentChange = (e) => {
        setContent(e.target.value);
      };
       
    
  return (
    <div>
        postpage
        <Main>
            <ImgUpload/>
            <PostTitle type='text'name='title'placeholder='제목을 입력하세요'onChange={handleTitleChange}/>
            <PostContent type='text'name='content'placeholder='내용을 입력하세요'onChange={handleContentChange}/>
            <PostPlan/>
            <PostBtn >등록하기</PostBtn>
      </Main>
    </div>
  )
}

export default Post