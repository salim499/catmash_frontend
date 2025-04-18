// Import from react
import { useState, useEffect } from "react";

// Import SWR for api interactions
import { mutate } from "swr";

// Import styles
import { DivShowCatsContainerS } from "../styles/ShowCatsP.style";

// Import types
import { CatT } from "../types/CatT";

// Import components
import FigureC from "../components/FigureC";
import LoaderC from "../components/LoaderC";
import ErrorC from "../components/ErrorC";

// Import custom hooks
import UseGetCats from "../hooks/UseGetCats";
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
  console.log(error);

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
    </>
  );
};

export default ShowCatsP;
