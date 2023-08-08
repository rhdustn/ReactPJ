import "./App.css";

import { Routes, Route } from "react-router-dom";

import { Main, Plan, Mypage, EditProflie,Board,BoardDetail } from "./pages";
import { useMediaQuery } from "react-responsive";

function App() {
  const isMobile = useMediaQuery({
    query: "(max-width:768px)",
  });
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={isMobile ? <Main /> : <>모바일이다!</>} />
        <Route path="/plan" element={isMobile ? <Plan /> : <>모바일이다!</>} />
        <Route path="/mypage"element={isMobile ? <Mypage /> : <>모바일이다!</>}/>
        <Route path="/editproflie"element={isMobile ? <EditProflie /> : <>모바일이다!</>}/>
        <Route path="/board"element={isMobile ? <Board /> : <>모바일이다!</>}/>
        <Route path="/boarddetail"element={isMobile ? <BoardDetail /> : <>모바일이다!</>}/>
      </Routes>
    </div>
  );
}

export default App;
