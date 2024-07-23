import React from 'react';
import styled from 'styled-components';

const ProgressBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  background-color: #f3f3f3;
  border-radius: 25px;
`;

const Bar = styled.div`
  height: 10px;
  border-radius: 25px;
  background-color: rgba(30, 58, 138, 1);
`;

const Step = styled.div`
  color: rgba(30, 58, 138, 1);
  margin-left : 700px;
`;

const ProgressBar = ({ currentStep, totalSteps }) => {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <>
    <ProgressBarContainer>
      <Bar style={{ width: `${progressPercentage}%` }}></Bar>
    </ProgressBarContainer>
    <Step>({currentStep}/{totalSteps})</Step>
    </>
  );
};

export default ProgressBar;
