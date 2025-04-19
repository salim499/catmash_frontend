// Import from react
import { useState } from "react";

// Import Link for navigation
import { Link } from "react-router-dom";

// Import styles
import { DivShowCatsContainerS } from "../styles/ShowCatsP.style";

// Import types
import { CatT } from "../types/CatT";

// Import custom hooks
import UseIsScreenWidthLessOrEqual from "../hooks/UseIsScreenWidthLessOrEqual";
import UseGetCats from "../hooks/UseGetCats";
import UseGetCatsCount from "../hooks/UseGetCountCat";

// Import components
import FigureC from "../components/FigureC";
import ButtonC from "../components/ButtonC";
import LoaderC from "../components/LoaderC";
import ErrorMessageC from "../components/ErrorC";
import PaginationC from "../components/PaginationC";

// ─────────────────────────────────────────────
// Page component that displays the ranked list of cats
// ─────────────────────────────────────────────
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

  console.log(cats);

  // Fetch the total number of cats for pagination management
  const { numberOfCats } = UseGetCatsCount();

  // If data is still loading
  if (isLoading) return <LoaderC />;

  // If there is error
  if (error) return <ErrorMessageC />;

  // If everything is fine
  return (
    <>
      {/* Main container for the cats cards */}
      <DivShowCatsContainerS>
        {cats.map((cat: CatT, index: number) => (
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
