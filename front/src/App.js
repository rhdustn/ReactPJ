import './App.css';

import { Routes, Route } from 'react-router-dom'

import { Main, Plan,Mypage,EditProflie } from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path='/' element={<Main />} />
        <Route path='/plan' element={<Plan />} /> */}
        <Route path='/mypage' element={<Mypage />} />
        <Route path='/editproflie' element={<EditProflie />} />
      </Routes>
    </div>
  );
}

export default App;
