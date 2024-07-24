import React, { useState } from 'react';
import styled from 'styled-components';
import { QuizDom, QuestionContainer, ButtonDom, ButtonLink } from './Test.jsx';
import ProgressBar from '../hook/ProgressBar.js';

const Test3 = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <QuizDom>
      <ProgressBar currentStep={4} totalSteps={4} />
      <QuestionContainer>이 기간이 나에게 어떤 기억으로 남길 바라나요?</QuestionContainer>
      <Input 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder=" | 목표를 입력해주세요 " 
      />
      <ButtonDom>
        <ButtonLink to="/test/2">이전 문제</ButtonLink>
        <ButtonLink to="/result">결과 보기</ButtonLink>
      </ButtonDom>
    </QuizDom>
  );
};

export default Test3;

const Input = styled.input`
  width: 590px;
  height: 80px;
  padding: 10px;
  gap: 10px;
  border-radius: 10px;
  border: 0px solid white;
  background: rgba(30, 58, 138, 0.04);
  font-size: 16px;
`;