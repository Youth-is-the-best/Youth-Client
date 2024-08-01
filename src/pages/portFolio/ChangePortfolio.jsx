import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import HeaderHook from '../../hook/HeaderHook'
import AiOutlineFilePdf from '../../images/AiOutlineFilePdf.png'
import 다람쥐 from '../../images/다람쥐.jpg'
import AiOutlineRocket from '../../images/AiOutlineRocket.png'
import FiNavigation from '../../images/FiNavigation.png'
import AiOutLineBank from '../../images/AiOutlineBank.png'
import MdOutlinedFeed from '../../images/MdOutlineFeed.png'
import Vector from '../../images/Vector.png'


const ChangePortfolio = () => {
  const textarea = useRef();
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleResizeHeight = () => {
    textarea.current.style.height = 'auto';
    textarea.current.style.height = textarea.current.scrollHeight + 'px';
  };

  const handlePhoneNumberChange = (e) => {
    const userInput = e.target.value.replace(/\D/g, '');
    const formattedInput = userInput
      .replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')
      .slice(0, 13);

    setPhoneNumber(formattedInput);
  };


  return (
    <>
      <HeaderHook></HeaderHook>
      <BackgroundWrapper />
      <PdfBtn>
          <button><img src={AiOutlineFilePdf}></img>pdf로 저장</button>
      </PdfBtn>
      <ProfileImage>
        <img src={다람쥐} style={{ height: '128px', width: '128px', borderRadius: '50%'}}></img>
      </ProfileImage>
      <Body>
        <ProfileWrapper>
          <ProfileTitle>
              <SectionTitle style={{ position: 'relative', bottom: '10px' }}>@닉네임, who are you?</SectionTitle>
              <textarea 
                ref={textarea} 
                onChange={handleResizeHeight} 
                rows={3}
                placeholder='나에게 맞는 수식어를 입력해주세요.'></textarea>
          </ProfileTitle>
          <Info>
            <InfoItem><InfoLabel>생년월일</InfoLabel><input type='date'></input></InfoItem>
            <InfoItem><InfoLabel>학교 & 전공</InfoLabel><input type='text' placeholder='학교와 전공을 입력해주세요.'></input></InfoItem>
            <InfoItem><InfoLabel>연락처</InfoLabel><input type='tel' value={phoneNumber} onChange={handlePhoneNumberChange}  placeholder='연락처를 입력해주세요.'></input></InfoItem>
            <InfoItem><InfoLabel>E-mail</InfoLabel><input type='email' placeholder='자주 쓰는 이메일을 입력해주세요.'></input></InfoItem>
            {/* 이메일은 백에서 받아오기 */}
          </Info>
        </ProfileWrapper>
        <AchievementWrapper>
          <SectionTitle>@닉네임 님의 휴 are you</SectionTitle>
          <p>휴학 기간에 달성한 사소한 목표부터 자랑하고픈 업적까지 모두 기록해보세요.</p>
          <AboutMeWrapper>
            <SubTitle style={{backgroundColor: '#7485B5'}}>
              <img src={AiOutlineRocket} style={{ height: '22px', width: '22px'}}></img>
              저는 이런 사람입니다
              </SubTitle>
            <Content>
              
            </Content>
          </AboutMeWrapper>
          <HueWrapper>
            <ClearWrapper>
              <SubTitle style={{backgroundColor: '#A5B0D0'}}><img src={FiNavigation} style={{ height: '21px', width: '21px' }}></img>달성한 빙고 한 눈에 보기</SubTitle>
              <Content>
    
              </Content>
            </ClearWrapper>
            <ClearWrapper>
              <SubTitle style={{backgroundColor: '#D2D8E8'}}><img src={AiOutLineBank} style={{ height: '21px', width: '19px' }}></img>다른 성과 한 눈에 보기</SubTitle>
              <Content>
    
              </Content>
            </ClearWrapper>
          </HueWrapper>
        </AchievementWrapper>
        <PostWrapper style={{ float: 'bottom' }}>
          <PostTitle>
            <SectionTitle><img src={MdOutlinedFeed} style={{ height: '21px', width: '19px' }}></img>내가 쓴 포스트 보기</SectionTitle>
            <Checklist>
              <img src={Vector} style={{ width: '24px', height: '24px', paddingRight: '10px' }}></img>
              <p>빙고 인증 후기만 보기</p>
            </Checklist>
          </PostTitle>
          <PostContent>
            {/* 사용자가 입력한 목표 달성 후기 post & 빙고 외 후기 post가 보여짐 */}
          </PostContent>
        </PostWrapper>
      </Body>
    </>
  )
}

export default ChangePortfolio

export const Logo = styled.div`
  margin-left: 20px;
`;

export const Nav = styled.div`
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
  padding-left: 160px;
  padding-right: 160px;
`;

const ProfileImage = styled.div`
  padding-left: 160px;
  position: relative;
  bottom: 60px;
`;

const PdfBtn = styled.div`
  position: absolute;
  right: 60px;
  top: 90px;
  float: right;
  img {
    width: 24px;
    height: 24px;
  }
  button {
      font-family: 'Pretendard-Regular';
      font-weight: 700;
      font-size: 14px;
      background-color: white;
      color: #1E3A8A;
      padding: 10px;
      border-radius: 10px;
      border: none;
      width: 108px;
      height: 32px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
    }
`;

const ProfileWrapper = styled.div`
  padding-bottom: 80px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
`;

const ProfileTitle = styled.div`
  padding-bottom: 30px;
  textarea {
    font-size: 16px;
    width: 98%;
    border: none;
    padding-left: 10px;
    resize: none;
    &::placeholder {
        color: #868686;
        font-family: 'Pretendard-Regular';
        font-size: 16px;
        font-weight: 400;
      }
  }
`;

const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  color: #1E3A8A;
  font-size: 20px;
  font-weight: 600;
  img {
    margin-right: 10px;
  }
`;

const SubTitle = styled.div`
  color: white;
  font-size: 16px;
  font-weight: 700;
  width: 100%;
  height: 45px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  img {
    margin-right: 10px;
    margin-left: 20px;
  }
`;

const Info = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

const InfoItem = styled.div`
  display: flex;
  padding-bottom: 20px;
  input {
    display: flex;
    align-items: center;
    border: none;
    font-size: 15px;
    font-weight: 500;
    width: 40%;
    &::placeholder {
        color: #A3A3A3;
        font-family: 'Pretendard-Regular';
        font-size: 16px;
        font-weight: 700;
    }
  }
`;

const InfoLabel = styled.div`
  color: #1E3A8A;
  font-weight: 700;
  width: 200px;
  height: 35px;
  display: flex;
  align-items: center;
`;

const AchievementWrapper = styled.div`
  padding-top: 40px;
  padding-bottom: 80px;
  p {
    font-size: 16px;
    font-weight: 500;
    color: #868686;
  }
`;

const AboutMeWrapper = styled.div`
  padding-top: 10px;
  /* padding-bottom: 80px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2); */
`;

const Content = styled.div`  
`;

const HueWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ClearWrapper = styled.div`
  display: flex;
  padding-top: 20px;
  width: 49%;
  /* padding-bottom: 80px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2); */
`;

const PostWrapper = styled.div`
  padding-top: 40px;
  border-top: 2px solid rgba(0, 0, 0, 0.2);
`;

const PostTitle = styled.div`
  display: flex;
  justify-content: space-between;
  input {
    color: #1E3A8A;
    border: none;
    &::placeholder{
      color: #1E3A8A;
    }
  }
`;

const PostContent = styled.div`
`;

const Checklist = styled.div`
  display: flex;
  align-items: center;
`;