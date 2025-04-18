// Import from react
import { useState, useEffect } from "react";
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

  const handleVoteCat = async (direction: string) => {};

  return (
    <>
      {/* Container to hold the two cats and voting logic */}
      <DivVoteContainerS>
        {/* Display the left cat if available */}

        <FigureC
          handleVoteCat={() => handleVoteCat(left)}
          cat={{
            id: "MTgwODA3MA",
            name: "chat 1",
            url: "http://24.media.tumblr.com/tumblr_m82woaL5AD1rro1o5o1_1280.jpg",
            score: 0,
          }}
          rotateDirection={left}
        />

        {/* Display the "VS" badge between the two cats */}
        <VSBadgeS>VS</VSBadgeS>

        {/* Display the right cat if available */}

        <FigureC
          handleVoteCat={() => handleVoteCat(right)}
          cat={{
            id: "tt",
            name: "chat 2",
            url: "http://24.media.tumblr.com/tumblr_m29a9d62C81r2rj8po1_500.jpg",
            score: 0,
          }}
          rotateDirection={right}
        />
      </DivVoteContainerS>
    </>
  );
};

export default VoteCatsP;
