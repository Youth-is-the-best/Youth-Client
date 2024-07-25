import React, { useState } from 'react';
import styled from 'styled-components';
import { QuizDom, QuestionContainer, ButtonDom, Button, Detail } from './Test.jsx';
import ProgressBar from '../hook/ProgressBar.js';
import { useNavigate } from 'react-router-dom';
import { BulbOutlined, LaptopOutlined } from '@ant-design/icons';
import { AiOutlineCoffee, AiOutlineFileSearch, AiOutlineHome, AiOutlineRead, AiOutlineSearch, AiOutlineUsergroupAdd } from 'react-icons/ai';
import { MdAirplanemodeActive, MdBadge, MdFestival, MdOutlineAutoGraph, MdOutlinePaid } from 'react-icons/md';
import { FaDribbble } from 'react-icons/fa';
import { FiHeadphones } from 'react-icons/fi';

const Test2 = () => {
    const navigate = useNavigate();
    const [selectedAnswers, setSelectedAnswers] = useState([]);

    const handleBeforeClick = () => {
        navigate("/test/1");
    }

    const handleAnswerClick = (answer) => {
        if (selectedAnswers.includes(answer)) {
            setSelectedAnswers(selectedAnswers.filter(item => item !== answer));
        } else if (selectedAnswers.length < 5) {
            setSelectedAnswers([...selectedAnswers, answer]);
        }
    };

    const handleNextClick = () => {
        if (selectedAnswers.length === 0) {
            alert("최소 한 개 이상의 활동을 선택해주세요.");
        } else {
            console.log(selectedAnswers); //확인용
            navigate("/test/3");
        }
    };

    const answers = [
        { text: "취업 준비", icon: <AiOutlineFileSearch /> }, 
        { text: "인턴 근무", icon: <LaptopOutlined /> }, 
        { text: "자기계발", icon: <BulbOutlined /> }, 
        { text: "자격증 취득", icon: <MdBadge /> }, 
        { text: "대외활동 참여", icon: <MdOutlineAutoGraph /> }, 
        { text: "동아리활동 참여", icon: <MdFestival /> }, 
        { text: "여행", icon: <MdAirplanemodeActive /> }, 
        { text: "아르바이트", icon: <MdOutlinePaid /> }, 
        { text: "새로운 인간관계 형성", icon: <AiOutlineUsergroupAdd /> }, 
        { text: "휴식", icon: <AiOutlineCoffee /> }, 
        { text: "독서", icon: <AiOutlineRead /> }, 
        { text: "취미활동", icon: <FaDribbble /> }, 
        { text: "혼자만의 시간", icon: <FiHeadphones /> }, 
        { text: "가족과의 시간", icon: <AiOutlineHome /> }, 
        { text: "진로 탐색", icon: <AiOutlineSearch /> }
    ];

    return (
        <QuizDom>
            <ProgressBar currentStep={3} totalSteps={4} />
            <QuestionContainer>
                휴학 기간 중 하고 싶은 활동을 선택하여 주세요
                <Detail>*최대 5순위까지 선택해주세요</Detail>
            </QuestionContainer>
            <AnswerDom>
                {answers.map(answer => (
                    <Answer
                        key={answer.text}
                        onClick={() => handleAnswerClick(answer.text)}
                        selected={selectedAnswers.includes(answer.text)}
                    >
                        {selectedAnswers.includes(answer.text) ? <Indexcircle>{selectedAnswers.indexOf(answer.text) + 1}</Indexcircle> : ""}
                        {answer.icon}
                        <span>{answer.text}</span>
                    </Answer>
                ))}
            </AnswerDom>
            <ButtonDom>
                <Button to="/test/1" onClick={handleBeforeClick}>이전</Button>
                <Button style={{ backgroundColor: 'rgba(30, 58, 138, 1)', color:'white' }} onClick={handleNextClick}>다음</Button>
            </ButtonDom>
        </QuizDom>
    );
};

export default Test2;

const Indexcircle = styled.div`
    border-radius: 50%;
    border: 1.5px solid rgba(30, 58, 138, 1);
    background-color: white;
    height: 20px;
    width: 20px;
    color: rgba(30, 58, 138, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -4px;
    left: -9px;
    font-size: 12px;
`;

const AnswerDom = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    align-content: center;
    width: 590px;
    height: 230px;
    margin-top: 20px;
`;

const Answer = styled.div`
    height: 40px;
    border-radius: 20px;
    color: ${props => props.selected ? '#ffffff' : '#1E3A8A'};
    background-color: ${props => props.selected ? '#1E3A8A' : '#ffffff'};
    border: 1px solid rgb(207, 209, 218);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 60px;
    padding: 0 10px;
    position: relative;
    &:hover {
        
        background-color: ${props => props.selected ? '' : 'rgba(30, 58, 138, 0.2)'}; 
        color:  ${props => props.selected ? '' : ' #1E3A8A'}; 
    }
    span {
        margin-left: 5px;
    }
`;
