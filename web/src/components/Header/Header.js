import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { withTheme } from 'emotion-theming';

import Logo from './components/Logo';
import Navbar from './components/Navbar';
import MobileNav from './components/MobileNav';

import { withMediaQueries } from '../../assets/styles/style-helpers';
import { colors, sizes } from '../../assets/styles/constants';

const { NEUTRAL } = colors;
const { FOXTROT } = sizes;

/**
 * `....................styles....................`
 */

const elementStyles = ({ theme }) =>
  withMediaQueries(theme)({
    alignItems: 'center',
    backgroundColor: theme.colors.bodyBg,
    borderBottom: `${theme.borderWidth.alpha} solid ${theme.colors.n800}`,
    display: 'flex',
    height: ['5rem', '6rem'],
    padding: ['0 2rem', '0 4rem'],
    position: 'fixed',
    top: 0,
    width: '100vw',
    zIndex: theme.zIndex.header,
  });

const containerStyles = ({ theme }) =>
  withMediaQueries(theme)({
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 auto',
    maxWidth: [...theme.breakpoints],
    width: '100%',
  });

const logoLinkStyles = {
  fontSize: 0,
  lineHeight: 0,
};

/**
 * `....................component....................`
 */

const HeaderElement = styled.header(elementStyles);
const HeaderContainer = styled.div(containerStyles);
const LogoLink = styled(Link)(logoLinkStyles);

const Header = () => (
  <HeaderElement>
    <HeaderContainer>
      <LogoLink to="/">
        <Logo size={FOXTROT} color={NEUTRAL} />
      </LogoLink>
      <MobileNav />
      <Navbar />
    </HeaderContainer>
  </HeaderElement>
);

export default withTheme(Header);
