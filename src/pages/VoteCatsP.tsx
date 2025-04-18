// Import from react
import { useState } from "react";
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
