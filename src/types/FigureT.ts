// Import types
import { CatT } from "./CatT";
// Import constants
import { left, right } from "../constants/index";

// Define type for a Figure object, which represents a display of a cat
export type FigureT = {
  isScreenWidthLessOrEqual?: boolean;
  index?: number;
  page?: number;
  rotateDirection?: typeof left | typeof right;
  cat: CatT;
  handleVoteCat?: () => void;
};

// Define type for a styled figure of a cat
export type FigureCatST = {
  order?: number;
  index?: number;
  page?: number;
  rotateDirection?: string;
};

export type ImageCatST = { width: string; height: string };
