import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { bingoState, usernameState, startDateState, endDateState, titleState, Day1State, Day2State, bingoObjectState } from '../../recoil/atoms';
import { getBingo, getDday } from '../../apis/testapis';
import { StyledDday1, StyledDday2} from '../Home';
import { Line } from './MadeBingo';
import { click } from '@testing-library/user-event/dist/click';
import { useNavigate } from 'react-router-dom';

const Bingomain = () => {
  const [bingos, setBingos] = useRecoilState(bingoState);
  const [username, setUsername] = useRecoilState(usernameState);
  const [startDate, setStartDate] = useRecoilState(startDateState);
  const [endDate, setEndDate] = useRecoilState(endDateState);
  const [title, setTitle] = useRecoilState(titleState);
  const [Dday1, setDday1] = useRecoilState(Day1State);
  const [Dday2, setDday2] = useRecoilState(Day2State);

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
    console.log(response);
    console.log(bingos.is_executed);
  };

  const getDdays = async () => {
    try {
      const get_response = await getDday();
      if (get_response && get_response.display) {
        setDday1(get_response.display.rest_dday_display);
        setDday2(get_response.display.return_dday_display);
      } else {
        console.error('Invalid response structure:', get_response);
      }
    } catch (error) {
      console.error('Error in getDday:', error.response ? error.response.data : error.message);
    }
  };
  
  const navigate = useNavigate();
  const clickBingo = (location) => {
    navigate(`/madedbingo/${location}`);
  };

  useEffect(() => {
    if (bingos.length === 0) {
      getBingos();
    }
    if (!Dday1 && !Dday2) {
      getDdays();
    }
  }, []);

  return (
    <LeftDom>
      <Line>
        <StyledDday1>{Dday1}</StyledDday1>
        <StyledDday2>{Dday2}</StyledDday2>
      </Line>
      <>{startDate}~{endDate}</>
      <h2>{username}의 빙고판</h2>
      <div style={{ color: 'grey' }}>
      </div>
      <BingoDom>
        {Array.isArray(bingos) && bingos.map((item, index) => (
          <Bingo
            key={index}
            inBingo={item.title !== ''}
            isExecuted={item.is_executed === 1}
            onClick={() => clickBingo(index)}
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
  'data-isexecuted': props.isExecuted,
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
border-radius: 10px;
opacity: var(--sds-size-stroke-border);
color: white;
text-align: center;
cursor: pointer;
outline: none;
transition: box-shadow 0.3s ease-in-out;
background :${({ isExecuted }) => (isExecuted ? 'blue' : 'linear-gradient(178.58deg, #FFFFFF -94.22%, #A3A3A3 151.7%)')};
box-shadow: ${({ inBingo }) => (inBingo ? '2px 2px 4px 0px #D9D9D9 inset, -4px -4px 5px 0px rgba(81, 81, 81, 0.25) inset' : '0px -2px 6px 0px rgba(0, 0, 0, 0.25) inset, 4px 4px 10px 0px rgba(0, 0, 0, 0.25) inset')};
`;