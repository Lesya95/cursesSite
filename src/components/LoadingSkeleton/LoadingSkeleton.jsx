import React from 'react';
import styled from 'styled-components';

const SkeletonPulse = styled.div`
  display: inline-block;
  width: 100%;
  min-height: 100%;
  animation: pulse 1.2s ease-in infinite;

  @keyframes pulse {
    0% {
      background-color: rgba(165, 165, 165, .1);
    }
    50% {
      background-color: rgba(165, 165, 165, .3);
    }
    100% {
      background-color: rgba(165, 165, 165, .1)
    }
  }
`

export const Skeleton = (props) => {
    return <SkeletonPulse/>
}
