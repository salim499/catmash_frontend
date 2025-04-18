// Import the pre-configured Axios instance
import Api from "./Axios";

// ─────────────────────────────────────────────
// Fetcher utility using Axios to get data from a given URL
// ─────────────────────────────────────────────
const Fetcher = async (url: string) => {
  const res = await Api.get(url);
  return res.data;
};

export default Fetcher;
