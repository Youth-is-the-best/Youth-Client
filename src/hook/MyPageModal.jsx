import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

const MyPageModal = ({ isOpen }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useNavigate();

  useEffect(() => {
    const savedAccessToken = localStorage.getItem("access_token");
    if (savedAccessToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const toMyPage = () => {
    router('/myPage');
  };

  const toAlarm = () => {
    router('/alarm');
  };

  const toLogin = () => {
    router('/login');
  };

  const handleLogout = ()=>{
    localStorage.removeItem("access_token")
    localStorage.removeItem("refresh_token")
    setIsLoggedIn(false);
    router('/');
  };

    
  if (!isOpen) return null;
  return (
    <>
    <ModalWrapper>
      <ModalBtn>
        <StyledButton onClick={toMyPage}>내 정보</StyledButton>
      </ModalBtn>
      <ModalBtn>
        <StyledButton onClick={toAlarm}>알림</StyledButton>
      </ModalBtn>
      <ModalBtn>
        {isLoggedIn ? (
          <StyledButton
            style={{ backgroundColor: 'white', border: '0.4px solid #1E3A8A', color: '#1E3A8A' }}
            onClick={handleLogout}
          >로그아웃
          </StyledButton>
        ) : (
          <StyledButton 
            style={{ backgroundColor: 'white', border: '0.4px solid #1E3A8A', color: '#1E3A8A' }}
            onClick={toLogin}
          >로그인
          </StyledButton>
        )}
      </ModalBtn>
    </ModalWrapper>
    </>
  )
}

export default MyPageModal

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  right: 3%;
  width: 180px;
  height: 120px;
  border: 0.4px solid #1E3A8A;
  border-radius: 10px 0px 10px 10px;
  background-color: white;
`;

const ModalBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StyledButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 78%;
    height: 26px;
    background-color: #1E3A8A;
    border-radius: 10px;
    color: white;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
`