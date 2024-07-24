import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../images/logo.png'

const Signup = () => {
  const selectList = ["인문계열", "사회계열", "교육계열", "공학계열", "자연계열", "의약계열", "예체능계열"];
  const [Selected, setSelected] = useState("계열 선택")
  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  return (
    <>
    <Header>
      <img src={logo}></img>
    </Header>
    <Wrapper> 
      <Form>
        <Title>회원가입</Title>
        <FormGroup>
          <Label htmlFor="name">이름*</Label>
          <input id="name" type="text" placeholder="ex. 홍길동" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">이메일*</Label>
          <input id="email" type="email" plcdaceholder="학교 이메일 주소를 입력하세요." />
          <button>인증번호 발송</button>
        </FormGroup>
        <FormGroup> 
          <Label></Label>
          <input id="authCode" type="text" placeholder="인증번호 6자리" />
          <span>4:59</span>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="school">학교 정보*</Label>
          <input></input>
          <select onChange={handleSelect} value={Selected} defaultValue="계열 선택">
            <option disabled hidden value="계열 선택">계열 선택</option>
            {selectList.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
             ))}
          </select>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="username">아이디(닉네임)*</Label>
          <input id="username" type="text" placeholder="영문 대소문자, 특수문자 _ 가능" />
          <button>중복확인</button>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">비밀번호*</Label>
          <input id="password" type="password" placeholder="8자리 이상(숫자, 알파벳, 특수문자 1자 이상 포함)" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="confirmPassword">비밀번호 확인*</Label>
          <input id="confirmPassword" type="password" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="referrer">추천인 아이디<br />(선택)</Label>
          <input id="referrer" type="text" />
          <button>아이디 확인</button>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="agreement">이용약관 동의*</Label>
          <AgreeForm>
            <input id="agreement" type="radio" /><p>이용약관에 동의합니다.</p>
            <StyledLink>약관보기</StyledLink>
          </AgreeForm>
        </FormGroup>
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
  width: 100%;
  height: 11vh;
  border-bottom: 1.5px solid #d9d9d9;
  background-color: #1E3A8A;
  text-align: center;
  position: relative;
  img {
    position: absolute;
    top: 50%;
    left: 50.5%;
    transform: translate(-50%, -50%);
  }
`;

const Wrapper = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const Title = styled.div`
  width: 600px;
  padding: 50px 10px 30px 10px;
  text-align: center;
  margin: auto;
  color: rgb(81, 81, 81);
  font-size: 24px;
  font-weight: 600;
  line-height: 28.64px;
  margin-bottom: 15px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
`;

const Form = styled.div`
  width: 597px;
  height: 570px;
`;

const FormGroup = styled.div`
  display: flex;
  padding: 15px;
  input {
    width: 300px;
    height: 35px;
    border-radius: 5px;
    border-color: rgba(0, 0, 0, 0.2);
    &::placeholder {
        color: #A1A1AA;
        font-family: 'Pretendard-Regular';
        font-size: 14px;
        font-weight: 300;
      }
  }
  button {
    margin-left: 20px;
    width: 110px;
    background-color: #1E3A8A;
    color: white;
    border-radius: 10px;
    font-family: 'Pretendard-Regular';
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
  }
  select {
    margin-left: 20px;
    width: 110px;
    color: #A1A1AA;
    font-family: 'Pretendard-Regular';
    font-size: 14px;
    font-weight: 300;
    text-align: center;
    border-radius: 5px;
    border-color: rgba(0, 0, 0, 0.2);
  }
`;

const Label = styled.div`
  color: #1E3A8A;
  font-size: 16px;
  font-weight: 600;
  width: 130px;
`;

const BtnWrapper = styled.div`
  button {
    font-family: 'Pretendard-Regular';
    font-weight: 500;
    font-size: 17px;
    background-color: #1E3A8A;
    color: white;
    padding: 19px;
    border-radius: 10px;
    border: none;
    width: 360px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: auto;
    margin-top: 20px;
  }
`;

const AgreeForm = styled.div`
  display: flex;
  justify-content: space-between;
  input {
    width: 18px;
    height: 18px;
  }
  p {
    margin-top: 0;
    margin-left: 5px;
    margin-right: 10px;
    color: #A1A1AA;
  }
`;

const StyledLink = styled(Link)`
  color: #1E3A8A;
`;