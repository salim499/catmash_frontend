// Import styles
import { LoaderWrapperS, SpinnerS } from "../styles/LoaderC.style";

// ─────────────────────────────────────────────
// Loader component to show a loading spinner during data fetching
// ─────────────────────────────────────────────
const Loader = () => {
  return (
    // Wrapper for styling the loader
    <LoaderWrapperS>
      {/* Spinner animation element */}
      <SpinnerS />
    </LoaderWrapperS>
  );
};

export default Loader;
