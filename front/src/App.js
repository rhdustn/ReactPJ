import "./App.css";

import { Routes, Route } from "react-router-dom";
import {
  Signup,
  Login,
  Main,
  Plan,
  AddPlace,
  Mypage,
  EditProflie,
  Board,
  BoardDetail,
  Post,
  Admin
} from "./pages";
import {
  EditProfliePc,
  MainPc,
  MypagePc,
  PlanPc,
  AddPlacePc,
  BoardDetailPc,
  BoardPc,
  LoginPc,
  SignupPc,
} from "./pagesPc";
import { useMediaQuery } from "react-responsive";
import { styled } from "styled-components";
import { useEffect, useState } from "react";
import { LoadingContainer } from "./componentsPc/main/MainPc.styled";
import AdminPc from "./pagesPc/AdminPc";
function App() {
const travel = "/imgs/places/travel.gif";
const isMobile = useMediaQuery({
    query: "(max-width:768px)",
  });

  const PcBody = styled.div`
    width: 80%;
    margin: auto;
    position: relative;
    min-height: 100vh;
  `;
  const MainPcBody = styled.div`
    width: 100%;
    margin: auto;
    background-image: url(${travel});
    background-size: 100% 100vh;
    background-repeat: no-repeat;
  `;

  const PlanBody = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100vh;
  `;
  return (
    <div className="App">
      <Routes>
        <Route
          path="/signup"
          element={
            isMobile ? (
              <Signup />
            ) : (
              <PcBody>
                <SignupPc />
              </PcBody>
            )
          }
        />
        <Route
          path="/login"
          element={
            isMobile ? (
              <Login />
            ) : (
              <PcBody>
                <LoginPc />
              </PcBody>
            )
          }
        />

        <Route
          path="/"
          element={
            isMobile ? (
              <Main />
            ) : (
              <>
                <MainPcBody>
                  <PcBody>
                    <MainPc />
                  </PcBody>
                </MainPcBody>
              </>
            )
          }
        />
        <Route
          path="/plan"
          element={
            isMobile ? (
              <Plan />
            ) : (
              <PcBody>
                <PlanBody>
                  <PlanPc />
                </PlanBody>
              </PcBody>
            )
          }
        />
        <Route
          path="/addPlace/:id"
          element={isMobile ? <AddPlace /> : <>모바일이다!</>}
        />

        <Route
          path="/mypage"
          element={
            isMobile ? (
              <Mypage />
            ) : (
              <PcBody>
                <MypagePc />
              </PcBody>
            )
          }
        />
        <Route
          path="/editproflie"
          element={
            isMobile ? (
              <EditProflie />
            ) : (
              <PcBody>
                <EditProfliePc />
              </PcBody>
            )
          }
        />
        <Route
          path="/board"
          element={
            isMobile ? (
              <Board />
            ) : (
              <PcBody>
                <BoardPc />
              </PcBody>
            )
          }
        />
        <Route
          path="/boarddetail"
          element={
            isMobile ? (
              <BoardDetail />
            ) : (
              <PcBody>
                <BoardDetailPc />
              </PcBody>
            )
          }
        />
        <Route path="/boardCreate" element={isMobile ? <Post /> : "pc 버전 post"} />

        <Route path="/admin" element={isMobile ? (<Admin />) : (<AdminPc />)} />
      </Routes>
    </div>
  );
}

export default App;
