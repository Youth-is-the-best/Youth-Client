import React from 'react'
import { MdOutlineEditCalendar } from 'react-icons/md'
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
      <LeftDom>
        <h2>열정가득 곰도리의 빙고판</h2>
        <div>2024.01.05 ~ 2024.01.10 <MdOutlineEditCalendar /></div>
        <BingoDom>
          <Bingo></Bingo>
          <Bingo></Bingo>
          <Bingo></Bingo>
          <Bingo></Bingo>
          <Bingo></Bingo>
          <Bingo></Bingo>
          <Bingo></Bingo>
          <Bingo></Bingo>
          <Bingo></Bingo>
        </BingoDom>
      </LeftDom>
      <RightDom>
        <div>후알유 추천</div>
      </RightDom>
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
  margin-top : 20px;
`
const LeftDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  // align-items: center;
  width : 550px;
  padding : 20px;
`

const RightDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  // align-items: center;
  width : 550px;
  height : 600px;
  background: rgba(30, 58, 138, 0.04);
  border-radius: 0px 20px 20px 0px;
  border-left : 4px solid rgba(30, 58, 138, 0.4);
  gap : 15px;
  padding : 20px;
`

const BingoDom = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  // gap: 0.5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width : 510px;
  height : 500px;
  padding : 5px;
`

const Bingo = styled.div`
  width : 150px;
  height : 150px;
  background: rgba(30, 58, 138, 0.1);
  border-radius : 10px;
`