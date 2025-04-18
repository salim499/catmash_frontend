// Import from react
import { useState, useEffect } from "react";

// Import SWR for api interactions
import { mutate } from "swr";

// Import Link for navigation
import { Link } from "react-router-dom";

// Import styles
import { DivShowCatsContainerS } from "../styles/ShowCatsP.style";

// Import types
import { CatT } from "../types/CatT";

// Import components
import Figure from "../components/FigureC";
import Button from "../components/ButtonC";
import Loader from "../components/LoaderC";
import ErrorMessage from "../components/ErrorC";
import Pagination from "../components/PaginationC";

// Import custom hooks
import UseIsScreenWidthLessOrEqual from "../hooks/UseIsScreenWidthLessOrEqual";
import UseGetCats from "../hooks/UseGetCats";
import UseGetCatsCount from "../hooks/UseGetCountCat";

const ShowCatsP = () => {
  // State to manage the current pagination
  const [page, setPage] = useState(1);

  // Check if the screen width is less than or equal to 1024px
  const isScreenWidthLessOrEqual = UseIsScreenWidthLessOrEqual(1024);

  // Fetch the list of cats with pagination (9 cats per page)
  const { cats, error, isLoading } = UseGetCats({
    limit: 9,
    offset: (page - 1) * 9,
  });

  // Fetch the total number of cats for pagination management
  const { numberOfCats } = UseGetCatsCount();

  // When the pagination changes, update the SWR cache (forces data reload)
  useEffect(() => {
    mutate({ limit: 10, offset: page - 1 });
  }, [page]);

  // If data is still loading
  if (isLoading) return <Loader />;

  // If there is error
  if (error) return <ErrorMessage />;

  // If everything is fine
  return (
    <>
      {/* Main container for the cats cards */}
      <DivShowCatsContainerS>
        {cats.map((cat: CatT, index: number) => (
          <Figure
            key={cat.id}
            index={index}
            page={page}
            isScreenWidthLessOrEqual={isScreenWidthLessOrEqual}
            cat={cat}
          />
        ))}
      </DivShowCatsContainerS>

      {/* Pagination component */}
      <Pagination
        page={page}
        setPage={setPage}
        limitPages={Math.floor(numberOfCats / 9) + 1}
      />
      {/* Button to navigate to the vote page */}
      <Link to="/vote-cats">
        <Button>Choose my cat</Button>
      </Link>
    </>
  );
};

export default ShowCatsP;
