import React from 'react';
import { Link } from 'gatsby';
import styles from './Paginate.module.scss';

const Paginate = ({ pageContext }) => {
  const { numPages, currentPage, prevPagePath, nextPagePath } = pageContext;
  const isFirst = currentPage === 0;
  const isLast = currentPage === numPages - 1;
  const prevPage = prevPagePath;
  const nextPage = nextPagePath;
  const disabledPrevLink = isFirst ? "" : "pagination__link--disabled";
  const disabledNextLink = isLast ? "" : "pagination__link--disabled";

  console.log(styles, "styles");

  return (
    <div className={styles['pagination']}>
      <Link
        disabled={isFirst}
        className={isFirst ? styles['pagination__link--disabled'] : ''}
        to={prevPage}
      >
        ← Prev
      </Link>
      <Link
        disabled={isLast}
        className={isLast ? styles['pagination__link--disabled'] : ''}
        to={nextPage}
      >
        Next →
      </Link>
    </div>
  )
}

export default Paginate;