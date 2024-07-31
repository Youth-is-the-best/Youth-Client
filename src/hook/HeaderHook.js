import React from "react";
import styled from 'styled-components';
import user from '../images/user.png'
import { Link, useNavigate } from 'react-router-dom';

const HeaderHook = () => {
  const navigate = useNavigate();
  const goLogin = () => {
    navigate("/login");
  };

  return (
    <Headers>
          <Logo>Logo</Logo>
          <Nav>
            <Header to="/test/0">휴학 유형 테스트</Header>
            <Header to="/">투두리스트 빙고</Header>
            <Header to="/info">공고/후기</Header>
            <Header to="/portfolio">나의 포트폴리오</Header>
            <img src={user} style={{ height: '70px', marginLeft: '5px' }} onClick={goLogin}></img>
          </Nav>
    </Headers>
  )
}

export default HeaderHook;

const Headers = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right : 3rem;
  gap : 20px;
  height : 64px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.08);
  font-size : 20px;
  color : rgba(30, 58, 138, 1);
`;

const Header = styled(Link)`
  color : rgba(30, 58, 138, 1);
  text-decoration : none;
`;

const Logo = styled.div`
  margin-left: 20px;
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 18px;
`;