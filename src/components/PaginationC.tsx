// Import styles
import {
  PaginationContainerS,
  PageButtonS,
  PageInfoS,
} from "../styles/PaginationC.style";

type PaginationPropsT = {
  page: number;
  setPage: (page: number) => void;
  limitPages: number;
};

// ─────────────────────────────────────────────
// Pagination component to navigate through pages
// ─────────────────────────────────────────────
const PaginationC = (props: PaginationPropsT) => {
  return (
    <PaginationContainerS>
      {/* Previous button - disabled if on the first page */}
      <PageButtonS
        onClick={() => props.setPage(props.page - 1)}
        disabled={props.page === 1}
      >
        Previous
      </PageButtonS>

      {/* Display the current page number */}
      <PageInfoS>Page {props.page}</PageInfoS>

      {/* Next button - disabled if on the last page */}
      <PageButtonS
        onClick={() => props.setPage(props.page + 1)}
        disabled={props.page === props.limitPages}
      >
        Next
      </PageButtonS>
    </PaginationContainerS>
  );
};

export default PaginationC;
