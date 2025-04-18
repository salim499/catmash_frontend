// Import styled components library
import styled from "styled-components";

// Import colors
import { Colors } from "./colors";

// Container for the title section (image + nav)
export const DivContainerTitleS = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// Styled logo/title image
export const ImgTitleS = styled.img`
  width: 180px;
  height: 180px;
`;

// Navigation container
export const NavS = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

// Individual navigation link style
export const LinkS = styled.div`
  color: ${Colors.primary};
  font-size: 1.5rem;
  font-weight: bold;

  &:hover {
    color: ${Colors.crimson};
  }

  &:active {
    font-size: 1.4rem;
  }
`;
