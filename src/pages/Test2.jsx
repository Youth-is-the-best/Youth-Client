import React from 'react';
import styled from 'styled-components';
import {QuizDom, QuestionContainer, ButtonDom, ButtonLink } from './Test.jsx';
import ProgressBar from '../hook/ProgressBar.js';

const Test2 = () => {

    return (
      <QuizDom>
        <ProgressBar currentStep={3} totalSteps={4}/>
        <QuestionContainer>
          휴학 기간 중 하고 싶은 활동을 선택하여 주세요
        </QuestionContainer>
        <AnswerDom>
            <Answer>채용 공고 확인</Answer>
            <Answer>채용 지원</Answer>
            <Answer>인턴 지원</Answer>
            <Answer>어학 자격증 취득</Answer>
            <Answer>대외활동 참여</Answer>
            <Answer>동아리활동 참여</Answer>
            <Answer>여행</Answer>
            <Answer>새로운 인간관계 형성</Answer>
            <Answer>휴식</Answer>
            <Answer>독서</Answer>
            <Answer>취미활동</Answer>
            <Answer>자기계발</Answer>
            <Answer>혼자만의 시간</Answer>
            <Answer>가족과의 시간</Answer>
            <Answer>진로 탐색</Answer>
            <Answer>기타</Answer>
        </AnswerDom>
        <ButtonDom>
          <ButtonLink to="/test/1">이전 문제</ButtonLink>
          <ButtonLink to="/test/3">다음 문제</ButtonLink>
        </ButtonDom>
      </QuizDom>
    )
};

export default Test2;

const AnswerDom = styled.div`
    // weight : 설정해줘야
    display: flex;
    flex-wrap: wrap;
    gap : 0.5rem;
    justify-content: center;
    align-items: start;
`;

const Answer = styled.div`
    height : 40px;
    border-radius: 20px;
    background-color: #fffff;
    border : 1px solid rgb(207,209,218);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 100px; /* 최소 너비 설정 */
    &:hover {
        background-color: #e0e0e0;
    }
`;