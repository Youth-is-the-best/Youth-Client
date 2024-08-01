import React from 'react'
import styled from 'styled-components'
import HeaderHook from '../../hook/HeaderHook'

const Alarm = () => {
  return (
    <>
      <HeaderHook></HeaderHook>
      <Body>
        <TitleWrapper>
            <SectionTitle>알림</SectionTitle>
            <img></img>
          </TitleWrapper>
          <ControlWrapper>
            안 읽음 보기<img></img>
          </ControlWrapper>
          <AlarmWrapper>
            
          </AlarmWrapper>
      </Body>
    </>
  )
}

export default Alarm

const Body = styled.div`
  
`;

const TitleWrapper = styled.div`
  
`;

const SectionTitle = styled.div`
  
`;

const ControlWrapper = styled.div`
  
`;

const AlarmWrapper = styled.div`
  
`;