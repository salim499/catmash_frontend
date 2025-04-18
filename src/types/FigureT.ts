// Import types
import { CatT } from "./CatT";

export type FigureT = {
  isScreenWidthLessOrEqual?: boolean;
  index?: number;
  page?: number;
  rotateDirection?: "left" | "right";
  cat: CatT;
  handleVoteCat?: () => void;
};

export type FigureCatST = {
  order?: number;
  index?: number;
  page?: number;
  rotateDirection?: string;
};

export type ImageCatST = { width: string; height: string };
