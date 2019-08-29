import React from 'react';
import PropTypes from 'prop-types';
import mainStyles from './main-styles';

const Main = ({ mainContent }) => {
  return <main css={mainStyles}>{mainContent}</main>;
};

Main.propTypes = {
  mainContent: PropTypes.node.isRequired,
};

export default Main;
