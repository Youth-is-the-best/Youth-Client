import { FiShare2, FiArrowRightCircle } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { ButtonDom, ButtonLink } from './Test';
import { postTest } from '../../apis/testapis';
import styled from 'styled-components';
import { Line } from '../bingo/MadeBingo';
import { useNavigate } from 'react-router-dom';
import { usernameState } from '../../recoil/atoms';
import { useRecoilState } from 'recoil';

const Result = ({ year, semester, selectedAnswers, selectedReason, inputValue }) => {
  const [userType, setUserType] = useState("");
  const [content, setContent] = useState([]);
  const [image, setImage] = useState("");
  const [username, setUsername] = useRecoilState(usernameState);
  
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
      setContent(response.content.split('\n')); // Split the content into lines
      setImage(response.image);
      setUsername(response.username);
    } catch (error) {
      setContent(["모든 문항을 답해주세요."]);
    }
  };

  useEffect(() => {
    showResult();
  }, []);

  return (
    <>
      <ResultDom>
        <div> {username} 님의 유형은</div>
        <Image>
          <img src={image} style={{width:'100%'}} alt="result"></img>
        </Image>
        <Title>"{userType}"</Title>
        <ResultInfo>
          {content.map((line, index) => (
            <Line>
              <>🍍</>
              <p key={index}>{line}</p>
            </Line>
          ))}
        </ResultInfo>
        <ButtonDom>
          <ButtonLink> <FiShare2 /> 테스트 결과 공유하기 </ButtonLink>
          <ButtonLink style={{ backgroundColor: 'rgba(30, 58, 138, 1)', color: 'white' }} to="/view">
            <FiArrowRightCircle/> 빙고판 채우러가기
          </ButtonLink>
        </ButtonDom>
      </ResultDom>
    </>
  );
};

export default Result;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  padding: 10px;
  font-family: 'SBAggroB';
  src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SBAggroB.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  color : rgba(30, 58, 138, 1);
`;

const ResultInfo = styled.div`
  height: auto;
  color : rgba(30, 58, 138);
  padding : 10px;
`;

const Image = styled.div`
  width: 200px;
  height: 200px;
  margin-top : 10px;
`;

const ResultDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding : 100px;
  color rgba(81, 81, 81, 1);
`;
