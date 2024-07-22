import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Test from './pages/Test';
import Test1 from './pages/Test1';
import Test2 from './pages/Test2';
import Test3 from './pages/Test3';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/test" element={<Test/>}></Route>
      <Route path="/test/1" element={<Test1/>}></Route>
      <Route path="/test/2" element={<Test2/>}></Route>
      <Route path="/test/3" element={<Test3/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
