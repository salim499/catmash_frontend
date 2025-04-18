// Import styles
import { PaginationContainerS, PageButtonS } from "../styles/PaginationC.style";

// Import types
import { PaginationPropsT } from "../types/PaginationT";

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

      {/* Page numbers list */}
      {Array.from({ length: props.limitPages }, (_, i) => i + 1).map(
        (pageNum) => (
          <PageButtonS
            key={pageNum}
            onClick={() => props.setPage(pageNum)}
            disabled={pageNum === props.page}
          >
            {pageNum}
          </PageButtonS>
        )
      )}

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
