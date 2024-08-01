import React from 'react'
import HeaderHook from '../hook/HeaderHook';
import styled from 'styled-components';
import { AiOutlineCheckSquare, AiOutlineHeart, AiOutlineMessage, AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import CheckBox from './bingo/MadeBingo';

const Noti = () => {
  return (
    <>
    <HeaderHook></HeaderHook>
    <Body>
      <SearchDom>
        <SearchBox placeholder="키워드 검색"/><AiOutlineSearch size={40}/>
      </SearchDom>
      <NavigationBar>
        <Navigation>채용(인턴)</Navigation>
        <Navigation>자격증</Navigation>
        <Navigation>대외활동</Navigation>
        <Navigation>공모전</Navigation>
        <Navigation>취미</Navigation>
        <Navigation>여행</Navigation>
        <Navigation>자기계발</Navigation>
        <Navigation>휴식</Navigation>
        <Navigation>휴알유</Navigation>
      </NavigationBar>
      <Line>대외활동</Line>
      <Bar>
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
        {/* <CheckBox/> */}
      </Bar>
      <ContentDom>
        <Content>
          <WriterDom>
          <div>작성자</div>
          </WriterDom>
          <PhotoBox></PhotoBox>
          <div>토익 900점 맞기 <AiOutlineHeart /> <AiOutlineMessage /> </div> 
        </Content>
        <Content>
          <WriterDom>
          <div>작성자</div>
          </WriterDom>
          <PhotoBox></PhotoBox>
          <div>토익 900점 맞기 🩷 💬</div>
        </Content>
        <Content>
          <WriterDom>
          <div>작성자</div>
          </WriterDom>
          <PhotoBox></PhotoBox>
          <div>토익 900점 맞기 🩷 💬</div>
        </Content>
      </ContentDom>
    </Body>
    </>
  )
}

export default Noti

const Body = styled.div`
  display : flex;
  flex-direction : column;
  // align-items : center;
  width : 100%;
  margin-top : 40px;
`
const Line = styled.div`
  display : flex;
  flex-direction : row;
  align-items : center;
  // width : 100%;
  height : 80px;
  border-bottom : 0.2px solid rgba(30, 58, 138, 0.5);
  padding : 1%;
  padding-left : 4.8%;
  font-size : 24px;
  color : rgba(30, 58, 138, 1);
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.25);
  
`
const Bar = styled.div`
  display : flex;
  flex-direction : row;
  align-items : center;
  // width : 100%;
  height : 80px;
  padding-left : 4.8%;
  font-size : 24px;
  
  color: rgba(142, 156, 196, 1);

`

const SearchDom = styled.div`
  display : flex;
  flex-direction : row;
  align-items : center;
  width : 400px;
  height : 20px;
  border-radius: 40px;
  border: 1px solid rgba(153, 166, 202, 1);
  padding : 15px 20px;
  margin-left : 65%;
`

const SearchBox = styled.input`
  width : 100%;
  border : none;
  font-size : 20px;
`

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
`

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
`

const Check = styled.div`
 display : flex;
 align-items : center;
`
const ContentDom = styled.div`
  display : grid;
  grid-template-columns : 1fr 1fr 1fr 1fr;
  flex-direction : row;
  justify-content : center;
  width : 100%;
  height : 1000px;
  padding : 10px;
`
const Content = styled.div`
  display : flex;
  flex-direction : column;
  // align-items : center;
  width : 80%;
  height : 300px;
  border : 0.2px solid black;
`
const WriterDom = styled.div`
  display : flex;
  flex-direction : row;
  align-items : center;
  // justify-content : center; 옆으로 가게 함
`
const PhotoBox = styled.div`
  width : 100%;
  height : 80%;
  border : 0.2px solid black;
  border-radius : 10px;
`