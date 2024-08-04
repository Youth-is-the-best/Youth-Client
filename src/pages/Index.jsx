import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FiThumbsUp } from 'react-icons/fi';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { getBingo, getHueInfo, getSaved, getTypeRecommend, getUpcomming } from '../apis/testapis';
import HeaderHook from '../hook/HeaderHook';
import { MdOutlineEditCalendar } from 'react-icons/md';
import { RightDom } from './bingo/BingoInfo';
import { RecommendDom, RecommendCom } from './Home';
import { bingoState, usernameState, startDateState, endDateState, titleState, bingoIdState } from '../recoil/atoms';

const Index = () => {
  const options = ["추천순", "마감순", "보관함"];
  const navigate = useNavigate();
  const [bingos, setBingos] = useRecoilState(bingoState);
  const [recommend, setRecommend] = useState([]);
  const [upcomming, setUpcomming] = useState([]);
  const [saved, setSaved] = useState([]);
  const [typeRecommend, setTypeRecommend] = useState([]);
  const [array, setArray] = useState('추천순');
  const [error, setError] = useState(null);
  const [username, setUsername] = useRecoilState(usernameState);
  const [startDate, setStartDate] = useRecoilState(startDateState);
  const [endDate, setEndDate] = useRecoilState(endDateState);
  const [title, setTitle] = useRecoilState(titleState);
  const [id, setId] = useState(bingoIdState);

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
    try {
      const response = await getHueInfo();
      const recommendations = response.map((item) => ({
        title: item.title,
        image: item.images[0]?.image || '',
        id: item.id,
      }));
      setRecommend(recommendations);
    } catch (error) {
      setError(error);
    }
  };

  const viewUpcomming = async () => {
    try {
      const response = await getUpcomming();
      const upcommings = response.results.map((item) => ({
        title: item.title,
        id: item.id,
      }));
      setUpcomming(upcommings);
    } catch (error) {
      setError(error);
    }
  };

  const viewSaved = async () => {
    try {
      const response = await getSaved();
      const saveds = response.stored_reviews.map((item) => ({
        title: item.title,
        id: item.id,
      }));
      setSaved(saveds);
    } catch (error) {
      setError(error);
    }
  };

  const viewTypeRecommend = async (type) => {
    try {
      const response = await getTypeRecommend(type);
      const typeData = response.data.map((item) => ({
        title: item.title,
        id: item.id,
      }));
      setTypeRecommend(typeData);
    } catch (error) {
      setError(error);
    }
  };

  const getBingos = async () => {
    try {
      const response = await getBingo();
      const username = response.username;
      const start_date = response.start_date;
      const end_date = response.end_date;
      const bingoData = Array.from({ length: 9 }, (_, index) => ({
        id: response.bingo_obj.find((item) => item.location === index)?.id || '',
        location: index,
        title: response.bingo_obj.find((item) => item.location === index)?.title || '',
      }));
      setUsername(username);
      setStartDate(start_date);
      setEndDate(end_date);
      setBingos(bingoData);
      setTitle(bingoData.map((item) => item.title));
      // console.log(response);
    } catch (error) {
      setError(error);
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

  const handleInfoClick = (id) => {
    navigate(`/info/${id}`);
  };

  const goHueInfo = () => {
    navigate('/hueInfo');
  };

  const goHueInfo2 = () => {
    navigate('/hueInfo2');
  };

  const clickBingo = (location) => {
    navigate(`/madedbingo/${location}`);
  };

  useEffect(() => {
    viewRecommend();
    viewSaved();
    viewTypeRecommend('panda');
    getBingos();
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
            {bingos.map((bingo, index) => (
              <Bingo
                key={index}
                inBingo={bingo.title !== ''}
                style={{ background: getBackgroundColor(bingo.title !== '', index) }}
                onClick={() => clickBingo(index)}
              >
                {bingo.title || ''}
              </Bingo>
            ))}
          </BingoDom>
        </LeftDom>
        <RightDom>
          <div>
            <FiThumbsUp /> 휴알유 추천
          </div>
          {recommend && recommend.length > 1 && (
          <RecommendDom>
            <RecommendCom draggable={false}
            onClick={goHueInfo}>
              <img src={recommend[0].image} alt={recommend[0].title} style={{ width: '100%', height: '80%', objectFit: 'cover', borderRadius: '10px' }} />
              <div>{recommend[0].title}</div>
            </RecommendCom>
            <RecommendCom draggable={false}
            onClick={goHueInfo2}>
              <img src={recommend[1].image} alt={recommend[1].title} style={{ width: '100%', height: '80%', objectFit: 'cover', borderRadius: '10px' }} />
              <div>{recommend[1].title}</div>
            </RecommendCom>
          </RecommendDom>
          )}
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
                <Info key={index} onClick={() => handleInfoClick(item.id)}>
                  {item.title}
                  <IoIosInformationCircleOutline />
                </Info>
              ))
            ) : array === '보관함' ? (
              saved.map((item, index) => (
                <Info key={index} onClick={() => handleInfoClick(item.id)}>
                  {item.title}
                  <IoIosInformationCircleOutline />
                </Info>
              ))
            ) : (
              typeRecommend.map((item, index) => (
                <Info key={index} onClick={() => handleInfoClick(item.id)}>
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

export default Index;

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
