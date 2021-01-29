import React from 'react';
import { Link } from 'gatsby';

const Paginate = ({ pageContext }) => {
  const { numPages, currentPage, prevPagePath, nextPagePath } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = prevPagePath;
  const nextPage = nextPagePath;
  // console.log(isFirst, isLast);

  return (
    <>
      {!isFirst && (
        <Link to={prevPage} rel='prev'>
          ← Previous Page
        </Link>
      )}
      {!isLast && (
        <Link to={nextPage} rel="next">
          Next Page →
        </Link>
      )}
    </>
  )
}

export default Paginate;