import React from 'react'
import styled from 'styled-components'

const MyPageModal = () => {
  return (
    <>
    <ModalWrapper>
      <ModalBtn>
        <btn>내 정보</btn>
      </ModalBtn>
      <ModalBtn>
        <btn>알림</btn>
      </ModalBtn>
      <ModalBtn>
        <btn>로그아웃</btn>
      </ModalBtn>
    </ModalWrapper>
    </>
  )
}

export default MyPageModal

const ModalWrapper = styled.div`
  
`;

const ModalBtn = styled.div`
  
`;