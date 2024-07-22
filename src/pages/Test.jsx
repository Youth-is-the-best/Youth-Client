import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import YearSemesterSelector from '../hook/YearSemesterSelector';

const Test = () => {

    return (
      <QuizDom>
        <QuizBar>----</QuizBar>
        <QuestionContainer>학업으로의 복귀는 언제인가요?</QuestionContainer>
        <YearSemesterSelector></YearSemesterSelector>
        <ButtonDom>
          <ButtonLink to="/test/1">다음 문제</ButtonLink>
        </ButtonDom>
      </QuizDom>
    )
};

export default Test;

const QuizBar = styled.div`
  display : flex;
  background-color : FFFFFF;
`
const QuestionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-color : 1E3A8A;
    width : 590px;
    height : 120px;
    background-color : FFFFFF;
    border-color : 1E3A8A;
`;

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
    background-color : F5F5F5;
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