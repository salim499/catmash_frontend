// Import SWR for data fetching and caching
import useSWR from "swr";

// Import the fetcher function
import fetcher from "../libs/fetcher";

// Import types
import { UseGetCatPropsT } from "../types/UseGetCatPropsT";

// ─────────────────────────────────────────────
// Custom hook to fetch a cat based on id and other provided props
// ─────────────────────────────────────────────
const UseGetCat = (props: UseGetCatPropsT) => {
  // Construct query parameters for the URL
  const query = [
    ...props.ids.map((id) => `exclude=${id}`), // Add exclusion filters for each id
    `limit=${props.limit}`, // Set the limit for number of cats
  ].join("&");

  // Fetch data using SWR
  const { data, error, isValidating } = useSWR(
    `${props.url}?${query}`,
    fetcher
  );

  // Determine what we return based on limit
  const cat = props.limit === 1 ? data?.[0] : null; // Single cat if limit is 1, else null
  const cats = props.limit > 1 ? data : null; // Array of cats if limit > 1, else null

  // isLoading is true when data is not loaded and not erroring out
  const isLoading = !data && !error && isValidating;

  return { cat, cats, error, isLoading };
};

export default UseGetCat;
