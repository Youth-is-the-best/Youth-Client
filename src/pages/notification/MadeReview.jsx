import React, { useState } from 'react';
import styled from 'styled-components';
import { Row, Line} from '../bingo/MadeBingo';
import HeaderHook from '../../hook/HeaderHook';
import FooterHook from '../../hook/FooterHook';
import CustomCalendar from '../bingo/CustomCalendar';
import { CiSquarePlus } from 'react-icons/ci';
import { postMyReview } from '../../apis/reviewapis';
import { prepDateState } from '../../recoil/atoms';
import { FiCheck } from 'react-icons/fi';

const MadeReview = () => {
  const categorys = ["채용(인턴)", "자격증", "대외활동", "공모전", "취미", "여행", "자기계발", "휴식"];
  // const subcategories = {
  //   "채용(인턴)": ["직무", "채용형태", "근무 지역", "지원 마감","채용 절차","준비 과정/소감"],
  //   "자격증": ["주최사", "응시료", "시험 날짜", "준비 기간","시험 절차","준비 과정/공부 팁/소감"],
  //   "대외활동": ["활동 분야", "활동 지역", "활동 기간", "지원 마감","모집 절차","준비 과정/합겹 팁/활동 내용/소감"],
  //   "공모전": ["주최 기관", "공모 분야", "마감일", "준비 기간","준비 내용/수상 팁/소감"],
  //   "취미": ["분야", "파트너", "기간","소감"],
  //   "여행": ["장소", "파트너", "기간","소감"],
  //   "자기계발": ["분야", "파트너", "기간","소감"],
  //   "휴식": ["장소", "기간","소감"]
  // };  
  const categoryMap = {
    "채용(인턴)": "CAREER",
    "자격증": "CERTIFICATE",
    "대외활동": "OUTBOUND",
    "공모전": "CONTEST",
    "취미": "HOBBY",
    "여행": "TRAVEL",
    "자기계발": "SELFIMPROVEMENT",
    "휴식": "REST",
  };

  const inputConfigs = {
    "채용(인턴)": [
      { placeholder: "직무", type: "select", options: ["영업/고객상담", "경영/사무/회계", "마케팅/광고/홍보", "생산/제조", "연구개발/설계", "IT", "서비스", "무역/유통", "의료", "건설", "교육", "디자인", "전문/특수", "미디어", "기타"] },
      { placeholder: "채용형태", type: "select", options: ["신입", "경력", "계약직", "인턴", "아르바이트"] },
      { placeholder: "근무 지역", type: "select", options: ["서울", "경기(인천, 세종)", "강원", "충청(대전)", "전라(광주)", "경상(대구, 울산, 부산)", "제주", "비대면"] },
      { placeholder: "근무 기간", type: "date-range" },
      { placeholder: "채용 절차", type : "procedure-text" },
      { placeholder: "준비 과정/소감", type: "bigtext" }
    ],
    "자격증": [
      { placeholder: "주최사" },
      { placeholder: "응시료" },
      { placeholder: "시험 날짜", type: "date" },
      { placeholder: "준비 기간", type: "date-range" },
      { placeholder: "시험 절차", type : "procedure-text" },
      { placeholder: "준비 과정/공부 팁/소감", type: "bigtext" }
    ],
    "대외활동": [
      { placeholder: "활동 분야", type: "select", options: ["봉사", "기자단", "홍보단(서포터즈)", "강연", "멘토링", "모임(동아리)", "해외탐방", "기타"] },
      { placeholder: "활동 지역", type: "select", options: ["서울", "경기(인천, 세종)", "강원", "충청(대전)", "전라(광주)", "경상(대구, 울산, 부산)", "제주", "비대면"] },
      // { placeholder: "지원 마감", type: "date" },
      { placeholder: "활동 기간", type: "date-range" },
      { placeholder: "모집 절차", type : "procedure-text" },
      { placeholder: "준비 과정/합겹 팁/활동 내용/소감", type: "bigtext"}
      
    ],
    "공모전": [
      { placeholder: "주최 기관" },
      { placeholder: "공모 분야", type: "select", options: ["기획/아이디어", "광고/마케팅", "사진/영상", "디자인/순수미술", "캐릭터/만화/게임", "공간/건축", "과학/공학", "예체능", "학술", "창업", "기타"] },
      { placeholder: "마감일", type: "date" },
      { placeholder: "준비 기간", type: "date-range" },
      { placeholder: "모집 절차", type : "procedure-text" },
      { placeholder: "준비 내용/수상 팁/소감", type: "bigtext" }
    ],
    "취미": [
      { placeholder: "분야" ,type: "select", options: ["그림 및 공예", "음악", "운동", "레저 및 야외 활동", "요리 및 베이킹", "독서 및 글쓰기", "원예", "기타"]},
      { placeholder: "파트너", type: "select", options:["혼자", "친구와", "가족과", "애인과", "기타"]},
      { placeholder: "기간", type: "date-range" },
      { placeholder: "소감", type: "bigtext" }
    ],
    "여행": [
      { placeholder: "장소", type: "select", options: ["서울", "경기(인천, 세종)", "강원", "충청(대전)", "전라(광주)", "경상(대구, 울산, 부산)", "제주", "해외"] },
      { placeholder: "파트너", type: "select", options:["혼자", "친구와", "가족과", "애인과", "기타"]},
      { placeholder: "기간", type: "date-range" },
      { placeholder: "소감", type: "bigtext" }
    ],
    "자기계발": [
      { placeholder: "분야", type: "select", options:["언어", "독서", "자격증", "전문 기술", "재정 관리", "건강 관리", "네트워킹", "기타"] },
      { placeholder: "파트너", type: "select", options:["혼자", "친구와", "가족과", "애인과", "기타"]},
      { placeholder: "기간", type: "date-range" }, 
      { placeholder: "소감", type: "bigtext" }
    ],
    "휴식": [
      { placeholder: "장소", type: "select", options: ["서울", "경기(인천, 세종)", "강원", "충청(대전)", "전라(광주)", "경상(대구, 울산, 부산)", "제주", "해외"] },
      { placeholder: "기간", type: "date-range" }, 
      { placeholder: "소감", type: "bigtext" }
    ]
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const [selectedCategory, setSelectedCategory] = useState(categorys[0]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [procedure, setProcedure] = useState('');
  const [examDates, setExamDates] = useState([null, null]);
  const [prepDates, setPrepDates] = useState([null, null]);
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleExamDateChange = (dates) => {
    setExamDates(dates);
  };

  const handlePrepDateChange = (dates) => {
    setPrepDates(dates);
  };
  
  const handleSelectChange = (placeholder, value) => {
    setSelectedOptions({
      ...selectedOptions,
      [placeholder]: value
    });
  };

  const [checklists, setChecklists] = useState([]);
  const [newChecklistText, setNewChecklistText] = useState('');

  const madeCheckList = () => {
    if (newChecklistText.trim() === '') return;
    const newChecklist = { id: checklists.length + 1, text: newChecklistText, checked: false };
    setChecklists([...checklists, newChecklist]);
    setNewChecklistText('');
  };

  const postReview = async () => {
    if(selectedCategory === "채용(인턴)"){
      const body = {
        "large_category": categoryMap[selectedCategory],
        "title": title,
        "content": content,
        "duty": "직무",
        "employment_form": "채용 형태",
        "area": "제주도",
        "procedure": procedure,
        "start_date": prepDateState[0].toLocaleDateString(),
        "end_date": prepDateState[1].toLocaleDateString(),
        "detailplans": checklists.map((item) => ({ content: item.text })),
      };
    } else if(selectedCategory === "자격증"){
      const body =
        {
          "large_category": categoryMap[selectedCategory],
          "title": title,
          "content": content,
          "host": "상공회의소",
          "date": examDates[0].toLocaleDateString(),
          "procedure": procedure,
          "app_fee": 20000,
          "start_date": prepDateState[0].toLocaleDateString(),
          "end_date": prepDateState[1].toLocaleDateString(),
          "detailplans": [
              {
                  "content": "내가 야간 알바를 하다니"
              },
              {
                  "content": "이 것은 세부 계획"
              }
          ]
      };
    } else if(selectedCategory === "대외활동"){
      const body =
      {
        "large_category": categoryMap[selectedCategory],
        "title": title,
        "content": content,
        "field": "활동 분야",
        "area": "활동 지역",
        "start_date": prepDateState[0].toLocaleDateString(),
        "end_date": prepDateState[1].toLocaleDateString(),
        "procedure": procedure,
        "detailplans": [
            {
                "content": "이 것은 세부 계획"
            },
            {
                "content": "이 것도 세부 계획"
            }
        ]
      };
    } else if(selectedCategory === "공모전"){
      const body =
      {
        "large_category": categoryMap[selectedCategory],
        "title": title,
        "content": content,
        "host": "주최 기관",
        "field": "공모 분야",
        "app_due": examDates[0].toLocaleDateString(),
        "start_date": prepDateState[0].toLocaleDateString(),
        "end_date": prepDateState[1].toLocaleDateString(),
        "procedure": procedure,
        "detailplans": [
            {
                "content": "이 것은 세부 계획"
            },
            {
                "content": "이 것도 세부 계획"
            }
        ]
      };
    } else {
      const body = {
        "large_category": categoryMap[selectedCategory],
        "title": title,
        "content": content,
        "start_date": prepDateState[0].toLocaleDateString(),
        "end_date": prepDateState[1].toLocaleDateString(),
        "detailplans": [
            {
                "content": "동생한테 기타 연주 들려주기"
            },
            {
                "content": "대회 나가기"
            }
        ]
      };
    };
    // try {
    //   const response = await postMyReview(body);
    //   console.log(response);
    // }catch (error) {
    //   console.error('Error in postReview:', error.response ? error.response.data : error.message);
    // }
  };

  return (
    <>
    <HeaderHook></HeaderHook>
    <BigBody>
    <Body style={{padding:'80px'}}>
      <Row style={{marginBottom:'60px'}}>
        <div>후기/Review</div>
        <div style={{fontSize:'16px', color:'rgba(163, 163, 163, 1)'}}>휴학 전에 했던 활동 기록, 빙고판에 넣지 않았던 기타 에피소드를 남겨주세요</div>
      </Row>
        <Line>
          <Category>제목</Category>
          <InputBox
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력하세요"/>
          </Line>
              <Line>
                <Category>분류</Category>
                <Selector value={selectedCategory} onChange={handleCategoryChange}>
                  {categorys.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </Selector>
              </Line>
              {inputConfigs[selectedCategory].map((config, index) => {
                if (config.type === 'date') {
                  return (
                    <Line>
                    <Category key={index}>{config.placeholder}</Category>
                    <DateInfo>
                      {examDates[0] && examDates[1] 
                        ? `${examDates[0].toLocaleDateString()}` : '날짜를 입력하세요.'}
                        <CustomCalendar onChange={handleExamDateChange} value={examDates} />
                    </DateInfo>
                    </Line>
                  );
                } else if (config.type === 'date-range') {
                  return (
                    <Line>
                    <Category key={index}>{config.placeholder}</Category>
                    <DateInfo>
                    {prepDates[0] && prepDates[1] 
                    ? `${prepDates[0].toLocaleDateString()} ~ ${prepDates[1].toLocaleDateString()}` : '기간을 입력하세요.'}
                    <CustomCalendar onChange={handlePrepDateChange} value={prepDates} />
                    </DateInfo>
                    </Line>
                  );
                } else if (config.type === 'select') {
                  return (
                    <Line>
                    <Category key={index}>{config.placeholder}</Category>
                    <Selector key={index}>
                      {config.options.map((option, idx) => (
                        <option key={idx} value={option}>{option}</option>
                      ))}
                    </Selector>
                    </Line>
                  );
                } else if (config.type === 'bigtext'){
                  return(
                  <Line>
                    <Category key={index}>{config.placeholder}</Category>
                    <InputBox
                      key={index}
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder={config.placeholder}
                      style={{height:'200px'}}/>
                  </Line>
                  );
                } else if (config.type === 'procedure-text'){
                  return(
                  <Line>
                    <Category key={index}>{config.placeholder}</Category>
                    <InputBox
                      key={index}
                      type="text"
                      value={procedure}
                      onChange={(e) => setProcedure(e.target.value)}
                      placeholder={config.placeholder}/>
                  </Line>
                  );
              } else {
                  return (
                    <Line>
                    <Category key={index}>{config.placeholder}</Category>
                    <InputBox
                      key={index}
                      type="text"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      placeholder={config.placeholder}/>
                    </Line>
                  );
                }
              })}
              <Line>
                <Category>체크리스트</Category>
                <CheckList>
                  {checklists.map((item) => (
                    <div key={item.id}>
                        <FiCheck size={20}/>
                      <span>{item.text}</span>
                    </div>
                  ))}
                <Line style={{flexDirection: 'row'}}>
                  <InputBox
                    type="text"
                    value={newChecklistText}
                    onChange={(e) => setNewChecklistText(e.target.value)}
                    placeholder="세부 계획을 입력하세요"
                    style={{width:'70%'}}
                  />
                  <CiSquarePlus size={30} onClick={madeCheckList} />
                </Line>
                </CheckList>
            </Line>
                <style> 
                {` 
                    ::placeholder { 
                        color: rgba(142, 156, 196, 1); 
                    }` 
                } 
                </style>
          {/* <PhotoDom>
            <div>사진</div>
            <div>사진</div>
            <div>사진</div>
          </PhotoDom> */}
          <Button onClick={postReview}>업로드</Button>
    </Body>
    </BigBody>
    <FooterHook />
    </>
  )
};

export default MadeReview

const BigBody = styled.div`
  display : flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color : rgba(27, 52, 124, 1);
`
const Body = styled.div`
  display : flex;
  flex-direction: column;
  justify-content: center;
  width : 40%;
  gap : 15%;
  // align-items: center;
  color : rgba(27, 52, 124, 1);
  font-size : 24px;
`

const CheckList = styled.div`
  display : flex;
  flex-direction : column;
  height : 70%;
  gap : 10px;
  font-size : 20px;
  padding : 10px;
`
const InputBox = styled.input`
  padding: 5px;
  border-radius: 10px;
  border: 0.2px solid rgba(142, 156, 196, 1);
  font-size :15px;
  width : 50%;
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

const Category = styled.div`
  display : flex;
  align-items : center;
  justify-content : center;
  width : 200px;
  color : rgba(27, 52, 124, 1);
  font-size : 20px;
  // border : 0.2px solid rgba(142, 156, 196, 1);
`

const PhotoDom = styled.div`
  display : flex;
  flex-direction : row;
  align-items : center;
  justify-content : center;
  width : 100%;
  gap : 5%;
`

const Button = styled.button`
  display : flex;
  justify-content : center;
  align-items : center;
  width : 100px;
  height : 44px;
  border : none;
  border-radius : 10px;
  background-color : rgba(27, 52, 124, 1);
  color : white;
  font-size : 16px;
  margin-left : 95%;
`