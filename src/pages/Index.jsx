import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FiThumbsUp } from 'react-icons/fi';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { getBingo, getDday, getHueInfo, getSaved, getTypeRecommend, getUpcomming} from '../apis/testapis';
import HeaderHook from '../hook/HeaderHook';
import FooterHook from '../hook/FooterHook'
import { RightDom } from './bingo/BingoInfo';
import { RecommendDom, RecommendCom, StyledDday1, StyledDday2,Body,InfoDom,Info,Selector,Bingo  } from './Home';
import { bingoState, usernameState, startDateState, endDateState, titleState, bingoIdState, Day1State, Day2State } from '../recoil/atoms';

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
  const [Dday1, setDday1] = useRecoilState(Day1State);
  const [Dday2, setDday2] = useRecoilState(Day2State);

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

  const viewTypeRecommend = async () => {
    try {
      const response = await getTypeRecommend();
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
    } catch (error) {
      setError(error);
      navigate("/bingo");
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

  const getDdays = async () => {
    try {
      const get_response = await getDday();
      if (get_response && get_response.display) {
        setDday1(get_response.display.rest_dday_display);
        setDday2(get_response.display.return_dday_display);
        console.log(get_response);
      } else {
        setError('Invalid response structure');
        console.error('Invalid response structure:', get_response);
      }
    } catch (error) {
      setError('Error getting dates');
      console.error('Error in getDday:', error.response ? error.response.data : error.message);
    }
  };

  useEffect(() => {
    viewRecommend();
    viewSaved();
    viewTypeRecommend();
    getBingos();
    getDdays();
  }, []);

  return (
    <>
      <HeaderHook />
      <Body>
        <LeftDom>
          <Line>
            <StyledDday1>{Dday1}</StyledDday1> 
            <StyledDday2>{Dday2}</StyledDday2>
          </Line>
          <h2>{username}의 빙고판</h2>
          <div style={{ color: 'grey' }}>
            {startDate} ~ {endDate}
          </div>
          <BingoDom>
            {bingos.map((bingo, index) => (
              <Bingo
                key={index}
                inBingo={bingo.title !== ''}
                
                onClick={() => clickBingo(index)}
              >
                {bingo.title || ''}
              </Bingo>
            ))}
          </BingoDom>
        </LeftDom>
        <RightDom style={{paddingTop : '20px'}}>
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
      <FooterHook />
    </>
  );
};

export default Index;

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

const Line = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 3%;
`;
