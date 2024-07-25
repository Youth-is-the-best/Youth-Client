import React, { useState } from 'react';
import styled from 'styled-components';
import { QuizDom, QuestionContainer, ButtonDom, ButtonLink } from './Test.jsx';
import ProgressBar from '../hook/ProgressBar.js';
import { FiArrowRightCircle } from 'react-icons/fi';
import { postTest } from '../apis/testapis.js';

const Test3 = () => {
  const [inputValue, setInputValue] = useState('');

  const showResult = async() => {
    const answer = {
        "question_id": 4,
        "answer_text": inputValue
    }
    console.log(answer);
    await postTest(answer);
    const response = await postTest(answer);
    console.log("Response:", response);
    
  }

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
        <ButtonLink style={{width:'160px'}}to="/test/2">이전</ButtonLink>
        <ButtonLink style={{ backgroundColor: 'rgba(30, 58, 138, 1)', color:'white', width:'400px' }} to="/result" onClick={showResult}>
        <FiArrowRightCircle /> 나의 휴학 유형 보러가기
        </ButtonLink>
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