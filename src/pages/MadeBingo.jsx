import React, { useState } from 'react';
import { MdOutlineEditCalendar, MdOutlineKeyboardBackspace } from 'react-icons/md';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import mypage from '../images/mypage.png';
import { AiOutlineCheckSquare } from 'react-icons/ai';
import { CiSquarePlus } from 'react-icons/ci';
import { RightDom } from './Home';

const MadeBingo = () => {
  const [checklists, setChecklists] = useState([
    { id: 1, text: '세부 계획을 입력해주세요', checked: false },
    { id: 2, text: '세부 계획을 입력해주세요', checked: false },
    { id: 3, text: '세부 계획을 입력해주세요', checked: false },
  ]);
  const [newChecklistText, setNewChecklistText] = useState('');
  const [title, setTitle] = useState('');
  // const [value, onChange] = useState(new Date());
  const categorys = ["채용(인턴)", "자격증", "대외활동", "공모전", "취미", "여행", "자기계발", "휴식"];

  const [array, setArray] = useState(categorys[0]);
  const handleArrayChange = (event) => {
    setArray(event.target.value);
  }
  
  const madeCheckList = () => {
    if (newChecklistText.trim() === '') return;
    const newChecklist = { id: checklists.length + 1, text: newChecklistText, checked: false };
    setChecklists([...checklists, newChecklist]);
    setNewChecklistText('');
    //여기에 백엔드 연결
  };

  const toggleCheck = (id) => {
    const updatedChecklists = checklists.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setChecklists(updatedChecklists);
  };

  return (
    <>
      <Headers>
        <Header to="/test/0">휴학 유형 테스트</Header>
        <Header to="/">투두 리스트 빙고</Header>
        <Header to="/info">공고/후기</Header>
        <Header to="/login">나의 포트폴리오</Header>
        <img src={mypage} style={{ height: '60px' }} alt="mypage" />
      </Headers>
      <Body>
        <LeftDom>
          <h2>열정가득 곰도리의 빙고판</h2>
          <div style={{ color: 'grey' }}>2024.01.05 ~ 2024.01.10 <MdOutlineEditCalendar /></div>
          <BingoDom>
            <Bingo></Bingo>
            <Bingo style={{ background: 'rgba(30, 58, 138, 0.15)' }}></Bingo>
            <CompleteBingo><h2>토익 백점</h2></CompleteBingo>
            <Bingo style={{ background: 'rgba(30, 58, 138, 0.25)' }}></Bingo>
            <Bingo style={{ background: 'rgba(30, 58, 138, 0.3)' }}></Bingo>
            <Bingo style={{ background: 'rgba(30, 58, 138, 0.35)' }}></Bingo>
            <Bingo style={{ background: 'rgba(30, 58, 138, 0.4)' }}></Bingo>
            <Bingo style={{ background: 'rgba(30, 58, 138, 0.45)' }}></Bingo>
            <Bingo style={{ background: 'rgba(30, 58, 138, 0.5)' }}></Bingo>
          </BingoDom>
          <Button>완료</Button>
        </LeftDom>
        <RightDom>
          <Line>
            <InputTitleBox
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목을 입력하세요"/>
          </Line>
          <Line>
            <Category>분류</Category>
            <Selector value={array} onChange={handleArrayChange}>
              {categorys.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))};
            </Selector>
          </Line>
          <Line>
            <Category>주최사</Category>
            <InputInfoBox
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="주최사"/>
          </Line>
          <Line>
            <Category>응시료</Category>
            <InputInfoBox
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="응시료"/>
          </Line>
          <Line>
            <Category>시험 날짜</Category>
            <DateInfo>2024.09.09<MdOutlineEditCalendar /></DateInfo>
          </Line>
          <Line>
            <Category>준비 기간</Category>
            <DateInfo>2024.09.09 ~ 2024.10.24<MdOutlineEditCalendar /></DateInfo>
          </Line>
          <TitleLine>
            <div> | 세부계획 </div>
            <InputBox
              type="text"
              value={newChecklistText}
              onChange={(e) => setNewChecklistText(e.target.value)}
              placeholder="세부 계획을 입력하세요"
            />
            <CiSquarePlus size={30} onClick={madeCheckList} />
          </TitleLine>
          <CheckLists>
            {checklists.map((item) => (
              <CheckList key={item.id} checked={item.checked}>
                {item.checked ? (
                  <AiOutlineCheckSquare size={20} onClick={() => toggleCheck(item.id)} />
                ) : (
                  <CheckBox onClick={() => toggleCheck(item.id)} />
                )}
                <span>{item.text}</span>
              </CheckList>
            ))}
          </CheckLists>
          <DateInfo style={{ width: '200px', marginLeft: '334px' }}>목표 달성 기록 남기기</DateInfo>
        </RightDom>
      </Body>
    </>
  );
};

export default MadeBingo;

const Headers = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  padding-right: 3rem;
  gap: 20px;
  height: 64px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.08);
  font-size: 20px;
`;
const Header = styled(Link)`
  color: rgba(30, 58, 138, 1);
  text-decoration: none;
`;
const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  color: #1E3A8A;
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
  width: 510px;
  height: 500px;
`;

const Bingo = styled.div`
  width: 150px;
  height: 150px;
  background: rgba(30, 58, 138, 0.1);
  border-radius: 10px;
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

const Category = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  border: 1px solid rgba(30, 58, 138, 0.5);
  background: white;
  border-radius: 10px;
  padding: 7px;
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
  margin-bottom: 15px;
  margin-left: 10px;
`;

const TitleLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
  margin-bottom: 15px;
  margin-left: 10px;
`;

const CheckLists = styled.div`
  display: flex;
  flex-direction: column;
  height : 120px;
  gap: 10px;
  background: white;
  border-radius: 10px;
  padding: 10px;
  overflow-y: auto;
`;

const CheckList = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: ${(props) => (props.checked ? 'line-through' : 'none')};
`;

const CheckBox = styled.div`
  width: 14px;
  height: 14px;
  border: 1.2px solid rgba(142, 156, 196, 1);
  margin : 2px;
`;

const CompleteBingo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  background: white;
  border: 3px solid rgba(30, 58, 138, 0.9);
  border-radius: 10px;
  box-shadow: 2px 2px 4px 0px rgba(30, 58, 138, 0.4);
`;

const InputBox = styled.input`
  padding: 5px;
  border-radius: 5px;
  border: 1px solid rgba(30, 58, 138, 0.5);
  width: 60%;
`;

const InputTitleBox = styled.input`
 border : none;
 background : rgba(246, 247, 251, 1);
 font-size : 24px;
 color: rgba(30, 58, 138, 1);
  width : 100%
`
const Selector = styled.select`
  font-size :15px;
  padding: 10px;
  border-radius: 10px;
  width : 110px;
  border: none;
  background: rgba(30, 58, 138, 1); 
  color: white;
`

const InputInfoBox = styled.input`
  border : none;
  font-size : 20px;
  color : rgba(30, 58, 138, 1);
  background : rgba(246, 247, 251, 1);
`