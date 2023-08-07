import "./App.css";

import { Routes, Route } from "react-router-dom";

import { Main, Plan, Mypage, EditProflie } from "./pages";
import { useMediaQuery } from "react-responsive";

function App() {
  const isMobile = useMediaQuery({
    query: "(max-width:768px)",
  });
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={isMobile ? <>모바일이다!</> :<Main />} />
        <Route path='/plan' element={isMobile ? <>모바일이다!</> :<Plan />} />
        <Route
          path="/mypage"
          element={isMobile ? <>모바일이다!</> : <Mypage />}
        />
        <Route
          path="/editproflie"
          element={isMobile ? <>와! 모바일!</> : <EditProflie />}
        />
      </Routes>
    </div>
  );
}

export default App;
