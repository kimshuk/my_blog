import React from 'react';
import Layout from '../components/Layout/Layout';
import Sidebar from "../components/Sidebar/Sidebar";
import { useSiteMetadata } from '../hooks';
import { Container, Grid, Typography, Divider, makeStyles, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  gridContainerRoot: {
    flexWrap: 'wrap',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      flexWrap: 'nowrap'
    }
  },
  dividerRoot: {
    [theme.breakpoints.up('md')]: {
      backgroundImage: 'linear-gradient(to bottom, #e6e6e6 0%, #e6e6e6 48%, #FFF 100%)',
      backgroundSize: 'auto',
      width: '0.0625rem',
      height: '33.75rem',
      marginTop: '2.635rem'
    }
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

const AboutPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const mediaQuery = useMediaQuery(theme.breakpoints.up('md'));
  const { author } = useSiteMetadata();

  return (
    <Layout title={`About - ${author.name}`}>
      <Container maxWidth="md">
        <Grid className={classes.gridContainerRoot} container>
          <Grid item lg={4} md={5} sm={12}>
            <Sidebar />
          </Grid>
          <Divider className={classes.dividerRoot} orientation={mediaQuery ? `vertical` : `horizontal`} />
          <Grid className={classes.pageContentContainer} item lg={8} md={7} sm={12}>
            <Typography className={classes.pageTitle} variant="h2" component="h1">About me</Typography>
            <Typography component='p'>Andrew is a Platform Developer at iTruck. Spent 3 years in OC, California as Web Developer and now in Seoul, South Korea, striving to become a better problem solver. His main languages are React, Node.js, and Express</Typography>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

export default AboutPage;