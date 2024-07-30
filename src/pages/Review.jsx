import React from 'react';
import { Headers, Header } from './Home';
import { Row, Line, CheckBox} from './MadeBingo';
import mypage from '../images/mypage.png';
import styled from 'styled-components';
import { AiOutlineCheckSquare } from 'react-icons/ai';

const Review = () => {
  return (
    <>
    <Headers>
      <Header to="/test/0">휴학 유형 테스트</Header>
      <Header to="/">투두 리스트 빙고</Header>
      <Header to="/info">공고/후기</Header>
      <Header to="/portfolio">나의 포트폴리오</Header>
      <img src={mypage} style={{ height: '60px' }}></img>
    </Headers>
    <Body style={{padding:'80px'}}>
      <Line style={{marginLeft:'-600px', marginBottom:'50px'}}>| 토익 900점 이상 취득</Line>
          <Line style={{gap : '200px'}}>
            <Row>
              <div>분류</div>
              <div>세부계획</div>
              <div>시험절차</div>
            </Row>
            <Row>
                <Category>자격증</Category>
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
                <InputBox placeholder='시험 절차를 입력하세요'>
                </InputBox>
                <style> 
                {` 
                    ::placeholder { 
                        color: rgba(142, 156, 196, 1); 
                    }` 
                } 
                </style>
            </Row>
          </Line>
    </Body>
    </>
  )
};

export default Review

const Body = styled.div`
    display : flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color : rgba(30, 58, 138, 1);
    font-size : 24px;
`

const Category = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 16px;
  border: 0.2px solid black;
  border-radius: 10px;
  padding: 7px;
`
const CheckList = styled.div`
    display : flex;
    flex-direction : column;
    width : 460px;
    height : 160px;
    gap : 10px;
    font-size : 16px;
`

const InputBox = styled.input`
  padding: 5px;
  // border-radius: 10px;
  border: 0.2px solid white;
  width : 460px;
  height : 160px;
  background: rgba(233, 236, 244, 0.4);
  // color : rgba(142, 156, 196, 1);
   
`