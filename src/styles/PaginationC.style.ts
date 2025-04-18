// Import styled components library for creating styled elements
import styled from "styled-components";

// Container for pagination controls
export const PaginationContainerS = styled.div`
  display: flex; // Flexbox for alignment
  align-items: center; // Center items vertically
  justify-content: center; // Center items horizontally
  gap: 16px; // Space between buttons
  padding: 16px 0; // Padding on top and bottom
  margin-top: 55px; // Add top margin for spacing
`;

// Styled button for each page in the pagination
export const PageButtonS = styled.button<{ disabled?: boolean }>`
  border: none; // Remove default border
  padding: 8px 16px; // Add padding to the button
  border-radius: 8px; // Rounded corners
  font-weight: 500; // Medium font weight
  display: flex; // Flexbox for aligning content
  align-items: center; // Align icon and text vertically
  gap: 8px; // Space between the icon and text
  cursor: ${({ disabled }) =>
    disabled
      ? "not-allowed"
      : "pointer"}; // Change cursor based on disabled state
  transition: background-color 0.2s ease; // Smooth transition for background color change
  background-color: ${({ disabled }) =>
    disabled
      ? "#ddd"
      : "rgba(47, 85, 150, 1)"}; // Set background color based on disabled state
  color: rgb(255, 255, 255); // White text color

  &:hover {
    background-color: ${({ disabled }) =>
      disabled
        ? "#ddd"
        : "#e0e0e0"}; // Change background color on hover (if not disabled)
  }
`;

// Display text for current page or pagination info
export const PageInfoS = styled.span`
  font-size: 14px; // Set font size
  font-weight: 500; // Medium font weight
`;
