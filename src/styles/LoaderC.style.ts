// Import styled components library
import styled, { keyframes } from "styled-components";

// Import colors
import { Colors } from "./colors";

// Keyframe animation for spinning the loader
const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

// Styled component for the spinner itself
export const SpinnerS = styled.div`
  border: 4px solid ${Colors.darkBlue};
  border-top-color: ${Colors.primary};
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
