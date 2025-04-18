// Import SWR for data fetching and caching
import useSWR from "swr";

// Import the fetcher function
import fetcher from "../libs/Fetcher";

// Import the type for the hook's props
import { UseGetCatsPropsT } from "../types/UseGetCatsPropsT";

// Custom hook to fetch a paginated list of cats from the API
const UseGetCats = (props: UseGetCatsPropsT) => {
  // Destructure and fetch data using SWR
  const { data, error, isLoading } = useSWR(
    // Construct the API endpoint with pagination params
    `/cats?limit=${props.limit}&offset=${props.offset}`,
    fetcher // Use the fetcher function to perform the API call
  );

  // Return the relevant data, error, and loading state
  return { cats: data, error, isLoading };
};

export default UseGetCats;
