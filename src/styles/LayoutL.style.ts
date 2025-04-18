// Import styled components library
import styled from "styled-components";

// Styled container for the overall layout, ensures full viewport height
export const LayoutContainerS = styled.div`
  min-height: 100vh; // Ensures the container takes at least the full height of the viewport
`;

// Styled container with responsive margin adjustments
export const DivContainerS = styled.div`
  margin-right: 20px;
  margin-left: 20px;

  // Adjust margin for smaller screens
  @media (max-width: 768px) {
    margin-right: 2px;
    margin-left: 2px;
  }
`;
