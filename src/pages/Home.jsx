import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FiThumbsUp } from 'react-icons/fi';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { getBingo, getHueInfo, getSaved, getTypeRecommend, getUpcomming, postBingo } from '../apis/testapis';
import HeaderHook from '../hook/HeaderHook';
import { MdOutlineEditCalendar } from 'react-icons/md';
import { click } from '@testing-library/user-event/dist/click';

const Home = () => {
  const options = ["추천순", "마감순", "보관함"];
  const navigate = useNavigate();
  const [recommend, setRecommend] = useState([]);
  const [username, setUsername] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [bingos, setBingos] = useState(Array.from({ length: 9 }, (_, index) => ({ location: index, title: '' })));
  const [upcomming, setUpcomming] = useState([]);
  const [saved, setSaved] = useState([]);
  const [typeRecommend, setTypeRecommend] = useState([]);
  const [array, setArray] = useState(options[0]);
  const [error, setError] = useState(null);

  const handleArrayChange = (event) => {
    const selectedValue = event.target.value;
    setArray(selectedValue);
    if (selectedValue === '마감순') {
      viewUpcomming();
    } else if (selectedValue === '추천순') {
      viewRecommend();
    } else if (selectedValue === '보관함') {
      viewSaved();
    }
  };

  const viewRecommend = async() => {
    const response = await getHueInfo();
    const recommendations = response.map(item => ({
      title: item.title,
      image: item.images[0]?.image || '',
      id: item.id,
    }));
    setRecommend(recommendations);
  };

  const viewUpcomming = async () => {
    const response = await getUpcomming();
    const upcommings = response.results.map(item => ({
      title: item.title,
      id: item.id,
    }));
    setUpcomming(upcommings);
    // console.log(response);
  };

  const viewSaved = async() => {
    const response = await getSaved();
    const saveds = response.stored_reviews.map(item => ({
      title: item.title,
      id: item.id,
    }));
    setSaved(saveds);
    console.log(response);
  };
  
  const viewTypeRecommend = async(type) => {
    const response = await getTypeRecommend(type);
    const typeData = response.data.map(item => ({
      title: item.title,
      id: item.id,
    }));
    setTypeRecommend(typeData);
    // console.log(response);
    // console.log(typeData);  
  };

  const getBingos = async() => {
    const response = await getBingo();
    const username = response.username;
    const start_date = response.start_date;
    const end_date = response.end_date;
    const bingoData = Array.from({ length: 9 }, (_, index) => ({
      location: index,
      title: response.bingo_obj.find(item => item.location === index)?.title || ''
    }));
    
    setUsername(username);
    setStartDate(start_date);
    setEndDate(end_date);
    setBingos(bingoData);
    console.log(response);
  };

  const postBingos = async(mybingo) => {
    mybingo = {
      "size": 9,
      "start_date": "2024-07-30",
      "end_date": "2024-10-30",
      "bingo_obj": [
          {
              "title": "멋쟁이사자처럼대학 해커톤",
              "choice": "1",
              "id": "9",
              "location": "3",
              "todo": [
                  {"title": "멋지게 으르렁대기"},
                  {"title": "멋지게 그르렁대기"}
              ]
          },
          {
              "title": "매월 한 번 가까운 곳으로 당일치기 여행",
              "choice": "1",
              "id": "6",
              "location": "1",
              "todo": []
          },
          {
              "title": "카페 아르바이트",
              "choice": "0",
              "location": "7",
              "todo": [
                  {"title": "바리스타 자격증 따기"},
                  {"title": "카페 알바 공고 찾기"}
              ]
          }
      ]
  };
    const response = await postBingo(mybingo);
    console.log(response);
  };

  const getBackgroundColor = (inBingo, index) => {
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

  const [draggingIndex, setDraggingIndex] = useState(null);
  const [draggingInfo, setDraggingInfo] = useState(null);

  const handleDragStart = (index, type) => {
    if (type === 'upcomming') {
      setDraggingInfo(upcomming[index]);
      setDraggingIndex(null);
    } else if (type === 'saved') {
      setDraggingInfo(saved[index]);
      setDraggingIndex(null);
    } else if (type === 'typeRecommend') {
      setDraggingInfo(typeRecommend[index]);
      setDraggingIndex(null);
    } else {
      setError('드래그할 수 없습니다');
      setDraggingInfo(null);
    }
  };

  const handleDrop = (index) => {
      try {
        if (draggingInfo !== null) {
          navigate(`/madedragbingo/${draggingInfo.id}/${index}`);
        } else if (draggingIndex !== null) {
          const newBingos = [...bingos];
          [newBingos[draggingIndex], newBingos[index]] = [newBingos[index], newBingos[draggingIndex]];
          setDraggingIndex(null);
          setBingos(newBingos);
        } else {
          throw new Error('드래그할 수 없습니다');
        }
      } catch (error) {
        setError(error.message);
        console.error('Error in handleDrop:', error.response ? error.response.data : error.message);
      }
    };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleInfoClick = (id) => {
    navigate(`/info/${id}`);
  };

  const goHueInfo = () => {
    navigate("/hueInfo");
  };

  const clickBingo = (id) => {
    // navigate("/info/${id}");
  };

  useEffect(() => {
    viewRecommend();
    viewSaved();
    viewTypeRecommend("panda");
    getBingos();
  }, []);

  return (
    <>
      <HeaderHook />
      <Body>
        <LeftDom>
          <h2 onClick={postBingos}>{username}의 빙고판</h2>
          <div style={{ color: 'grey' }}>{startDate} ~ {endDate} <MdOutlineEditCalendar /></div>
          <BingoDom>
            {bingos.map((bingo, index) => (
              <Bingo
                key={index}
                draggable
                onDragStart={() => handleDragStart(index, 'bingo')}
                onDrop={() => handleDrop(index)}
                onDragOver={handleDragOver}
                onClick={clickBingo(bingo.id)}
                inBingo={bingo.title !== ''}
                style={{ background: getBackgroundColor(bingo.title !== '', index) }}
              >
                {bingo.title || ''}
              </Bingo>
            ))}
          </BingoDom>
          <Button style={{ marginLeft: '473px', marginTop: '4px' }}>완료</Button>
        </LeftDom>
        <RightDom>
          <div><FiThumbsUp /> 휴알유 추천</div>
          <RecommendDom onClick={goHueInfo}>
            {recommend.map((item, index) => (
              <RecommendCom key={index} draggable={false}>
                <img src={item.image} alt={item.title} style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
                <div>{item.title}</div>
              </RecommendCom>
            ))}
          </RecommendDom>
          <Line>
            <Selector value={array} onChange={handleArrayChange} style={{ background: 'white', color: 'rgba(30, 58, 138, 1)', border: '1px solid rgba(30, 58, 138, 1)' }}>
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </Selector>
            <div style={{marginTop:'10px'}}>마음에 드는 활동을 빙고판에 끌어서 옮겨보세요</div>
          </Line>
          <InfoDom>
          {array === '마감순' ? (
            upcomming.map((item, index) => (
              <Info 
                key={index}
                draggable
                onDragStart={() => handleDragStart(index, 'upcomming')}
                onClick={() => handleInfoClick(item.id)}>
                {item.title}<IoIosInformationCircleOutline/>
              </Info>
            ))
          ) : (array === '보관함' ? (
            saved.map((item, index) => (
              <Info 
                key={index}
                draggable
                onDragStart={() => handleDragStart(index, 'saved')}
                onClick={() => handleInfoClick(item.id)}>
                {item.title}<IoIosInformationCircleOutline/>
              </Info>
            ))
          ) : (
            typeRecommend.map((item, index) => (
              <Info
                key={index}
                draggable
                onDragStart={() => handleDragStart(index, 'typeRecommend')}
                onClick={() => handleInfoClick(item.id)}>
                {item.title}<IoIosInformationCircleOutline />
              </Info>
            ))
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

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top : 20px;
  color : #1E3A8A;
  height : 660px;
  gap : 10px;
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
  justify-content: center;
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
`;

const Line = styled.div`
 display : flex;
  flex-direction : row;
 width : 100%;
 gap : 3%;
`;
