import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AiOutlineCheckSquare } from 'react-icons/ai';
import HeaderHook from '../../hook/HeaderHook';
import FooterHook from '../../hook/FooterHook';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';
import { getBingoloc } from '../../apis/testapis';
import { InputBox } from '../bingo/MadeBingo';
import { postReview } from '../../apis/reviewapis';

const MadeDragReview = () => {
  const { location } = useParams();
  const [info, setInfo] = useState(null);
  const [title, setTitle] = useState('');
  const [todo, setTodo] = useState([]);
  const [images, setImages] = useState([]);
  const [content, setContent] = useState('');
  const [procedure, setProcedure] = useState('');

    const getReview = async(location) => {
      try {
        const response = await getBingoloc(location);
        const todo = response.todo.map((item) => ({
          title: item.title,
          id: item.id,
        }));
        const info = {
          title: response.bingo_item.title,
          large_category_display: response.bingo_item.large_category_display,
          large_category: response.bingo_item.large_category,
          start_date: response.bingo_item.start_date,
          end_date: response.bingo_item.end_date,
          duty: response.bingo_item.duty,
          employment_form: response.bingo_item.employment_form,
          area: response.bingo_item.area,
          host: response.bingo_item.host,
          app_fee: response.bingo_item.app_fee,
          date: response.bingo_item.date,
          app_due: response.bingo_item.app_due,
          field: response.bingo_item.field,
          procedure: response.bingo_item.procedure,
          author: response.bingo_item.author,
          created_at: response.bingo_item.created_at,
        };
        setTitle(info.title);
        setTodo(todo);
        setInfo(info);
        const images = response.images ? response.images.map((item) => ({
          image_id: item.image_id,
          image: item.image,
        })) : [];
        setImages(images);
      } catch (error) {
        console.error('Error in getNotice:', error.response ? error.response.data : error.message);
        throw error;
      }
    };

    const postReviews = async (data) => {
      try {
        const data = {
          large_category: info.large_category,
          space_location: location,
          content: content,
          images:'',
          procedure: procedure,
        };
        const response = await postReview(data);
        console.log(response);
      } catch (error) {
        console.error('Error in postReview:', error.response ? error.response.data : error.message);
        throw error;
      }
    }

  useEffect(() => {
      getReview(location);
  }, [location]);

  const navigate = useNavigate();
  const goBingo = () => {
    navigate('/bingo');
  };

  return (
    <>
      <HeaderHook />
      <Line style={{ color: 'rgba(27, 52, 124, 1)', justifyContent: 'space-between', padding: '2%' }}>
        <MdOutlineKeyboardBackspace onClick={goBingo} size={40} />
      </Line>
      <BigBody>
        <Body>
          <Line style={{ justifyContent: 'space-between' }}>
            <StyledTitle>{info ? info.title : 'Loading...'}</StyledTitle>
            <Line style={{ gap: '3%' }}>
              <Infobutton>{info ? info.author : ''}</Infobutton>
              <Infobutton>{info ? info.large_category_display : ''}</Infobutton>
            </Line>
          </Line>
          <InfoDom>
            {info && info.large_category_display ? (
              <Line>
                <Category>분류</Category>
                <Infobutton>{info.large_category_display}</Infobutton>
              </Line>
            ) : null}
            {info && info.host && (
              <Line>
                <Category>주최사</Category>
                <div>{info.host}</div>
              </Line>
            )}
            {info && info.field && (
              <Line>
                <Category>활동 분야</Category>
                <div>{info.field}</div>
              </Line>
            )}
            {info && info.app_fee && (
              <Line>
                <Category>응시료</Category>
                <div>{info.app_fee}원</div>
              </Line>
            )}
            {info && info.duty && (
              <Line>
                <Category>직무</Category>
                <div>{info.duty}</div>
              </Line>
            )}
            {info && info.employment_form && (
              <Line>
                <Category>채용 형태</Category>
                <div>{info.employment_form}</div>
              </Line>
            )}
            {info && info.area && (
              <Line>
                <Category>활동 지역</Category>
                <div>{info.area}</div>
              </Line>
            )}
            {info && info.app_due && (
              <Line>
                <Category>지원 마감</Category>
                <div>{info.app_due}</div>
              </Line>
            )}
            {info && info.prep_period && (
              <Line>
                <Category>준비 기간</Category>
                <div>{info.prep_period}</div>
              </Line>
            )}
            {info && info.start_date && (
              <Line>
                <Category>활동 기간</Category>
                <div>{info.start_date} ~ {info.end_date}</div>
              </Line>
            )}
          </InfoDom>
          <ReviewDom>
            {todo.map((item) => (
              <Row>
                <Line>
                  <AiOutlineCheckSquare size={20} />
                  <div>{item.title}</div>
                </Line>
              </Row>
            ))}
          </ReviewDom>
          <InfoDom>
          <div>모집 절차</div>
          <InputBox
              type="text"
              value={procedure}
              onChange={(e) => setProcedure(e.target.value)}
              placeholder="내용을 입력해주세요"/>
          <div>활동 내용/합격 팁/소감</div>
          <InputBox
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="내용을 입력해주세요"
            />
          </InfoDom>
          <PhotoDom>
            {images && images.map((item) => (
              <img key={item.image_id} src={item.image} alt="사진" style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '10px' }} />
            ))}
          </PhotoDom>
          <Infobutton onClick={postReviews}>업로드</Infobutton>
        </Body>
      </BigBody>
      <FooterHook />
    </>
  )
};

export default MadeDragReview;

const Line = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
`
const Row = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`

const ReviewDom = styled.div`
  display: flex;
  flex-direction: column;
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
  padding: 50px; // Adjusted from 50% to 50px
  margin-bottom: 10%;
`
const StyledTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: rgba(27, 52, 124, 1);
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