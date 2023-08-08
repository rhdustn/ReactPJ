import "./App.css";

import { Routes, Route } from "react-router-dom";

import { Main, Plan, Mypage, EditProflie } from "./pages";
import { EditProfliePc, MainPc, MypagePc, PlanPc } from "./pagesPc";
import { useMediaQuery } from "react-responsive";

function App() {
  const isMobile = useMediaQuery({
    query: "(max-width:768px)",
  });
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={isMobile ? <Main /> : <MainPc />} />
        <Route path="/plan" element={isMobile ? <Plan /> : <PlanPc />} />
        <Route path="/mypage" element={isMobile ? <Mypage /> : <MypagePc />} />
        <Route
          path="/editproflie"
          element={isMobile ? <EditProflie /> : <EditProfliePc />}
        />
      </Routes>
    </div>
  );
}

export default App;
