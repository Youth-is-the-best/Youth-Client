import React, { useEffect, useState } from 'react';
import { MdOutlineKeyboardBackspace, MdOutlineNearMe } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Body } from '../Home';
import HeaderHook from '../../hook/HeaderHook';
import { getInfo, getReviewInInfo } from '../../apis/testapis';
import { Category } from './MadeBingo';
import Bingomain from './Bingomain';

const BingoInfo = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [info, setInfo] = useState(null);
  const [review, setReview] = useState([]);
  const [isNotice, setIsNotice] = useState(false);

  const goHome = () => {
    navigate("/bingo");
  };

  const getInfos = async (id) => {
    try {
      const response = await getInfo(id);
      const info = {
        large_category_display: response.large_category_display,
        title: response.title,
        app_fee: response.app_fee,
        app_due: response.app_due,
        start_date: response.start_date,
        end_date: response.end_date,
        host: response.host,
        prep_period: response.prep_period,
        area: response.area,
        employment_form: response.employment_form,
        field: response.field,
        duty: response.duty,
        is_notice: response.is_notice,
        notice_id: response.notice_id,
      };
      setInfo(info);
      setIsNotice(info.is_notice);
      // console.log(info);
      // console.log(response);
    } catch (error) {
      console.error('Error in getInfos:', error.response ? error.response.data : error.message);
      throw error;
    }
  };

  const getReview = async (id) => {
    try {
      const response = await getReviewInInfo(id);
      const review = response.data.map((item) => ({
        id: item.id,
        title: item.title,
        image: item.images[0]?.image || '',
      }));
      setReview(review);
      // console.log(response);
      // console.log(review);
    } catch (error) {
      console.error('Error in getReview:', error.response ? error.response.data : error.message);
      throw error;
    }
  };

  const goNotice = (id) => {
    navigate(`/viewnotice/${id}`);
  }

  const goReview = (id) => {
    navigate(`/viewreview/${id}`);
  }
  
  useEffect(() => {
    if (id) {
      getInfos(id);
      getReview(id);
    }
  }, [id]);

  return (
    <>
      <HeaderHook />
      <Body>
        <Bingomain/>
        <RightDom>
          <TitleLine>
            <MdOutlineKeyboardBackspace onClick={goHome} size={30} />
            {isNotice && (
              <DateInfo onClick={()=> goNotice(info.notice_id)}>더 많은 정보 보러가기<MdOutlineNearMe size={20}/> </DateInfo>
            )}
          </TitleLine>
          <TitleLine>
            <h1>{info ? info.title : 'Loading...'}</h1>
          </TitleLine>
          <Line>
            <Category>분류</Category>
            <Category style={{ background: 'rgba(30, 58, 138, 1)', color: 'white' }}>
              {info ? info.large_category_display : 'Loading...'}
            </Category>
          </Line>
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
          {info && info.start_date ? ((
            <Line>
              <Category>활동 기간</Category>
              <div>{info.start_date} ~ {info.end_date}</div>
            </Line>
          )) : null}
          <TitleLine>
            <h2>빙고 미션 완료 후기</h2>
          </TitleLine>
          <ReviewDom>
            {review.map((item) => (
              <Review key={item.id}
               onClick={()=>goReview(item.id)}>
                <img src={item.image} alt={item.title} style={{ width: '90%', height: '80%', borderRadius: '10px' }} />
                <div>{item.title}</div>
              </Review>
            ))}
          </ReviewDom>
        </RightDom>
      </Body>
    </>
  );
};

export default BingoInfo;

export const RightDom = styled.div`
  display: flex;
  flex-direction: column;
  width: 550px;
  height: 630px;
  background: rgba(246, 247, 251, 1);
  border-radius: 20px;
  border: 0.4px solid rgba(30, 58, 138, 1);
  box-shadow: 0px 4px 4px 0px rgba(30, 58, 138, 0.25);
  gap: 15px;
  padding: 20px;
  overflow-x: auto;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 20px;
  padding: 10px;
  gap: 10px;
  border-radius: 10px;
  background: rgba(30, 58, 138, 1);
  color: white;
`;

const DateInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  color: rgba(30, 58, 138, 0.6);
  background: rgba(30, 58, 138, 0.1);
  border-radius: 10px;
  padding: 8px;
  gap: 5px;
`;

const Line = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
  margin-left: 10px;
`;

const TitleLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
  margin-left: 10px;
  background: rgba(246, 247, 251, 1);
  position: sticky;
  top: 0;
  z-index: 1;
  // padding-top: 10px;
`;

export const ReviewDom = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50%;
  flex-shrink: 0;
  border-radius: 10px;
  gap: 10px;
  padding: 10px;
  overflow-y: auto;
`;

export const Review = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 50%;
  height: 70%;
  object-fit: contain;
  padding-top : 1%;
  gap: 5px;
  border: 1px solid rgba(30, 58, 138, 0.5);
  border-radius: 10px;
`;
