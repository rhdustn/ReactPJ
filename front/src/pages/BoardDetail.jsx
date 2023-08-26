import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";
import {
  Main,
  BoardLine,
  TitleStyle,
  SubContentStyle,
  ButtonBox,
  ShowButtonBox,
  EditImg,
  HeaderDiv,
  EditBtnStyle,
  DelBtnStyle,
  SubContentSpan
} from "../components/boarddetail/boarddetail.styled";
import {
  ImgSlice,
  DayBtn,
  PlanBtn,
  DayPopup,
  BoardPlan,
  Comment,
  BoardLikes,
} from "../components/boarddetail";
import BottomNav from "../components/nav/BottomNav";
import { create } from "../redux/features/post";
import { ipUrl } from "../util/util";

const BoardDetail = () => {
  // const [data, setData] = useState("");
  const [trigger, setTrigger] = useState(false);
  const [popup, setPopup] = useState(false);
  const [showBox, setShowBox] = useState(false);
  // const [currentUser, setCurrentUser] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const ImgPath = "/imgs/icons";

  const boardEditClick = () => {
    navigate(`/boardedit/${id}`);
  };

  const BoardDetailView = async ({ queryKey }) => {
    try {
      console.log(queryKey);
      const response = await ipUrl.get(`/post/detail/${queryKey[1]}`);
      // setData(response.data);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  const likesView = async ({ queryKey }) => {
    try {
      const response = await ipUrl.get(`/post/likeslist/${queryKey[1]}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  const { data, isLoading, refetch } = useQuery(
    ["boardDetail", id],
    BoardDetailView
  );

  const likeData = useQuery(["commentLikes", id], likesView);

  const boardDelet = async () => {
    try {
      const response = await ipUrl.get(`/post/delete/${id}`);
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
    const check = window.confirm("정말로 게시글을 삭제하실건가요??");
    if (check) {
      boardDelet();
    }
  };

  useEffect(() => {
    if (data) {
      dispatch(create(data));
      console.log(data, "xmfn");
    }
    console.log(data);
  }, [data]);

  useEffect(() => {
    refetch()
  }, [trigger]);

  const DayBtnClick = () => {
    setPopup(true);
  };
  const ShowboxClick = () => {
    setShowBox(true);
  };
  const XClick = () => {
    setShowBox(false);
  };
  // 글을 쓴 유저만 편집 아이콘이 보이게
  // const writer = currentUser && data && currentUser.id === data.data.user_id;

  return (
    <div>
      <HeaderDiv>
        travel opener 리뷰 게시판
        <BoardLikes board_id={id} />
        <ButtonBox onClick={ShowboxClick}>
          <EditImg src={`${ImgPath}/more.png`} alt="" srcset="" />
        </ButtonBox>
        {showBox && (
          <ShowButtonBox onClose={() => setShowBox(false)}>
            <div>
              <EditBtnStyle onClick={boardEditClick}>수정</EditBtnStyle>
              <DelBtnStyle onClick={handleDeleteCheck}>삭제</DelBtnStyle>
            </div>
          </ShowButtonBox>
        )}
      </HeaderDiv>
      {data && (
        <Main onClick={XClick}>
          <ImgSlice />
          <SubContentSpan>작성자 : {data.data.nickname}</SubContentSpan>
          <TitleStyle>Title : {data.data.title}</TitleStyle>
          <SubContentStyle>
            <SubContentSpan>{data.data.detail}</SubContentSpan>
          </SubContentStyle>
          {/* <div>
            <DayBtn DayBtnClick={DayBtnClick} />
            <PlanBtn />
          </div> */}
          {popup && <DayPopup onClose={() => setPopup(false)} />}
          <br/>
          comments
          <Comment comments={data.commentdata}  setTrigger={setTrigger}/>
          <BoardLine />
          <BottomNav />
        </Main>
      )}
    </div>
  );
};

export default BoardDetail;
