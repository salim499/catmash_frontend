import Api from "./Axios";

const Fetcher = async (url: string) => {
  const res = await Api.get(url);
  return res.data;
};

export default Fetcher;
