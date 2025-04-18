// Import styles for button from the styled-components
import { ButtonContainerS, ButtonContentS } from "../styles/ButtonC.style";

// Define type for Button props (expecting children to be a string)
type ButtonT = {
  children: string;
};

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
