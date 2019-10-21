import React from 'react';
import { withTheme } from 'emotion-theming';
import PropTypes from 'prop-types';

import { sizes } from '../../assets/styles/constants';

/**
 * `....................styles....................`
 */

const styles = (
  start,
  end,
  topSpacing,
  rightSpacing,
  bottomSpacing,
  leftSpacing,
  theme,
) => ({
  label: 'Row',
  gridColumnStart: start,
  gridColumnEnd: end,
  marginTop: theme.spacings[topSpacing],
  paddingRight: theme.spacings[rightSpacing],
  marginBottom: theme.spacings[bottomSpacing],
  paddingLeft: theme.spacings[leftSpacing],
});

/**
 * `....................component....................`
 */

const Row = ({
  start,
  end,
  topSpacing,
  rightSpacing,
  bottomSpacing,
  leftSpacing,
  theme,
  ...props
}) => {
  return (
    <div
      css={styles(
        start,
        end,
        topSpacing,
        rightSpacing,
        bottomSpacing,
        leftSpacing,
        theme,
      )}
      {...props}
    />
  );
};

const sizesArray = Object.values(sizes);

Row.defaultProps = {
  start: 1,
  end: 12,
  topSpacing: null,
  rightSpacing: null,
  bottomSpacing: null,
  leftSpacing: null,
};

Row.propTypes = {
  children: PropTypes.node.isRequired,
  start: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
  end: PropTypes.oneOf([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  topSpacing: PropTypes.oneOf([...sizesArray]),
  rightSpacing: PropTypes.oneOf([...sizesArray]),
  bottomSpacing: PropTypes.oneOf([...sizesArray]),
  leftSpacing: PropTypes.oneOf([...sizesArray]),
};

export default withTheme(Row);
