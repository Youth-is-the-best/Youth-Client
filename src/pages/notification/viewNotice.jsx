import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import HeaderHook from '../../hook/HeaderHook';
import { getHandleLike, getHandleNoticeLike, getHandleNoticeStorage, getNoticeById, getReviewById } from '../../apis/reviewapis';
import { useNavigate, useParams } from 'react-router-dom';
import { FiCheck } from 'react-icons/fi';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { AiOutlineHeart, AiOutlineStar } from 'react-icons/ai';

const ViewNotice = () => {
  const { id } = useParams();
  const [info, setInfo] = useState(null);
  const [images, setImages] = useState([]);
  const [detailplans, setDetailplans] = useState([]);
  const [isStarred, setIsStarred] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const getNotice = async (id) => {
    try {
      const response = await getNoticeById(id);
      const info = {
        id: response.id,
        title: response.title,
        large_category: response.large_category,
        start_date: response.start_date,
        end_date: response.end_date,
        content: response.content,
        duty: response.duty,
        employment_form: response.employment_form,
        area: response.area,
        host: response.host,
        app_fee: response.app_fee,
        date: response.date,
        app_due: response.app_due,
        field: response.field,
        procedure: response.procedure,
        likes: response.likes,
        large_category_display: response.large_category_display,
        author_id: response.author_id,
        author: response.author,
        created_at: response.created_at,
        profile: response.profile,
      };
      setInfo(info);

      const images = response.images ? response.images.map((item) => ({
        image_id: item.image_id,
        image: item.image,
      })) : [];
      setImages(images);

      const detailplans = response.detailplans ? response.detailplans.map((item) => ({
        content: item.content,
      })) : [];
      setDetailplans(detailplans);
      // console.log(response);
    } catch (error) {
      console.error('Error in getReview:', error.response ? error.response.data : error.message);
      throw error;
    }
  }

  useEffect(() => {
    if (id) {
      getNotice(id);
    }
  }, [id]);

  const navigate = useNavigate();
  const goNoti = () => { 
    navigate("/notification");
  }

  const handleStorage = async () => {
    try {
      const response = await getHandleNoticeStorage(id);
      console.log(response);
      setIsStarred(!isStarred);
    } catch (error) {
      console.error('Error in getHandleLike:', error.response ? error.response.data : error.message);
      throw error;
    }
  };

  const handleLike = async () => {
    try {
      const response = await getHandleNoticeLike(id);
      console.log(response);
      setIsLiked(!isLiked);
    } catch (error) {
      console.error('Error in getHandleLike:', error.response ? error.response.data : error.message);
      throw error;
    }
  };

  return (
    <>
      <HeaderHook />
      <Line style={{ color: 'rgba(27, 52, 124, 1)', justifyContent: 'space-between', padding: '2%' }}>
        <MdOutlineKeyboardBackspace onClick={goNoti} size={40} />
        <Line style={{ gap: '10%' }}>
          <AiOutlineStar 
            size={40} 
            onClick={handleStorage} 
            style={{ color: isStarred ? 'yellow' : 'black' }} 
          />
          <AiOutlineHeart 
            size={40} 
            onClick={handleLike} 
            style={{ color: isLiked ? 'red' : 'black' }} 
          />
        </Line>
      </Line>
      <BigBody>
        <Body style={{ padding: '80px' }}>
          <Line style={{ justifyContent: 'space-between' }}>
            <StyledTitle>{info ? info.title : 'Loading...'}</StyledTitle>
            <Line style={{ gap: '3%' }}>
              <Infobutton>{info ? info.author : ''}</Infobutton>
              <Infobutton>{info ? info.large_category_display : ''}</Infobutton>
            </Line>
          </Line>
          <InfoDom>
            {info && info.host ? (
              <Line>
                <Category>주최사</Category>
                <div>{info.host}</div>
              </Line>
            ) : null}
            {info && info.field ? (
              <Line>
                <Category>활동 분야</Category>
                <div>{info.field}</div>
              </Line>
            ) : null}
            {info && info.app_fee ? (
              <Line>
                <Category>응시료</Category>
                <div>{info.app_fee}원</div>
              </Line>
            ) : null}
            {info && info.duty ? (
              <Line>
                <Category>직무</Category>
                <div>{info.duty}</div>
              </Line>
            ) : null}
            {info && info.employment_form ? (
              <Line>
                <Category>채용 형태</Category>
                <div>{info.employment_form}</div>
              </Line>
            ) : null}
            {info && info.area ? (
              <Line>
                <Category>활동 지역</Category>
                <div>{info.area}</div>
              </Line>
            ) : null}
            {info && info.app_due ? (
              <Line>
                <Category>지원 마감</Category>
                <div>{info.app_due}</div>
              </Line>
            ) : null}
            {info && info.prep_period ? (
              <Line>
                <Category>준비 기간</Category>
                <div>{info.prep_period}</div>
              </Line>
            ) : null}
            {info && info.start_date ? (
              <Line>
                <Category>활동 기간</Category>
                <div>{info.start_date} ~ {info.end_date}</div>
              </Line>
            ) : null}
          </InfoDom>
          <ReviewDom>
            <Category2>세부 계획</Category2>
            {detailplans && detailplans.map((item, index) => (
              <Line key={index}>
                <FiCheck />
                <CheckList>
                  {item.content}
                </CheckList>
              </Line>
            ))}
            {info && info.procedure ? (
              <>
                <Category2>모집 절차</Category2>
                <div>{info.procedure}</div>
              </>
            ) : null}
            <Category2>활동내용/합격팁/소감</Category2>
            <div>{info ? info.content : ''}</div>
          </ReviewDom>
          <PhotoDom>
            {images && images.map((item) => (
              <img key={item.image_id} src={item.image} alt="사진" style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '10px' }} />
            ))}
          </PhotoDom>
        </Body>
      </BigBody>
    </>
  )
};

export default ViewNotice;

const Line = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
`
const Row = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
  // justify-content: center;
  padding: 10px;
`

const ReviewDom = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
  padding-top: 2%;
  padding-left: 21%;
  padding-right: 21%;
  width: 60%;
  gap: 30px;
`

const BigBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  padding: 50%;
`
const StyledTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: rgba(27, 52, 124, 1);
`
const CheckList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  font-size: 16px;
`

const Infobutton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: rgba(81, 81, 81, 1);
  min-width: 100px;
  padding-left: 10px;
  padding-right: 10px;
  height: 30px;
  border: 0.2px solid rgba(81, 81, 81, 1);
  border-radius: 10px;
`

const InfoDom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  border-top: 1px solid rgba(142, 156, 196, 1);
  border-bottom: 1px solid rgba(142, 156, 196, 1);
  padding-top: 4%;
  padding-bottom: 4%;
`

const InputBox = styled.input`
  padding: 5px;
  border-radius: 10px;
  border: 0.2px solid rgba(142, 156, 196, 1);
  font-size: 15px;
  width: 50%;
  color: rgba(142, 156, 196, 1);
`

const Selector = styled.select`
  border: 0.2px solid rgba(142, 156, 196, 1);
  font-size: 15px;
  padding: 5px;
  border-radius: 10px;
  width: 260px;
  color: rgba(142, 156, 196, 1);
`

const DateInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  height: 20px;
  width: 260px;
  padding: 5px;
  border-radius: 10px;
  border: 0.2px solid rgba(142, 156, 196, 1);
  color: rgba(142, 156, 196, 1);
  border-radius: 10px;
  // padding: 8px;
  gap: 5px;
`;

const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  font-size: 24px;
  color: rgba(27, 52, 124, 1);
`
const Category2 = styled.div`
  font-size: 24px;
  color: rgba(27, 52, 124, 1);
`
const PhotoDom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 5%;
  margin-top: 5%;
`