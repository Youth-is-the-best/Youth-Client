import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { MdOutlineEditCalendar } from 'react-icons/md';
import { bingoState, usernameState, startDateState, endDateState, titleState, Day1State, Day2State, bingoObjectState } from '../../recoil/atoms';
import { getBingo, getDday } from '../../apis/testapis';
import { StyledDday1, StyledDday2 } from '../Home';
import { Line } from './MadeBingo';

const Bingomain = () => {
  const [bingos, setBingos] = useRecoilState(bingoState);
  const [username, setUsername] = useRecoilState(usernameState);
  const [startDate, setStartDate] = useRecoilState(startDateState);
  const [endDate, setEndDate] = useRecoilState(endDateState);
  const [title, setTitle] = useRecoilState(titleState);
  const [Dday1, setDday1] = useRecoilState(Day1State);
  const [Dday2, setDday2] = useRecoilState(Day2State);
  const [error, setError] = useEffect('');

  const getBingos = async () => {
    const response = await getBingo();
    const username = response.username;
    const start_date = response.start_date;
    const end_date = response.end_date;
    const bingos = Array.from({ length: 9 }, (_, index) => ({
      location: index,
      title: response.bingo_obj.find((item) => item.location === index)?.title || '',
    }));

    setUsername(username);
    setStartDate(start_date);
    setEndDate(end_date);
    setBingos(bingos);
    setTitle(bingos.map((item) => item.title));
  };

  const getDday = async () => {
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
  useEffect(() => {
    if (bingos.every(bingo => !bingo.title)) {
    getBingos();
    }
  }, [bingos]);
  useEffect(()=> {
      getDday();
  },[Dday1])

  return (
    <LeftDom>
      <Line>
        <StyledDday1>{Dday1}</StyledDday1> 
        <StyledDday2>{Dday2}</StyledDday2>
      </Line>
      <>{startDate}~{endDate}</>
      <h2>{username}의 빙고판</h2>
      <div style={{ color: 'grey' }}>
        투두리스트를 수정하세요.
        {/* {startDate.toLocaleDateString} ~ {endDate.toLocaleDateString} <MdOutlineEditCalendar /> */}
      </div>
      <BingoDom>
      {Array.isArray(bingos) && bingos.map((item, index) => (
          <Bingo
            key={index}
            inBingo={item.title !== ''}
            style={{ background: getBackgroundColor(item.title !== '', index) }}
          >
            {title[index]}
          </Bingo>
      ))}
      </BingoDom>
    </LeftDom>
  );
};

export default Bingomain;

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

const Bingo = styled.div.attrs((props) => ({
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
