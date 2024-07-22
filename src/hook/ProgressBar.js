import React from 'react';
import styled from 'styled-components';

const ProgressBarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Bar = styled.div`
  flex-grow: 1;
  height: 8px;
  background: #d3d3d3;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
`;

const Progress = styled.div`
  width: ${props => props.width}%;
  height: 100%;
  background: #003399;
  transition: width 0.3s ease-in-out;
`;

const Step = styled.div`
  margin-left: 10px;
  color: #003399;
`;

const ProgressBar = ({ currentStep, totalSteps }) => {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <ProgressBarContainer>
      <Bar>
        <Progress width={progressPercentage} />
      </Bar>
      <Step>({currentStep}/{totalSteps})</Step>
    </ProgressBarContainer>
  );
};

export default ProgressBar;
