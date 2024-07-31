import React from 'react'
import styled from 'styled-components'
import FiEdit3 from '../images/FiEdit3.png'
import HeaderHook from '../hook/HeaderHook'


const MyPage = () => {
  return (
    <>
        <HeaderHook></HeaderHook>
        <Body>
          <MyInfoWrapper>
            <SectionTitle>내 정보</SectionTitle>
            <Info>
              <InfoItem><InfoLabel>이름</InfoLabel><input placeholder='조하정'></input></InfoItem>
              <InfoItem><InfoLabel>닉네임</InfoLabel><input placeholder='열정PM'></input><img src={FiEdit3}></img></InfoItem>
              <InfoItem><InfoLabel>휴학 유형</InfoLabel><input placeholder='열정 가득 토끼'></input><btn>유형테스트 결과 보기</btn></InfoItem>
              <InfoItem><InfoLabel>가입 이메일</InfoLabel><input placeholder='huareyou@gmail.com'></input></InfoItem>
              <InfoItem><InfoLabel>요금제</InfoLabel><input placeholder='프리미엄'></input><btn>요금제 살펴보기</btn></InfoItem>
              <InfoItem><InfoLabel>포인트</InfoLabel><input placeholder='1,510p'></input></InfoItem>
            </Info>
          </MyInfoWrapper>
          <PremiumWrapper>
            <SectionTitle style={{ textAlign : "center" }}>PREMIUM</SectionTitle>
            <Box>
              <div></div>
              <div></div>
              <div></div>
            </Box>
          </PremiumWrapper>
          <ManagementWrapper>
            <SectionTitle>회원 관리</SectionTitle>
            <ManageBtn>
              <btn>회원 탈퇴</btn>
            </ManageBtn>
          </ManagementWrapper>
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
  padding-bottom: 150px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
`;

const SectionTitle = styled.div`
  color: #1E3A8A;
  font-size: 24px;
  font-weight: 700;
  padding-bottom: 30px;
`;

const Info = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

const InfoItem = styled.div`
  display: flex;
  padding-bottom: 20px;
  input {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    &::placeholder {
      font-size: 20px;
      font-weight: 700;
      color: #515151;
    }
  }
  img {
    height: 20px;
    width: 20px;
    display: flex;
    align-items: center;
  }
  btn {
    background-color: #8E9CC4;
    color: white;
    width: 135px;
    height: 25px;
    border-radius: 10px;
    padding: 4px 10px 4px 10px;
    font-size: 14px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
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

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    width: 210px;
    height: 126px;
    border-radius: 10px;
    background-color: #E9ECF4;
  } 
`

const ManagementWrapper = styled.div`
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
`;

const ManageBtn = styled.div`

`;