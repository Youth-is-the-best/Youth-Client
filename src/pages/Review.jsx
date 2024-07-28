import React from 'react';
import { Headers, Header } from './Home';
import { Row, Line,CheckBox} from './MadeBingo';
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
    <Body>
    <h2>| 토익 900점 이상 취득</h2>
        <Line>
          <div>분류</div>
          <Category>자격증</Category>
        </Line>
        <Row>
            <Line>
                <div>세부계획</div>
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
            </Line>
            <Line>
                <div>시험 절차</div>
                <InputBox>
                </InputBox>
            </Line>
        </Row>
    </Body>
    </>
  )
}

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
  border-radius: 10px;
  border: 0.2px solid rgba(30, 58, 138, 1);
    width : 460px;
    height : 160px;    
`