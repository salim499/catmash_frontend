// Import styles
import { DivVoteContainerS, VSBadgeS } from "../styles/VoteCatsP.style";

// Import constants
import { left, right } from "../constants";

// Import components
import FigureC from "../components/FigureC";

const VoteCatsP = () => {
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
