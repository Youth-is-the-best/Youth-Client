import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Test2 = () => {

    return (
      <QuizDom>
        <QuestionContainer>
          <QuestionText>휴학 기간 중 하고 싶은 활동을 선택하여 주세요</QuestionText>
        </QuestionContainer>
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

const QuestionText = styled.h2`
    margin-bottom: 20px;
`;


const AnswerList = styled.ul`
    list-style: none;
    padding: 0;
`;

const Answer = styled.li`
    margin: 10px 0;
    padding: 10px 20px;
    background-color: #f0f0f0;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
        background-color: #e0e0e0;
    }
`;