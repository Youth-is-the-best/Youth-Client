import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../images/logo.png'
import { useForm } from '../hook/useForm'
import { signUp, isUsernameDuplicate, SendAuthCodeToEmail, postAuthCode } from '../apis/user'
  
const Signup = () => {
  const selectList = ["인문계열", "사회계열", "교육계열", "공학계열", "자연계열", "의약계열", "예체능계열"];
  const [college, setCollege] = useState("계열 선택")
  const handleSelect = (e) => {
    setCollege(e.target.value);
  };

  const [firstName, onChangeName] = useForm();
  const [email, onChangeEmail] = useForm();
  const [authcode, onChangeAuthcode] = useForm();
  const [confirmPassword, onChangeConfirmPassword] = useForm();
  const [referrer, onChangeReferrer] = useForm();

  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [usernameAvailable, setUsernameAvailable] = useState(null);

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // const [referrerAvailable, setReferrerAvailable] = useState(null);

  const checkUsername = async () => {
    try {
      const available = await isUsernameDuplicate(username);
      setUsernameAvailable(available);
    } catch(error) {
      setUsernameAvailable(null);
    }
  };

  // const checkReferrer = async () => {
  //   try {
  //     const available = await isReferrerExist(referrer);
  //     setReferrerAvailable(available);
  //   } catch(error) {
  //     setReferrerAvailable(null);
  //   }
  // };

  const validateUsername = (username) => {
    const regex = /^[a-zA-Z_]+$/;
    return regex.test(username);
  };

  const onChangeUsername = (e) => {
    const username = e.target.value;
    if (validateUsername(username)) {
      setUsernameError('');
    } else {
      setUsernameError('아이디 형식이 올바르지 않습니다.');
    }
    setUsername(username);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    if (validatePassword(password)) {
      setPasswordError('');
    } else {
      setPasswordError('비밀번호 형식이 올바르지 않습니다.');
    }
    setPassword(password);
  };
  
  const isSame = (password, confirmPassword) => {
    return password === confirmPassword;
  };

  const router = useNavigate();

  const onClick = async () => {
    await signUp(password, username, firstName, college);
    // await signUp(password, username, hash, firstName, university, college);
    router("/user/login/")
  };

  const sendAuthcode = async () => {
    const answer =
      {
        "request_type": "1",
        "email": email,
      }
    console.log(answer);
    const response = await SendAuthCodeToEmail(answer);
    console.log("Response:", response);
  };

  const checkAuthcode = async () => {
    const answer =
    {
      "request_type": "2",
      "email": email,
      "verif_code" : authcode,
    }
    console.log(answer);
    const response = await postAuthCode(answer);
    console.log("Response:", response);
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
          <Label htmlFor="firstName">이름*</Label>
          <input value={firstName} onChange={onChangeName} id="firstName" type="text" placeholder="ex. 홍길동" />
        </FormGroup>
        <FormGroup style={{ paddingBottom : 0 }}>
          <Label htmlFor="email">이메일*</Label>
          <input value={email} onChange={onChangeEmail} id="email" type="email" placeholder="학교 이메일 주소를 입력하세요." />
          <button onClick={sendAuthcode}>인증번호 발송</button>
        </FormGroup>
        <FormGroup> 
          <Label></Label>
          <input 
            value={authcode} 
            onChange={onChangeAuthcode} 
            id="authCode" 
            type="text" 
            placeholder="인증번호 6자리" />
          <span>4:59</span>
          <button onClick={checkAuthcode}>인증번호 확인</button>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="school">학교 정보*</Label>
          <input></input>
          <select onChange={handleSelect} value={college} defaultValue="계열 선택">
            <option disabled hidden value="계열 선택">계열 선택</option>
            {selectList.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
             ))}
          </select>
        </FormGroup>
        <FormGroup style={{ paddingBottom: usernameError && username.length > 0 ? 5 : 15 }}>
          <Label htmlFor="username">아이디(닉네임)*</Label>
          <input 
            value={username} 
            onChange={onChangeUsername} 
            id="username" 
            type="text"
            placeholder="영문 대소문자, 특수문자 _ 가능"
            style={{ borderColor: usernameError && username.length ? '#FF0000' : 'initial'}} />
          <button onClick={checkUsername}>중복 확인</button>
        </FormGroup>
        <MessageGroup>
          {
            usernameAvailable === false && <ErrorMessage>이미 사용 중인 아이디입니다.</ErrorMessage>
          } {
            usernameError && username.length > 0 && <ErrorMessage>{usernameError}</ErrorMessage>
          }
        </MessageGroup>
        <FormGroup style={{ paddingBottom: passwordError && password.length > 0 ? 5 : 15 }}>
          <Label htmlFor="password">비밀번호*</Label>
          <input 
            value={password} 
            onChange={onChangePassword} 
            id="password" 
            type="password" 
            placeholder="8자리 이상(숫자, 알파벳, 특수문자 1자 이상 포함)"
            style={{ borderColor: passwordError && password.length ? '#FF0000' : 'initial'}} />
        </FormGroup>
        <MessageGroup>
          {
            passwordError && password.length > 0 && <ErrorMessage>{passwordError}</ErrorMessage>
          }
        </MessageGroup>
        <FormGroup style={{ paddingBottom: !isSame(password, confirmPassword) && confirmPassword.length > 0 ? 5 : 15 }} >
          <Label htmlFor="confirmPassword">비밀번호 확인*</Label>
          <input 
            value={confirmPassword} 
            onChange={onChangeConfirmPassword} 
            id="confirmPassword" 
            type="password"
            style={{ borderColor: !isSame(password, confirmPassword)  && confirmPassword.length > 0 ? '#FF0000' : 'initial'}}  />
          </FormGroup>
          <MessageGroup>
          <ErrorMessage>
              {
                !isSame(password, confirmPassword) && confirmPassword.length > 0 && (
                  <div id='pwCheck'>비밀번호와 확인 비밀번호를 동일하게 입력해주세요.</div>
                )
              }
            </ErrorMessage>
        </MessageGroup>
        <FormGroup>
          <Label htmlFor="referrer">추천인 아이디<br />(선택)</Label>
          <input 
            value={referrer} 
            onChange={onChangeReferrer} 
            id="referrer" 
            type="text"
            // style={{ borderColor: referrerAvailable && referrer.length > 0 ? '#1E3A8A' : '#FF0000' }} 
            />
          <button onClick={checkUsername}>아이디 확인</button>
        </FormGroup>
        {/* <MessageGroup>
          {
            referrerAvailable === true && <SuccessMessage>추천인 아이디 확인이 완료되었습니다.</SuccessMessage>
          } {
            referrerAvailable === false && <ErrorMessage>입력하신 아이디를 찾을 수 없습니다. 다시 입력해주세요.</ErrorMessage>
          }
        </MessageGroup> */}
        <FormGroup>
          <Label htmlFor="agreement">이용약관 동의*</Label>
          <AgreeForm>
            <input id="agreement" type="radio" /><p>이용약관에 동의합니다.</p>
            <StyledLink>약관보기</StyledLink>
          </AgreeForm>
        </FormGroup>
        <BtnWrapper>
          <button onClick={onClick}>가입 하기</button>
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
  width: 620px;
  height: 570px;
`;

const FormGroup = styled.div`
  display: flex;
  padding: 15px;
  input {
    width: 330px;
    height: 35px;
    border-radius: 10px;
    border-color: rgba(0, 0, 0, 0.1);
    &::placeholder {
        padding-left: 10px;
        color: #A1A1AA;
        font-family: 'Pretendard-Regular';
        font-size: 16px;
        font-weight: 300;
      }
  }
  button {
    margin-left: 8px;
    width: 110px;
    background-color: white;
    border-color: rgba(30, 58, 138, 0.6);
    color: rgba(30, 58, 138, 0.6);
    border-radius: 10px;
    font-family: 'Pretendard-Regular';
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;
  }
  select {
    margin-left: 8px;
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
    font-size: 15px;
    background-color: #1E3A8A;
    color: white;
    padding: 19px;
    border-radius: 10px;
    border: none;
    width: 120px;
    height: 43px;
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

const MessageGroup = styled.div`
  padding-left: 155px;
`;

const ErrorMessage = styled.div`
  color: #FF0000;
  font-size: 13px;
  font-weight: 500;
`;

const SuccessMessage = styled.div`
  color: #1E3A8A;
  font-size: 13px;
  font-weight: 500;
`;

