// Import Axios for making HTTP requests
import axios from "axios";

// ─────────────────────────────────────────────
// Create a custom Axios instance with base URL and default headers
// ─────────────────────────────────────────────
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // Base URL from environment variable
  headers: {
    "Content-Type": "application/json", // Default header for JSON requests
  },
});

// Export the configured Axios instance
export default api;
