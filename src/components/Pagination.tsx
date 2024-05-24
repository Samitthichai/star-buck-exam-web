import ReactPaginate from "react-paginate";
import styles from "@styles/pagination.module.scss";

const Pagination = ({
  pageCount,
  onSelect,
  pageRangeDisplayed = 3,
  initialPage = 0,
  marginPagesDisplayed = 1
}: {
  pageCount: number;
  onSelect: (value: number) => void;
  pageRangeDisplayed?: number;
  initialPage?: number;
  marginPagesDisplayed?: number;
}) => {
  return (
    <>
      <ReactPaginate
        nextLabel=""
        previousLabel=""
        pageCount={pageCount}
        pageRangeDisplayed={pageRangeDisplayed}
        initialPage={initialPage}
        containerClassName="pagination"
        marginPagesDisplayed={marginPagesDisplayed}
        pageClassName={`${styles.pageItem}`}
        pageLinkClassName={`${styles.pageLink}`}
        breakLabel="..."
        onPageChange={({ selected }) => onSelect(selected + 1)}
        activeClassName={`${styles.active}`}
      />
    </>
  );
};

export default Pagination;
