import React, { useState } from 'react';
import { MdOutlineEditCalendar, MdOutlineKeyboardBackspace } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import mypage from '../images/mypage.png';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import { BsThreeDots } from 'react-icons/bs';
import { RightDom } from './Home';
import CustomCalendar from './CustomCalendar';


const BingoInfo = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  
  const goHome = () => {
    navigate("/");
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  

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
          <TitleLine>
            <MdOutlineKeyboardBackspace onClick={goHome}/>
            <BsThreeDots />
          </TitleLine>
          <TitleLine>
            <h1>TOEIC</h1>
            <DateInfo>더 많은 정보 보러가기<IoPaperPlaneOutline /></DateInfo> 
          </TitleLine>
          <Line>
            <Category>분류</Category>
            <Category style={{ background: 'rgba(30, 58, 138, 1)', color :'white'}} >자격증</Category>
          </Line>
          <Line>
            <Category>주최사</Category>
            <div>주최사</div>
          </Line>
          <Line>
            <Category>응시료</Category>
            <div>응시료</div>
          </Line>
          <Line>
            <Category>시험 날짜</Category>
            <DateInfo>
              {selectedDate ? selectedDate.toLocaleDateString() : '날짜를 입력하세요'}
              <CustomCalendar onChange={handleDateChange} value={selectedDate} />
            </DateInfo>
          </Line>
          <Line>
            <Category>준비 기간</Category>
            <DateInfo>
              {selectedDate ? selectedDate.toLocaleDateString() : '날짜를 입력하세요'}
              <CustomCalendar onChange={handleDateChange} value={selectedDate} />
            </DateInfo>
          </Line>
          <TitleLine>
          <h2>빙고 미션 완료 후기</h2>
          </TitleLine>
          <ReviewDom>
            <Review>
              <div>리뷰 사진</div>
              <div>리뷰 제목</div>
            </Review>
          </ReviewDom>
          <DateInfo style={{width : '200px', marginTop : '10px', marginLeft:'334px'}}>목표 달성 기록 남기기</DateInfo>
        </RightDom>
      </Body>
    </>
  );
};

export default BingoInfo;

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
  // width: 60px;
  height: 20px;
  border: 1px solid rgba(30, 58, 138, 0.5);
  background: white;
  border-radius : 10px;
  padding : 7px;
`

const DateInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // width: 60px;
  height: 20px;
  color :rgba(30, 58, 138, 0.6);
  background: rgba(30, 58, 138, 0.1);
  border-radius : 10px;
  padding : 8px;
  gap : 5px;
`
const Line = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap : 20px;
  margin-left : 10px;
`
const TitleLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  gap : 20px;
  margin-left : 10px;
`
const ReviewDom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 130px;
  border-radius: 10px;
  background : white;

`

const Review = styled.div`
  display : flex;
  flex-direction : column;
`