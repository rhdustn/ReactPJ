import "./App.css";

import { Routes, Route } from "react-router-dom";

import { Main, Plan, Mypage, EditProflie } from "./pages";
import { EditProfliePc, MainPc, MypagePc, PlanPc } from "./pagesPc";
import { useMediaQuery } from "react-responsive";
import { styled } from "styled-components";
function App() {
  const isMobile = useMediaQuery({
    query: "(max-width:768px)",
  });

  const MobileBody = styled.div`
    width: 80%;
    margin: auto;
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
        <Route path='/' element={ isMobile ? (<Main />) : (
              <MobileBody>
                <MainPc />
              </MobileBody>
            )
          }
        />
        <Route
          path='/plan'
          element={
            isMobile ? (
              <Plan />
            ) : (
              <MobileBody>
                <PlanBody>
                  <PlanPc />
                </PlanBody>
              </MobileBody>
            )
          }
        />
        <Route
          path='/mypage'
          element={
            isMobile ? (
              <Mypage />
            ) : (
              <MobileBody>
                <MypagePc />
              </MobileBody>
            )
          }
        />
        <Route
          path='/editproflie'
          element={
            isMobile ? (
              <EditProflie />
            ) : (
              <MobileBody>
                <EditProfliePc />
              </MobileBody>
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
