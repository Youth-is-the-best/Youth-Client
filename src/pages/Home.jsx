import React, { useState } from 'react';
import { MdOutlineEditCalendar } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import mypage from '../images/mypage.png';
import { FiThumbsUp } from 'react-icons/fi';

const Home = () => {
  const options = ["추천순", "마감순", "보관함"];
  const navigate = useNavigate();
  const [selectedInfo, setSelectedInfo] = useState();
  const [value, onChange] = useState(new Date());
  

  const [array, setArray] = useState(options[0]);
  const handleArrayChange = (event) => {
    setArray(event.target.value);
  }
  
  const viewCalendar = () => {
    // 
  }

  const handleInfoClick = (index) => {
    setSelectedInfo(index);
    //백엔드연결 여기서하기
  };

  const veiwBingoInfo = (index) => {
    navigate("/info");
  }

  const infoItems = [
    "jobPreparation",
    "internship",
    "academicStress",
    "selfDevelopment",
    "diverseExperiences",
    "financialBurden",
    "mentalStability",
    "newCareerExploration",
    "jobPreparation",
    "internship",
    "academicStress",
    "selfDevelopment",
    "diverseExperiences",
    "financialBurden",
    "mentalStability",
    "jobPreparation",
    "internship",
    "academicStress",
    "selfDevelopment",
    "diverseExperiences",
    "financialBurden",
    "mentalStability"
  ];

  const [bingos, setBingos] = useState(Array.from({ length: 9 }, (_, index) => index));
  const [draggingIndex, setDraggingIndex] = useState(null);
  const [draggingInfo, setDraggingInfo] = useState(null);

  const handleDragStart = (index, type) => {
    if (type === 'bingo') {
      setDraggingIndex(index);
      setDraggingInfo(null);
    } else {
      setDraggingInfo(infoItems[index]);
      setDraggingIndex(null);
    }
  };

  const handleDrop = (index) => {
    const newBingos = [...bingos];
    if (draggingInfo !== null) {
      newBingos[index] = draggingInfo;
      setDraggingInfo(null);
    } else {
      [newBingos[draggingIndex], newBingos[index]] = [newBingos[index], newBingos[draggingIndex]];
      setDraggingIndex(null);
    }
    setBingos(newBingos);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Headers>
        <Header to="/test/0">휴학 유형 테스트</Header>
        <Header to="/">투두 리스트 빙고</Header>
        <Header to="/made">공고/후기</Header>
        <Header to="/made">나의 포트폴리오</Header>
        <img src={mypage} style={{ height: '60px' }}></img>
      </Headers>
      <Body>
        <LeftDom>
          <h2>열정가득 곰도리의 빙고판</h2>
          <div style={{ color: 'grey' }}>2024.01.05 ~ 2024.01.10 <MdOutlineEditCalendar onClick={viewCalendar}/></div>
          <BingoDom>
            {bingos.map((bingo, index) => (
              <Bingo
                key={index}
                draggable
                onDragStart={() => handleDragStart(index, 'bingo')}
                onDrop={() => handleDrop(index)}
                onDragOver={handleDragOver}
              >
                {typeof bingo === 'number' ? bingo + 1 : bingo}
              </Bingo>
            ))}
          </BingoDom>
          <Button>완료</Button>
        </LeftDom>
        <RightDom>
          <div><FiThumbsUp /> 후알유 추천</div>
          <div>마음에 드는 활동을 빙고판에 끌어서 옮겨보세요 </div>
          <RecommendDom>
            <RecommendCom>
              <div>이미지</div>
              <div>제목</div>
            </RecommendCom>
            <RecommendCom></RecommendCom>
          </RecommendDom>
          <Selector value={array} onChange={handleArrayChange}>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </Selector>
          <InfoDom>
            {infoItems.map((info, index) => (
              <Info
                key={index}
                draggable
                onDragStart={() => handleDragStart(index, 'info')}
              >
                {info}
                </Info>
            ))}
          </InfoDom>
        </RightDom>
      </Body>
    </>
  );
};

export default Home;

export const Selector = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  width : 100px;
  border: 1px solid rgba(30, 58, 138, 1);
  color : rgba(30, 58, 138, 1);
`

const Headers = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  padding-right : 3rem;
  gap : 20px;
  height : 64px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.08);
  font-size : 20px;
`;
const Header = styled(Link)`
  color : rgba(30, 58, 138, 1);
  text-decoration : none;
`;
const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top : 20px;
  color : #1E3A8A;
`;
const LeftDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width : 550px;
`;

export const RightDom = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  width : 550px;
  height : 630px;
  background: rgba(30, 58, 138, 0.04);
  border-radius: 0px 20px 20px 0px;
  border-left : 4px solid rgba(30, 58, 138, 0.4);
  gap : 15px;
  padding : 20px;
`;

const BingoDom = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width : 510px;
  height : 500px;
  // padding : 5px;
`;

const Bingo = styled.div`
  width : 150px;
  height : 150px;
  font-size : 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(30, 58, 138, 0.1);
  border-radius : 10px;
  border: 2px solid #d9d9d9;
`;

const Button = styled.div`
  display: flex;
  // flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 20px;
  padding: 10px;
  gap: 10px;
  border-radius: 10px;
  background: rgba(30, 58, 138, 1);
  color : white;
`;

const RecommendDom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap : 30px;
  border-bottom : 0.4px solid rgba(30, 58, 138, 0.7);
  padding-bottom : 30px;
`;

const RecommendCom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 155px;
  gap: 0px;
  border-radius: 10px;
  background : #FFFFFF;
`;

const InfoDom = styled.div`
  height : 280px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  // align-content: center;
  overflow-y: auto;
`;

const Info = styled.div`
  height: 40px;
  border-radius: 20px;
  background-color: white;
  border: 1px solid rgb(207, 209, 218);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 60px;
  padding: 0 10px;
  gap : 5px;
  scroll-snap-align: start;
  position: relative;
  &:hover {
    background-color: rgba(30, 58, 138, 0.2);
    color: #1E3A8A;
  }
  span {
    margin-left: 5px;
  }
`;
