import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            author {
              name
              bio
              photo
              contacts {
                linkedin
                github
                email
                website
              }
            }
          }
        }
      }
    `
  );

  return site.siteMetadata;
};

export default useSiteMetadata;