import React, { useEffect, useState } from 'react';
import { MdOutlineKeyboardBackspace, MdOutlineNearMe } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Bingo, Body } from '../Home';
import HeaderHook from '../../hook/HeaderHook';
import { getBingoloc, getInfo } from '../../apis/testapis';
import { Category, CheckLists, CheckList, InputBox } from './MadeBingo';
import { RightDom } from './BingoInfo';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { CiSquarePlus } from 'react-icons/ci';
import Bingomain from './Bingomain';
import { useRecoilState } from 'recoil';
import { bingoState, bingoObjectState } from '../../recoil/atoms';

const MadedBingoEdit = () => {
  const navigate = useNavigate();
  const [checklists, setChecklists] = useState([]);
  const [newChecklistText, setNewChecklistText] = useState('');
  const { id, location } = useParams();
  const [info, setInfo] = useState(null);
  const [bingos, setBingos] = useRecoilState(bingoState);
  const [bingoObject, setBingoObject] = useRecoilState(bingoObjectState);

  const goHome = () => {
    navigate("/view");
  };

  const getInfos = async (location) => {
    try {
      const response = await getBingoloc(location);
      const info = {
        large_category_display: response.bingo_item.large_category_display,
        title: response.bingo_item.title,
        app_fee: response.bingo_item.app_fee,
        app_due: response.bingo_item.app_due,
        start_date: response.bingo_item.start_date,
        end_date: response.bingo_item.end_date,
        host: response.bingo_item.host,
        prep_period: response.bingo_item.prep_period,
        area: response.bingo_item.area,
        employment_form: response.bingo_item.employment_form,
        field: response.bingo_item.field,
        duty: response.bingo_item.duty,
      };
      const todos = response.todo.map(todo => ({
        id: todo.id,
        text: todo.title,
        checked: todo.is_completed
      }));
      console.log('Fetched info:', info);
      console.log('Fetched todos:', todos);
      setInfo(info);
      setChecklists(todos);
    } catch (error) {
      console.error('Error in getInfos:', error.response ? error.response.data : error.message);
      throw error;
    }
  };

  const madeCheckList = () => {
    if (newChecklistText.trim() === '') return;
    const newChecklist = { id: checklists.length + 1, text: newChecklistText, checked: false };
    setChecklists([...checklists, newChecklist]);
    setNewChecklistText('');
  };

  const deleteCheckList = (id) => {
    const updatedChecklists = checklists.filter(item => item.id !== id);
    setChecklists(updatedChecklists);
  };

  const updateBingo = () => {
    if (!info) return;

    const locationIndex = parseInt(location, 10);
    const updatedBingoObj = JSON.parse(JSON.stringify(bingoObject.bingo_obj));

    updatedBingoObj[locationIndex] = {
      ...updatedBingoObj[locationIndex],
      todo: checklists.map(item => ({ title: item.text })),
      title: info.title,
      choice: 1,
    };

    setBingoObject(prevState => ({
      ...prevState,
      bingo_obj: updatedBingoObj,
    }));

    setBingos(prevState => {
      const updatedBingos = [...prevState];
      updatedBingos[locationIndex] = { location: locationIndex, title: info.title };
      return updatedBingos;
    });

    navigate('/bingo');
  };
  
  useEffect(() => {
    if (id) {
      getInfos(id);
    }
  }, [id, location]);

  return (
    <>
      <HeaderHook />
      <Body>
        <Bingomain />
        <RightDom>
          <TitleLine>
            <MdOutlineKeyboardBackspace onClick={goHome} size={30} />
            <DateInfo>더 많은 정보 보러가기<MdOutlineNearMe size={20} /></DateInfo>
          </TitleLine>
          <TitleLine>
            <h1>{info ? info.title : 'Loading...'}</h1>
          </TitleLine>
          <Line>
            <Category>분류</Category>
            <StyledDiv>
              {info ? info.large_category_display : 'Loading...'}
            </StyledDiv>
          </Line>
          {info && info.host ? (
            <Line>
              <Category>주최사</Category>
              <StyledDiv>{info.host}</StyledDiv>
            </Line>
          ) : null}
          {info && info.field ? (
            <Line>
              <Category>활동 분야</Category>
              <StyledDiv>{info.field}</StyledDiv>
            </Line>
          ) : null}
          {info && info.app_fee ? (
            <Line>
              <Category>응시료</Category>
              <StyledDiv>{info.app_fee}원</StyledDiv>
            </Line>
          ) : null}
          {info && info.duty ? (
            <Line>
              <Category>직무</Category>
              <StyledDiv>{info.duty}</StyledDiv>
            </Line>
          ) : null}
          {info && info.employment_form ? (
            <Line>
              <Category>채용 형태</Category>
              <StyledDiv>{info.employment_form}</StyledDiv>
            </Line>
          ) : null}
          {info && info.area ? (
            <Line>
              <Category>활동 지역</Category>
              <StyledDiv>{info.area}</StyledDiv>
            </Line>
          ) : null}
          {info && info.app_due ? (
            <Line>
              <Category>지원 마감</Category>
              <StyledDiv>{info.app_due}</StyledDiv>
            </Line>
          ) : null}
          {info && info.prep_period ? (
            <Line>
              <Category>준비 기간</Category>
              <StyledDiv>{info.prep_period}</StyledDiv>
            </Line>
          ) : null}
          {info && info.start_date ? (
            <Line>
              <Category>활동 기간</Category>
              <StyledDiv>{info.start_date} ~ {info.end_date}</StyledDiv>
            </Line>
          ) : null}
          <TitleLine>
            <div> | 세부계획 </div>
          </TitleLine>
          <CheckLists>
            {checklists.map((item) => (
              <CheckList key={item.id} style={{ color: 'rgba(116, 116, 116, 1)' }}>
                <AiOutlineMinusCircle size={20} onClick={() => deleteCheckList(item.id)} />
                <span>{item.text}</span>
              </CheckList>
            ))}
            <Line>
              <InputBox
                type="text"
                value={newChecklistText}
                onChange={(e) => setNewChecklistText(e.target.value)}
                placeholder="세부 계획을 입력하세요"
              />
              <CiSquarePlus size={30} onClick={madeCheckList} />
            </Line>
          </CheckLists>
          <DateInfo style={{ width: '15%', marginLeft: '82%' }} onClick={updateBingo}>저장</DateInfo>
        </RightDom>
      </Body>
    </>
  );
};

export default MadedBingoEdit;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 20px;
  padding: 10px;
  gap: 10px;
  border-radius: 10px;
  background: rgba(30, 58, 138, 1);
  color: white;
`;

const DateInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  color: rgba(30, 58, 138, 0.6);
  background: rgba(142, 156, 196, 1);
  color: white;
  border-radius: 10px;
  padding: 8px;
  gap: 5px;
`;

const Line = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
  margin-left: 10px;
  color: rgba(142, 156, 196, 1);
`;

const TitleLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
  margin-left: 10px;
  position: sticky;
  top: 0;
  background: rgba(246, 247, 251, 1);
  z-index: 1;
`;

export const ReviewDom = styled.div`
  display: flex;
  flex-direction: row;
  width: 530px;
  border-radius: 10px;
  gap: 10px;
  padding: 10px;
`;

export const Review = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: 200px;
  height: 200px;
  gap: 5px;
  border: 1px solid rgba(30, 58, 138, 0.5);
  border-radius: 10px;
`;

const StyledDiv = styled.div`
  border: 0.4px solid rgba(142, 156, 196, 1);
  border-radius: 10px;
  padding: 7px;
`;
