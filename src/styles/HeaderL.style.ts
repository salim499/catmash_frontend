// Import styled components library
import styled from "styled-components";

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
  color: rgba(47, 85, 150, 1);
  font-size: 1.5rem;
  font-weight: bold;

  &:hover {
    color: rgba(226, 81, 77, 1); // Red on hover
  }

  &:active {
    font-size: 1.4rem; // Slightly smaller on click
  }
`;
