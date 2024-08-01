import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Test from './pages/typetest/Test';
import Test1 from './pages/typetest/Test1';
import Test2 from './pages/typetest/Test2';
import Test3 from './pages/typetest/Test3';
import Result from './pages/typetest/Result';
import Signup from './pages/Signup';
import { useState } from 'react';
import MadeBingo from './pages/bingo/MadeBingo';
import BingoInfo from './pages/bingo/BingoInfo';
import Calendar from 'react-calendar';
import Portfolio from './pages/portFolio/ChangePortfolio';
import MadeReview from './pages/MadeReview';
import MyPage from './pages/myPage/MyPage';
import Alarm from './pages/myPage/Alarm';
import AlarmManage from './pages/myPage/AlarmManage';
import Noti from './pages/Noti';
import HueInfo from './pages/HueInfo';

function App() {
  const [year, setYear] = useState(2024);
  const [semester, setSemester] = useState(1);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [selectedReason, setSelectedReason] = useState('');
  const [inputValue, setInputValue] = useState('');

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/info" element={<BingoInfo/>}></Route>
      <Route path="/info/:id" element={<BingoInfo />} />
      <Route path="/made" element={<MadeBingo/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/cal" element={<Calendar />}/>
      <Route path="/review" element={<MadeReview />}/>
      <Route path="/notification" element={<Noti />}/>
      <Route path="/hueInfo" element={<HueInfo/>}></Route>
      <Route path="/test/0" element={<Test year={year} setYear={setYear} semester={semester} setSemester={setSemester}/>}/>
      <Route path="/test/1" element={<Test1 selectedReason={selectedReason} setSelectedReason={setSelectedReason}/>} />
      <Route path="/test/2" element={<Test2 selectedAnswers={selectedAnswers} setSelectedAnswers={setSelectedAnswers} />}/>
      <Route path="/test/3" element={<Test3 inputValue={inputValue} setInputValue={setInputValue}/>}></Route>
      <Route path="/result" element={<Result year={year} setYear={setYear} 
      semester={semester} setSemester={setSemester}
      selectedAnswers={selectedAnswers} setSelectedAnswers={setSelectedAnswers}
      selectedReason={selectedReason} setSelectedReason={setSelectedReason}
      inputValue={inputValue} setInputValue={setInputValue}
      />}></Route>
      <Route path="/portfolio" element={<Portfolio/>}></Route>
      <Route path="/mypage" element={<MyPage />}></Route>
      <Route path="/alarm" element={<Alarm />}></Route>
      <Route path="/alarmManage" element={<AlarmManage />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
