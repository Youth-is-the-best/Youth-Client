import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Test from './pages/Test';
import Test1 from './pages/Test1';
import Test2 from './pages/Test2';
import Test3 from './pages/Test3';
import Result from './pages/Result';
import Signup from './pages/Signup';
import Info from './pages/Info';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/info" element={<Info/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/test/0" element={<Test/>}></Route>
      <Route path="/test/1" element={<Test1/>}></Route>
      <Route path="/test/2" element={<Test2/>}></Route>
      <Route path="/test/3" element={<Test3/>}></Route>
      <Route path="/result" element={<Result/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
