// Import Link component for client-side routing
import { Link } from "react-router-dom";

// Import styles
import {
  DivContainerTitleS,
  ImgTitleS,
  NavS,
  LinkS,
} from "../styles/HeaderL.style";

// ─────────────────────────────────────────────
// Header component for navigation and branding
// ─────────────────────────────────────────────
const HeaderL = () => {
  return (
    <header>
      {/* Container for the logo and navigation links */}
      <DivContainerTitleS>
        {/* App logo */}
        <ImgTitleS src="/main-logo.svg" />

        {/* Navigation bar */}
        <NavS>
          {/* Link to the "Show Cats" ranking page */}
          <Link to={"/show-cats"}>
            <LinkS>Classement des chats</LinkS>
          </Link>

          {/* Link to the "Vote Cats" page */}
          <Link to={"/vote-cats"}>
            <LinkS>Choisir mon chat</LinkS>
          </Link>
        </NavS>
      </DivContainerTitleS>
    </header>
  );
};

export default HeaderL;
