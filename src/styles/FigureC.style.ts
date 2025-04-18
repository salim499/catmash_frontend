// Import styled components library
import styled, { keyframes, css } from "styled-components";

// Import types
import { FigureCatST, ImageCatST } from "../types/FigureT";
// Keyframes for animating background color and scale transformation
const backgroundAndZoom = (bg: string) => keyframes`
  0% {
    transform: scale(1);
    background-color: ${bg};
    border: none;
  }
  50% {
    transform: scale(1.01); 
    background-color: white; 
    border: none;
  }
  100% {
    transform: scale(1); 
    background-color: ${bg}; 
    border: none;
  } 
`;

// Styled component for Figure (Container) of the cat
export const FigureCatS = styled.figure<FigureCatST>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  order: ${(props) => (props.order ? props.order : "unset")};
  padding: 20px;
  box-shadow: ${(props) =>
    // Apply box-shadow for special cases (gold, silver, etc.) depending on the page and index
    props.page === 1 && props.index === 0
      ? "0 0 10px rgb(255, 215, 0)" // Gold shadow for the first index
      : props.page === 1 && props.index === 1
      ? "0 0 10px rgb(180, 180, 180)" // Silver shadow for the second index
      : props.page === 1 && props.index === 2
      ? "0 0 10px rgb(205, 127, 50)" // Peru shadow for the third index
      : "none"};
  cursor: pointer;
  animation: ${(props) => {
    if (props.page !== 1) return "none"; // Skip animation if page isn't 1
    let color1 = "white";
    switch (props.index) {
      case 0:
        color1 = "gold"; // Gold color for first index
        break;
      case 1:
        color1 = "silver"; // Silver color for second index
        break;
      case 2:
        color1 = "peru"; // Peru color for third index
        break;
      default:
        return;
    }
    // Apply animation for background color and scale
    return css`
      ${backgroundAndZoom(color1)} 5s infinite
    `;
  }};
  background: ${(props) =>
    // Set background color for specific indexes
    props.page === 1 && props.index === 0
      ? "rgb(255, 215, 0)" // Gold background for first index
      : props.page === 1 && props.index === 1
      ? "rgb(180, 180, 180)" // Silver background for second index
      : props.page === 1 && props.index === 2
      ? "rgb(205, 127, 50)" // Peru background for third index
      : "none"};

  &:hover {
    border-radius: ${(props) => (props.order ? "0%" : "50%")};
    transform: ${(props) =>
      props.rotateDirection && props.rotateDirection === "right"
        ? "rotate(5deg)" // Rotate slightly to the right
        : props.rotateDirection && props.rotateDirection === "left"
        ? "rotate(-5deg)" // Rotate slightly to the left
        : "none"};
  }

  &:active {
    filter: brightness(50%);
  }
`;

// Styled component for the image inside the Figure (Cat)
export const ImageCatS = styled.img<ImageCatST>`
  width: ${(props) => (props.width ? props.width : "330px")};
  height: ${(props) => (props.height ? props.height : "330px")};
  border-radius: 50%;
  object-fit: cover;
  filter: brightness(100%);
  margin-top: 25px;

  &:hover {
    filter: brightness(75%);
  }
`;

// Styled component for the caption inside the Figure
export const FigcaptionCatS = styled.figcaption`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`;

// Styled component for the span showing the rank (1st, 2nd, etc.) inside the Figure
export const FigureSpanCatS = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 45px;
  min-height: 45px;
  margin-top: 25px;
  border: 3px solid rgba(47, 85, 150, 1);
  border-radius: 50%;
  font-size: 1.4rem;
  font-weight: bold;
  font-style: italic;
  color: rgba(47, 85, 150, 1);
`;

// Styled component for the podium rank display inside the Figure
export const FigurePodiumSpanCatS = styled.span`
  margin-top: 25px;
  font-size: 1.5rem;
  font-weight: bold;
  font-style: italic;
  color: rgba(47, 85, 150, 1);
  text-align: center;
`;

// Styled component for the first rank span (1st place) inside the Figure
export const FigcaptionFirstSpanCatS = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  font-style: italic;
  color: rgba(47, 85, 150, 1);
  text-align: center;
`;

// Styled component for the second rank span (2nd place) inside the Figure
export const FigcaptionSecondSpanCatS = styled.span`
  margin-top: 10px;
  font-size: 1.2rem;
  font-style: italic;
  text-align: center;
  color: rgba(47, 85, 150, 1);
`;
