import "./App.css";

import { Routes, Route } from "react-router-dom";

import { Main, Plan, AddPlace, EditPlace, Mypage, EditProflie,Board,BoardDetail } from "./pages";
import { EditProfliePc, MainPc, MypagePc, PlanPc } from "./pagesPc";
import { useMediaQuery } from "react-responsive";
import { styled } from "styled-components";
import travel from "./img/places/travel.gif";
function App() {
  const isMobile = useMediaQuery({
    query: "(max-width:768px)",
  });

  const PcBody = styled.div`
    width: 80%;
    margin: auto;
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
  `
  return (
    <div className='App'>
      <Routes>
        <Route
          path="/"
          element={
            isMobile ? (
              <Main />
            ) : (
              <MainPcBody>
                <PcBody>
                  <MainPc />
                </PcBody>
              </MainPcBody>
            )
          }
        />
        <Route
          path='/plan'
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
        <Route path="/addPlace/:id" element={isMobile ? <AddPlace /> : <>모바일이다!</>} />
        <Route path="/editPlace/:id" element={isMobile ? <EditPlace /> : <>모바일이다!</>} />
        
        <Route
          path='/mypage'
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
          path='/editproflie'
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
      </Routes>
    </div>
  );
}

export default App;
