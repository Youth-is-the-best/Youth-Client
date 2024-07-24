import React from 'react'
import { ButtonDom, ButtonLink} from './Test'
import { FiArrowRightCircle, FiShare2 } from 'react-icons/fi'
import styled from 'styled-components';

const Result = () => {

  return (
    <>
    <ResultDom>
      <div>@9rin_t2 님의 유형은</div>
      <Image></Image>
      <h1>귀여운 판다 🐼</h1>
      <ResultInfo>판다는 귀여우니까 그냥 놀아도 돼용 🩷</ResultInfo>
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

const ResultInfo = styled.div`
  width: 610px;
  height: 170px;
  border-left: 4px solid rgba(30, 58, 138);
  color : rgba(30, 58, 138);
  padding : 10px;
`;

const Image = styled.div`
  width:200px;
  height:200px;
  border: 1px solid black;
  margin-top : 10px;
`
const ResultDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding : 100px;
`;