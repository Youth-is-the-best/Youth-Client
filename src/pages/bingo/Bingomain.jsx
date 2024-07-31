import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getBingo } from '../../apis/testapis';
import { MdOutlineEditCalendar } from 'react-icons/md';

const Bingomain = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [bingos, setBingos] = useState(Array.from({ length: 9 }, (_, index) => ({ location: index, title: '' })));

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
  }

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
  

  useEffect(() => {
    // getBingos();
  }, []);

  return (
    <LeftDom>
        <h2>{username}의 빙고판</h2>
        <div style={{ color: 'grey' }}>{startDate} ~ {endDate} <MdOutlineEditCalendar/></div>
        <BingoDom>
        {bingos.map((bingo, index) => (
          <Bingo
            key={index}
            inBingo={bingo.title !== ''}
            style={{ background: getBackgroundColor(bingo.title !== '', index) }}
          >
            {bingo.title || ''}
          </Bingo>
        ))}
        </BingoDom>
        <Button style={{marginLeft:'473px', marginTop:'4px'}}>완료</Button>
    </LeftDom>
  )
}

export default Bingomain;

export const Body = styled.div`
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
  // margin-right : 30px;
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
  // gap: 10px;
  border-radius: 10px;
  background: rgba(30, 58, 138, 1);
  color : white;
`;