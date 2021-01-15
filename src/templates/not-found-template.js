import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Layout from '../components/Layout/Layout';
import { useSiteMetadata } from '../hooks';

const NotFoundTemplate = () => {
  const { title, subtitle } = useSiteMetadata();

  return (
    <Layout title={`Not Found - ${title}`} description={subtitle}>
      <Sidebar />
    </Layout>
  );
};

export default NotFoundTemplate;
