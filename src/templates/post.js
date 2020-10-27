import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import Layout from "../components/layout"

export default function Template({data}) {
    const {markdownRemark: post} = data;
    return (
        <Layout>
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{__html: post.html}} />
            <p>Posted on: {post.frontmatter.date}</p>
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
