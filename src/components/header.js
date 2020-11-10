import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { Typography } from "@material-ui/core";

const Header = ({ siteMetadata }) => (
  <header>
    <Container maxWidth="sm">
      <Box>
        <Typography component="h1" variant="h5">
          <Link
            to="/"
          >
            {siteMetadata.title}
          </Link>
        </Typography>
        <Typography component="subtitle1">{siteMetadata.author.name}</Typography>
        <Typography component="body1" variant="p">Pariatur id incididunt tempor in deserunt esse tempor adipisicing mollit. Consectetur ipsum id magna culpa enim. Pariatur mollit nostrud dolore ex do minim reprehenderit pariatur.</Typography>
      </Box>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
