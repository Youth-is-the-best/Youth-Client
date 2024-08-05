import React, { useEffect, useState } from 'react';
import { MdOutlineKeyboardBackspace, MdOutlineNearMe } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Body } from '../Home';
import HeaderHook from '../../hook/HeaderHook';
import { getBingoloc, postTodolist } from '../../apis/testapis';
import { Category, CheckLists, CheckList, CheckBox, InputBox } from './MadeBingo';
import { AiOutlineCheckSquare } from 'react-icons/ai';
import Bingomain from './Bingomain';
import { FiEdit3 } from 'react-icons/fi';

const MadedBingo = () => {
  const navigate = useNavigate();
  const { location } = useParams();
  const [checklists, setChecklists] = useState([]);
  const [newChecklistText, setNewChecklistText] = useState('');
  const [info, setInfo] = useState(null);

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
      setInfo(info);
      setChecklists(todos);
    } catch (error) {
      console.error('Error in getInfos:', error.response ? error.response.data : error.message);
      throw error;
    }
  };

  useEffect(() => {
    if (location) {
      getInfos(location);
    }
  }, [location]);

  const toggleCheck = (id) => {
    const updatedChecklists = checklists.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setChecklists(updatedChecklists);
    const isChecked = updatedChecklists.find(item => item.id === id)?.checked;
    const postmessage = {
      "is_completed": isChecked
    };
    postTodolists(id, postmessage);
    // console.log(postmessage);
  };

  const postTodolists = async (id, postmessage) => {
    try {
      const response = await postTodolist(id, postmessage);
      // console.log(response);
    } catch (error) {
      console.error('Error in postTodolists:', error.response ? error.response.data : error.message);
      throw error;
    }
  };

  const doEdit = () => {
    navigate(`/madededit/${location}`);
  }

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
            <Category style={{ background: 'rgba(30, 58, 138, 1)', color: 'white' }}>
              {info ? info.large_category_display : 'Loading...'}
            </Category>
          </Line>
          {info && info.host && (
            <Line>
              <Category>주최사</Category>
              <div>{info.host}</div>
            </Line>
          )}
          {info && info.field && (
            <Line>
              <Category>활동 분야</Category>
              <div>{info.field}</div>
            </Line>
          )}
          {info && info.app_fee && (
            <Line>
              <Category>응시료</Category>
              <div>{info.app_fee}원</div>
            </Line>
          )}
          {info && info.duty && (
            <Line>
              <Category>직무</Category>
              <div>{info.duty}</div>
            </Line>
          )}
          {info && info.employment_form && (
            <Line>
              <Category>채용 형태</Category>
              <div>{info.employment_form}</div>
            </Line>
          )}
          {info && info.area && (
            <Line>
              <Category>활동 지역</Category>
              <div>{info.area}</div>
            </Line>
          )}
          {info && info.app_due && (
            <Line>
              <Category>지원 마감</Category>
              <div>{info.app_due}</div>
            </Line>
          )}
          {info && info.prep_period && (
            <Line>
              <Category>준비 기간</Category>
              <div>{info.prep_period}</div>
            </Line>
          )}
          {info && info.start_date && (
            <Line>
              <Category>활동 기간</Category>
              <div>{info.start_date} ~ {info.end_date}</div>
            </Line>
          )}
          <FiEdit3 onClick={doEdit}/>
          <TitleLine>
            <div> | 세부계획 </div>
          </TitleLine>
          <CheckLists>
            {checklists.map((item, index) => (
              <CheckList key={index} checked={item.checked}>
                {item.checked ? (
                  <AiOutlineCheckSquare size={20} onClick={() => toggleCheck(item.id)} />
                ) : (
                  <CheckBox onClick={() => toggleCheck(item.id)} />
                )}
                <span>{item.text}</span>
              </CheckList>
            ))}
            <Line></Line>
          </CheckLists>
          <DateInfo style={{ width: '30%', marginLeft: '67%' }}>목표 달성 기록 남기기</DateInfo>
        </RightDom>
      </Body>
    </>
  );
};

export default MadedBingo;

export const RightDom = styled.div`
  display: flex;
  flex-direction: column;
  width: 550px;
  height: 630px;
  background: rgba(246, 247, 251, 1);
  border-radius: 20px;
  border: 0.4px solid rgba(30, 58, 138, 1);
  box-shadow: 0px 4px 4px 0px rgba(30, 58, 138, 0.25);
  gap: 15px;
  padding: 20px;
  overflow-y: auto;
`;

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
  background: rgba(30, 58, 138, 0.1);
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
