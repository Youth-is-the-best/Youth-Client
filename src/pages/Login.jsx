import React, { useState } from 'react'
import styled from 'styled-components'
import { FiUser , FiLock } from "react-icons/fi";
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import transimg from '../images/transparent.png'
import logo from '../images/logo.png'
import { useForm } from '../hook/useForm';
import { login } from '../apis/user'

const Login = () => {
  const [username, onChangeUsername] = useForm();
  const [password, onChangePw] = useForm();

  const [showPw, setShowPw] = useState(false);
  const pwToggle = () => {
    setShowPw(prevState => !prevState);
  };

  const onClick = async () => {
    try{
      const result = await login(username, password);
      localStorage.setItem("access", result.accessToken);
      localStorage.setItem("refresh", result.refreshToken);
    } catch(error) {
      alert("아이디 또는 비밀번호를 확인하세요.")
    }
  }

  return (
  <>
    <Header>
      <img src={logo}></img>
    </Header>
    <Wrapper>
      <Title>로그인</Title>
      <Form>
        <Inputs>
          <InputBox>
            <ReactIcon>
              <FiUser />
            </ReactIcon>
            <input value={username} onChange={onChangeUsername} placeholder='아이디를 입력해주세요.'></input>
            <img src={transimg} />
          </InputBox>
          <InputBox>
            <ReactIcon>
              <FiLock />
            </ReactIcon>
            <input value={password} onChange={onChangePw} type={showPw ? 'text' : 'password'} placeholder='비밀번호를 입력해주세요.'></input>
            {showPw ? 
                <EyeOutlined onClick={pwToggle} style={{ cursor: 'pointer' }} /> : 
                <EyeInvisibleOutlined onClick={pwToggle} style={{ cursor: 'pointer' }} />
            }
          </InputBox>
        </Inputs>
      <LoginWrapper>
        <input id="auto" type="radio" />
        <StyledLink>아이디/비밀번호 찾기</StyledLink>
      </LoginWrapper>
      <BtnWrapper>
          <button onClick={onClick}>로그인</button>
      </BtnWrapper>
      <TextWrapper>
        <div>휴알유 계정이 없으신가요?</div>
        <StyledLink to="/signup">회원가입</StyledLink>
      </TextWrapper>
      </Form>
    </Wrapper>
  </>
  )
}

export default Login

export const Header = styled.div`
  width: 100%;
  height: 11vh;
  border-bottom: 1.5px solid #d9d9d9;
  background-color: #1E3A8A;
  text-align: center;
  position: relative;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Wrapper = styled.div`
  width: 30%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  flex-shrink: 0;
  border-radius: 30px;
  border: 3px solid #89cdf6;
  background: #fafffa;
  padding: 30px;
  margin-bottom: 5%;
  z-index: 1;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
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

const StyledLink = styled(Link)`
  color: #1E3A8A;
  font-size: 17px;
`;

const LoginWrapper = styled.div`
  width: 420px;
  display: flex;
  justify-content: space-between;
  margin-top: 1.2rem;
`;

const ReactIcon = styled.div`
`