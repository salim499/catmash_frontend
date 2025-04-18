// Import styles
import { ErrorWrapperS, EmojiS, MessageS } from "../styles/ErrorC.style";

// Import types
import { PropsErrorC } from "../types/ErrorT";

// ─────────────────────────────────────────────
// Error component
// ─────────────────────────────────────────────
const ErrorC = (props: PropsErrorC) => {
  return (
    <ErrorWrapperS>
      {/* Display Emoji */}
      <EmojiS>😢</EmojiS>

      {/* Error message text — shows custom message if provided, otherwise default message */}
      <MessageS>
        {props.message ? props.message : "An error occurred. Please try again."}
      </MessageS>
    </ErrorWrapperS>
  );
};

export default ErrorC;
