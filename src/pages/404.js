import React from 'react';
import Layout from '../components/Layout/Layout';
import Sidebar from '../components/Sidebar/Sidebar';
import { useSiteMetadata } from '../hooks';
import { Container, Grid, Typography, Divider, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  gridContainerRoot: {
    flexWrap: 'nowrap'
  },
  dividerRoot: {
    backgroundImage: 'linear-gradient(to bottom, #e6e6e6 0%, #e6e6e6 48%, #FFF 100%)',
    backgroundSize: 'auto',
    width: '0.0625rem',
    height: '33.75rem',
    marginTop: '2.635rem'
  },
  pageContentContainer: {
    padding: '2.5rem 2.1875rem',
    margin: 0
  },
  pageTitle: {
    fontSize: '2.5rem',
    fontWeight: 600,
    lineHeight: '3.25rem',
    marginBottom: '2.35625rem'
  }
}))

const NotFoundPage = () => {
  const classes = useStyles();
  const { author } = useSiteMetadata();

  return (
    <Layout title={`Not Found - ${author.name}`}>
      <Container maxWidth="md">
        <Grid className={classes.gridContainerRoot} container>
          <Grid item lg={4} md={5} sm={12}>
            <Sidebar />
          </Grid>
          <Divider className={classes.dividerRoot} orientation="vertical" />
          <Grid className={classes.pageContentContainer} item lg={8} md={7} sm={12}>
            <Typography className={classes.pageTitle} variant="h2" component="h1">NOT FOUND</Typography>
            <Typography>You just hit a route that doesn&#39;t exist... the sadness.</Typography>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export default NotFoundPage