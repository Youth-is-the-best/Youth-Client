import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import YearSemesterSelector from '../hook/YearSemesterSelector';
import ProgressBar from '../hook/ProgressBar';

const Test = () => {

    return (
      <QuizDom>
        <ProgressBar currentStep={1} totalSteps={4}/>
        <QuestionContainer>학업으로의 복귀는 언제인가요?</QuestionContainer>
        <YearSemesterSelector></YearSemesterSelector>
        <ButtonDom>
          <ButtonLink to="/test/1">다음 문제</ButtonLink>
        </ButtonDom>
      </QuizDom>
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
    width: 90%;
    height: 80vh;
    margin: 20px;
    border-radius: 20px;
`;

export const QuestionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color : #1E3A8A;
    width : 80vh;
    height: 20vh;
    background : rgba(30, 58, 138, 0.04);
    border : 1px solid #1E3A8A;
    border-radius : 10px;
`;

export const ButtonLink = styled(Link)`
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
  flex-direction: row;
  width: 590px;
  height: 44px;
  gap: 30px;
`;