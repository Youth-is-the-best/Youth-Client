import React, { useState } from 'react';
import { MdOutlineEditCalendar } from 'react-icons/md';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import mypage from '../images/mypage.png';
import { AiOutlineCheckSquare } from 'react-icons/ai';
import { CiSquarePlus } from 'react-icons/ci';
import { RightDom } from './Home';

const MadeBingo = () => {
  const [checklists, setChecklists] = useState([]);
  const [newChecklistText, setNewChecklistText] = useState('');
  const [title, setTitle] = useState('');

  const categorys = ["채용(인턴)", "자격증", "대외활동", "공모전", "취미", "여행", "자기계발", "휴식"];
  const subcategories = {
    "채용(인턴)": ["직무", "채용형태", "근무 지역", "지원 마감"],
    "자격증": ["주최사", "응시료", "시험 날짜", "준비 기간"],
    "대외활동": ["활동 분야", "활동 지역", "활동 기간", "지원 마감"],
    "공모전": ["주최 기관", "공모 분야", "마감일", "준비 기간"],
    "취미": ["분야", "파트너", "기간"],
    "여행": ["장소", "파트너", "기간"],
    "자기계발": ["분야", "파트너", "기간"],
    "휴식": ["장소", "기간"]
  };

  const inputConfigs = {
    "채용(인턴)": [
      { placeholder: "직무", type: "select", options: ["영업/고객상담", "경영/사무/회계", "마케팅/광고/홍보", "생산/제조", "연구개발/설계", "IT", "서비스", "무역/유통", "의료", "건설", "교육", "디자인", "전문/특수", "미디어", "기타"] },
      { placeholder: "채용형태", type: "select", options: ["신입", "경력", "계약직", "인턴", "아르바이트"] },
      { placeholder: "근무 지역", type: "select", options: ["서울", "경기(인천, 세종)", "강원", "충청(대전)", "전라(광주)", "경상(대구, 울산, 부산)", "제주", "비대면"] },
      { placeholder: "지원 마감", type: "date" }
    ],
    "자격증": [
      { placeholder: "주최사" },
      { placeholder: "응시료" },
      { placeholder: "시험 날짜", type: "date" },
      { placeholder: "준비 기간", type: "date-range" }
    ],
    "대외활동": [
      { placeholder: "활동 분야", type: "select", options: ["봉사", "기자단", "홍보단(서포터즈)", "강연", "멘토링", "모임(동아리)", "해외탐방", "기타"] },
      { placeholder: "활동 지역", type: "select", options: ["서울", "경기(인천, 세종)", "강원", "충청(대전)", "전라(광주)", "경상(대구, 울산, 부산)", "제주", "비대면"] },
      { placeholder: "지원 마감", type: "date" },
      { placeholder: "활동 기간", type: "date-range" }
      
    ],
    "공모전": [
      { placeholder: "주최 기관" },
      { placeholder: "공모 분야", type: "select", options: ["기획/아이디어", "광고/마케팅", "사진/영상", "디자인/순수미술", "캐릭터/만화/게임", "공간/건축", "과학/공학", "예체능", "학술", "창업", "기타"] },
      { placeholder: "마감일", type: "date" },
      { placeholder: "준비 기간", type: "date-range" }
    ],
    "취미": [
      { placeholder: "분야" ,type: "select", options: ["그림 및 공예", "음악", "운동", "레저 및 야외 활동", "요리 및 베이킹", "독서 및 글쓰기", "원예", "기타"]},
      { placeholder: "파트너", type: "select", options:["혼자", "친구와", "가족과", "애인과", "기타"]},
      { placeholder: "기간", type: "date-range" }
    ],
    "여행": [
      { placeholder: "장소", type: "select", options: ["서울", "경기(인천, 세종)", "강원", "충청(대전)", "전라(광주)", "경상(대구, 울산, 부산)", "제주", "해외"] },
      { placeholder: "파트너", type: "select", options:["혼자", "친구와", "가족과", "애인과", "기타"]},
      { placeholder: "기간", type: "date-range" }
    ],
    "자기계발": [
      { placeholder: "분야", type: "select", options:["언어", "독서", "자격증", "전문 기술", "재정 관리", "건강 관리", "네트워킹", "기타"] },
      { placeholder: "파트너", type: "select", options:["혼자", "친구와", "가족과", "애인과", "기타"]},
      { placeholder: "기간", type: "date-range" }
    ],
    "휴식": [
      { placeholder: "장소", type: "select", options: ["서울", "경기(인천, 세종)", "강원", "충청(대전)", "전라(광주)", "경상(대구, 울산, 부산)", "제주", "해외"] },
      { placeholder: "기간", type: "date-range" }
    ]
};

  const [selectedCategory, setSelectedCategory] = useState(categorys[0]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const madeCheckList = () => {
    if (newChecklistText.trim() === '') return;
    const newChecklist = { id: checklists.length + 1, text: newChecklistText, checked: false };
    setChecklists([...checklists, newChecklist]);
    setNewChecklistText('');
    // 여기에 백엔드 연결
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
          <Line style={{gap : '60px'}}>
            <Row>
              <Category>분류</Category>
              {subcategories[selectedCategory].map((item, index) => (
              <Category key={index}>{item}</Category>))}
            </Row>
            <Row >
              <Selector value={selectedCategory} onChange={handleCategoryChange}>
                {categorys.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </Selector>
              {inputConfigs[selectedCategory].map((config, index) => {
                if (config.type === 'date') {
                  return (
                    <DateInfo key={index}>2024.09.09<MdOutlineEditCalendar /></DateInfo>
                  );
                } else if (config.type === 'date-range') {
                  return (
                    <DateInfo key={index}>2024.09.09 ~ 2024.10.24<MdOutlineEditCalendar /></DateInfo>
                  );
                } else if (config.type === 'select') {
                  return (
                    <SelectorCategory key={index}>
                      {config.options.map((option, idx) => (
                        <option key={idx} value={option}>{option}</option>
                      ))}
                    </SelectorCategory>
                  );
                } else {
                  return (
                    <InputInfoBox
                      key={index}
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder={config.placeholder}/>
                  );
                }
              })}
            </Row>
          </Line>
          <TitleLine>
            <div> | 세부계획 </div>
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
  // justify-content: center;
  justify-content: space-between;
  align-items: center;
  height: 20px;
  width : 210px;
  color: rgba(30, 58, 138, 0.6);
  background: rgba(30, 58, 138, 0.1);
  border-radius: 10px;
  padding: 8px;
  gap: 5px;
`;
export const Line = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 15px;
  margin-left: 10px;
`;
export const Row = styled.div`
  display : flex;
  flex-direction : column;
  flex-wrap : wrap;
  align-items: start;
  gap : 20px;
`
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
  gap: 10px;
  background: white;
  border-radius: 10px;
  padding: 10px;
`;

const CheckList = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color : ${(props) => (props.checked ? 'rgba(30, 58, 138, 0.5)' : 'rgba(30, 58, 138, 1)')};
  text-decoration: ${(props) => (props.checked ? 'line-through' : 'none')};
`;

export const CheckBox = styled.div`
  width: 14px;
  height: 14px;
  border: 1.2px solid rgba(30, 58, 138, 1);
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
  border-radius: 10px;
  border: 0.2px solid rgba(30, 58, 138, 1);
  width: 80%;
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
  height : 20px;
  color : rgba(30, 58, 138, 1);
  background : rgba(246, 247, 251, 1);
  ::placeholder {
    color: rgba(30, 58, 138, 0.5);
    font-size: 20px;
  }
  margin-top : 12px;
`
const SelectorCategory = styled.select`
  font-size :15px;
  padding: 8px;
  border-radius: 10px;
  width : 225px;
  border: none;
  background: rgba(30, 58, 138, 0.1); 
  color: rgba(30, 58, 138, 1);
`