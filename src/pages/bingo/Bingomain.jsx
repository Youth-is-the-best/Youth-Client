import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { MdOutlineEditCalendar } from 'react-icons/md';
import { bingoState, usernameState, startDateState, endDateState,titleState } from '../../recoil/atoms';

const Bingomain = () => {
  const bingos = useRecoilValue(bingoState);
  const username = useRecoilValue(usernameState);
  const startDate = useRecoilValue(startDateState);
  const endDate = useRecoilValue(endDateState);
  const title = useRecoilValue(titleState);

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

  return (
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
          >
            {title}
          </Bingo>
        ))}
      </BingoDom>
      <Button style={{ marginLeft: '473px', marginTop: '4px' }}>완료</Button>
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
