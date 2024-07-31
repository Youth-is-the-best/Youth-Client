import React from 'react'
import { FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Headerline = () => {
  const navigate = useNavigate();
  const goLogin = () => {
    navigate("/login");
  };

  return (
  <Headers>
    <Header to="/test/0">휴학 유형 테스트</Header>
    <Header to="/">투두 리스트 빙고</Header>
    <Header to="/info">공고/후기</Header>
    <Header to="/portfolio">나의 포트폴리오</Header>
    <FiUser size={20} onClick={goLogin}/>
  </Headers>
  )
}

export default Headerline;

export const Headers = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  padding-right : 3rem;
  gap : 20px;
  height : 64px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.08);
  font-size : 20px;
  color : rgba(30, 58, 138, 1);
`;
export const Header = styled(Link)`
  color : rgba(30, 58, 138, 1);
  text-decoration : none;
`;