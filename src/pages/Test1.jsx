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
  return (
    <QuizDom>
      <ProgressBar currentStep={2} totalSteps={4} />
      <QuestionContainer>휴학을 결정한 계기는 무엇인가요?</QuestionContainer>
      <Answers>
        <Answer>
          <label>
            <input 
              type="radio" 
              name="reason" 
              value="jobPreparation" 
              checked={selectedReason === 'jobPreparation'}
              onChange={(e) => setSelectedReason(e.target.value)}
            />
            취업 준비를 위해서(자격증 취득, 대외활동, 동아리 활동 등)
          </label>
        </Answer>
        <Answer>
          <label>
            <input 
              type="radio" 
              name="reason" 
              value="internship" 
              checked={selectedReason === 'internship'}
              onChange={(e) => setSelectedReason(e.target.value)}
            />
            인턴 근무를 위해서
          </label>
        </Answer>
        <Answer>
          <label>
            <input 
              type="radio" 
              name="reason" 
              value="academicStress" 
              checked={selectedReason === 'academicStress'}
              onChange={(e) => setSelectedReason(e.target.value)}
            />
            학업 스트레스 완화를 위해서
          </label>
        </Answer>
        <Answer>
          <label>
            <input 
              type="radio" 
              name="reason" 
              value="selfDevelopment" 
              checked={selectedReason === 'selfDevelopment'}
              onChange={(e) => setSelectedReason(e.target.value)}
            />
            자기 계발을 위해서(취미생활, 스터디, 자격증 취득, 동아리 활동 등)
          </label>
        </Answer>
        <Answer>
          <label>
            <input 
              type="radio" 
              name="reason" 
              value="diverseExperiences" 
              checked={selectedReason === 'diverseExperiences'}
              onChange={(e) => setSelectedReason(e.target.value)}
            />
            다양한 경험을 위해서(여행, 자기계발 등)
          </label>
        </Answer>
        <Answer>
          <label>
            <input 
              type="radio" 
              name="reason" 
              value="financialBurden" 
              checked={selectedReason === 'financialBurden'}
              onChange={(e) => setSelectedReason(e.target.value)}
            />
            경제적 부담으로 인해
          </label>
        </Answer>
        <Answer>
          <label>
            <input 
              type="radio" 
              name="reason" 
              value="mentalStability" 
              checked={selectedReason === 'mentalStability'}
              onChange={(e) => setSelectedReason(e.target.value)}
            />
            정서적 안정, 신체적 건강을 위해
          </label>
        </Answer>
        <Answer>
          <label>
            <input 
              type="radio" 
              name="reason" 
              value="newCareerExploration" 
              checked={selectedReason === 'newCareerExploration'}
              onChange={(e) => setSelectedReason(e.target.value)}
            />
            새로운 진로 탐색을 위해
          </label>
        </Answer>
        <Answer>
          <label>
            <input 
              type="radio" 
              name="reason" 
              value="leaveOfAbsence" 
              checked={selectedReason === 'leaveOfAbsence'}
              onChange={(e) => setSelectedReason(e.target.value)}
            />
            방학이라서
          </label>
        </Answer>
      </Answers>
      <ButtonDom>
        <Button to="/test/0" onClick={handleBeforeClick}>이전 문제</Button>
        <Button to="/test/2" onClick={handleNextClick}>다음 문제</Button>
      </ButtonDom>
    </QuizDom>
  );
};

export default Test1;

const Answers = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  list-style: none;
  padding: 0;
`;

const Answer = styled.li`
  display: flex;
  align-items: center;
  margin: 5px;
  background-color: rgba(30, 58, 138, 0.04);
  width: 610px;
  height: 39px;
  padding: 0px 10px 0px 10px;
  border-radius: 20px;
`;