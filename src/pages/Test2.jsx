import React, { useState } from 'react';
import styled from 'styled-components';
import { QuizDom, QuestionContainer, ButtonDom, Button } from './Test.jsx';
import ProgressBar from '../hook/ProgressBar.js';
import { useNavigate } from 'react-router-dom';

const Test2 = () => {
    const navigate = useNavigate();
    const [selectedAnswers, setSelectedAnswers] = useState([]);

    const handleBeforeClick =() => {
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
        "채용 공고 확인", "채용 지원", "인턴 지원", "어학 자격증 취득",
        "대외활동 참여", "동아리활동 참여", "여행", "새로운 인간관계 형성",
        "휴식", "독서", "취미활동", "자기계발", "혼자만의 시간", "가족과의 시간",
        "진로 탐색", "기타"
    ];

    return (
        <QuizDom>
            <ProgressBar currentStep={3} totalSteps={4} />
            <QuestionContainer>
                휴학 기간 중 하고 싶은 활동을 선택하여 주세요
            </QuestionContainer>
            <AnswerDom>
                {answers.map(answer => (
                    <Answer 
                        key={answer} 
                        onClick={() => handleAnswerClick(answer)}
                        selected={selectedAnswers.includes(answer)}
                    >
                        {answer}
                    </Answer>
                ))}
            </AnswerDom>
            <ButtonDom>
                <Button to="/test/1" onClick={handleBeforeClick}>이전 문제</Button>
                <Button onClick={handleNextClick}>다음 문제</Button>
            </ButtonDom>
        </QuizDom>
    );
};

export default Test2;

const AnswerDom = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
`;

const Answer = styled.div`
    height: 40px;
    border-radius: 20px;
    color: ${props => props.selected ? '#ffffff' : '#1E3A8A'};
    background-color: ${props => props.selected ? '#1E3A8A' : '#ffffff'};
    border: 1px solid rgb(207,209,218);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 100px;
    padding: 0 10px;
    &:hover {
        background-color: ${props => props.selected ? 'rgba(30, 58, 138, 0.2)' : '#e0e0e0'};
    }
`;