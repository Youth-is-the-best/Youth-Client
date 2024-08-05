import React, { useState } from 'react'
import styled from 'styled-components'
import HeaderHook from '../../hook/HeaderHook'
import AiOutlineSetting from '../../images/AiOutlineSetting.png'
import transimg from '../../images/transparent.png'
import onSwitch from '../../images/OnSwitch.png'
import offSwitch from '../../images/Switch.png'
import { useNavigate } from 'react-router-dom'

const Alarm = () => {
  const router = useNavigate();
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const toSetting = () => {
    router('/alarmmanage')
  };

  const handleBtn = () => {
    setIsSwitchOn(!isSwitchOn);
  };

  return (
    <>
      <HeaderHook></HeaderHook>
      <Body>
        <TitleWrapper>
            <img src={transimg} />
            <SectionTitle>알림</SectionTitle>
            <img src={AiOutlineSetting} style={{width: '28px', height: '28px', cursor: 'pointer'}} onClick={toSetting}></img>
        </TitleWrapper>
        <ControlWrapper onClick={handleBtn}>
          안읽음 보기
          { isSwitchOn ? <img src={onSwitch}></img> : <img src={offSwitch}></img>}
        </ControlWrapper>
        <AlarmWrapper>
          <div>
            <span>회원가입을 축하드립니다. 휴알유와 함께 알차고 유익한 휴학 생활을 시작해보세요!</span>
            <span>2024.08.07</span>
          </div>
        </AlarmWrapper>
      </Body>
    </>
  )
}

export default Alarm

const Body = styled.div`
  padding: 3% 25%;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SectionTitle = styled.div`
  color: #1E3A8A;
  font-size: 24px;
  font-weight: 700;
`;

const ControlWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  color: #747474;
  font-size: 16px;
  font-weight: 700;
  padding-top: 30px;
  img {
    width: 40px;
    height: 24px;
    padding-left: 10px;
  }
`;

const AlarmWrapper = styled.div`
  div {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    width: 100%;
    height: 120px;
    border: 0.2px solid rgba(116, 116, 116, 0.3);
    border-radius: 10px;
    span {
      display: flex;
      align-items: center;
    }
  }
`;