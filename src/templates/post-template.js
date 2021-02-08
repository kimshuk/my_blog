import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout/Layout'
import Post from '../components/Post/Post';
import { useSiteMetadata } from '../hooks';

const PageTemplate = ({data, pageContext}) => {
    const { subtitle: siteSubtitle, author } = useSiteMetadata();
    const { frontmatter } = data.markdownRemark;
    const { title: pageTitle, description: pageDescription = '' } = frontmatter;
    const metaDescription = pageDescription || siteSubtitle;

    return (
        <Layout title={`${pageTitle} - ${author.name}`} description={metaDescription}>
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