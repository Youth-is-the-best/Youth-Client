import React, { useState } from 'react';

import { MdOutlineEditCalendar, MdOutlineKeyboardBackspace } from 'react-icons/md';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import mypage from '../images/mypage.png';
import { AiOutlineCheckSquare } from 'react-icons/ai';


const Info = () => {

  return (
    <>
      <Headers>
        <Header to="/test/0">휴학 유형 테스트</Header>
        <Header to="/">투두 리스트 빙고</Header>
        <Header to="/info">공고/후기</Header>
        <Header to="/login">나의 포트폴리오</Header>
        <img src={mypage} style={{ height: '60px' }}></img>
      </Headers>
      <Body>
        <LeftDom>
          <h2>열정가득 곰도리의 빙고판</h2>
          <div style={{ color: 'grey' }}>2024.01.05 ~ 2024.01.10 <MdOutlineEditCalendar /></div>
          <BingoDom>
            <Bingo></Bingo>
            <Bingo style={{ background: 'rgba(30, 58, 138, 0.15)' }}></Bingo>
            <Bingo style={{ background: 'rgba(30, 58, 138, 0.2)' }}></Bingo>
            <Bingo style={{ background: 'rgba(30, 58, 138, 0.25)' }}></Bingo>
            <Bingo style={{ background: 'rgba(30, 58, 138, 0.3)' }}></Bingo>
            <Bingo style={{ background: 'rgba(30, 58, 138, 0.35)' }}></Bingo>
            <Bingo style={{ background: 'rgba(30, 58, 138, 0.4)' }}></Bingo>
            <Bingo style={{ background: 'rgba(30, 58, 138, 0.45)' }}></Bingo>
            <Bingo style={{ background: 'rgba(30, 58, 138, 0.5)' }}></Bingo>
          </BingoDom>
          <Button>완료</Button>
        </LeftDom>
        <RightDom>
          <MdOutlineKeyboardBackspace />
          <h1>TOEIC 900점 이상 취득</h1>
            <Category>분류</Category>
            <Category>주최사</Category>
            <Category>응시료</Category>
            <Category>시험 날짜</Category>
            <Category>준비 기간</Category>
          <h2>| 세부 계획</h2>
          <CheckLists>
            <CheckList><AiOutlineCheckSquare />플랭크 5분</CheckList>
            <CheckList><AiOutlineCheckSquare />플랭크 5분</CheckList>
            <CheckList><AiOutlineCheckSquare />플랭크 5분</CheckList>
            <CheckList><AiOutlineCheckSquare />플랭크 5분</CheckList>
            <CheckList><AiOutlineCheckSquare />플랭크 15분</CheckList>
          </CheckLists>
        </RightDom>
      </Body>
    </>
  );
};

export default Info;

const Headers = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  padding-right : 3rem;
  gap : 20px;
  height : 64px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.08);
  font-size : 20px;
`;
const Header = styled(Link)`
  color : rgba(30, 58, 138, 1);
  text-decoration : none;
`;
const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top : 20px;
  color : #1E3A8A;
`;
const LeftDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width : 550px;
`;

const RightDom = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  width : 550px;
  height : 600px;
  border-radius: 20px;
  border: 0.4px solid rgba(30, 58, 138, 1);
  background: rgba(30, 58, 138, 0.04);
  box-shadow: 0px 4px 4px 0px rgba(30, 58, 138, 0.25);
  gap : 15px;
  padding : 20px;
`;

const BingoDom = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width : 510px;
  height : 500px;
  // padding : 5px;
`;

const Bingo = styled.div`
  width : 150px;
  height : 150px;
  background: rgba(30, 58, 138, 0.1);
  border-radius : 10px;
`;

const Button = styled.div`
  display: flex;
  // flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 20px;
  padding: 10px;
  gap: 10px;
  border-radius: 10px;
  background: rgba(30, 58, 138, 1);
  color : white;
`;

const Category = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 20px;
  border: 1px solid rgba(30, 58, 138, 0.5);
  background: white;
  border-radius : 10px;
  padding : 5px;
`

const CheckLists = styled.div`
  display: flex;
  flex-direction: column;
  gap : 10px;
  background : white;
  border-radius : 10px;
  padding : 10px;
`

const CheckList = styled.div`
  
`