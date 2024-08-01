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
    router('/alarmManage')
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
          <div></div>
        </AlarmWrapper>
      </Body>
    </>
  )
}

export default Alarm

const Body = styled.div`
  padding: 3% 30%;
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
  
`;