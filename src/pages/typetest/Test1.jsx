import React, { useState } from 'react';
import styled from 'styled-components';
import { QuizDom, QuestionContainer, ButtonDom, Button } from './Test.jsx';
import ProgressBar from '../../hook/ProgressBar.js';
import { useNavigate } from 'react-router-dom';

const Test1 = ({selectedReason, setSelectedReason}) => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    if (!selectedReason) {
      alert("답변을 선택해주세요.")
    } else {
      navigate("/test/2");
    }
  };

  const handleBeforeClick = () => {
    navigate("/test/0");
  };

  const reasons = [
    "jobPreparation",
    "internship",
    "academicStress",
    "selfDevelopment",
    "diverseExperiences",
    "financialBurden",
    "mentalStability",
    "newCareerExploration"
  ];

  return (
    <QuizDom>
      <ProgressBar currentStep={2} totalSteps={4} />
      <QuestionContainer>휴학을 결정한 계기는 무엇인가요?</QuestionContainer>
      <Answers>
        {reasons.map((reason, index) => (
          <Answer key={index} checked={selectedReason === reason}>
            <label>
              <input
                type="radio" 
                name="reason" 
                value={reason} 
                checked={selectedReason === reason}
                onChange={(e) => setSelectedReason(e.target.value)}
              />
              {getReasonLabel(reason)}
            </label>
          </Answer>
        ))}
      </Answers>
      <ButtonDom>
        <Button to="/test/0" onClick={handleBeforeClick}>이전</Button>
        <Button 
          style={{ backgroundColor: 'rgba(30, 58, 138, 1)', color:'white' }} 
          to="/test/2" 
          onClick={handleNextClick}
        >
          다음
        </Button>
      </ButtonDom>
    </QuizDom>
  );

  function getReasonLabel(reason) {
    switch (reason) {
      case "jobPreparation":
        return "취업 준비를 위해서";
      case "internship":
        return "인턴 근무를 위해서";
      case "academicStress":
        return "학업 스트레스를 완화하기 위해서";
      case "selfDevelopment":
        return "자기 계발을 위해서";
      case "diverseExperiences":
        return "다양한 경험을 위해서";
      case "financialBurden":
        return "경제적 부담 완화를 위해서";
      case "mentalStability":
        return "정서적 안정, 신체적 건강을 위해서";
      case "newCareerExploration":
        return "새로운 진로 탐색을 위해서";
      default:
        return 0;
    }
  }
};

export default Test1;

const Answers = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  list-style: none;
  width: 590px;
  padding: 20px 31px 20px 10px;
  border-radius: 10px;
`;

const Answer = styled.li`
  display: flex;
  align-items: center;
  margin: 5px;
  width: 100%;
  height: 39px;
  padding: 0px 0px 0px 10px;
  border-radius: 20px;
  gap: 10px;
  background-color: ${props => props.checked ? 'rgba(56, 189, 248, 0.07)' : 'rgba(30, 58, 138, 0.04)'};
  border: ${props => props.checked ? '1.4px solid rgba(30, 58, 138, 0.6)' : 'none'};
  // box-shadow: ${props => props.checked ? '0px 3px 4px 0px rgba(30, 58, 138, 0.2);' : 'none'};
`;
