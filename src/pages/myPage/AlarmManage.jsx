import React from 'react'
import styled from 'styled-components'
import HeaderHook from '../../hook/HeaderHook'

const AlarmManage = () => {
  return (
    <>
      <HeaderHook></HeaderHook>
      <Body>
        <TitleWrapper>
          <img></img>
          <SectionTitle></SectionTitle>
        </TitleWrapper>
        <ControlWrapper>
          <ControlItem><img></img>공감 알림<ControlBtn></ControlBtn></ControlItem>
          <ControlItem><img></img>새 댓글 알림<ControlBtn></ControlBtn></ControlItem>
          <ControlItem><img></img>포인트 적립 알림<ControlBtn></ControlBtn></ControlItem>
          <ControlItem><img></img>휴알유 포스트 알림<ControlBtn></ControlBtn></ControlItem>
        </ControlWrapper>
      </Body>
    </>
  )
}

export default AlarmManage

const Body = styled.div`
  
`;

const TitleWrapper = styled.div`
  
`;

const SectionTitle = styled.div`
  
`;

const ControlWrapper = styled.div`
  
`;

const ControlItem = styled.div`
  
`;

const ControlBtn = styled.div`
  
`;