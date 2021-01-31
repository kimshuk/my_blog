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
    query BlogPostByPath($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                date
                description
                socialImage
            }   
        }
    }
`
