import React from 'react'
import { ButtonDom, ButtonLink, Detail, QuestionContainer, QuizDom } from './Test'
import { FiArrowRightCircle, FiShare2 } from 'react-icons/fi'
import styled from 'styled-components';

const Result = () => {

  return (
    <>
    <ResultDom>
      
      <ButtonDom>
      <ButtonLink > <FiShare2 /> 테스트 결과 공유하기 </ButtonLink>
      <ButtonLink style={{ backgroundColor: 'rgba(30, 58, 138, 1)', color:'white' }} to="/"> 
      <FiArrowRightCircle /> 빙고판 채우러가기 </ButtonLink>
      </ButtonDom>
    </ResultDom>
    </>
  );
};

export default Result;

const ResultDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;