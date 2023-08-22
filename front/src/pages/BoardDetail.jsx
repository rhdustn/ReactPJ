import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Main, BoardLine, TitleStyle, SubContentStyle } from '../components/boarddetail/boarddetail.styled';
import { ImgSlice, DayBtn, PlanBtn, DayPopup, BoardPlan, Comment } from '../components/boarddetail';
import BottomNav from '../components/nav/BottomNav';
import axios from 'axios';
import { create } from '../redux/features/post';

  const BoardDetail = () => {
  const [popup, setPopup] = useState(false);
  const { id } = useParams();
 const navigate = useNavigate()
 const dispatch = useDispatch();

 const boardEditClick =()=>{
  navigate(`/boardedit/${id}`)
 }

  const BoardDetailView = async ({queryKey}) => {
    try {
      console.log("==================")
      console.log(queryKey)
      const response = await axios.get(`/post/detail/${queryKey[1]}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  const { data, isLoading } = useQuery(['boardDetail', id], BoardDetailView);

  const boardDelet = async () => {
    try {
      const response = await axios.get(`/post/delete/${id}`);
      const data = response.data;
      if (data === "delete success") {
        navigate("/board");
      }
    } catch (error) {
      console.log("글 삭제 에러");
      console.log(error);
    }
  };
  const handleDeleteCheck = () => {
    const check = window.confirm('정말로 게시글을 삭제하실건가요??');
    if (check) {
      boardDelet();
    }
  };

  useEffect(()=>{
    if (data) {
    dispatch(create(data))
      
    }
    console.log(data)
  },[data])

  

  const DayBtnClick = () => {
    setPopup(true);
  };

  return (
    <div>
      {data&& <Main>
              travel-opener
             <button onClick={boardEditClick}>수정하기</button>
             <button onClick={handleDeleteCheck}>삭제하기</button>
              <ImgSlice />
              <TitleStyle>{data.title}</TitleStyle>
              <SubContentStyle>{data.detail}</SubContentStyle>
              <div>
                <DayBtn DayBtnClick={DayBtnClick} />
                <PlanBtn />
              </div>
              {popup && <DayPopup onClose={() => setPopup(false)} />}
              <BoardPlan />
              <Comment />
              <BoardLine />
              <BottomNav />
              
            </Main>}
     
    </div>

  );
};

export default BoardDetail;
