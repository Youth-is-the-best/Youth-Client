import { FiShare2, FiArrowRightCircle } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { ButtonDom, ButtonLink } from './Test';
import { postTest } from '../../apis/testapis';
import styled from 'styled-components';
import { Line } from '../bingo/MadeBingo';
import { useNavigate } from 'react-router-dom';
import { usernameState } from '../../recoil/atoms';
import { useRecoilState } from 'recoil';
import { answer2State, answer3State, answer4State, semesterState, yearState } from '../../recoil/testatoms';

const Result = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("");
  const [content, setContent] = useState([]);
  const [image, setImage] = useState("");

  const [semester, setSemester] = useRecoilState(semesterState);
  const [year, setYear] = useRecoilState(yearState);
  const [answer2, setAnswer2] = useRecoilState(answer2State);
  const [answer3, setAnswer3] = useRecoilState(answer3State);
  const [answer4, setAnswer4] = useRecoilState(answer4State);
  const [username, setUsername] = useRecoilState(usernameState);
  const [usertypedisplay, setUserTypeDisplay] = useState('');
  
  const showResult = async () => {
    const answer = {
      "return_year": year,
      "return_semester": semester,
      "answer2": answer2,
      "answer3": answer3,
      "answer4": answer4
    };
    try {
      const response = await postTest(answer);
      setUserType(response.user_type);
      setContent(response.content.split('\n'));
      setImage(response.image);
      setUsername(response.username);
      setUserTypeDisplay(response.user_type_display);
    
      // console.log(response);
      console.log(answer);
    } catch (error) {
      setContent(["모든 문항을 답해주세요."]);
    }
  };

  const goShare =()  => {
    navigate(`/hueRU/${userType}`);
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
        <Title>"{usertypedisplay}"</Title>
        <ResultInfo>
          {content.map((line, index) => (
            <Line>
              <p key={index}>{line}</p>
            </Line>
          ))}
        </ResultInfo>
        <ButtonDom>
          <ButtonLink onClick={goShare()}> <FiShare2 /> 테스트 결과 공유하기 </ButtonLink>
          <ButtonLink style={{ backgroundColor: 'rgba(30, 58, 138, 1)', color: 'white' }} to="/bingo">
            <FiArrowRightCircle/> 빙고판 채우러가기
          </ButtonLink>
        </ButtonDom>
      </ResultDom>
    </>
  );
};

export default Result;

export const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  padding: 10px;
  font-family: 'SBAggroB';
  src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SBAggroB.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  color : rgba(30, 58, 138, 1);
`;

export const ResultInfo = styled.div`
  height: auto;
  color : rgba(30, 58, 138);
  padding : 10px;
`;

export const Image = styled.div`
  width: 200px;
  height: 200px;
  margin-top : 10px;
`;

export const ResultDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding : 100px;
  color rgba(81, 81, 81, 1);
`;
