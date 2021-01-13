import React, { useContext } from "react";
import { MovieContext } from "../context/movieContext";

const Pagination = () => {
  const { newPage, currentPage, showPagination } = useContext(MovieContext);
  return (
    <section>
      {showPagination ? (
        <div className="pagination">
          <button
            style={{
              cursor: currentPage !== 1 ? "pointer" : "not-allowed",
              background: currentPage !== 1 ? "#32de57" : "#303847",
            }}
            onClick={() => newPage("anterior")}
            className="btn prev"
          >
            anterior
          </button>
          <button onClick={() => newPage("proximo")} className="btn next">
            proximo
          </button>
        </div>
      ) : null}
    </section>
  );
};

export default Pagination;
