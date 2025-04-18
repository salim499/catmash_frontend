// Import styles for button from the styled-components
import { ButtonContainerS, ButtonContentS } from "../styles/ButtonC.style";

// Import button component
import { ButtonT } from "../types/ButtonT";

const ButtonC = (props: ButtonT) => {
  return (
    // Outer container for button styling
    <ButtonContainerS>
      {/* Content inside the button (text passed as children prop) */}
      <ButtonContentS>{props.children}</ButtonContentS>
    </ButtonContainerS>
  );
};

export default ButtonC;
