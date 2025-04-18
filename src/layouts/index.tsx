// Import Outlet for rendering nested routes in the layout
import { Outlet } from "react-router-dom";

// Import styles
import { LayoutContainerS, DivContainerS } from "..//styles/LayoutL.style";

// Import layout components
import HeaderL from "./HeaderL";
import FooterL from "./FooterL";

// ─────────────────────────────────────────────
// Layout component that includes header, footer, and content area
// ─────────────────────────────────────────────
const Layout = () => {
  return (
    <LayoutContainerS>
      {/* Header of the site */}
      <HeaderL />

      <DivContainerS>
        {/* Outlet for rendering nested routes */}
        <Outlet />
      </DivContainerS>

      {/* Footer of the site */}
      <FooterL />
    </LayoutContainerS>
  );
};

export default Layout;
