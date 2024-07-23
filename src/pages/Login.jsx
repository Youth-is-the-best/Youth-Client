import React from 'react'
import styled from 'styled-components'
import { UserOutlined } from '@ant-design/icons'
import { LockOutlined } from '@ant-design/icons'
import { EyeOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import transimg from '../images/transparent.png'

const Login = () => {
  return (
  <>
    <Header>Logo</Header>
    <Wrapper>
      <Title>로그인</Title>
      <Form>
        <Inputs>
          <InputBox>
            <UserOutlined />
            <input placeholder='아이디를 입력해주세요.'></input>
            <img src={transimg} />
          </InputBox>
          <InputBox>
            <LockOutlined />
            <input type='password' placeholder='비밀번호를 입력해주세요.'></input>
            <EyeOutlined />
          </InputBox>
        </Inputs>
      <BtnWrapper>
          <button>로그인</button>
      </BtnWrapper>
      <TextWrapper>
        <div>휴알유 계정이 없으신가요?</div>
        <SignupLink to="/signup">회원가입</SignupLink>
      </TextWrapper>
      </Form>
    </Wrapper>
  </>
  )
}

export default Login

const Header = styled.div`
  width: 100%;
  height: 11vh;
  border-bottom: 1.5px solid #d9d9d9;
  background-color: #1E3A8A;
  text-align: center;
`;

const Wrapper = styled.div`
  width: 30%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  margin: auto;
  padding: 8%;
`;

const Title = styled.div`
  padding: 15px;
  width: 390px;
  text-align: center;
  color: rgb(81, 81, 81);
  font-size: 28px;
  font-weight: 600;
  line-height: 28.64px;
  margin-bottom: 10px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Inputs = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
`;

const InputBox = styled.div`
  width: 400px;
  height: 52px;
  border-radius: 10px;
  background-color: rgba(30, 58, 138, 0.1);
  margin-top: 15px;
  padding: 5px 10px 5px 10px;
  gap: 12px;
  font-size: 25px;
  color: #616164;
  display: flex;
  justify-content: space-around;
    input {
      width: 70%;
      border: none;
      outline: none;
      background-color: rgba(250, 204, 21, 0);
      &::placeholder {
        color: #A1A1AA;
        font-family: 'Pretendard-Regular';
        font-size: 18px;
        font-weight: 400;
      }
     }
`;

const BtnWrapper = styled.div`
  margin-top: 1.5rem;
  button {
    font-family: 'Pretendard-Regular';
    font-weight: 500;
    font-size: 17px;
    background-color: #1E3A8A;
    color: white;
    padding: 19px;
    border-radius: 10px;
    border: none;
    width: 418px;
    height: 62px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

const TextWrapper = styled.div`
  margin-top: 1rem;
  font-size: 16px;
  font-weight: 300;
  color: #A1A1AA;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 65%;
`;

const SignupLink = styled(Link)`
  color: #1E3A8A;
  font-size: 17px;
`;