// Import from react
import { useState, useEffect } from "react";

// Import SWR for api interactions
import { mutate } from "swr";

// Import components
import LoaderC from "../components/LoaderC";
import ErrorC from "../components/ErrorC";

// Import custom hooks
import UseGetCats from "../hooks/UseGetCats";

const ShowCatsP = () => {
  // State to manage the current pagination
  const [page, setPage] = useState(1);

  // Fetch the list of cats with pagination (9 cats per page)
  const { cats, error, isLoading } = UseGetCats({
    limit: 9,
    offset: (page - 1) * 9,
  });

  // When the pagination changes, update the SWR cache (forces data reload)
  useEffect(() => {
    mutate({ limit: 10, offset: page - 1 });
  }, [page]);

  // If data is still loading
  if (isLoading) return <LoaderC />;

  // If there is error
  if (error) return <ErrorC />;

  // If everything is fine
  return <>no error</>;
};

export default ShowCatsP;
