// Import styled components library
import styled from "styled-components";

// Main container for the layout
export const LayoutContainerS = styled.div`
  min-height: 100vh;
`;

// Secondary container
export const DivContainerS = styled.div`
  margin-right: 20px;
  margin-left: 20px;

  @media (max-width: 768px) {
    margin-right: 2px;
    margin-left: 2px;
  }
`;
