import React, { useState } from 'react';
import HeaderHook from '../hook/HeaderHook';
import styled from 'styled-components';
import { AiOutlineCheckSquare, AiOutlineHeart, AiOutlineMessage, AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import CheckBox from './bingo/MadeBingo';

const Noti = () => {
  const categorys = ["채용(인턴)", "자격증", "대외활동", "공모전", "취미", "여행", "자기계발", "휴식"];
  const [selectedCategory, setSelectedCategory] = useState("대외활동");

  const inputConfigs = {
    "채용(인턴)": [
      { placeholder: "직무", type: "select", options: ["영업/고객상담", "경영/사무/회계", "마케팅/광고/홍보", "생산/제조", "연구개발/설계", "IT", "서비스", "무역/유통", "의료", "건설", "교육", "디자인", "전문/특수", "미디어", "기타"] },
      { placeholder: "채용형태", type: "select", options: ["신입", "경력", "계약직", "인턴", "아르바이트"] },
      { placeholder: "근무 지역", type: "select", options: ["서울", "경기(인천, 세종)", "강원", "충청(대전)", "전라(광주)", "경상(대구, 울산, 부산)", "제주", "비대면"] },
      { placeholder: "지원 마감", type: "date" }
    ],
    "자격증":[
      { placeholder: "시험 분야", type: "select", options: ["경영/경제", "IT/컴퓨터", "어학", "디자인", "기타"]},
      { placeholder: "시험 날짜", type: "date" },
      { placeholder: "휴아유 사용자 평균 준비 기간", type: "date"}      
    ],
    "대외활동": [
      { placeholder: "활동 분야", type: "select", options: ["봉사", "기자단", "홍보단(서포터즈)", "강연", "멘토링", "모임(동아리)", "해외탐방", "기타"] },
      { placeholder: "활동 지역", type: "select", options: ["서울", "경기(인천, 세종)", "강원", "충청(대전)", "전라(광주)", "경상(대구, 울산, 부산)", "제주", "비대면"] },
      { placeholder: "지원 마감", type: "date" },
      
    ],
    "공모전": [
      { placeholder: "공모 분야", type: "select", options: ["기획/아이디어", "광고/마케팅", "사진/영상", "디자인/순수미술", "캐릭터/만화/게임", "공간/건축", "과학/공학", "예체능", "학술", "창업", "기타"] },
      { placeholder: "마감일", type: "date" },
      
    ],
    "취미": [
      { placeholder: "분야", type: "select", options: ["그림 및 공예", "음악", "운동", "레저 및 야외 활동", "요리 및 베이킹", "독서 및 글쓰기", "원예", "기타"] },
    ],
    "여행": [
      { placeholder: "장소", type: "select", options: ["서울", "경기(인천, 세종)", "강원", "충청(대전)", "전라(광주)", "경상(대구, 울산, 부산)", "제주", "해외"] },
    ],
    "자기계발": [
      { placeholder: "분야", type: "select", options: ["언어", "독서", "자격증", "전문 기술", "재정 관리", "건강 관리", "네트워킹", "기타"] },
    ],
    "휴식": [
      { placeholder: "장소", type: "select", options: ["서울", "경기(인천, 세종)", "강원", "충청(대전)", "전라(광주)", "경상(대구, 울산, 부산)", "제주", "해외"] },
    ]
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <HeaderHook></HeaderHook>
      <Body>
        <SearchDom>
          <SearchBox placeholder="키워드 검색"/><AiOutlineSearch size={40}/>
        </SearchDom>
        <NavigationBar>
          {categorys.map((category) => (
            <Navigation key={category} onClick={() => handleCategoryClick(category)}>
              {category}
            </Navigation>
          ))}
        </NavigationBar>
        <Line>{selectedCategory}</Line>
        <Bar>
          {inputConfigs[selectedCategory]?.map((config, index) => (
            <Dropdown key={index}>
              {config.type === "select" ? (
                <select>
                  <option>{config.placeholder}</option>
                  {config.options.map((option, idx) => (
                    <option key={idx} value={option}>{option}</option>
                  ))}
                </select>
              ) : (
                <input type={config.type} placeholder={config.placeholder} />
              )}
            </Dropdown>
          ))}
        </Bar>
        <CheckDom>
          <Check>
            <AiOutlineCheckSquare size={20}/>
            <div>전체</div>
          </Check>
          <Check>
            <AiOutlineCheckSquare size={20}/>
            <div>공고</div>
          </Check>
          <Check>
            <AiOutlineCheckSquare size={20}/>
            <div>후기</div>
          </Check>
        </CheckDom>
        <ContentDom>
          {Array(4).fill(null).map((_, index) => (
            <Content key={index}>
              <WriterDom>
                <div>천재PM</div>
                <div>2024.07.24</div>
              </WriterDom>
              <PhotoBox></PhotoBox>
              <div>토익 900점 맞기 <AiOutlineHeart />12 <AiOutlineMessage />12</div>
            </Content>
          ))}
        </ContentDom>
      </Body>
    </>
  );
}

export default Noti;

const Body = styled.div`
  display : flex;
  flex-direction : column;
  width : 100%;
  margin-top : 40px;
`;
const Line = styled.div`
  display : flex;
  flex-direction : row;
  align-items : center;
  height : 80px;
  border-bottom : 0.2px solid rgba(30, 58, 138, 0.5);
  padding : 1%;
  padding-left : 4.8%;
  font-size : 24px;
  color : rgba(30, 58, 138, 1);
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.25);
`;
const Bar = styled.div`
  display : flex;
  flex-direction : row;
  align-items : center;
  height : 80px;
  padding-left : 4.8%;
  font-size : 24px;
  color: rgba(142, 156, 196, 1);
`;
const Dropdown = styled.div`
  margin-right: 20px;
  select, input {
    font-size: 18px;
    padding: 5px;
    border: 1px solid rgba(142, 156, 196, 1);
    border-radius: 5px;
  }
`;
const SearchDom = styled.div`
  display : flex;
  flex-direction : row;
  align-items : center;
  width : 400px;
  height : 20px;
  border-radius: 40px;
  border: 1px solid rgba(153, 166, 202, 1);
  padding : 15px 20px;
  margin-left : auto;
`;
const SearchBox = styled.input`
  width : 100%;
  border : none;
  font-size : 20px;
`;
const NavigationBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
  height: 50px;
  padding : 1%;
  margin-top : 2%;
  border: 0.2px solid rgba(30, 58, 138, 1);
`;
const Navigation = styled(Link)`
  font-size : 20px;
  font-weight : 600;
  color : rgba(116, 116, 116, 1);
  text-decoration : none;
  cursor : pointer;
`;
const CheckDom = styled.div`
  display : flex;
  flex-direction : row;
  align-items : center;
  margin-left : 10px;
  margin-right : 10px;
  font-size : 20px;
  font-weight : 600;
  color : rgba(116, 116, 116, 1);
  text-decoration : none;
  cursor : pointer;
  gap : 10px;
`;
const Check = styled.div`
 display : flex;
 align-items : center;
`;
const ContentDom = styled.div`
  display : grid;
  grid-template-columns : repeat(4, 1fr);
  flex-direction : row;
  justify-content : center;
  width : 100%;
  height : 1000px;
  padding : 10px;
`;
const Content = styled.div`
  display : flex;
  flex-direction : column;
  width : 90%;
  height : 300px;
  border : 0.2px solid black;
  margin: 10px;
  padding: 10px;
`;
const WriterDom = styled.div`
  display : flex;
  flex-direction : row;
  align-items : center;
  justify-content : space-between;
`;
const PhotoBox = styled.div`
  width : 100%;
  height : 200px;
  border : 0.2px solid black;
  border-radius : 10px;
  margin-bottom: 10px;
`;
