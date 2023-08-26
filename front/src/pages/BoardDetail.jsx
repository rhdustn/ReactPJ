import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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

  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginUserInfo=useSelector((state)=>state.userInfoHandler);
  const ImgPath = "/imgs/icons";

  const boardEditClick = () => {
    navigate(`/boardedit/${id}`);
  };
  const BoardDetailView = async ({ queryKey }) => {
    try {
      console.log(queryKey);
      const response = await ipUrl.get(`/post/detail/${queryKey[1]}`);
      // setData(response.data);
      console.log("fffff", response.data);
      const data = response.data
      console.log("66666666666", data.data)
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  
  const { data, isLoading, refetch } = useQuery(
    ["boardDetail", id],
    BoardDetailView
  );


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

  return (
    <div>{data && <>
      <HeaderDiv>
        <BoardLikes boardIndex={data.data.id} boardLikeArr={data.data.LikeBoards}  loginUserInfo={loginUserInfo} refetch={refetch}/>
        {loginUserInfo.id===data.data.user_id && <ButtonBox onClick={ShowboxClick}>
          <EditImg src={`${ImgPath}/more.png`} alt="" srcset="" />
        </ButtonBox>}
        {showBox && (
          <ShowButtonBox onClose={() => setShowBox(false)}>
            <div>
              <EditBtnStyle onClick={boardEditClick}>수정</EditBtnStyle>
              <DelBtnStyle onClick={handleDeleteCheck}>삭제</DelBtnStyle>
            </div>
          </ShowButtonBox>
        )}
      </HeaderDiv>
      
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
        <br />
        comments
        <Comment comments={data.commentdata} setTrigger={setTrigger}  loginUserInfo={loginUserInfo} refetch={refetch}/>
        <BoardLine />
        <BottomNav />
      </Main>
    </>
    }

    </div>
  );
};

export default BoardDetail;
