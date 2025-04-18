// Type for pagination properties used in a pagination component
export type PaginationPropsT = {
  page: number;
  setPage: (page: number) => void;
  limitPages: number;
};
