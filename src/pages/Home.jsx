import React, { useState } from 'react';
import { useDrag, useDrop, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { AiFillCaretDown, AiOutlineUser } from 'react-icons/ai';
import { MdOutlineEditCalendar } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import mypage from '../images/mypage.png';
import { FiThumbsUp } from 'react-icons/fi';
import { IoIosInformationCircleOutline } from 'react-icons/io';

const ItemTypes = {
  INFO: 'info',
};

const Home = () => {
  const navigate = useNavigate();
  const [selectedInfo, setSelectedInfo] = useState();
  const [bingoData, setBingoData] = useState(Array(9).fill(null));
  const [array, setArray] = useState(options[0]);

  const options = ["추천순", "마감순", "보관함"];
  
  const info = [
    "jobPreparation",
    "internship",
    "academicStress",
    "selfDevelopment",
    "diverseExperiences",
    "financialBurden",
    "mentalStability",
    "newCareerExploration"
  ];

  const handleArrayChange = (event) => {
    setArray(event.target.value);
  };

  const handleInfoClick = (index) => {
    setSelectedInfo(index);
  };

  const veiwBingoInfo = (index) => {
    navigate("/info");
  };

  const moveInfoToBingo = (infoIndex, bingoIndex) => {
    const newBingoData = [...bingoData];
    newBingoData[bingoIndex] = info[infoIndex];
    setBingoData(newBingoData);
  };

  const renderBingoBoxes = () => {
    return bingoData.map((data, index) => (
      <BingoBox
        key={index}
        index={index}
        info={data}
        onDrop={(infoIndex) => moveInfoToBingo(infoIndex, index)}
      />
    ));
  };

  return (
    <DndProvider backend={HTML5Backend}>
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
          <div style={{ color: 'grey' }}>2024.01.05 ~ 2024.01.10 <MdOutlineEditCalendar /></div>
          <BingoDom>
            {renderBingoBoxes()}
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
            {info.map((info, index) => (
              <Info
                key={index}
                index={index}
                selected={selectedInfo === index}
                onClick={() => handleInfoClick(index)}
              >
                {info} <IoIosInformationCircleOutline onClick={() => veiwBingoInfo(index)} />
              </Info>
            ))}
          </InfoDom>
        </RightDom>
      </Body>
    </DndProvider>
  );
};

const BingoBox = ({ index, info, onDrop }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.INFO,
    drop: (item) => onDrop(item.index),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }), [onDrop]);

  return (
    <Bingo ref={drop} style={{ background: isOver ? 'rgba(30, 58, 138, 0.2)' : 'rgba(30, 58, 138, 0.1)' }}>
      {info}
    </Bingo>
  );
};

const Info = ({ index, selected, onClick, children }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.INFO,
    item: { index },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }), [index]);

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <InfoContainer selected={selected} onClick={onClick}>
        {children}
      </InfoContainer>
    </div>
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
`;

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
`;

const Bingo = styled.div`
  width : 150px;
  height : 150px;
  background: rgba(30, 58, 138, 0.1);
  border-radius : 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 20px;
  padding: 10px;
  gap: 10px;
  border-radius: 10px;
  background: rgba(30, 58, 138, 1);
  color : white;
  cursor: pointer;
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
  gap: 0.5rem;
  overflow-y: auto;
`;

const InfoContainer = styled.div`
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
