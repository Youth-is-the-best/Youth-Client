import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { LogoutBtn, Headers, Logo, Nav, Header, Mypage, Modal } from '../hook/HeaderHook'
import MyPageModal from '../hook/MyPageModal'
import modalopenimg from '../images/modalopen.png'
import modalcloseimg from '../images/modalclose.png'
import { Link, useNavigate } from 'react-router-dom'
import FooterHook from '../hook/FooterHook'

const Introduce = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedAccessToken = localStorage.getItem("access_token");
    if (savedAccessToken) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleBtn = () => {
    setIsModalOpen(!isModalOpen);
  };
  
  const handleLogout = () => {
    if (localStorage.getItem("access_token") && localStorage.getItem("refresh_token")) {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      window.location.reload();
    } else {
      navigate("/login");
    }
  };

  return (
    <>
    <HeaderofHome>
      <LogoutBtn>
        { isLoggedIn ? 
          <button onClick={handleLogout}>로그아웃</button> :
          <SignupLink>
            <StyledLink to="/signup" style={{color: 'rgba(27, 52, 124, 1)'}}>회원가입</StyledLink>
            <span style={{color: 'rgba(196, 196, 196, 1)'}}>|</span>
            <StyledLink to="/login" style={{color: 'rgba(81, 81, 81, 1)'}}>로그인</StyledLink>
          </SignupLink>
        }
      </LogoutBtn>
      <Headers>
        <Logo to ="/">Logo</Logo>
        <Nav>
          { isLoggedIn ?
          <>
            <Header to="/test/0">휴학 유형 테스트</Header>
            <Header to="/view">투두리스트 빙고</Header>
            <Header to="/notification">공고/후기</Header>
            <Header to="/readportfolio">나의 포트폴리오</Header>
            <Mypage>
              <Header to="/mypage">마이페이지</Header>
              <Modal onClick={handleBtn}>
                { isModalOpen ?
                  <img src={modalopenimg}></img> :
                  <img src={modalcloseimg}></img> }
              </Modal>
            </Mypage> 
          </> :
          <>
            <Header to="/test/0">휴학 유형 테스트</Header>
            <Header to="/notification">공고/후기</Header>
          </> }
        </Nav>
      </Headers>
      <MyPageModal isOpen={isModalOpen}></MyPageModal>
    </HeaderofHome>
    <Body>

    </Body>
    <FooterHook></FooterHook>
  </>
  )
}

export default Introduce

const HeaderofHome = styled.div`
`;

const SignupLink = styled(Link)`
  display: flex;
  gap: 10px;
  font-size: 14px;
  font-weight: 500;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Body = styled.div`
  margin-bottom: 10%; 
`;