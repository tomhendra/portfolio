import React from 'react';
import PropTypes from 'prop-types';
import { Global, css } from '@emotion/core';
import useSiteMetadata from '../../hooks/use-site-metadata';
import Header from '../header';
import Footer from '../footer';

const Layout = ({ children }) => {
  const { title } = useSiteMetadata();
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }
          /* lobotomised owl selector - every sibling inherits */
          * + * {
            margin-top: 1rem;
          }

          html,
          body {
            margin: 0;
            color: 555;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
              sans-serif;
            font-size: 18px;
            line-height: 1.4;

            /* remove margin for main div that that Gatsby mounts into */
            > div {
              margin-top: 0;
            }

            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              color: #222;
              line-height: 1.1;

              + * {
                margin-top: 0.5rem;
              }
            }

            strong {
              color: #222;
            }

            li {
              margin-top: 0.25rem;
            }
          }
        `}
      />
      <Header siteTitle={title} />
      <main
        css={css`
          margin: 2rem auto 4rem;
          max-width: 90vw;
          width: 550px;
        `}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
