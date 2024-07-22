import React from 'react'

const Login = () => {
  return (
  <>
    <Wrapper>
      <Header>Logo</Header>
      <Title>로그인</Title>
      <Form>
        <Inputs>
          <div>아이디</div>
          <input></input>
          <div>비밀번호</div>
          <input></input>
        </Inputs>
      <BtnWrapper>
          <button>로그인</button>
      </BtnWrapper>
      <TextWrap>
        <div>휴알유 계정이 없으신가요?</div>
        <div>회원가입</div>
      </TextWrap>
      </Form>
    </Wrapper>
  </>
  )
}

export default Login

const Wrapper = styled.div`
  width: 350px;
  height: 380px;
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

const Header = styled.div`
  width: 100%;
  height: 7vh;
  border-bottom: 1.5px solid #d9d9d9;
`

const TextWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
`;

const BtnWrapper = styled.div`
  height: 100%;
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  button {
    font-weight: 800;
    background-color: #89cdf6;
    color: white;
    padding: 19px;
    border-radius: 10px;
    border: none;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 84px;
    cursor: pointer;
    &:hover {
      box-shadow: 0 0 3px 3px skyblue;
      color: black;
      background-color: white;
    }
  }
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-top: 15px;
  margin-bottom: 30px;
  color: #585858;
  font-family: SUITE;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  div {
    font-size: 14px;
    color: grey;
  }
`;

const Inputs = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 8px;
  input {
    font-size: 20px;
    height: 20px;
    width: 290px;
    border-radius: 10px;
    border: 1px solid #888;
    padding: 10px;
    margin-bottom: 1rem;
    &::placeholder {
      color: darkgray;
      font-size: 20px;
      font-weight: 500;
      font-family: "OTWelcomeRA";
    }
  }
`;

