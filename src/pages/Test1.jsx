import React from 'react';
import styled from 'styled-components';
import {QuizDom, QuestionContainer, ButtonDom,ButtonLink } from './Test.jsx';
import ProgressBar from '../hook/ProgressBar.js';

const Test1 = () => {

    return (
      <QuizDom>
        <ProgressBar currentStep={2} totalSteps={4}/>
        <QuestionContainer>휴학을 결정한 계기는 무엇인가요?</QuestionContainer>
        <Answers>
          <label>
            <Answer type="radio" name="reason" value="jobPreparation" />
            취업 준비를 위해서(자격증 취득, 대외활동, 동아리 활동 등)
          </label>
          <label>
            <Answer type="radio" name="reason" value="internship" />
            인턴 근무를 위해서
          </label>
          <label>
            <Answer type="radio" name="reason" value="academicStress" />
            학업 스트레스 완화를 위해서
          </label>
          <label>
            <Answer type="radio" name="reason" value="selfDevelopment" />
            자기 계발을 위해서(취미생활, 스터디, 자격증 취득, 동아리 활동 등)
          </label>
          <label>
            <Answer type="radio" name="reason" value="diverseExperiences" />
            다양한 경험을 위해서(여행, 자기계발 등)
          </label>
          <label>
            <Answer type="radio" name="reason" value="financialBurden" />
            경제적 부담으로 인해
          </label>
          <label>
            <Answer type="radio" name="reason" value="mentalStability" />
            정서적 안정, 신체적 건강을 위해
          </label>
          <label>
            <Answer type="radio" name="reason" value="newCareerExploration" />
            새로운 진로 탐색을 위해
          </label>
          <label>
            <Answer type="radio" name="reason" value="leaveOfAbsence" />
            방학이라서
          </label>
        </Answers>
        <ButtonDom>
          <ButtonLink to="/test/0">이전 문제</ButtonLink>
          <ButtonLink to="/test/2">다음 문제</ButtonLink>
        </ButtonDom>
      </QuizDom>
    )
};

export default Test1;

const Answers = styled.li`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Answer = styled.input`
  margin : 5px;
`