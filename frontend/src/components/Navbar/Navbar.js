import React from 'react';
import { withTheme } from 'emotion-theming';

import NavLink from './components/NavLink';

/**
 * `....................styles....................`
 */

const baseStyles = theme => ({
  label: 'Navbar',
  alignItems: 'center',
  display: 'flex',

  '& :not(:last-of-type)': {
    marginRight: theme.spacings.golf,
  },
});

/**
 * `....................component....................`
 */

const Navbar = ({ theme, ...props }) => (
  <nav css={baseStyles(theme)} {...props}>
    <NavLink to="/" activeClassName="currentPage">
      Home
    </NavLink>
    <NavLink to="/about/" activeClassName="currentPage">
      About
    </NavLink>
    <NavLink to="/projects/" activeClassName="currentPage">
      Projects
    </NavLink>
    <NavLink to="/contact/" activeClassName="currentPage">
      Contact
    </NavLink>
    <NavLink to="/blog/" activeClassName="currentPage">
      Blog
    </NavLink>
  </nav>
);

export default withTheme(Navbar);