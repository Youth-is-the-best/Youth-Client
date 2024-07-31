import React, { useState } from 'react';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import { BsThreeDots } from 'react-icons/bs';
import { Body } from '../Home';
import CustomCalendar from './CustomCalendar';
import { Category, Row } from './MadeBingo';
import HeaderHook from '../../hook/HeaderHook';


const BingoInfo = () => {
  const navigate = useNavigate();
  const [examDates, setExamDates] = useState([null, null]);
  const [prepDates, setPrepDates] = useState([null, null]);
  
  const goHome = () => {
    navigate("/");
  };

  const handleExamDateChange = (dates) => {
    setExamDates(dates);
  };

  const handlePrepDateChange = (dates) => {
    setPrepDates(dates);
  };
  

  return (
    <>
    <HeaderHook></HeaderHook>
      <Body>
        <RightDom>
          <TitleLine>
            <MdOutlineKeyboardBackspace onClick={goHome} size={30}/>
            <BsThreeDots size={30}/>
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
              {examDates[0] && examDates[1] 
              ? `${examDates[0].toLocaleDateString()} ~ ${examDates[1].toLocaleDateString()}` : '날짜를 입력하세요.'}
              <CustomCalendar onChange={handleExamDateChange} value={examDates} />
            </DateInfo>
          </Line>
          <Line>
            <Category>준비 기간</Category>
            <DateInfo>
              {prepDates[0] && prepDates[1] 
              ? `${prepDates[0].toLocaleDateString()} ~ ${prepDates[1].toLocaleDateString()}` : '날짜를 입력하세요.'}
              <CustomCalendar onChange={handlePrepDateChange} value={prepDates} />
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
            <Review>
              <div>리뷰 사진</div>
              <div>리뷰 제목</div>
            </Review>
            <Review>
              <div>리뷰 사진</div>
              <div>리뷰 제목</div>
            </Review>
            <Review>
              <div>리뷰 사진</div>
              <div>리뷰 제목</div>
            </Review>
            <Review>
              <div>리뷰 사진</div>
              <div>리뷰 제목</div>
            </Review>
            <Review>
              <div>리뷰 사진</div>
              <div>리뷰 제목</div>
            </Review>
            <Review>
              <div>리뷰 사진</div>
              <div>리뷰 제목</div>
            </Review>
            <Review>
              <div>리뷰 사진</div>
              <div>리뷰 제목</div>
            </Review>
            <Review>
              <div>리뷰 사진</div>
              <div>리뷰 제목</div>
            </Review>
          </ReviewDom>
        </RightDom>
      </Body>
    </>
  );
};

export default BingoInfo;

export const RightDom = styled.div`
  display: flex;
  flex-direction: column;
  width : 550px;
  height : 630px;
  margin : 100px;
  background: rgba(246, 247, 251, 1);
  border-radius: 20px;
  border: 0.4px solid rgba(30, 58, 138, 1);
  box-shadow: 0px 4px 4px 0px rgba(30, 58, 138, 0.25);
  gap : 15px;
  padding : 20px;
  overflow-y: auto;
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
  width: 530px;
  height: 150px;
  border-radius: 10px;
  overflow-x: auto;
  // border: 1px solid rgba(30, 58, 138, 0.5);
  gap: 10px;
  padding: 10px;
`

const Review = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: 100px;
  height: 130px;
  gap: 5px;
  border: 1px solid rgba(30, 58, 138, 0.5);
  border-radius: 10px;
`