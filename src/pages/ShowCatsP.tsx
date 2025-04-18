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
import FigureC from "../components/FigureC";
import LoaderC from "../components/LoaderC";
import ErrorC from "../components/ErrorC";
import ButtonC from "../components/ButtonC";
import PaginationC from "../components/PaginationC";

// Import custom hooks
import UseGetCats from "../hooks/UseGetCats";
import UseGetCatsCount from "../hooks/UseGetCountCat";
import UseIsScreenWidthLessOrEqual from "../hooks/UseIsScreenWidthLessOrEqual";

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

  // If everything is fine
  return (
    <>
      {/* Main container for the cats cards */}
      <DivShowCatsContainerS>
        {cats &&
          cats.map((cat: CatT, index: number) => (
            <FigureC
              key={cat.id}
              index={index}
              page={page}
              isScreenWidthLessOrEqual={isScreenWidthLessOrEqual}
              cat={cat}
            />
          ))}
      </DivShowCatsContainerS>

      {/* Pagination component */}
      <PaginationC
        page={page}
        setPage={setPage}
        limitPages={Math.floor(numberOfCats / 9) + 1}
      />

      {/* Button to navigate to the vote page */}
      <Link to="/vote-cats">
        <ButtonC>Choose my cat</ButtonC>
      </Link>
    </>
  );
};

export default ShowCatsP;
