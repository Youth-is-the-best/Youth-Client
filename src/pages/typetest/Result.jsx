import { GoHome } from 'react-icons/go';
import { FiShare2, FiArrowRightCircle } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { ButtonDom, ButtonLink } from './Test';
import { postTest } from '../../apis/testapis';
import styled from 'styled-components';

const Result = ({ year, semester, selectedAnswers, selectedReason, inputValue }) => {
  const [userType, setUserType] = useState("");
  const [content, setContent] = useState("");

  const showResult = async () => {
    const answer = {
      "return_year": year,
      "return_semester": semester,
      "answer2": selectedReason,
      "answer3": selectedAnswers,
      "answer4": inputValue
    };
    try {
      const response = await postTest(answer);
      setUserType(response.user_type);
      setContent(response.content);
    } catch (error) {
      setContent("모든 문항을 답해주세요.");
    }
  };

  useEffect(() => {
    showResult();
  }, []);

  return (
    <>
      <ResultDom>
        <div>@9rin_t2 님의 유형은</div>
        <Image></Image>
        <h1>{userType}</h1>
        <ResultInfo>{content}</ResultInfo>
        <ButtonDom>
          <ButtonLink> <FiShare2 /> 테스트 결과 공유하기 </ButtonLink>
          <ButtonLink style={{ backgroundColor: 'rgba(30, 58, 138, 1)', color: 'white' }} to="/">
            <FiArrowRightCircle onClick={GoHome}/> 빙고판 채우러가기
          </ButtonLink>
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
  width: 200px;
  height: 200px;
  border: 1px solid black;
  margin-top : 10px;
`;

const ResultDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding : 100px;
`;