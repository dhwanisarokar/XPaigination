// eslint-disable-next-line react/prop-types
export const Pagination = ({ currentPage, handleNextBtn, handlePrevBtn }) => {
  return (
    <div className="pagination-container">
      <button onClick={handlePrevBtn}>Previous</button>
      <button className="page-btn">{currentPage}</button>
      <button onClick={handleNextBtn}>Next</button>
    </div>
  );
};
