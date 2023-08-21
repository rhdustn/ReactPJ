import React, { useEffect, useState } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import { Main,MoveBoardBtn } from '../components/boarddetail/boarddetail.styled';
import { PostContent, PostTitle, PostBtn } from '../components/post/post.style';
import { PostPlan, ImgUpload } from '../components/post';
import axios from 'axios';

const BoardEdit = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const navigate = useNavigate();


  // 게시글 정보를 가져와서 화면에 표시
  useEffect(() => {
    const fetchPostData = async () => {
      try {
        // 게시판 정보 가져오기
        const response = await axios.get(`/post/${id}`); 
        const postData = response.data; 
        setTitle(postData.title);
        setDetail(postData.detail);
      } catch (error) {
        console.error('게시글 데이터 가져오기 에러:', error);
      }
    };

    fetchPostData();
  }, [id]);

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    if (uploadedFiles.length === 0 || title.trim() === '' || detail.trim() === '') {
      alert('이미지or제목or내용을 입력하세요!');
      return;
    }
    const formData = new FormData();

    for (let i = 0; i < uploadedFiles.length; i++) {
      formData.append('uploadedFiles', uploadedFiles[i]);
    }
    formData.append('title', title);
    formData.append('detail', detail);

    try {
      const response = await axios.post(
        `/post/edit/${id}`,
        formData,
        {
          withCredentials: true,
          headers: {
            'Content-Type': `multipart/form-data`,
          },
        }
      );
      const data = response.data;
      if (data === 'success') {
        navigate(`/board/${id}`);
      }
    } catch (error) {
      console.log('수정하기 에러:', error);
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDetailChange = (e) => {
    setDetail(e.target.value);
  };

  const handleFileUpload = (files) => {
    setUploadedFiles(files);
  };

  const MoveBoardClick =()=>{
    navigate("/board")
  }
  useEffect(() => {
    console.log(uploadedFiles)
  }, [uploadedFiles])
  return (
    <div>
      <MoveBoardBtn onClick={MoveBoardClick}>게시판으로 이동</MoveBoardBtn>
      <Main>
        <ImgUpload name="images" onUpload={handleFileUpload} files={uploadedFiles} />
        <PostTitle
          type="text"
          name="title"
          placeholder="제목을 입력하세요"
          onChange={handleTitleChange}
        />
        <PostContent
          type="text"
          name="detail"
          placeholder="내용을 입력하세요"
          onChange={handleDetailChange}
        />
        <PostPlan />
        <PostBtn onClick={handlePostSubmit}>수정하기</PostBtn>
      </Main>
    </div>
  );
};

export default BoardEdit;