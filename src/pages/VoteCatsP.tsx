// Import from react
import { useState, useEffect } from "react";

// Import Link for navigation
import { Link } from "react-router-dom";

// Import Axios for making HTTP requests
import api from "../libs/Axios";

// Import styles
import { DivVoteContainerS, VSBadgeS } from "../styles/VoteCatsP.style";

// Import constants
import { left, right } from "../constants";

// Import types
import { CatT } from "../types/CatT";

// Import hooks
import UseGetCat from "../hooks/UseGetCat";

// Import components
import FigureC from "../components/FigureC";
import LoaderC from "../components/LoaderC";
import ErrorC from "../components/ErrorC";
import ButtonC from "../components/ButtonC";

// ─────────────────────────────────────────────
// Page component where users can vote between two random cats
// ─────────────────────────────────────────────
const VoteCatsP = () => {
  // States
  const [excludeIds, setExcludeIds] = useState<string[]>([]);
  const [catLeft, setCatLeft] = useState<CatT | null>(null);
  const [catRight, setCatRight] = useState<CatT | null>(null);

  // Get random cats
  const { cats, cat, error, isLoading } = UseGetCat({
    url: "cats/random",
    ids: excludeIds,
    limit:
      catLeft === null && catRight === null
        ? 2
        : catLeft === null || catRight === null
        ? 1
        : 0,
  });

  // Side effect to update cats when the fetched data changes
  useEffect(() => {
    if (cats && cats.length === 2) {
      // Add the fetched cat IDs to the exclude list to avoid duplicates
      cats
        .map((e: CatT) => e.id)
        .forEach((element: string) => {
          setExcludeIds((excludeIds) => [...excludeIds, element]);
        });

      // Set the left and right cats to vote on
      setCatLeft(cats[0]);
      setCatRight(cats[1]);
    } else if (cat && catLeft === null) {
      // If only one cat is fetched and the left cat is null, set it as the left cat
      setExcludeIds((excludeIds) => [...excludeIds, cat.id]);
      setCatLeft(cat);
    } else if (cat && catRight === null) {
      // If only one cat is fetched and the right cat is null, set it as the right cat
      setExcludeIds((excludeIds) => [...excludeIds, cat.id]);
      setCatRight(cat);
    }
  }, [cats, cat]);

  // Function to handle voting for a cat (left or right)
  const handleVoteCat = async (direction: string) => {
    // Determine which cat was voted for based on the direction (left or right)
    const votedCat = direction === left ? catLeft : catRight;

    // Determine which cat to clear after voting
    const clearCat = direction === left ? setCatRight : setCatLeft;

    // If no cat was selected to vote for, exit early
    if (!votedCat) return;

    try {
      // Send a request to increment the score of the voted cat
      console.log(votedCat);
      await api.put(`cats/${votedCat.id}/score`, { score: votedCat.score + 1 });

      // Fetch the updated cat data from the API
      const { data } = await api.get(
        `${process.env.REACT_APP_API_URL}/cats/${votedCat.id}`
      );

      // Update the state with the new cat data
      direction === left ? setCatLeft(data) : setCatRight(data);

      // Clear the opposite cat to trigger the next fetch
      clearCat(null);
    } catch (error) {
      // Log any error that occurs during the vote process
      console.error("Error voting for cat:", error);
    }
  };

  // If data is still loading
  if (isLoading) return <LoaderC />;

  // If there is error
  if (error) return <ErrorC />;
  // Return the component's JSX structure

  return (
    <>
      {/* Container to hold the two cats and voting logic */}
      <DivVoteContainerS>
        {/* Display the left cat if available */}
        {catLeft ? (
          <FigureC
            handleVoteCat={() => handleVoteCat(left)}
            cat={catLeft}
            rotateDirection={left}
          />
        ) : null}

        {/* Display the "VS" badge between the two cats */}
        {catLeft && catRight ? <VSBadgeS>VS</VSBadgeS> : null}

        {/* Display the right cat if available */}
        {catRight ? (
          <FigureC
            handleVoteCat={() => handleVoteCat(right)}
            cat={catRight}
            rotateDirection={right}
          />
        ) : null}
      </DivVoteContainerS>

      {/* Button to view the cat ranking page */}
      <Link to="/show-cats">
        <ButtonC>See the cat ranking</ButtonC>
      </Link>
    </>
  );
};

export default VoteCatsP;
