// Import styled components library
import styled from "styled-components";

// Import colors
import { Colors } from "./colors";

// Wrapper for the error page, centered with red text
export const ErrorWrapperS = styled.div`
  color: ${Colors.crimson};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// Emoji styling for error illustration
export const EmojiS = styled.div`
  margin-bottom: 0.5rem;
  font-size: 3rem;
`;

// Styling for the error message text
export const MessageS = styled.p`
  text-align: center;
  font-size: 1.1rem;
`;
