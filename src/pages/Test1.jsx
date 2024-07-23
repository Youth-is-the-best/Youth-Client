import React, { useState } from 'react';
import styled from 'styled-components';
import { QuizDom, QuestionContainer, ButtonDom, Button } from './Test.jsx';
import ProgressBar from '../hook/ProgressBar.js';
import { useNavigate } from 'react-router-dom';

const Test1 = () => {
  const [selectedReason, setSelectedReason] = useState('');
  const navigate = useNavigate();

  const handleNextClick = () => {
    console.log('Selected reason:', selectedReason); //확인용
    navigate("/test/2");
  };

  const handleBeforeClick =() => {
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
    "newCareerExploration",
    "leaveOfAbsence"
  ];

  return (
    <QuizDom>
      <ProgressBar currentStep={2} totalSteps={4} />
      <QuestionContainer>휴학을 결정한 계기는 무엇인가요?</QuestionContainer>
      <Answers>
        {reasons.map((reason, index) => (
          <Answer key={index}>
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
        <Button to="/test/0" onClick={handleBeforeClick}>이전 문제</Button>
        <Button to="/test/2" onClick={handleNextClick}>다음 문제</Button>
      </ButtonDom>
    </QuizDom>
  );

  function getReasonLabel(reason) {
    switch (reason) {
      case "jobPreparation":
        return "취업 준비를 위해서(자격증 취득, 대외활동, 동아리 활동 등)";
      case "internship":
        return "인턴 근무를 위해서";
      case "academicStress":
        return "학업 스트레스를 완화를 위해서";
      case "selfDevelopment":
        return "자기 계발을 위해서(취미생활, 스터디, 자격증 취득, 동아리 활동 등)";
      case "diverseExperiences":
        return "다양한 경험을 위해서(여행, 자기계발 등)";
      case "financialBurden":
        return "경제적 부담으로 인해";
      case "mentalStability":
        return "정서적 안정, 신체적 건강을 위해";
      case "newCareerExploration":
        return "새로운 진로 탐색을 위해";
      case "leaveOfAbsence":
        return "방학이라서";
      default:
        return "";
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
  background-color: rgba(30, 58, 138, 0.04);
  width: 100%;
  height: 39px;
  padding: 0px 10px 0px 10px;
  border-radius: 20px;
  gap: 10px;
`;
