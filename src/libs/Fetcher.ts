// Import the pre configured Axios instance
import api from "./axios";

// ─────────────────────────────────────────────
// Fetcher utility using Axios to get data from a given URL
// ─────────────────────────────────────────────
const Fetcher = async (url: string) => {
  const res = await api.get(url);
  return res.data;
};

export default Fetcher;
