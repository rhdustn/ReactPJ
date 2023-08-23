import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Main, MoveBoardBtn } from '../components/boarddetail/boarddetail.styled';
import { PostContent, PostTitle, PostBtn } from '../components/post/post.style';
import { PostPlan, ImgUpload } from '../components/post';
import axios from 'axios';
import { useSelector } from 'react-redux';


const BoardEdit = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const navigate = useNavigate();
  const boardDetail = useSelector((state) => { return state.BoardDetailSlice })



  // 게시글 정보를 가져와서 화면에 표시
  // useEffect(() => {
  //   const fetchPostData = async () => {
  //     try {
  //       // 게시판 정보 가져오기
  //       const response = await axios.get(`/detail/${id}`); 
  //       const postData = response.data; 
  //       console.log(postData)
  //     } catch (error) {
  //       console.error('게시글 데이터 가져오기 에러:', error);
  //     }
  //   };

  //   fetchPostData();
  // }, [id]);

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
    console.log(title)
    console.log(detail)
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
      console.log(data)
      if (data === 'success') {
        navigate(`/boarddetail/${id}`);
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

  const MoveBoardClick = () => {
    navigate("/board")
  }
  useEffect(() => {
    console.log(uploadedFiles)
  }, [uploadedFiles])

  useEffect(() => {
    console.log(boardDetail)
  }, [boardDetail])
  return (
    <div>
      <MoveBoardBtn onClick={MoveBoardClick}>게시판으로 이동</MoveBoardBtn>
      <Main>
        <ImgUpload name="images"
          onUpload={handleFileUpload}
          files={uploadedFiles} />
        <PostTitle
          type="text"
          name="title"
          placeholder={boardDetail.title}
          onChange={handleTitleChange}

        />
        <PostContent
          type="text"
          name="detail"
          placeholder={boardDetail.detail}
          onChange={handleDetailChange}
        />
        <PostPlan />
        <PostBtn onClick={handlePostSubmit}>수정하기</PostBtn>
      </Main>
    </div>
  );
};

export default BoardEdit;