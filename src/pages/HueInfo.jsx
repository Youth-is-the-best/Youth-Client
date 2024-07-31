import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import HeaderHook from '../hook/HeaderHook';
import { Body, RightDom } from './Home';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { BsThreeDots } from 'react-icons/bs';
import { Category, DateInfo, Line, TitleLine } from './MadeBingo';

const HueInfo = () => {
    const navigate = useNavigate();

    const goHome = () => {
      navigate("/");
    }

    const viewRecommend = async() => {
      const response = await getInfo();
      const recommendations = response.map(item => ({
        id : item.information_idid,
        title: item.title,
        large_category: item.large_category,
        content: item.content,
        image: item.images[0]?.image || '',
      }));
      setRecommend(recommendations);
    }

    useEffect(() => {
      viewRecommend();
    }, []);

  return (
    <>
    <HeaderHook></HeaderHook>
      <Body>
        <RightDom>
          <TitleLine>
            <MdOutlineKeyboardBackspace onClick={goHome} size={30}/>
            <BsThreeDots size={30}/>
          </TitleLine>
          <TitleLine>
            <h1>{title}</h1>
          </TitleLine>
          <Line>
            <Category>분류</Category>
            <Category style={{ background: 'rgba(30, 58, 138, 1)', color :'white'}} >{large_category}</Category>
          </Line>
          <Line>
            <div>{content}</div>
          </Line>
          <TitleLine>
          <h2>빙고 미션 완료 후기</h2>
          </TitleLine>
            <ReviewDom>
              <Review>
                <div>리뷰 사진</div>
                <div>리뷰 제목</div>
              </Review>
            </ReviewDom>  
          </RightDom>
      </Body>
    </>
  )
}

export default HueInfo
