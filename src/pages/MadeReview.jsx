import React, { useState } from 'react';
import { Row, Line} from './bingo/MadeBingo';
import styled from 'styled-components';
import { AiOutlineCheckSquare } from 'react-icons/ai';
import HeaderHook from '../hook/HeaderHook';
import { MdOutlineEditCalendar } from 'react-icons/md';

const MadeReview = () => {
  const categorys = ["채용(인턴)", "자격증", "대외활동", "공모전", "취미", "여행", "자기계발", "휴식"];
  const subcategories = {
    "채용(인턴)": ["직무", "채용형태", "근무 지역", "지원 마감","채용 절차","준비 과정/소감"],
    "자격증": ["주최사", "응시료", "시험 날짜", "준비 기간","시험 절차","준비 과정/공부 팁/소감"],
    "대외활동": ["활동 분야", "활동 지역", "활동 기간", "지원 마감","모집 절차","준비 과정/합겹 팁/활동 내용/소감"],
    "공모전": ["주최 기관", "공모 분야", "마감일", "준비 기간","준비 내용/수상 팁/소감"],
    "취미": ["분야", "파트너", "기간","소감"],
    "여행": ["장소", "파트너", "기간","소감"],
    "자기계발": ["분야", "파트너", "기간","소감"],
    "휴식": ["장소", "기간","소감"]
  };

  const inputConfigs = {
    "채용(인턴)": [
      { placeholder: "직무", type: "select", options: ["영업/고객상담", "경영/사무/회계", "마케팅/광고/홍보", "생산/제조", "연구개발/설계", "IT", "서비스", "무역/유통", "의료", "건설", "교육", "디자인", "전문/특수", "미디어", "기타"] },
      { placeholder: "채용형태", type: "select", options: ["신입", "경력", "계약직", "인턴", "아르바이트"] },
      { placeholder: "근무 지역", type: "select", options: ["서울", "경기(인천, 세종)", "강원", "충청(대전)", "전라(광주)", "경상(대구, 울산, 부산)", "제주", "비대면"] },
      { placeholder: "지원 마감", type: "date" },
      { placeholder: "채용 절차" },
      { placeholder: "준비 과정/소감" }
    ],
    "자격증": [
      { placeholder: "주최사" },
      { placeholder: "응시료" },
      { placeholder: "시험 날짜", type: "date" },
      { placeholder: "준비 기간", type: "date-range" },
      { placeholder: "시험 절차" },
      { placeholder: "준비 과정/공부 팁/소감" }
    ],
    "대외활동": [
      { placeholder: "활동 분야", type: "select", options: ["봉사", "기자단", "홍보단(서포터즈)", "강연", "멘토링", "모임(동아리)", "해외탐방", "기타"] },
      { placeholder: "활동 지역", type: "select", options: ["서울", "경기(인천, 세종)", "강원", "충청(대전)", "전라(광주)", "경상(대구, 울산, 부산)", "제주", "비대면"] },
      { placeholder: "지원 마감", type: "date" },
      { placeholder: "활동 기간", type: "date-range" },
      { placeholder: "모집 절차" },
      { placeholder: "준비 과정/합겹 팁/활동 내용/소감"}
      
    ],
    "공모전": [
      { placeholder: "주최 기관" },
      { placeholder: "공모 분야", type: "select", options: ["기획/아이디어", "광고/마케팅", "사진/영상", "디자인/순수미술", "캐릭터/만화/게임", "공간/건축", "과학/공학", "예체능", "학술", "창업", "기타"] },
      { placeholder: "마감일", type: "date" },
      { placeholder: "준비 기간", type: "date-range" },
      { placeholder: "준비 내용/수상 팁/소감" }
    ],
    "취미": [
      { placeholder: "분야" ,type: "select", options: ["그림 및 공예", "음악", "운동", "레저 및 야외 활동", "요리 및 베이킹", "독서 및 글쓰기", "원예", "기타"]},
      { placeholder: "파트너", type: "select", options:["혼자", "친구와", "가족과", "애인과", "기타"]},
      { placeholder: "기간", type: "date-range" },
      { placeholder: "소감" }
    ],
    "여행": [
      { placeholder: "장소", type: "select", options: ["서울", "경기(인천, 세종)", "강원", "충청(대전)", "전라(광주)", "경상(대구, 울산, 부산)", "제주", "해외"] },
      { placeholder: "파트너", type: "select", options:["혼자", "친구와", "가족과", "애인과", "기타"]},
      { placeholder: "기간", type: "date-range" },
      { placeholder: "소감" }
    ],
    "자기계발": [
      { placeholder: "분야", type: "select", options:["언어", "독서", "자격증", "전문 기술", "재정 관리", "건강 관리", "네트워킹", "기타"] },
      { placeholder: "파트너", type: "select", options:["혼자", "친구와", "가족과", "애인과", "기타"]},
      { placeholder: "기간", type: "date-range" }, 
      { placeholder: "소감" }
    ],
    "휴식": [
      { placeholder: "장소", type: "select", options: ["서울", "경기(인천, 세종)", "강원", "충청(대전)", "전라(광주)", "경상(대구, 울산, 부산)", "제주", "해외"] },
      { placeholder: "기간", type: "date-range" }, 
      { placeholder: "소감" }
    ]
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const [selectedCategory, setSelectedCategory] = useState(categorys[0]);
  const [title, setTitle] = useState('');

  return (
    <>
    <HeaderHook></HeaderHook>
    <Body style={{padding:'80px'}}>
      <Row style={{marginBottom:'60px'}}>
        <div>후기/Review</div>
        <div style={{fontSize:'16px', color:'rgba(163, 163, 163, 1)'}}>휴학 전에 했던 활동 기록, 빙고판에 넣지 않았던  기타 에피소드를 남겨주세요</div>
      </Row>
          <Line style={{gap : '80px'}}>
            <Row>
              <div>제목</div>
              <div>분류</div>
              {subcategories[selectedCategory].map((item, index) => (
              <div key={index}>{item}</div>))}
              <div>체크리스트</div>
            </Row>
            <Row>
              <Row>
              <InputBox  placeholder ={"제목을 입력하세요"} />
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
                    <DateInfo key={index}>날짜를 선택하세요<MdOutlineEditCalendar /></DateInfo>
                  );
                } else if (config.type === 'date-range') {
                  return (
                    <DateInfo key={index}>기간을 선택하세요<MdOutlineEditCalendar /></DateInfo>
                  );
                } else if (config.type === 'select') {
                  return (
                    <Selector key={index}>
                      {config.options.map((option, idx) => (
                        <option key={idx} value={option}>{option}</option>
                      ))}
                    </Selector>
                  );
                } else {
                  return (
                    <InputBox
                      key={index}
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder={config.placeholder}/>
                  );
                }
              })}
            </Row>
                <CheckList>
                    <Line>
                    <AiOutlineCheckSquare size={20}/>
                    <div>매일 단어 500개 외우기</div>
                    </Line>
                    <Line>
                    <AiOutlineCheckSquare size={20}/>
                    <div>매일 단어 500개 외우기</div>
                    </Line>
                    <Line>
                    <AiOutlineCheckSquare size={20}/>
                    <div>매일 단어 500개 외우기</div>
                    </Line>
                    <Line>
                    <AiOutlineCheckSquare size={20}/>
                    <div>매일 단어 500개 외우기</div>
                    </Line>
                </CheckList>
                <style> 
                {` 
                    ::placeholder { 
                        color: rgba(142, 156, 196, 1); 
                    }` 
                } 
                </style>
            </Row>
          </Line>
          <button>업로드</button>
    </Body>
    </>
  )
};

export default MadeReview

const Body = styled.div`
    display : flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color : rgba(30, 58, 138, 1);
    font-size : 24px;
`

const CheckList = styled.div`
  display : flex;
  flex-direction : column;
  width : 460px;
  height : 160px;
  border-radius: 10px;
  border: 0.2px solid rgba(142, 156, 196, 1);
  gap : 10px;
  font-size : 16px;
  padding : 10px;
`
const InputBox = styled.input`
  padding: 5px;
  border-radius: 10px;
  border: 0.2px solid rgba(142, 156, 196, 1);
  font-size :15px;
  width : 260px;
  color : rgba(142, 156, 196, 1);
`
const BigInputBox = styled.input`
  padding: 5px;
  border-radius: 10px;
  border: 0.2px solid rgba(142, 156, 196, 1);
  width : 460px;
  height : 160px;
  // background: rgba(233, 236, 244, 0.4);
  color : rgba(142, 156, 196, 1);
`

const Selector = styled.select`
  border: 0.2px solid rgba(142, 156, 196, 1);
  font-size :15px;
  padding: 5px;
  border-radius: 10px;
  width : 260px;
  color: rgba(142, 156, 196, 1);
`

const DateInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size :15px;
  height: 20px;
  width : 260px;
  padding: 5px;
  border-radius: 10px;
  border: 0.2px solid rgba(142, 156, 196, 1);
  color : rgba(142, 156, 196, 1);
  border-radius: 10px;
  // padding: 8px;
  gap: 5px;
`;