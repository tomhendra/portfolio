import React from 'react';
import { socialStyles } from './social-styles';
import githubSVG from '../../assets/images/social/github.svg';
import linkedinSVG from '../../assets/images/social/linkedin.svg';
import twitterSVG from '../../assets/images/social/twitter.svg';

export const Social = () => (
  <div css={socialStyles}>
    <a href="https://github.com/tomhendra" target="blank">
      <img src={githubSVG} alt="GitHub logo" />
    </a>
    <a href="https://twitter.com/TomHendra" target="blank">
      <img src={twitterSVG} alt="Twitter logo" />
    </a>
    <a href="https://www.linkedin.com/in/tom-hendra/" target="blank">
      <img src={linkedinSVG} alt="LinkedIn logo" />
    </a>
  </div>
);