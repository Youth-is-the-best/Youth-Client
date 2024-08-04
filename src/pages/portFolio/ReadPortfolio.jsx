import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import HeaderHook from '../../hook/HeaderHook'
import 다람쥐 from '../../images/다람쥐.jpg'
import AiOutlineRocket from '../../images/AiOutlineRocket.png'
import FiNavigation from '../../images/FiNavigation.png'
import AiOutLineBank from '../../images/AiOutlineBank.png'
import MdOutlinedFeed from '../../images/MdOutlineFeed.png'
import Vector from '../../images/Vector.png'
import { useNavigate } from 'react-router-dom'
import editimg from '../../images/FiEdit3.png'
import checkimg from '../../images/AiOutlineCheckSquare.png'

const ReadPortfolio = () => {
  const [isChecked, setIsChecked] = useState(false);
  const router = useNavigate();

  const toChangeMode = () => {
    router('/changeportfolio');
  };

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
    <HeaderHook></HeaderHook>
    <BackgroundWrapper></BackgroundWrapper>
    <ProfileImage>
        <img src={다람쥐} style={{ height: '128px', width: '128px', borderRadius: '50%'}}></img>
    </ProfileImage>
    <ChangeBtn>
      <button onClick={toChangeMode}><img src={editimg}></img></button>
    </ChangeBtn>
    <Body>
      <ProfileWrapper>
        <ProfileTitle>
          <SectionTitle style={{ position: 'relative', bottom: '10px' }}>@닉네임, who are you?</SectionTitle>
          <Keyword></Keyword>
        </ProfileTitle>
        <Info>
          <InfoItem><InfoLabel>생년월일</InfoLabel></InfoItem>
          <InfoItem><InfoLabel>학교 & 전공</InfoLabel></InfoItem>
          <InfoItem><InfoLabel>연락처</InfoLabel></InfoItem>
          <InfoItem><InfoLabel>E-mail</InfoLabel></InfoItem>
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
            <CheckBox onClick={handleCheck}>
              { isChecked ? 
                <img src={checkimg} style={{ width: '24px', height: '24px', paddingRight: '10px' }}></img> :
                <img src={Vector} style={{ width: '24px', height: '24px', paddingRight: '10px' }}></img> }
              <p>빙고 인증 후기만 보기</p>
            </CheckBox>
          </PostTitle>
          <PostContent>
            {/* 사용자가 입력한 목표 달성 후기 post & 빙고 외 후기 post가 보여짐 */}
          </PostContent>
        </PostWrapper>
    </Body>
    </>
  )
}

export default ReadPortfolio

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

const ChangeBtn = styled.div`
  display: flex;
  justify-content: end;
  padding-right: 10%;
  position: relative;
  bottom: 80px;
  button {
    background-color: white;
    width: 44px;
    height: 44px;
    border: 0.2px solid rgba(165, 176, 208, 1);
    border-radius: 8px;
    box-shadow: 1px 1px 3px 0px rgba(165, 176, 208, 1);
    cursor: pointer;
  }
  img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
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

const Keyword = styled.div`
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

const CheckBox = styled.div`
  display: flex;
  align-items: center;
`;