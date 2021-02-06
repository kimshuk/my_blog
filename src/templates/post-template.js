import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout/Layout'
import Post from '../components/Post/Post';

const PageTemplate = ({data, pageContext}) => {
    console.log(pageContext, "pageContext in Post Temp")
    return (
        <Layout>
            <Post post={data.markdownRemark} pageContext={pageContext} />
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
export default PageTemplate;