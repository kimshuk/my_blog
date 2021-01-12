import React from 'react';
import {useSiteMetadata} from '../hooks'
import Sidebar from '../components/Sidebar/Sidebar'

const IndexTemplate = ({ data, pageContext }) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
}