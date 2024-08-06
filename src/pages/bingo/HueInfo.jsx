import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderHook from '../../hook/HeaderHook';
import FooterHook from '../../hook/FooterHook';
import { Body } from '../Home';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { BsThreeDots } from 'react-icons/bs';
import { Category, Line, TitleLine } from './MadeBingo';
import { ReviewDom, Review, RightDom } from './BingoInfo';
import { getHueInfo } from '../../apis/testapis';
import Bingomain from './Bingomain';

const HueInfo = () => {
  const navigate = useNavigate();
  const [recommendations, setRecommend] = useState([]);
  const [title, setTitle] = useState('');
  const [largeCategory, setLargeCategory] = useState('');
  const [content, setContent] = useState([]);
  const [images, setImages] = useState([]);

  const goHome = () => {
    navigate("/view");
  }

  const viewRecommend = async () => {
    const response = await getHueInfo();
    const recommendations = response.map(item => ({
      id: item.information_idid,
      title: item.title,
      large_category: item.large_category,
      content: item.content,
      images: item.images.map(image => image.image) || [],
    }));
    console.log(recommendations);
    setRecommend(recommendations);

    if (recommendations.length > 0) {
      setTitle(recommendations[0].title);
      setLargeCategory(recommendations[0].large_category);
      setContent(recommendations[0].content ? recommendations[0].content.split('\n') : []);
      setImages(recommendations[0].images);
    }
  }

  useEffect(() => {
    viewRecommend();
  }, []);

  return (
    <>
      <HeaderHook />
      <Body>
        <Bingomain />
        <RightDom>
          <TitleLine>
            <MdOutlineKeyboardBackspace onClick={goHome} size={30} />
            <BsThreeDots size={30} />
          </TitleLine>
          <TitleLine>
            <h1>{title}</h1>
          </TitleLine>
          <Line>
            <Category>분류</Category>
            <Category style={{ background: 'rgba(30, 58, 138, 1)', color: 'white' }}>자격증</Category>
          </Line>
          <Line>
            <Category>작성자</Category>
            <Line style={{ fontSize: '24px' }}></Line>
          </Line>
          <Line>
            {Array.isArray(content) && content.map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </Line>
          <ReviewDom>
            {images.length > 0 && images.map((image, index) => (
              <Review key={index} style={{border:'none'}}>
                <img src={image} alt={`Recommendation ${index + 1}`} style={{ maxWidth: '100%', height: 'auto' }} />
              </Review>
            ))}
          </ReviewDom>
        </RightDom>
      </Body>
      <FooterHook />
    </>
  );
}

export default HueInfo;
