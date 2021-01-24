import React from 'react';
import Pagination from '@material-ui/lab/Pagination';

const Paginate = ({ pageContext }) => {
  console.log(pageContext, "pageContext");
  const { totalCount } = pageContext;
  return (
    <Pagination count={totalCount} />
  )
}

export default Paginate;