import { graphql } from 'gatsby';
import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '../components/Link';
import Layout from '../components/Layout/Layout'

export default function PostTemplate({data}) {
    const {markdownRemark: post} = data;
    return (
        <Layout>
            <Container maxWidth="sm">
                <Box my={4}>
                    <Typography variant="h2" component="h1" gutterBottom>{post.frontmatter.title}</Typography>
                    <div dangerouslySetInnerHTML={{__html: post.html}} />
                    <Typography variant="body1" component="p">Posted on: {post.frontmatter.date}</Typography>
                    <Link to="/">Go to the main page</Link>
                </Box>
            </Container>
        </Layout>
    )
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                path
                title
                date
            }   
        }
    }
`
