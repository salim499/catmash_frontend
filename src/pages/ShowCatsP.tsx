// Import components
import FigureC from "../components/FigureC";

const cats = [
  {
    id: "MTgwODA3MA",
    name: "chat 1",
    url: "http://24.media.tumblr.com/tumblr_m82woaL5AD1rro1o5o1_1280.jpg",
    score: 0,
  },
  {
    id: "tt",
    name: "chat 2",
    url: "http://24.media.tumblr.com/tumblr_m29a9d62C81r2rj8po1_500.jpg",
    score: 0,
  },
  {
    id: "bmp",
    name: "chat 3",
    url: "http://25.media.tumblr.com/tumblr_m4bgd9OXmw1qioo2oo1_500.jpg",
    score: 0,
  },
];
const ShowCatsP = () => {
  return (
    <div>
      {cats.map((cat: any, index: number) => (
        <FigureC
          key={cat.id}
          index={index}
          page={1}
          isScreenWidthLessOrEqual={false}
          cat={cat}
        />
      ))}
    </div>
  );
};

export default ShowCatsP;
