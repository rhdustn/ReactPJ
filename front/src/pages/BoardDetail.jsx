import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import {
  Main, BoardLine, TitleStyle, SubContentStyle, ButtonBox, ShowButtonBox,
  EditImg, HeaderDiv, EditBtnStyle, DelBtnStyle
} from '../components/boarddetail/boarddetail.styled';
import { ImgSlice, DayBtn, PlanBtn, DayPopup, BoardPlan, Comment } from '../components/boarddetail';
import BottomNav from '../components/nav/BottomNav';
import axios from 'axios';
import { create } from '../redux/features/post';

const BoardDetail = () => {
  const [popup, setPopup] = useState(false);
  const [showBox, setShowBox] = useState(false)
  const { id } = useParams();
  const navigate = useNavigate()
  const dispatch = useDispatch();
  // 글을 쓴 유저만 편집 아이콘이 보이게
  const currentUser = useSelector(state => state.user);


  const boardEditClick = () => {
    navigate(`/boardedit/${id}`)
  }

  const BoardDetailView = async ({ queryKey }) => {
    try {
      console.log(queryKey)
      const response = await axios.get(`/post/detail/${queryKey[1]}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  const { data, isLoading } = useQuery(['boardDetail', id], BoardDetailView);
  console.log("sssssssssssssssss", data)

  
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

  useEffect(() => {
    if (data) {
      dispatch(create(data))

    }
    console.log(data)
  }, [data])

  const DayBtnClick = () => {
    console.log("팝업창 클릭 됨?");
    setPopup(true);
  };
  const ShowboxClick = () => {
    setShowBox(true)
  }
  const XClick = () => {
    setShowBox(false)
  }

  return (
    <div>
      <HeaderDiv>
        travel opener 게시판 디테일
        <ButtonBox onClick={ShowboxClick}><EditImg src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAADY2Nh+fn7s7OxPT086Ojrc3Nz19fXBwcETExPj4+PPz8+kpKSHh4eXl5fHx8eRkZGlpaVkZGQgICCxsbEaGho/Pz94eHglJSVHR0dbW1u5ubkqKippaWmenp7Qj+cAAAAEX0lEQVR4nO2di5aiMAyGqaKCiHgbAR3H93/LXZYdReXSZOaY84d8L2D+U2zSNGmC4F1EcVrk5dIty7xI4+htv/smkuzkHjllibRRv8jq7No4r6QN+yUmz8vXWMiJtHG/QDTt1Fcxhf9Drspegc6V4J9qOqCvIpU28idsPQQ6t5U2k8/aS6Bza2lDuWSeAp3LpE3l8ekt0LlPaWM5JASBziEGON1+vo2TtLl0fPxEEzifERIFOhdKm0ykP1ZrYyptMo2ILNA5rAjV3xXewXKKF4bCi7TRFFYMgc4hnTJ8A9JHkMLTGUvhTNpsf+jOsAbHJdJC0js4wSnlVNEE54TB8YYVOB7RL3nxCk46g+cskNyFfoX6v1L9O80HU+GHtOHeTJgKce5p9EdtQc4SmEubTaBgKSykzSYQsxTG0mYTiI4MgUeoVBTnM0X6SINgwVC4kDaaRnv1RR9naZOJ0J0+jrv/DzWtD5bU/0u0JAlcQm2kNTSfiOQLb1DOwThn3wf891O0ffSGb+obKNn9jN8qwq5gxZeHwC9pI3/GdVDgVdrEnzKZ9+qbw4UyLfQtI/wC1oRd2cUMKDEzxOer45jh3DT5EcbT2Xf9wmU2jRUtX4MoSRaLRZIARtmGYRiGYRiGYRiGYRiGYRiGYagiCjfX7Xq93l43ocKbi2S3PzSu1g77HU6jmg8t14eqLhA/uiqGjzgNFn2s+koV5kjdzR0MVbeBVrTdCIc7L3Lo+26/cm+wAu8mvg8PwP4Z/Qv2QVeR0t+F+V+ktHchNXXdoDUDAzoN6vMmeLtNf9HlK3Npg6nQW4HRYlR6e95R2mQanLc/sA5TnCd4oHoSeA/UIJ36dyyFO2mzCexZCvfSZvsTHYbltHDAycDpf1Nhw1S4kTbcm+FWoHZw+kv0v8Cj/xUlU4ivUP//UP9eqt8f6o9p9Mel+s8WIzgf6j/j68/TjCDXpj9fOoKct/57ixHcPem/PxzBHfAI7vH112KMoJ5mBDVRI6hrC/TXJgYjqC8N9NcIV2iv867QXqv/D+X9FoZhGIZhGIZhGIZhGIZhGIZhQKF7voX2GSXK58yonxWkfd6T+pld6ueuqZ+dp37+ofoZlurnkKqfJat+HrD+mc7q53Lrn63uv49+A7af+pfp38Eq9y4YCgtpoylE9OY8545I2ynNF36D5BM5HynWZ0pp6roD1N6l/00FuruvwXH69CbgGpz2i67s4RCZtOHe6H+BR/8rSvoV6v9K9e80nHc/KnBuo3jP0yA9UKM/amM9wIOV+ua5CxxnQX/YpAaq6/kyrOeFi7TRJDgeEccbVkQMhUiJqICe1MdL69NdIpAzrEmJAlNpg+mcSAJP0uYyoAWnOCFpA8oJA+dU8YC/U8RyhQ18w1OkgPQJv3QGTvKiBR+fAegnmqzKAX0l1Imijag/fpuCRaOtTLp9/wnnLqafVXtlxhn+A22QZM8Lecogw5g+ojgt8nLplmVepPH7/n5/AAldOAyJinZpAAAAAElFTkSuQmCC" alt="" srcset="" /></ButtonBox>
        {showBox && <ShowButtonBox onClose={() => setShowBox(false)} >
          {/* <div onClick={XClick}>🗙</div> */}
          <div>
            <EditBtnStyle onClick={boardEditClick}>수정</EditBtnStyle>
            <DelBtnStyle onClick={handleDeleteCheck}>삭제</DelBtnStyle>
          </div></ShowButtonBox>}
      </HeaderDiv>
      {data && <Main onClick={XClick}>

        <ImgSlice />
        <TitleStyle>{data.data.title}</TitleStyle>
        <SubContentStyle>{data.data.detail}</SubContentStyle>
        <div>
          <DayBtn DayBtnClick={DayBtnClick} />
          <PlanBtn />
        </div>
        {popup && <DayPopup onClose={() => setPopup(false)} />}

        <BoardPlan />
        <Comment comments={data.commentdata} />
        <BoardLine />
        <BottomNav />

      </Main>}

    </div>

  );
};

export default BoardDetail;
