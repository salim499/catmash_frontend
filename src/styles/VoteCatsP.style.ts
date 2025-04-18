// Import styled components library for creating styled elements
import styled from "styled-components";

// Import colors
import { Colors } from "./colors";

// Styled component for the container of the "Vote Cats" section
export const DivVoteContainerS = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-top: 50px;
`;

// Styled component for the badge used in the "Vote Cats" section
export const VSBadgeS = styled.p`
  font-size: 2rem;
  font-weight: bold;
  font-style: italic;
  padding: 10px 10px;
  border-radius: 50%;
  color: ${Colors.primary};
  border: 2px solid ${Colors.primary};
  color: ${Colors.primary};
`;
