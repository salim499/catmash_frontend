import api from "./axios";

const Fetcher = async (url: string) => {
  const res = await api.get(url);
  return res.data;
};

export default Fetcher;
