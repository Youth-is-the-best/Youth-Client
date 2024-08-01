import React, { useRef } from 'react'
import styled from 'styled-components'
import HeaderHook from '../../hook/HeaderHook'
import { useNavigate } from 'react-router-dom';


const MyPage = () => {
  const premiumRef = useRef(null);
  const router = useNavigate();

  const scrollToPremium = () => {
    if (premiumRef.current) {
      premiumRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toResult = () => {
    router('/result');
  }

  return (
    <>
        <HeaderHook></HeaderHook>
        <Body>
          <MyInfoWrapper>
            <InfoTitle>내 정보</InfoTitle>
            <Info>
              <InfoItem><InfoLabel>이름</InfoLabel><input placeholder='조하정'></input></InfoItem>
              <InfoItem><InfoLabel>닉네임</InfoLabel><input placeholder='dylan_lee'></input></InfoItem>
              <InfoItem><InfoLabel>휴학 유형</InfoLabel><input placeholder='열정 가득 토끼' style={{ width: '150px'}}></input><button onClick={toResult}>유형 테스트 결과 보기</button></InfoItem>
              <InfoItem><InfoLabel>가입 이메일</InfoLabel><input placeholder='huareyou@gmail.com'></input></InfoItem>
              <InfoItem><InfoLabel>요금제</InfoLabel><p>휴알유 BASIC</p><button style={{ width: '110px' }} onClick={scrollToPremium}>요금제 살펴보기</button></InfoItem>
              <InfoItem><InfoLabel>포인트</InfoLabel><input placeholder='1,510p'></input></InfoItem>
            </Info>
          </MyInfoWrapper>
          <PremiumWrapper ref={premiumRef}>
            <PremTitle>PREMIUM</PremTitle>
            <PremGrade>
              <div>휴알유 BASIC</div>
              <div>휴알유 PLUS</div>
              <div>휴알유 FOCUS</div>
            </PremGrade>
            <PremContainer>
              <PremItem>₩ 0</PremItem>
              <PremItem>₩ 5,000/3개월<br />₩ 15,000/년</PremItem>
              <PremItem>₩ 6,000/3개월<br />₩ 18,000/년<br />*개인별 보증금 별도</PremItem>
              <PremItem>-</PremItem>
              <PremItem>광고 제거</PremItem>
              <PremItem>광고 제거</PremItem>
              <PremItem>빙고 개수 1개</PremItem>
              <PremItem>빙고 개수 무제한</PremItem>
              <PremItem>빙고 개수 무제한</PremItem>
              <PremItem>빙고 수정 3회</PremItem>
              <PremItem>빙고 수정 5회</PremItem>
              <PremItem>빙고 수정 10회</PremItem>
              <PremItem>기한 마감<br />7일 전 알림</PremItem>
              <PremItem>기한 마감<br />15/7/3일 전 알림</PremItem>
              <PremItem>기한 마감<br />15/7/3일 전 알림<br /><br />
              매일 이행 여부를<br />체크할 수 있는<br />데일리 빙고 체크리스트<br /><br />
              계획 이행률<br />시각화 자료 제공<br /><br /> 보증금 설정 가능</PremItem>
            </PremContainer>
          </PremiumWrapper>
        </Body>
    </>
  )
};

export default MyPage

const Body = styled.div`
  padding-top: 100px;
  padding-left: 400px;
  padding-right: 400px;
`;

const MyInfoWrapper = styled.div`
  padding-bottom: 20px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
`;

const InfoTitle = styled.div`
  color: #1E3A8A;
  font-size: 24px;
  font-weight: 700;
  padding-bottom: 50px;
`;

const Info = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  input {
    width: 200px;
    height: 60px;
    border: none;
    &::placeholder {
      font-size: 20px;
      font-weight: 700;
      color: #515151;
    }
  }
  img {
    height: 24px;
    width: 24px;
    display: flex;
    align-items: center;
  }
  button {
    background-color: #8E9CC4;
    color: white;
    height: 30px;
    border: none;
    border-radius: 10px;
    padding: 4px 10px 4px 10px;
    font-size: 14px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  p {
    padding-right: 40px;
  }
`;

const InfoLabel = styled.div`
  color: #1E3A8A;
  width: 230px;
  height: 60px;
  display: flex;
  align-items: center;
`;

const PremiumWrapper = styled.div`
  padding-top: 40px;
  padding-bottom: 150px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
`;

const PremTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #8E9CC4;
  color: white;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  font-size: 22px;
  font-weight: 700;
`;

const PremGrade = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px 50px;
  div {
    height: 30px;
    color: #1E3A8A;
    font-size: 24px;
    font-weight: 700;
    white-space: nowrap;
  } 
`;

const PremContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, minmax(100px, auto));
  gap: 10px;
`;

const PremItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #A3A3A3;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  color: #515151;
  display: flex;
  justify-content: center;
  align-items: center;
`;