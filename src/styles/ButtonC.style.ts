// Import styled-components library for creating styled elements
import styled from "styled-components";

// Container for the button, used to center the button on the page
export const ButtonContainerS = styled.div`
  margin-top: 50px; // Adds space on top of the button container
  display: flex; // Uses flexbox for centering
  justify-content: center; // Centers the button horizontally
  align-items: center; // Centers the button vertically
`;

// Styles for the button itself
export const ButtonContentS = styled.button`
  color: rgba(255, 255, 255, 1); // White text color
  background-color: rgba(47, 85, 150, 1); // Blue background color
  padding: 20px 30px; // Padding around the button text (top/bottom and left/right)
  border: 2px solid white; // White border around the button
  border-radius: 50%; // Makes the button round
  font-size: 1rem; // Sets the font size
  font-weight: bold; // Makes the text bold
  font-style: italic; // Makes the text italicized

  // Hover effect for when the user hovers over the button
  &:hover {
    background-color: rgba(
      226,
      81,
      77,
      1
    ); // Changes background to red on hover
    cursor: pointer; // Changes cursor to a pointer on hover
  }

  // Active effect for when the button is clicked
  &:active {
    padding: 15px 25px;
    border-radius: 50%;
  }
`;
