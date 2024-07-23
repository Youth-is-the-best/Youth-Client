import React from 'react'
import styled from 'styled-components'

const Signup = () => {
  return (
    <>
    <Header>Logo</Header>
    <Wrapper>
      <TitleWrapper>
        <div>이름*</div>
        <div>이메일*</div>
        <div></div>
        <div>학교 정보*</div>
        <div>아이디(닉네임)*</div>
        <div>비밀번호*</div>
        <div>비밀번호 확인*</div>
        <div>추천인 확인(선택)</div>
        <div>이용약관 동의*</div>
      </TitleWrapper>
      <Form>
        <Inputs>
          <input placeholder='ex. 홍길동'></input>
          <EmailWrapper>
            <input placeholder='학교 이메일주소를 입력하세요.'></input>
            <button>인증번호 발송</button>
          </EmailWrapper>
          <input placeholder='인증번호 6자리'></input>
          <SchoolWrapper>
            <input></input>
            <input placeholder='계열 선택'></input>
          </SchoolWrapper>
          <IdWrapper>
            <input placeholder='영문 대소문자, 특수문자 ... 가능'></input>
            <button>중복확인</button>
          </IdWrapper>
          <input placeholder='8자리 이상(숫자, 알파벳, 특수문자 1자 이상 포함)'></input>
          <input></input>
          <input></input>
          <TermsWrapper>
            <input type='radio' />이용약관에 동의합니다.
            <link></link>
          </TermsWrapper>
        </Inputs>
      <BtnWrapper>
          <button>가입하기</button>
      </BtnWrapper>
      </Form>
    </Wrapper>
    </>
  )
}

export default Signup

const Header = styled.div`
  
`
const Wrapper = styled.div`
  
`
const TitleWrapper = styled.div`
  
`
const Form = styled.div`
  
`
const Inputs = styled.div`
  
`
const EmailWrapper = styled.div`
  
`
const SchoolWrapper = styled.div`
  
`
const IdWrapper = styled.div`
  
`
const TermsWrapper = styled.div`
  
`
const BtnWrapper = styled.div`
  
`