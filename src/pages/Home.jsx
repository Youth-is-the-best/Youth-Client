import React, { useState, useEffect } from 'react';
import { MdOutlineEditCalendar } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import mypage from '../images/mypage.png';
import { FiThumbsUp, FiUser } from 'react-icons/fi';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { getBingo, getInfo, postBingo } from '../apis/testapis';

const Home = () => {
  const options = ["추천순", "마감순", "보관함"];
  const navigate = useNavigate();
  const [selectedInfo, setSelectedInfo] = useState();
  const [recommend, setRecommend] = useState([]);


  const [array, setArray] = useState(options[0]);
  const handleArrayChange = (event) => {
    setArray(event.target.value);
  }

  const handleInfoClick = async(index) => {
    setSelectedInfo(index);
  };

  const viewBingoInfo = () => {
    navigate("/info");
  }

  const viewRecommend = async() => {
    const response = await getInfo();
    const recommendations = response.map(item => ({
      title: item.title,
      image: item.images[0]?.image || '', // Use the first image or an empty string if no images are present
    }));
    setRecommend(recommendations);
    // console.log("Recommendations:", recommendations);
  }

  const getBingos = async() => {
    const response = await getBingo();
    const start_date = response(item => item.start_date);

    // const titles = response.map(item => item.title);
    console.log(response);
  }

  // const postBingos = async() => {
  //   const mybingo={
  //     "size": 9,
  //     "start_date": "2024-07-25",
  //     "end_date": "2024-10-25",
  //         "bingo_obj": [
  //         {
  //                 "location": 0,
  //                 "choice": "0",
  //                 "title": "제주도 여행",
  //                 "todo": [{
  //               "title": "비행기표 예매"
  //             },
  //               {
  //               "title": "숙소 알아보기"
  //             }]
  //             },
  //             {
  //                 "location": 1,
  //                 "choice": "0",
  //                 "title": "제부도 여행",
  //                 "todo": [{
  //               "title": "기깔나게 자기"
  //             },
  //               {
  //               "title": "밥 맛있게 먹기"
  //             }]
  //             },
  //             {
  //                 "location": 2,
  //                 "choice": "0",
  //                 "title": "독도 여행",
  //                 "todo": [{
  //               "title": "왜가"
  //             },
  //               {
  //             "title": "가야지"
  //             }]
  //             },
  //             {
  //                 "location": 3,
  //                 "choice": "0",
  //                 "title": "울릉도 여행"
  //             },
  //             {
  //                 "location": 4,
  //                 "choice": "0",
  //                 "title": "정처기 따기"
  //             },
  //             {
  //                 "location": 5,
  //                 "choice": "0",
  //                 "title": "한자 4급 따기"
  //             },
  //             {
  //                 "location": 6,
  //                 "choice": "0",
  //                 "title": "괌 여행"
  //             },
  //             {
  //                 "location": 7,
  //                 "choice": "0",
  //                 "title": "매일 물 20L 이상 마시기"
  //             },
  //             {
  //                 "location": 8,
  //                 "choice": "0",
  //                 "title": "아르바이트"
  //             }
  //     ]
  //   }
  //   console.log(mybingo);
  //   try {
  //       const response = await postBingo(mybingo);
  //       console.log(response);
  //   } catch (error) {
  //       console.error(error);
  //   }
  // }

  useEffect(() => {
    viewRecommend();
    // getBingos();
  }, []);

  const infoItems = [
    "2024년 서울 지능형 사물인터넷(AIoT) 해커톤",
    "internship",
    "academicStress",
    "selfDevelopment",
    "diverse Experiences",
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

  const getBackgroundColor = (inBingo,index) => {
    if (inBingo) {
      return 'white';
    } else {
      switch (index) {
        case 0: return 'rgba(30, 58, 138, 0.10)';
        case 1: return 'rgba(30, 58, 138, 0.15)';
        case 2: return 'rgba(30, 58, 138, 0.2)';
        case 3: return 'rgba(30, 58, 138, 0.25)';
        case 4: return 'rgba(30, 58, 138, 0.3)';
        case 5: return 'rgba(30, 58, 138, 0.35)';
        case 6: return 'rgba(30, 58, 138, 0.4)';
        case 7: return 'rgba(30, 58, 138, 0.45)';
        case 8: return 'rgba(30, 58, 138, 0.5)';
        default: return 'rgba(30, 58, 138, 0.1)';
      }
    }
  };

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
        <Header to="/info">공고/후기</Header>
        <Header to="/portfolio">나의 포트폴리오</Header>
        <FiUser size={20}/>
      </Headers>
      <Body>
        <LeftDom>
          <h2>열정가득 곰도리의 빙고판</h2>
          <div style={{ color: 'grey' }}>2024.01.05 ~ 2024.01.10 <MdOutlineEditCalendar/></div>
          <BingoDom>
          {bingos.map((bingo, index) => (
            <Bingo
              key={index}
              draggable
              onDragStart={() => handleDragStart(index, 'bingo')}
              onDrop={() => handleDrop(index)}
              onDragOver={handleDragOver}
              inBingo={typeof bingo !== 'number'}
              style={{ background: getBackgroundColor(typeof bingo !== 'number', index) }}
            >
              {typeof bingo === 'number' ? bingo : bingo}
            </Bingo>
          ))}
          </BingoDom>
          <Button style={{marginLeft:'473px', marginTop:'4px'}}>완료</Button>
        </LeftDom>
        <RightDom>
          <div><FiThumbsUp /> 후알유 추천</div>
          <div>마음에 드는 활동을 빙고판에 끌어서 옮겨보세요 </div>
          <RecommendDom>
            {recommend.map((item, index) => (
              <RecommendCom key={index}>
                <img src={item.image} alt={item.title} style={{ width: '100%', height: 'auto',borderRadius : '10px' }} />
                <div>{item.title}</div>
              </RecommendCom>
            ))}
          </RecommendDom>
          <Selector value={array} onChange={handleArrayChange} style={{ background: 'white', color:'rgba(30, 58, 138, 1)',border:'1px solid rgba(30, 58, 138, 1)' }}>
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
                {info}<IoIosInformationCircleOutline onClick={viewBingoInfo}/> 
                {/* viweBingoInfo(index) */}
                </Info>
            ))}
          </InfoDom>
        </RightDom>
      </Body>
    </>
  );
};

export default Home;

export const Headers = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  padding-right : 3rem;
  gap : 20px;
  height : 64px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.08);
  font-size : 20px;
  color : rgba(30, 58, 138, 1);
`;
export const Header = styled(Link)`
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
  margin-right : 30px;
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
  overflow-y: auto;
`;

const BingoDom = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width : 550px;
  height : 550px;
  // padding : 5px;
`;

export const Bingo = styled.div.attrs((props) => ({
  'data-inbingo': props.inBingo,
}))`
  width: 150px;
  height: 150px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
  margin: auto;
  color: ${({ inBingo }) => (inBingo ? 'rgba(30, 58, 138, 1)' : 'rgba(30, 58, 138, 0.01)')};
  border: ${({ inBingo }) => (inBingo ? '3px solid rgba(30, 58, 138, 0.9)' : '')};
  box-shadow: ${({ inBingo }) => (inBingo ? '2px 2px 4px 0px rgba(30, 58, 138, 0.4)' : 'none')};
`;


const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 16px;
  padding: 10px;
  // gap: 10px;
  border-radius: 10px;
  background: rgba(30, 58, 138, 1);
  color : white;
`;

const RecommendDom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap : 10px;
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
  padding : 10px;
`;

const InfoDom = styled.div`
  height : 310px;
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

const Selector = styled.select`
  font-size :15px;
  padding: 10px;
  border-radius: 10px;
  width : 110px;
  border: none;
  background: rgba(30, 58, 138, 1); 
  color: white;
`
