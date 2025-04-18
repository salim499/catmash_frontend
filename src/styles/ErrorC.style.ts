// Import styled components library
import styled from "styled-components";

// Wrapper for the error page, centered with red text
export const ErrorWrapperS = styled.div`
  color: #d32f2f; // Red color for the error message
  min-height: 100vh; // Full viewport height to center content vertically
  display: flex;
  flex-direction: column; // Stack children vertically
  align-items: center; // Center horizontally
  justify-content: center; // Center vertically
`;

// Emoji styling for error illustration
export const EmojiS = styled.div`
  margin-bottom: 0.5rem; // Space below the emoji
  font-size: 3rem; // Large size for the emoji
`;

// Styling for the error message text
export const MessageS = styled.p`
  text-align: center; // Center-align the text
  font-size: 1.1rem; // Slightly larger font for readability
`;
