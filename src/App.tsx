// Import React Router for routing functionality
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import page components for routing
import ShowCatsP from "./pages/ShowCatsP";
import VoteCatsP from "./pages/VoteCatsP";

// Import the main layout component
import Layout from "./layouts/";

// Import error message component for handling errors and route errors
import ErrorC from "./components/ErrorC";

// Main App component that sets up the routing
const App = () => {
  // Create the router with nested routes
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // The layout component wraps the page content
      children: [
        {
          path: "/", // Default route
          element: <ShowCatsP />, // Page for showing cats
          errorElement: <ErrorC />, // Error page for this route
        },
        {
          path: "/show-cats", // Show all cats page
          element: <ShowCatsP />,
          errorElement: <ErrorC />,
        },
        {
          path: "/vote-cats", // Vote on cats page
          element: <VoteCatsP />,
          errorElement: <ErrorC />,
        },
      ],
      errorElement: <ErrorC />, // General error handler for this route
    },
  ]);

  // Render the router
  return <RouterProvider router={router} />;
};

export default App;
