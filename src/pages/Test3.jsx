import React from 'react';
import styled from 'styled-components';
import {QuizDom, QuestionContainer, ButtonDom,ButtonLink } from './Test.jsx';

const Test3 = () => {

    return (
      <QuizDom>
        <QuestionContainer>이 기간이 나에게 어떤 기억으로 남길 바라나요?</QuestionContainer>
        <Input/>
        <ButtonDom>
          <ButtonLink to="/test/2">이전 문제</ButtonLink>
          <ButtonLink to="/result">결과 보기</ButtonLink>
        </ButtonDom>
      </QuizDom>
    )
};

export default Test3;

const Input = styled.input`
  width : 30rem;
  height : 4rem;
`