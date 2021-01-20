import React from 'react';
import { useSiteMetadata } from '../../hooks';
import Contacts from './Contacts/Contacts';
import Author from './Author/Author';

const Sidebar = () => {
  const { author, menu } = useSiteMetadata();
  console.log(author.contacts);
  return (
    <>
      <Author author={author} />
      <Contacts contacts={author.contacts} />
    </>
  )
};

export default Sidebar;