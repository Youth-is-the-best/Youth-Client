import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Home = () => {
  return (
    <>
    <TestLink to="/test/0">유형화 테스트 하러가기</TestLink>
    </>
  )
}

export default Home

const TestLink = styled(Link)`
  color: #89cdf6;
  font-family: SUITE;
  font-size: 16px;
  font-style: normal;
  padding: 10px;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;
  font-weight: bold;
  &:hover {
    text-shadow: 0px 0px 5px skyblue;
    color: white;
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: #b8e3f5;
  }
`;