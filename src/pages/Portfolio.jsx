import React from 'react'
import styled from 'styled-components'
import SaveModal from './SaveModal'
import user from '../images/user.png'
import Pdf from '../images/Pdf.png'
import 다람쥐 from '../images/다람쥐.jpg'
import { Headers, Header } from './Home'

const Portfolio = () => {
  return (
    <>
      <Headers style={{ justifyContent: 'space-between' }}>
        <Logo>Logo</Logo>
        <Nav>
          <Header to="/test/0">휴학 유형 테스트</Header>
          <Header to="/">투두리스트 빙고</Header>
          <Header to="/info">공고/후기</Header>
          <Header to="/portfolio">나의 포트폴리오</Header>
          <img src={user} style={{ height: '70px', marginLeft: '10px' }}></img>
        </Nav>
      </Headers>
      <BackgroundWrapper />
      <Body>
        <ProfileImage>
          <img src={다람쥐} style={{ height: '128px', width: '128px', marginLeft: '10px'}}></img>
        </ProfileImage>
        <PdfBtn>
            <button><img src={Pdf}></img>pdf로 저장</button>
        </PdfBtn>
        <ProfileWrapper>
          <ProfileTitle>
              <SectionTitle>@닉네임, who are you?</SectionTitle>
              <input type='text' placeholder='나에게 맞는 수식어를 입력해주세요.'></input>
          </ProfileTitle>
          <Info>
            <InfoItem><InfoLabel>생년월일</InfoLabel><input></input></InfoItem>
            <InfoItem><InfoLabel>학교 & 전공</InfoLabel><input></input></InfoItem>
            <InfoItem><InfoLabel>연락처</InfoLabel><input></input></InfoItem>
            <InfoItem><InfoLabel>E-mail</InfoLabel><input></input></InfoItem>
          </Info>
        </ProfileWrapper>
        <AcheievementWrapper>
          <AcheievementTitle>
            <SectionTitle>@닉네임님의 휴 are you</SectionTitle>
            휴학 기간에 달성한 사소한 목표부터 자랑하고 싶은 업적까지 모두 기록해보세요.
          </AcheievementTitle>
          <Content>
            {/* 사용자 입력 공간... 이모지 선택, 텍스트 입력 가능 (멋사 위키 참고해서 마크다운 editor 만들어주기...) */}
          </Content>
        </AcheievementWrapper>
        <PostWrapper>
          <PostTitle>
            <SectionTitle><img></img>내가 쓴 포스트 보기</SectionTitle>
            <input type='checklist' placeholder='빙고 인증 후기만 보기'></input>
          </PostTitle>
          <Content>
            {/* 사용자가 입력한 목표 달성 후기 post & 빙고 외 후기 post가 보여짐 */}
          </Content>
        </PostWrapper>
      </Body>
    </>
  )
}

export default Portfolio

const Logo = styled.div`
  margin-left: 20px;
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 18px;
`;

const BackgroundWrapper = styled.div`
 background-image: linear-gradient(to bottom, rgba(30, 58, 138, 0.8), #FFFFFF);
 width: 100%;
 height: 280px; 
`;

const Body = styled.div`
`;

const ProfileImage = styled.div`
  padding-left: 255px;
  
`;

const PdfBtn = styled.div`
`;

const ProfileWrapper = styled.div`
`;

const ProfileTitle = styled.div`
`;

const SectionTitle = styled.div`
`;

const Info = styled.div`
`;

const InfoItem = styled.div`  
`;

const InfoLabel = styled.div`
`;

const AcheievementWrapper = styled.div`
`;

const AcheievementTitle = styled.div`
`;

const Content = styled.div`  
`;

const PostWrapper = styled.div`
`;

const PostTitle = styled.div`
`;