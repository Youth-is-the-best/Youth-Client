import React, { useState } from 'react'
import styled from 'styled-components'
import { LogoutBtn, Headers, Logo, Nav, Header, Mypage, Modal } from '../hook/HeaderHook'
import MyPageModal from '../hook/MyPageModal'
import modalopenimg from '../images/modalopen.png'
import modalcloseimg from '../images/modalclose.png'
import { useNavigate } from 'react-router-dom'


const Introduce = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <button onClick={handleLogout}>{localStorage.getItem("access_token") && localStorage.getItem("refresh_token") ? "로그아웃" : "로그인"}</button>
      </LogoutBtn>
      <Headers>
        <Logo to ="/">Logo</Logo>
        <Nav>
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
        </Nav>
      </Headers>
      <MyPageModal isOpen={isModalOpen}></MyPageModal>
    </HeaderofHome>
  </>
  )
}

export default Introduce

const HeaderofHome = styled.div`
  
`;