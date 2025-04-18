// Import styled-components library for creating styled elements
import styled from "styled-components";

// Import colors
import { Colors } from "./colors";

// Container for the button, used to center the button on the page
export const ButtonContainerS = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Styles for the button itself
export const ButtonContentS = styled.button`
  color: ${Colors.white};
  background-color: ${Colors.primary};
  padding: 20px 30px;
  border: 2px solid white;
  border-radius: 50%;
  font-size: 1rem;
  font-weight: bold;
  font-style: italic;

  // Hover effect for when the user hovers over the button
  &:hover {
    background-color: ${Colors.crimson};
    cursor: pointer;
  }

  // Active effect for when the button is clicked
  &:active {
    padding: 15px 25px;
    border-radius: 50%;
  }
`;
