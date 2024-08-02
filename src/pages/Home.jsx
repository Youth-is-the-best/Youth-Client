import React, { useState, useEffect } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FiThumbsUp } from 'react-icons/fi';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { getBingo, getHueInfo, getSaved, getTypeRecommend, getUpcomming, postBingo } from '../apis/testapis';
import HeaderHook from '../hook/HeaderHook';
import { MdOutlineEditCalendar } from 'react-icons/md';
import { RightDom } from './bingo/BingoInfo';
import { bingoBodyState, bingoState, usernameState, startDateState, endDateState, titleState } from '../recoil/atoms';

//드래그가능 홈화면
const Home = () => {
  const options = ["추천순", "마감순", "보관함"];
  const navigate = useNavigate();
  const [bingos, setBingos] = useRecoilState(bingoState);
  const [recommend, setRecommend] = useState([]);
  const [upcomming, setUpcomming] = useState([]);
  const [saved, setSaved] = useState([]);
  const [typeRecommend, setTypeRecommend] = useState([]);
  const [array, setArray] = useState('추천순');
  const [error, setError] = useState(null);
  const [username] = useRecoilState(usernameState);
  const [startDate] = useRecoilState(startDateState);
  const [endDate] = useRecoilState(endDateState);
  const [title, setTitle] = useRecoilState(titleState);
  const [bingoBody, setBingoBody] = useRecoilState(bingoBodyState);

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

  const viewRecommend = async () => {
    const response = await getHueInfo();
    const recommendations = response.map((item) => ({
      title: item.title,
      image: item.images[0]?.image || '',
      id: item.id,
    }));
    setRecommend(recommendations);
  };

  const viewUpcomming = async () => {
    const response = await getUpcomming();
    const upcommings = response.results.map((item) => ({
      title: item.title,
      id: item.id,
    }));
    setUpcomming(upcommings);
  };

  const viewSaved = async () => {
    const response = await getSaved();
    const saveds = response.stored_reviews.map((item) => ({
      title: item.title,
      id: item.id,
    }));
    setSaved(saveds);
  };

  const viewTypeRecommend = async (type) => {
    const response = await getTypeRecommend(type);
    const typeData = response.data.map((item) => ({
      title: item.title,
      id: item.id,
    }));
    setTypeRecommend(typeData);
  };

  //처음 패치
  const fetchBingoData = async () => {
    try {
      const response = await getBingo();
      const bingos = Array.from({ length: 9 }, (_, index) => ({
        id : response.bingo_obj.find((item) => item.location === index)?.id || '',
        location: index,
        title: response.bingo_obj.find((item) => item.location === index)?.title || '',
      }));
      setBingos(bingos);
      setTitle(bingos.map((item) => item.title));
    } catch (error) {
      setError('Error fetching bingo data');
    }
  };

  const postBingos = async () => {
    try {
      const response = await postBingo(bingoBody);
      console.log(bingoBody);
      console.log(response);
    } catch (error) {
      setError('Error posting bingo data');
      console.error('Error in postBingo:', error.response ? error.response.data : error.message);
    }
  };
  
  const getBackgroundColor = (inBingo, index) => {
    if (inBingo) {
      return 'white';
    } else {
      switch (index) {
        case 0:
          return 'rgba(30, 58, 138, 0.10)';
        case 1:
          return 'rgba(30, 58, 138, 0.15)';
        case 2:
          return 'rgba(30, 58, 138, 0.2)';
        case 3:
          return 'rgba(30, 58, 138, 0.25)';
        case 4:
          return 'rgba(30, 58, 138, 0.3)';
        case 5:
          return 'rgba(30, 58, 138, 0.35)';
        case 6:
          return 'rgba(30, 58, 138, 0.4)';
        case 7:
          return 'rgba(30, 58, 138, 0.45)';
        case 8:
          return 'rgba(30, 58, 138, 0.5)';
        default:
          return 'rgba(30, 58, 138, 0.1)';
      }
    }
  };

  const [draggingInfo, setDraggingInfo] = useState(null);
  const [draggingIndex, setDraggingIndex] = useState(null);

  const handleDragStart = (index, type) => {
    if (type === 'bingo') {
      setDraggingIndex(index);
      setDraggingInfo(null);
    } else {
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
    }
  };

  const handleDrop = (index) => {
    const newBingos = [...bingos];
    const newTitles = [...title];
    try {
      if (draggingInfo !== null) {
        newBingos[index] = { location: index, title: draggingInfo.title };
        newTitles[index] = draggingInfo.title;
        setDraggingInfo(null);
        setBingos(newBingos);
        setTitle(newTitles);
        // console.log(bingos);
        navigate(`/madedragbingo/${draggingInfo.id}/${newBingos[index].location}`);
      } else if (draggingIndex !== null) {
        [newBingos[draggingIndex], newBingos[index]] = [newBingos[index], newBingos[draggingIndex]];
        [newTitles[draggingIndex], newTitles[index]] = [newTitles[index], newTitles[draggingIndex]];
        setDraggingIndex(null);
        setBingos(newBingos);
        setTitle(newTitles);
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
    navigate('/hueInfo');
  };

  const clickBingo = (index) => {
    alert('이미 만들어진 빙고입니다. 드래그하여 수정하세요');
    const selectedBingo = bingos[index];
    // navigate(`/madedragbingo/${selectedBingo.id}/${selectedBingo.location}`);
    //bingo에 아이디 아직 안 된 거 같아서 추가해야됨
  };

  const clickemptyBingo = (location) => {
    navigate(`/made/${location}`);
  };

  useEffect(() => {
    viewRecommend();
    viewSaved();
    viewTypeRecommend();
    if(bingos.every(bingo => !bingo.title)){
      fetchBingoData();
    }
  }, []);

  return (
    <>
      <HeaderHook />
      <Body>
        <LeftDom>
          <h2>{username}의 빙고판</h2>
          <div style={{ color: 'grey' }}>
            {startDate} ~ {endDate} <MdOutlineEditCalendar />
          </div>
          <BingoDom>
          {bingos.map((bingo, index) => {
            const inBingo = bingo.title !== '';
            return (
              <Bingo
                key={index}
                draggable
                onDragStart={() => handleDragStart(index, 'bingo')}
                onDrop={() => handleDrop(index)}
                onDragOver={handleDragOver}
                inBingo={inBingo}
                style={{ background: getBackgroundColor(inBingo, index) }}
                onClick={() => inBingo ? clickBingo(index) : clickemptyBingo(index)}
              >
                {bingo.title || ''}
              </Bingo>
            );
          })}
          </BingoDom>
          <Button style={{ marginLeft: '473px', marginTop: '4px' }} onClick={postBingos}>완료</Button>
        </LeftDom>
        <RightDom>
          <div>
            <FiThumbsUp /> 휴알유 추천
          </div>
          <RecommendDom onClick={goHueInfo}>
            {recommend.map((item, index) => (
              <RecommendCom key={index} draggable={false}>
                <img src={item.image} alt={item.title} style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
                <div>{item.title}</div>
              </RecommendCom>
            ))}
          </RecommendDom>
          <Line>
            <Selector
              value={array}
              onChange={handleArrayChange}
              style={{
                background: 'white',
                color: 'rgba(30, 58, 138, 1)',
                border: '1px solid rgba(30, 58, 138, 1)',
              }}
            >
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </Selector>
            <div style={{ marginTop: '10px' }}>마음에 드는 활동을 빙고판에 끌어서 옮겨보세요</div>
          </Line>
          <InfoDom>
            {array === '마감순' ? (
              upcomming.map((item, index) => (
                <Info key={index} draggable onDragStart={() => handleDragStart(index, 'upcomming')} onClick={() => handleInfoClick(item.id)}>
                  {item.title}
                  <IoIosInformationCircleOutline />
                </Info>
              ))
            ) : array === '보관함' ? (
              saved.map((item, index) => (
                <Info key={index} draggable onDragStart={() => handleDragStart(index, 'saved')} onClick={() => handleInfoClick(item.id)}>
                  {item.title}
                  <IoIosInformationCircleOutline />
                </Info>
              ))
            ) : (
              typeRecommend.map((item, index) => (
                <Info key={index} draggable onDragStart={() => handleDragStart(index, 'typeRecommend')} onClick={() => handleInfoClick(item.id)}>
                  {item.title}
                  <IoIosInformationCircleOutline />
                </Info>
              ))
            )}
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
  padding-right: 3rem;
  gap: 20px;
  height: 64px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.08);
  font-size: 20px;
  color: rgba(30, 58, 138, 1);
`;
export const Header = styled(Link)`
  color: rgba(30, 58, 138, 1);
  text-decoration: none;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 2%;
  width: 100%;
  color: #1e3a8a;
  height: 660px;
  gap: 10px;
`;

const LeftDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 550px;
`;

const BingoDom = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 550px;
  height: 550px;
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
  color: white;
`;

const RecommendDom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-bottom: 0.4px solid rgba(30, 58, 138, 0.7);
  padding-bottom: 30px;
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
  background: #ffffff;
  padding: 10px;
`;

const InfoDom = styled.div`
  height: 310px;
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
  gap: 5px;
  scroll-snap-align: start;
  position: relative;
  &:hover {
    background-color: rgba(30, 58, 138, 0.2);
    color: #1e3a8a;
  }
  span {
    margin-left: 5px;
  }
`;

const Selector = styled.select`
  font-size: 15px;
  padding: 10px;
  border-radius: 10px;
  width: 110px;
  border: none;
  background: rgba(30, 58, 138, 1);
  color: white;
`;

const Line = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 3%;
`;
