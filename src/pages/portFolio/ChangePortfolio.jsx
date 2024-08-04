import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import HeaderHook from '../../hook/HeaderHook';
import 다람쥐 from '../../images/다람쥐.jpg';
import MdOutlinedFeed from '../../images/MdOutlineFeed.png';
import Vector from '../../images/Vector.png';
import { useNavigate } from 'react-router-dom';
import Minus from '../../images/AiOutlineMinusCircle.png';
import PlusSquare from '../../images/FiPlusSquare.png';
import EmojiPicker from 'emoji-picker-react';
import EmojiEmotion from '../../images/MdOutlineEmojiEmotions.png';
import saveimg from '../../images/FiSave.png';
import checkimg from '../../images/AiOutlineCheckSquare.png';


const ChangePortfolio = () => {
  const textarea = useRef();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [contentLists, setContentLists] = useState([[], [], []]);
  const [newContentTexts, setNewContentTexts] = useState(['', '', '']);
  const [showEmojiPickers, setShowEmojiPickers] = useState([false, false, false]);
  const [selectedEmojis, setSelectedEmojis] = useState(['', '', '']);
  const [isChecked, setIsChecked] = useState(false);
  const router = useNavigate();

  const handleResizeHeight = () => {
    textarea.current.style.height = 'auto';
    textarea.current.style.height = textarea.current.scrollHeight + 'px';
  };

  const handlePhoneNumberChange = (e) => {
    const userInput = e.target.value.replace(/\D/g, '');
    const formattedInput = userInput
      .replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')
      .slice(0, 13);

    setPhoneNumber(formattedInput);
  };

  const toReadMode = () => {
    router('/readportfolio');
  };

  const madeContent = (index) => {
    if (newContentTexts[index].trim() === '') return;
    const newContent = { id: contentLists[index].length + 1, text: newContentTexts[index] };
    const updatedContentLists = [...contentLists];
    updatedContentLists[index] = [...updatedContentLists[index], newContent];
    setContentLists(updatedContentLists);

    const updatedNewContentTexts = [...newContentTexts];
    updatedNewContentTexts[index] = '';
    setNewContentTexts(updatedNewContentTexts);
    // 여기에 백엔드 연결
  };

  const clickDelete = (index, id) => {
    const updatedContentLists = [...contentLists];
    updatedContentLists[index] = updatedContentLists[index].filter((item) => item.id !== id);
    setContentLists(updatedContentLists);
  };

  const handleEmojiClick = (index, emojiObject) => {
    const updatedSelectedEmojis = [...selectedEmojis];
    updatedSelectedEmojis[index] = emojiObject.emoji;
    setSelectedEmojis(updatedSelectedEmojis);

    const updatedShowEmojiPickers = [...showEmojiPickers];
    updatedShowEmojiPickers[index] = false;
    setShowEmojiPickers(updatedShowEmojiPickers);
  };

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };
  
  return (
    <>
      <HeaderHook></HeaderHook>
      <BackgroundWrapper />
      <ProfileImage>
        <img src={다람쥐} style={{ height: '128px', width: '128px', borderRadius: '50%' }}></img>
      </ProfileImage>
      <SaveBtn>
        <button onClick={toReadMode} style={{ cursor: 'pointer' }}><img src={saveimg}></img></button>
      </SaveBtn>
      <Body>
        <ProfileWrapper>
          <ProfileTitle>
            <SectionTitle style={{ position: 'relative', bottom: '10px' }}>@닉네임, who are you?</SectionTitle>
            <textarea
              ref={textarea}
              onChange={handleResizeHeight}
              rows={3}
              placeholder='나에게 맞는 수식어를 입력해주세요.'></textarea>
          </ProfileTitle>
          <Info>
            <InfoItem><InfoLabel>생년월일</InfoLabel><input type='date' ></input></InfoItem>
            <InfoItem><InfoLabel>학교 & 전공</InfoLabel><input type='text' placeholder='학교와 전공을 입력해주세요.'></input></InfoItem>
            <InfoItem><InfoLabel>연락처</InfoLabel><input type='tel' value={phoneNumber} onChange={handlePhoneNumberChange} placeholder='연락처를 입력해주세요.'></input></InfoItem>
            <InfoItem><InfoLabel>E-mail</InfoLabel><input type='email' placeholder='자주 쓰는 이메일을 입력해주세요.'></input></InfoItem>
            {/* 이메일은 백에서 받아오기 */}
          </Info>
        </ProfileWrapper>
        <AchievementWrapper>
          <SectionTitle>@닉네임 님의 휴 are you</SectionTitle>
          <p>휴학 기간에 달성한 사소한 목표부터 자랑하고픈 업적까지 모두 기록해보세요.</p>
          <AboutMeWrapper>
            <SubTitle>
              <button onClick={() => {
                const updatedShowEmojiPickers = [...showEmojiPickers];
                updatedShowEmojiPickers[0] = !updatedShowEmojiPickers[0];
                setShowEmojiPickers(updatedShowEmojiPickers);
              }}>
                {selectedEmojis[0] ? <span>{selectedEmojis[0]}</span> : <img src={EmojiEmotion} style={{ width: '24px', height: '24px' }}></img>}
              </button>
              @닉네임, Who are you?
              {showEmojiPickers[0] && <EmojiPicker onEmojiClick={(emojiObject) => handleEmojiClick(0, emojiObject)} />}
            </SubTitle>
            <ContentLists>
              {contentLists[0].map((item) => (
                <ContentList key={item.id}>
                  <img src={Minus} style={{ width: '16px', height: '16px' }} onClick={() => clickDelete(0, item.id)} />
                  <span>{item.text}</span>
                </ContentList>
              ))}
              <AddContent>
                <InputBox
                  type="text"
                  value={newContentTexts[0]}
                  onChange={(e) => {
                    const updatedNewContentTexts = [...newContentTexts];
                    updatedNewContentTexts[0] = e.target.value;
                    setNewContentTexts(updatedNewContentTexts);
                  }}
                  placeholder="@닉네임 님에 대해 이야기해주세요"
                />
                <img src={PlusSquare} style={{ width: '26px', height: '26px' }} onClick={() => madeContent(0)} />
              </AddContent>
            </ContentLists>
          </AboutMeWrapper>
          <HueWrapper>
            <ClearWrapper>
              <SubTitle>
                <button onClick={() => {
                  const updatedShowEmojiPickers = [...showEmojiPickers];
                  updatedShowEmojiPickers[1] = !updatedShowEmojiPickers[1];
                  setShowEmojiPickers(updatedShowEmojiPickers);
                }}>
                  {selectedEmojis[1] ? <span>{selectedEmojis[1]}</span> : <img src={EmojiEmotion} style={{ width: '24px', height: '24px' }}></img>}
                </button>
                달성한 빙고 한 눈에 보기
                {showEmojiPickers[1] && <EmojiPicker onEmojiClick={(emojiObject) => handleEmojiClick(1, emojiObject)} />}
              </SubTitle>
              <Content>
                <ContentLists>
                  {contentLists[1].map((item) => (
                    <ContentList key={item.id}>
                      <img src={Minus} style={{ width: '16px', height: '16px' }} onClick={() => clickDelete(1, item.id)} />
                      <span>{item.text}</span>
                    </ContentList>
                  ))}
                  <AddContent>
                    <InputBox
                      type="text"
                      value={newContentTexts[1]}
                      onChange={(e) => {
                        const updatedNewContentTexts = [...newContentTexts];
                        updatedNewContentTexts[1] = e.target.value;
                        setNewContentTexts(updatedNewContentTexts);
                      }}
                      placeholder="달성한 빙고에 대해 이야기해주세요."
                    />
                    <img src={PlusSquare} style={{ width: '26px', height: '26px' }} onClick={() => madeContent(1)} />
                  </AddContent>
                </ContentLists>
              </Content>
            </ClearWrapper>
            <ClearWrapper>
              <SubTitle>
                <button onClick={() => {
                  const updatedShowEmojiPickers = [...showEmojiPickers];
                  updatedShowEmojiPickers[2] = !updatedShowEmojiPickers[2];
                  setShowEmojiPickers(updatedShowEmojiPickers);
                }}>
                  {selectedEmojis[2] ? <span>{selectedEmojis[2]}</span> : <img src={EmojiEmotion} style={{ width: '24px', height: '24px' }}></img>}
                </button>
                다른 성과 한 눈에 보기
                {showEmojiPickers[2] && <EmojiPicker onEmojiClick={(emojiObject) => handleEmojiClick(2, emojiObject)} />}
              </SubTitle>
              <Content>
                <ContentLists>
                  {contentLists[2].map((item) => (
                    <ContentList key={item.id}>
                      <img src={Minus} style={{ width: '16px', height: '16px' }} onClick={() => clickDelete(2, item.id)} />
                      <span>{item.text}</span>
                    </ContentList>
                  ))}
                  <AddContent>
                    <InputBox
                      type="text"
                      value={newContentTexts[2]}
                      onChange={(e) => {
                        const updatedNewContentTexts = [...newContentTexts];
                        updatedNewContentTexts[2] = e.target.value;
                        setNewContentTexts(updatedNewContentTexts);
                      }}
                      placeholder="휴알유 이외의 성과에 대해 이야기해주세요."
                    />
                    <img src={PlusSquare} style={{ width: '26px', height: '26px' }} onClick={() => madeContent(2)} />
                  </AddContent>
                </ContentLists>
              </Content>
            </ClearWrapper>
          </HueWrapper>
        </AchievementWrapper>
        <PostWrapper style={{ float: 'bottom' }}>
          <PostTitle>
            <SectionTitle><img src={MdOutlinedFeed} style={{ height: '21px', width: '19px' }}></img>내가 쓴 포스트 보기</SectionTitle>
            <CheckBox onClick={handleCheck}>
              { isChecked ? 
                <img src={checkimg} style={{ width: '24px', height: '24px', paddingRight: '10px' }}></img> :
                <img src={Vector} style={{ width: '24px', height: '24px', paddingRight: '10px' }}></img> }
              <p>빙고 인증 후기만 보기</p>
            </CheckBox>
          </PostTitle>
          <PostContent>
            {/* 사용자가 입력한 목표 달성 후기 post & 빙고 외 후기 post가 보여짐 */}
          </PostContent>
        </PostWrapper>
      </Body>
    </>
  );
};

export default ChangePortfolio;

const BackgroundWrapper = styled.div`
 background-image: linear-gradient(to bottom, rgba(30, 58, 138, 0.8), #FFFFFF);
 width: 100%;
 height: 280px; 
`;

const Body = styled.div`
  padding-left: 160px;
  padding-right: 160px;
`;

const ProfileImage = styled.div`
  padding-left: 160px;
  position: relative;
  bottom: 60px;
`;

const SaveBtn = styled.div`
  display: flex;
  justify-content: end;
  padding-right: 10%;
  position: relative;
  bottom: 80px;
  button {
    background-color: white;
    width: 44px;
    height: 44px;
    border: 0.2px solid rgba(165, 176, 208, 1);
    border-radius: 8px;
    box-shadow: 1px 1px 3px 0px rgba(165, 176, 208, 1);
    cursor: pointer;
  }
  img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
  }
`;

const ProfileWrapper = styled.div`
  padding-bottom: 80px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
`;

const ProfileTitle = styled.div`
  padding-bottom: 30px;
  textarea {
    font-size: 16px;
    width: 98%;
    border: none;
    padding-left: 10px;
    resize: none;
    &::placeholder {
        color: #868686;
        font-family: 'Pretendard-Regular';
        font-size: 16px;
        font-weight: 400;
      }
  }
`;

const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  color: #1E3A8A;
  font-size: 20px;
  font-weight: 600;
  img {
    margin-right: 10px;
  }
`;

const SubTitle = styled.div`
  color: rgba(196, 196, 196, 1);
  font-size: 16px;
  font-weight: 700;
  width: 100%;
  height: 45px;
  border: 0.4px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  button {
    display: flex;
    align-items: center;
    background: none;
    border: none;
  }
  img {
    margin-right: 5px;
    margin-left: 8px;
  }
  span {
    display: flex;
    align-items: center;
    margin-left: 8px;
    font-size: 22px;
  }
`;

const Info = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

const InfoItem = styled.div`
  display: flex;
  padding-bottom: 20px;
  input {
    display: flex;
    align-items: center;
    border: none;
    font-size: 15px;
    font-weight: 500;
    width: 20%;
    border: 0.2px solid rgba(30, 58, 138, 0.2);
    border-radius: 8px;
    text-indent: 10px;
    &::placeholder {
        color: #A3A3A3;
        font-family: 'Pretendard-Regular';
        font-size: 16px;
        font-weight: 700;
        padding: 4px 10px 4px 0px;
    }
  }
`;

const InfoLabel = styled.div`
  color: #1E3A8A;
  font-weight: 700;
  width: 200px;
  height: 35px;
  display: flex;
  align-items: center;
`;

const AchievementWrapper = styled.div`
  padding-top: 40px;
  padding-bottom: 80px;
  p {
    font-size: 16px;
    font-weight: 500;
    color: #868686;
  }
`;

const AboutMeWrapper = styled.div`
  padding-top: 10px;
  /* padding-bottom: 80px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2); */
`;

const Content = styled.div`
`;

const HueWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ClearWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  width: 49%;
`;

const PostWrapper = styled.div`
  padding-top: 40px;
  border-top: 2px solid rgba(0, 0, 0, 0.2);
`;

const PostTitle = styled.div`
  display: flex;
  justify-content: space-between;
  input {
    color: #1E3A8A;
    border: none;
    &::placeholder{
      color: #1E3A8A;
    }
  }
`;

const PostContent = styled.div`
`;

const CheckBox = styled.div`
  display: flex;
  align-items: center;
`;

const ContentLists = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  background: white;
  border-radius: 10px;
  padding: 10px;
`;

const ContentList = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #747474;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const AddContent = styled.div`
  display: flex;
  align-items: center;
`;

const InputBox = styled.input`
  padding: 0 12px;
  border-radius: 8px;
  border: 0.4px solid rgba(0, 0, 0, 0.2);
  height: 25px;
  width: 80%;
  margin-top: 5px;
  margin-right: 10px;
  &::placeholder {
    font-size: 14px;
    font-weight: 700;
    color: #A3A3A3;
  }
`;
