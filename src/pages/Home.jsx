import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Home = () => {
  return (
    <>
    <Headers>
      <Header to="/test/0">휴학 유형 테스트</Header>
      <Header to="/test/0">투두 리스트 빙고</Header>
      <Header to="/test/0">공고/후기</Header>
      <Header to="/test/0">나의 포트폴리오</Header>
    </Headers>
    <Body>
      <BingoDom>
        <h2>열정가득 곰도리의 빙고판</h2>
      </BingoDom>
      <InfoDom>
        <div>후알유 추천</div>
      </InfoDom>
    </Body>
    </>
  )
}

export default Home

const Headers = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap : 20px;
  height : 64px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.08);
  font-size : 20px;
`
const Header = styled(Link)`
  color : rgba(30, 58, 138, 1);
  text-decoration : none;
`
const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top : 50px;
`
const BingoDom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width : 550px;
  padding : 20px;
`
const InfoDom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width : 550px;
  height : 500px;
  background: rgba(30, 58, 138, 0.04);
  border-radis : 0px, 20px, 20px, 0px;
  gap : 15px;
`