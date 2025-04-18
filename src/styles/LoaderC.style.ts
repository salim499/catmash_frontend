// Import styled components library
import styled, { keyframes } from "styled-components";

// Keyframe animation for spinning the loader
const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

// Styled component for the spinner itself
export const SpinnerS = styled.div`
  border: 4px solid rgba(47, 85, 150, 0.2);
  border-top-color: rgba(47, 85, 150, 1);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

// Wrapper to center the loader in the middle of the screen
export const LoaderWrapperS = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
