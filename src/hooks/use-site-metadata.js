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
              job
              photo
              contacts {
                linkedin
                github
                email
                website
              }
            }
            menu {
              label
              path
            }
          }
        }
      }
    `
  );

  return site.siteMetadata;
};

export default useSiteMetadata;