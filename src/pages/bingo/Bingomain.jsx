import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { bingoState, usernameState, startDateState, endDateState, titleState, Day1State, Day2State, bingoObjectState } from '../../recoil/atoms';
import { getBingo, getDday } from '../../apis/testapis';
import { StyledDday1, StyledDday2,Bingo } from '../Home';
import { Line } from './MadeBingo';

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
      is_executed: response.bingo_obj.find((item) => item.location === index)?.is_executed || false,
    }));
    setUsername(username);
    setStartDate(start_date);
    setEndDate(end_date);
    setBingos(bingos);
    setTitle(bingos.map((item) => item.title));
    console.log(response);
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
            isExecuted={item.is_executed == 1}
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

// const Bingo = styled.div.attrs((props) => ({
//   'data-inbingo': props.inBingo,
//   'data-isexecuted': props.isExecuted,
// }))