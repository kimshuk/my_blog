import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout/Layout'
import Post from '../components/Post/Post';

export default function PostTemplate({data}) {
    return (
        <Layout>
            <Post post={data.markdownRemark} />
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
                description
                socialImage
            }   
        }
    }
`
