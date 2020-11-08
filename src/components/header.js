import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const Header = ({ siteTitle }) => (
  <header>
    <Container maxWidth="sm">
      <Box>
        <h1>
          <Link
            to="/"
          >
            {siteTitle}
          </Link>
        </h1>
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
