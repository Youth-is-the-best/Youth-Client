import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Test2 = () => {

    return (
      <QuizDom>
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

const ButtonLink = styled(Link)`
  display : flex;
  background-color : black;
    font-family: 'Ownglyph_meetme-Rg';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2402_1@1.0/Ownglyph_meetme-Rg.woff2') format('woff2');
    font-weight: lighter;
    font-style: normal;
    text-decoration: none;
    background-color: pink;
    color: #ffffff;
    border: none;
    border-radius: 25px;
    padding: 5px 15px;
    font-size: 1.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #e98ab5;
    }

    &:active {
        background-color: pink;
    }
`

const QuizDom = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 80vh;
    margin: 20px;
    border-radius: 20px;
`;

const ButtonDom = styled.div`
    display: flex;
    flex-direction: row;
    gap: 300px;
`;

const QuestionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
`;

const AnswerDom = styled.div`
    height : 30vh;
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
    padding: 10px;
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