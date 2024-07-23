import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Test1 = () => {

    return (
      <QuizDom>
        <QuestionContainer>
          <QuestionText>휴학을 결정한 계기는 무엇인가요?</QuestionText>
        </QuestionContainer>
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
          <ButtonLink to="/test">이전 문제</ButtonLink>
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