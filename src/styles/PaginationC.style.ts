// Import styled components library for creating styled elements
import styled from "styled-components";

// Import colors
import { Colors } from "./colors";

// Container for pagination controls
export const PaginationContainerS = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 16px 0;
  margin-top: 55px;
`;

// Styled button for each page in the pagination
export const PageButtonS = styled.button<{ disabled?: boolean }>`
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.2s ease;
  background-color: ${({ disabled }) =>
    disabled ? Colors.gray : Colors.primary};
  color: ${Colors.white};

  &:hover {
    background-color: ${({ disabled }) =>
      disabled ? Colors.graySecond : Colors.gray};
  }
`;
