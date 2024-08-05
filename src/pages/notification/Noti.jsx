import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { LogoutBtn, Headers, Logo, Nav, Header, Mypage, Modal } from '../../hook/HeaderHook'
import MyPageModal from '../../hook/MyPageModal'
import modalopenimg from '../../images/modalopen.png'
import modalcloseimg from '../../images/modalclose.png'
import { Link } from 'react-router-dom';
import { getReview } from '../../apis/reviewapis';
import { AiFillStar, AiOutlineSearch, AiOutlineStar } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { getHandleNoticeSaved, getHandleReviewSaved, getReview, getSearchByCategory, getSearchByKeyword } from '../../apis/reviewapis';
import { GoCheck } from 'react-icons/go';
import heartimg from '../../images/AiOutlineHeart.png';
import msgimg from '../../images/AiOutlineMessage.png';


const Noti = () => {
  const [selectedCategory, setSelectedCategory] = useState("채용(인턴)");
  const [notice, setNotice] = useState([]);
  const [review, setReview] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [showNotice, setShowNotice] = useState(true);
  const [showReview, setShowReview] = useState(true);
  const [searchKeyword, setSearchKeyword] = useState("인턴");
  
  const categorys = ["채용(인턴)", "자격증", "대외활동", "공모전", "취미", "여행", "자기계발", "휴식"];
  const categoryMap = {
    "채용(인턴)": "CAREER",
    "자격증": "CERTIFICATE",
    "대외활동": "OUTBOUND",
    "공모전": "CONTEST",
    "취미": "HOBBY",
    "여행": "TRAVEL",
    "자기계발": "SELFIMPROVEMENT",
    "휴식": "REST",
  };

  useEffect(() => {
    const savedAccessToken = localStorage.getItem("access_token");
    if (savedAccessToken) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleBtn = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleLogout = ()=>{
    localStorage.removeItem("access_token")
    localStorage.removeItem("refresh_token")
    window.location.reload();
  };

  const [selectedOptions, setSelectedOptions] = useState({
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    option5: '',
    option6: '',
    option7: '',
    option8: '',
  });

  const inputConfigs = {
    "채용(인턴)": [
      { placeholder: "직무", type: "select", options: ["영업/고객상담", "경영/사무/회계", "마케팅/광고/홍보", "생산/제조", "연구개발/설계", "IT", "서비스", "무역/유통", "의료", "건설", "교육", "디자인", "전문/특수", "미디어", "기타"] },
      { placeholder: "채용형태", type: "select", options: ["신입", "경력", "계약직", "인턴", "아르바이트"] },
      { placeholder: "근무 지역", type: "select", options: ["서울", "경기(인천, 세종)", "강원", "충청(대전)", "전라(광주)", "경상(대구, 울산, 부산)", "제주", "비대면"] },
      { placeholder: "지원 마감", type: "date" }
    ],
    "자격증": [
      { placeholder: "시험 분야", type: "select", options: ["경영/경제", "IT/컴퓨터", "어학", "디자인", "기타"] },
      { placeholder: "시험 날짜", type: "date" },
    ],
    "대외활동": [
      { placeholder: "활동 분야", type: "select", options: ["봉사", "기자단", "홍보단(서포터즈)", "강연", "멘토링", "모임(동아리)", "해외탐방", "기타"] },
      { placeholder: "활동 지역", type: "select", options: ["서울", "경기(인천, 세종)", "강원", "충청(대전)", "전라(광주)", "경상(대구, 울산, 부산)", "제주", "비대면"] },
      { placeholder: "활동 기간", type: "date" },
    ],
    "공모전": [
      { placeholder: "공모 분야", type: "select", options: ["기획/아이디어", "광고/마케팅", "사진/영상", "디자인/순수미술", "캐릭터/만화/게임", "공간/건축", "과학/공학", "예체능", "학술", "창업", "기타"] },
      { placeholder: "마감일", type: "date" },
    ],
    "취미": [],
    "여행": [],
    "자기계발": [],
    "휴식": []
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedOptions({ option1: '', option2: '', option3: '', option4: '' }); 
    getReviewsByCategory(categoryMap[category]);
  };

  const getAllReview = async () => {
    try {
      const response = await getReview();
      const review = response.map((item) => ({
        id: item.id,
        title: item.title,
        image: item.images[0]?.image || '',
      }));
      setReview(review);
    } catch (error) {
      console.error('Error in getReview:', error.response ? error.response.data : error.message);
    }
  };

  const getReviewsByCategory = async (category) => {
    try {
      const response = await getSearchByCategory(category);
      const notice = response.notice.map((item) => ({
        id: item.id,
        large_category: item.large_category,
        author: item.author,
        created_at: item.created_at,
        title: item.title,
        image: item.image_url,
        saved: item.saved,
      }));
      setNotice(notice);
      const review = response.review.map((item) => ({
        id: item.id,
        author: item.author,
        created_at: item.created_at,
        title: item.title,
        image: item.images[0]?.image || '',
        likes_count: item.likes_count,
        comments_count: item.comments_count,
        saved: item.saved,
      }));
      setReview(review);
    } catch (error) {
      console.error('Error in getReviewByCategory:', error.response ? error.response.data : error.message);
    }
  };

  const handleStorage = async (id, type) => {
    try {
      if (type === 'notice') {
        const response = await getHandleNoticeSaved(id);
        setNotice((prevNotice) =>
          prevNotice.map((item) =>
            item.id === id ? { ...item, saved: !item.saved } : item
          )
        );
      } else {
        const response = await getHandleReviewSaved(id);
        setReview((prevReview) =>
          prevReview.map((item) =>
            item.id === id ? { ...item, saved: !item.saved } : item
          )
        );
      }
    } catch (error) {
      console.error('Error in getHandleLike:', error.response ? error.response.data : error.message);
      throw error;
    }
  };

  const navigate = useNavigate();

  const goReview = (id) => {
    navigate(`/viewreview/${id}`);
  };
  const goNotice = (id) => {
    navigate(`/viewnotice/${id}`);
  };

  const doSearch = async () => {
    try {
      const searchParams = new URLSearchParams();

      // Conditionally add each parameter based on its value
      if (searchKeyword) {
        searchParams.set('search', searchKeyword);
      }

      if (selectedCategory) {
        searchParams.set('large_category', categoryMap[selectedCategory]);
      }

      if (selectedOptions.option3) {
        searchParams.set('area', selectedOptions.option3);
      }

      if (selectedOptions.option1) {
        searchParams.set('field', selectedOptions.option1);
      }

      if (selectedOptions.option4) {
        searchParams.set('start_date', selectedOptions.option4);
        searchParams.set('end_date', selectedOptions.option4);
      }

      console.log(searchParams.toString());

      const response = await getSearchByKeyword(searchParams.toString());
      const notice = response.notice.map((item) => ({
        id: item.id,
        author: item.author,
        created_at: item.created_at,
        title: item.title,
        image: item.image_url,
        saved: item.saved,
      }));
      const review = response.review.map((item) => ({
        id: item.id,
        author: item.author,
        created_at: item.created_at,
        title: item.title,
        image: item.images[0]?.image || '',
        likes_count: item.likes_count,
        comments_count: item.comments_count,
        saved: item.saved,
      }));
      setNotice(notice);
      setReview(review);
      console.log(selectedOptions);
      console.log(searchParams);
      console.log(notice, review);
      
      if (notice.length === 0 && review.length === 0) {
        alert('검색 결과가 없습니다.');
      }
    } catch (error) {
      console.error('Error in getReviewByCategory:', error.response ? error.response.data : error.message);
    }
  };

  useEffect(() => {
    getReviewsByCategory("CAREER");
  }, []);

  return (
    <>
      <HeaderofHome>
        <LogoutBtn>
          { isLoggedIn ? 
            <button onClick={handleLogout}>로그아웃</button> :
            <SignupLink>
              <StyledLink to="/signup" style={{color: 'rgba(27, 52, 124, 1)'}}>회원가입</StyledLink>
              <span style={{color: 'rgba(196, 196, 196, 1)'}}>|</span>
              <StyledLink to="/login" style={{color: 'rgba(81, 81, 81, 1)'}}>로그인</StyledLink>
            </SignupLink>
          }
        </LogoutBtn>
        <Headers>
          <Logo to ="/">Logo</Logo>
          <Nav>
            { isLoggedIn ?
            <>
              <Header to="/test/0">휴학 유형 테스트</Header>
              <Header to="/view">투두리스트 빙고</Header>
              <Header to="/notification">공고/후기</Header>
              <Header to="/readportfolio">나의 포트폴리오</Header>
              <Mypage>
                <Header to="/mypage">마이페이지</Header>
                <Modal onClick={handleBtn}>
                  { isModalOpen ?
                    <img src={modalopenimg}></img> :
                    <img src={modalcloseimg}></img> }
                </Modal>
              </Mypage> 
            </> :
            <>
              <Header to="/test/0">휴학 유형 테스트</Header>
              <Header to="/notification">공고/후기</Header>
            </> }
          </Nav>
        </Headers>
        <MyPageModal isOpen={isModalOpen}></MyPageModal>
      </HeaderofHome>
      <Body>
        <SearchDom>
          <SearchBox
            placeholder="키워드 검색"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
          <AiOutlineSearch size={40} onClick={doSearch} />
        </SearchDom>
        <NavigationBar>
          {categorys.map((category) => (
            <Navigation key={category} onClick={() => handleCategoryClick(category)}>
              {category}
            </Navigation>
          ))}
        </NavigationBar>
        <Line>{selectedCategory}</Line>
        <Bar>
          <CheckDom>
            <Check onClick={() => setShowNotice(!showNotice)}>
              <CheckBox>
                {showNotice && <GoCheck size={19} />}
              </CheckBox>
              <div>공고</div>
            </Check>
            <Check onClick={() => setShowReview(!showReview)}>
              <CheckBox>
                {showReview && <GoCheck size={19} />}
              </CheckBox>
              <div>후기</div>
            </Check>
          </CheckDom>
          <DropdownDom>
            {inputConfigs[selectedCategory]?.map((config, index) => (
              <Dropdown key={index}>
                {config.type === "select" ? (
                  <select
                    onChange={(e) =>
                      setSelectedOptions({
                        ...selectedOptions,
                        [`option${index + 1}`]: e.target.value,
                      })
                    }
                  >
                    <option>{config.placeholder}</option>
                    {config.options.map((option, idx) => (
                      <option key={idx} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <Line style={{ fontSize: '12px' }}>
                    <div>{config.placeholder}</div>
                    <input
                      type={config.type}
                      placeholder={config.placeholder}
                      onChange={(e) =>
                        setSelectedOptions({
                          ...selectedOptions,
                          [`option${index + 1}`]: e.target.value,
                        })
                      }
                    />
                  </Line>
                )}
              </Dropdown>
            ))}
            <AiOutlineSearch size={30} onClick={doSearch} />
          </DropdownDom>
        </Bar>
        <ContentDom>
          {showNotice &&
            notice.map((item) => (
              <Content key={item.id}>
                <WriterDom>
                  <div>{item.author}</div>
                  <div>{item.created_at}</div>                  
                  {item.saved ? (
                    <AiFillStar size={20} style={{ color: 'rgba(252, 211, 77, 1)' }} 
                    onClick={()=> handleStorage(item.id, 'notice')}/>
                  ) : (
                    <AiOutlineStar size={20} style={{ color: 'black' }} 
                    onClick={()=> handleStorage(item.id, 'notice')}/>
                  )}
                </WriterDom>
                <PhotoBox
                  src={item.image}
                  alt={item.title}
                  onClick={() => goNotice(item.id)}
                />
                <div>{item.title}</div>
                <div>
                  <img src={msgimg} />
                  {item.comments_count}
                </div>
              </Content>
            ))}
          {showReview &&
            review.map((item) => (
              <Content key={item.id}>
                <WriterDom>
                  <div>{item.author}</div>
                  <div>{item.created_at}</div>
                  <AiOutlineStar
                    size={20}
                    onClick={() => handleStorage(item.id, 'review')}
                    style={{ color: item.saved ? 'yellow' : 'black' }}
                  />
                </WriterDom>
                <PhotoBox
                  src={item.image}
                  alt={item.title}
                  onClick={() => goReview(item.id)}
                />
                <div>{item.title}</div>
                <div>
                  <img src={heartimg} style={{ color: 'rgba(255, 0, 0, 1)' }} />
                  {item.likes_count}{' '}
                  <img src={msgimg} style={{ color: 'rgba(27, 52, 124, 1)' }} />
                  {item.comments_count}
                </div>
              </Content>
            ))}
        </ContentDom>
      </Body>
    </>
  );
};

export default Noti;

const HeaderofHome = styled.div`
`;

const SignupLink = styled(Link)`
  display: flex;
  gap: 10px;
  font-size: 14px;
  font-weight: 500;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 40px;
  scroll-behavior: smooth;
`;
const Line = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 80px;
  border-bottom: 0.2px solid rgba(30, 58, 138, 0.5);
  padding: 1%;
  padding-left: 4.8%;
  font-size: 24px;
  color: rgba(30, 58, 138, 1);
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.25);
`;
const Bar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 1%;
  padding-top: 5%;
  padding-left: 4.8%;
  font-size: 24px;
  color: rgba(142, 156, 196, 1);
`;
const DropdownDom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
  color: rgba(116, 116, 116, 1);
  text-decoration: none;
  cursor: pointer;
  border: 0.4px solid rgba(27, 52, 124, 1);
  border-radius: 10px;
  height: 40px;
`;
const Dropdown = styled.div`
  select, input {
    font-size: 18px;
    padding: 5px;
    border: 1px solid white;
  }
`;
const SearchDom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 30%;
  height: 40%;
  border-radius: 40px;
  border: 1px solid rgba(153, 166, 202, 1);
  padding: 15px 20px;
  margin-left: auto;
`;
const SearchBox = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  font-size: 20px;
`;
const NavigationBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
  height: 50px;
  padding: 1%;
  margin-top: 2%;
  border: 0.2px solid rgba(30, 58, 138, 1);
`;
const Navigation = styled(Link)`
  font-size: 20px;
  font-weight: 600;
  color: rgba(116, 116, 116, 1);
  text-decoration: none;
  cursor: pointer;
`;
const CheckDom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 20px;
  font-weight: 600;
  color: rgba(116, 116, 116, 1);
  text-decoration: none;
  cursor: pointer;
  gap: 10px;
`;
const Check = styled.div`
 display: flex;
 align-items: center;
 cursor: pointer;
`;
const CheckBox = styled.div`
  width: 16px;
  height: 16px;
  border: 1.2px solid rgba(30, 58, 138, 1);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentDom = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1%;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 70%;
  color: rgba(27, 52, 124, 1);
  padding: 3%;
`;
const WriterDom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const PhotoBox = styled.img`
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;
