import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import YearSemesterSelector from '../hook/YearSemesterSelector';
import ProgressBar from '../hook/ProgressBar';
import { Header } from './Login';
import logo from '../images/logo.png'

const Test = () => {
    const [selectedTime, setSelectedTime] = useState('2024,1');
    const navigate = useNavigate();

    const handleNextClick = () => {
        if (selectedTime) {
          console.log(selectedTime);
          navigate("/test/1");
        } else {
            alert('선택하셈 ㅡㅡ');
        }
    };

    return (
      <>
      {/* <Header><img src={logo}></img></Header> */}
      <QuizDom>
        <ProgressBar currentStep={1} totalSteps={4}/>
        <QuestionContainer>
          학업으로의 복귀는 언제인가요?
          <Detail>*복학 또는 개강 시점을 알려주세요</Detail>
        </QuestionContainer>
        <YearSemesterSelector> onChange={(e) => setSelectedTime(e)} </YearSemesterSelector>
        <ButtonDom>
        <ButtonLink style={{ backgroundColor: 'rgba(30, 58, 138, 1)', color:'white' }} onClick={handleNextClick}> 다음 </ButtonLink>
        </ButtonDom>
      </QuizDom>
      </>
    )
};

export default Test;

export const QuizDom = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap : 20px; // 이거 조율 필요함
    background-color : F5F5F5;
    width: 100%;
    border-radius: 20px;
`;

export const QuestionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    color : #1E3A8A;
    font-size: 20px;
    width : 600px;
    border-radius : 10px;
`;

export const Detail = styled.div`
  font-size : 16px;
  color: rgba(30, 58, 138, 0.5);
`

export const ButtonLink = styled(Link)`
  display : flex;
  text-decoration: none;
  width: 280px;
  height: 44px;
  padding: 5px 15px;
  gap: 10px;
  border-radius: 10px;
  color : rgba(30, 58, 138, 1);
  background-color: #ffffff;
  border: 1px solid rgba(30, 58, 138, 0.2);
  border-radius: 25px;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;

  &:hover {
      background-color: rgba(30, 58, 138, 0.2);
  }
  &:active {
      background-color: rgba(30, 58, 138, 0.2);
  }
`
export const Button = styled.div`
  display : flex;
  text-decoration: none;
  width: 280px;
  height: 44px;
  padding: 5px 15px;
  gap: 10px;
  border-radius: 10px;
  background-color: #ffffff;
  border: 1px solid rgba(30, 58, 138, 0.2);
  border-radius: 25px;
  color : rgba(30, 58, 138, 0.5);
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;

  &:hover {
      background-color: rgba(30, 58, 138, 0.2);
  }
  &:active {
      background-color: rgba(30, 58, 138, 0.2);
  }
`

export const ButtonDom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 590px;
  height: 44px;
  gap: 30px;
  margin-top : 0.5rem;
`;