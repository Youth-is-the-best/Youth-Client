import React, { useEffect, useState } from 'react'
import { ResultDom, ResultInfo, Title, Image } from './Result'
import { Line } from '../bingo/MadeBingo'
import { ButtonDom, ButtonLink } from './Test'
import { FiArrowRightCircle } from 'react-icons/fi'
import { useParams } from 'react-router-dom'
import axios from "axios";
import { FiShare2 } from 'react-icons/fi'
import { useLocation } from "react-router-dom";

const ViewResult = () => {
    const {type} = useParams();
    const [userType, setUserType] = useState("");
    const [content, setContent] = useState([]);
    const [image, setImage] = useState("");
    const location = useLocation();

    const getTypeTestResult = async(type) => {
        try {
            const response = await axios.get(`https://maknaengee.p-e.kr/typetest/result/${type}`);
            setUserType(response.data.user_type);
            setContent(response.data.content.split('\n'));
            setImage(response.data.image);
            console.log(location);
            return response.data;
        } catch (error) {
            console.error('Error in getInfo:', error.response ? error.response.data : error.message);
            throw error;
        }
    }
    useEffect(() => {
        if(type) {
        getTypeTestResult(type);
        }
    }, [type]);

  return (
    <>
    <ResultDom>
      <Image>
        <img src={image} style={{width:'100%'}} alt="result"></img>
      </Image>
      <Title>"{userType}"</Title>
      <ResultInfo>
        {content.map((line, index) => (
          <Line>
            <p key={index}>{line}</p>
          </Line>
        ))}
      </ResultInfo>
      <ButtonDom>
        <ButtonLink> <FiShare2 /> 테스트 결과 공유하기 </ButtonLink>
        <ButtonLink style={{ backgroundColor: 'rgba(30, 58, 138, 1)', color: 'white' }} to="/view">
          <FiArrowRightCircle/> 빙고판 채우러가기
        </ButtonLink>
      </ButtonDom>
    </ResultDom>
  </>
  )
}

export default ViewResult
