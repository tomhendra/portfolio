import { Theme } from 'theme-ui';
import nightOwl from '@theme-ui/prism/presets/night-owl';

const borderWidths = {
  px: '1px',
  '0': '0',
  '2': '2px',
  '4': '4px',
  '8': '8px',
};

const baseColors = {
  transparent: 'transparent',
  black: '#000',
  white: '#fff',
  gray: [
    'null',
    '#f7fafc',
    '#edf2f7',
    '#e2e8f0',
    '#cbd5e0',
    '#a0aec0',
    '#718096',
    '#4a5568',
    '#2d3748',
    '#1a202c',
  ],
  red: [
    'null',
    '#fff5f5',
    '#fed7d7',
    '#feb2b2',
    '#fc8181',
    '#f56565',
    '#e53e3e',
    '#c53030',
    '#9b2c2c',
    '#742a2a',
  ],
  orange: [
    'null',
    '#fffaf0',
    '#feebc8',
    '#fbd38d',
    '#f6ad55',
    '#ed8936',
    '#dd6b20',
    '#c05621',
    '#9c4221',
    '#7b341e',
  ],
  yellow: [
    'null',
    '#fffff0',
    '#fefcbf',
    '#faf089',
    '#f6e05e',
    '#ecc94b',
    '#d69e2e',
    '#b7791f',
    '#975a16',
    '#744210',
  ],
  green: [
    'null',
    '#f0fff4',
    '#c6f6d5',
    '#9ae6b4',
    '#68d391',
    '#48bb78',
    '#38a169',
    '#2f855a',
    '#276749',
    '#22543d',
  ],
  teal: [
    'null',
    '#e6fffa',
    '#b2f5ea',
    '#81e6d9',
    '#4fd1c5',
    '#38b2ac',
    '#319795',
    '#2c7a7b',
    '#285e61',
    '#234e52',
  ],
  blue: [
    'null',
    '#ebf8ff',
    '#bee3f8',
    '#90cdf4',
    '#63b3ed',
    '#4299e1',
    '#3182ce',
    '#2b6cb0',
    '#2c5282',
    '#2a4365',
  ],
  indigo: [
    'null',
    '#ebf4ff',
    '#c3dafe',
    '#a3bffa',
    '#7f9cf5',
    '#667eea',
    '#5a67d8',
    '#4c51bf',
    '#434190',
    '#3c366b',
  ],
  purple: [
    'null',
    '#faf5ff',
    '#e9d8fd',
    '#d6bcfa',
    '#b794f4',
    '#9f7aea',
    '#805ad5',
    '#6b46c1',
    '#553c9a',
    '#44337a',
  ],
  pink: [
    'null',
    '#fff5f7',
    '#fed7e2',
    '#fbb6ce',
    '#f687b3',
    '#ed64a6',
    '#d53f8c',
    '#b83280',
    '#97266d',
    '#702459',
  ],
};

const defaultColors = {
  // standard color palette
  text: baseColors.gray[8],
  background: baseColors.white,
  primary: baseColors.pink[7],
  secondary: baseColors.gray[6],
  accent: baseColors.pink[5],
  highlight: baseColors.yellow[5],
  muted: baseColors.gray[3],
  // additional colors
  textMuted: baseColors.gray[6],
  primaryHover: baseColors.pink[8],
  light: baseColors.gray[1],
  dark: baseColors.gray[8],
  grayDark: baseColors.gray[8],
  success: baseColors.green[3],
  info: baseColors.blue[4],
  warning: baseColors.yellow[3],
  danger: baseColors.red[3],
};

const darkColors = {
  text: baseColors.white,
  background: baseColors.gray[8],
};

const colors = {
  ...baseColors,
  ...defaultColors,
  modes: {
    dark: {
      ...darkColors,
    },
  },
};

const baseFonts = {
  sans:
    'Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
  serif: 'Georgia,Cambria,"Times New Roman",Times,serif',
  mono: 'Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
};

const fonts = {
  ...baseFonts,
  body: baseFonts.sans,
  heading: 'inherit',
  monospace: baseFonts.mono,
};

const fontSizes = [
  '0.875rem',
  '1rem',
  '1.25rem',
  '1.5rem',
  '1.875rem',
  '2.25rem',
  '3rem',
  '4rem',
  '4.5rem',
];

const baseFontWeights = {
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};

const fontWeights = {
  ...baseFontWeights,
  body: baseFontWeights.normal,
  heading: baseFontWeights.bold,
};

const letterSpacings = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
};

const baseLineHeights = {
  none: '1',
  tight: '1.25',
  snug: '1.375',
  normal: '1.5',
  relaxed: '1.625',
  loose: '2',
};

const lineHeights = {
  ...baseLineHeights,
  body: baseLineHeights.relaxed,
  heading: baseLineHeights.tight,
};

const radii = {
  none: '0',
  sm: '0.125rem',
  default: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  full: '9999px',
};

const shadows = {
  xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl:
    '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
  none: 'none',
};

const spacing = {
  px: '1px',
  '0': '0',
  '1': '0.25rem',
  '2': '0.5rem',
  '3': '0.75rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '8': '2rem',
  '10': '2.5rem',
  '12': '3rem',
  '16': '4rem',
  '20': '5rem',
  '24': '6rem',
  '32': '8rem',
  '40': '10rem',
  '48': '12rem',
  '56': '14rem',
  '64': '16rem',
};

const maxWidth = {
  xs: '20rem',
  sm: '24rem',
  md: '28rem',
  lg: '32rem',
  xl: '36rem',
  '2xl': '42rem',
  '3xl': '48rem',
  '4xl': '56rem',
  '5xl': '64rem',
  '6xl': '72rem',
};

const width = {
  '1/2': '50%',
  '1/3': '33.333333%',
  '2/3': '66.666667%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '1/5': '20%',
  '2/5': '40%',
  '3/5': '60%',
  '4/5': '80%',
  '1/6': '16.666667%',
  '2/6': '33.333333%',
  '3/6': '50%',
  '4/6': '66.666667%',
  '5/6': '83.333333%',
  '1/12': '8.333333%',
  '2/12': '16.666667%',
  '3/12': '25%',
  '4/12': '33.333333%',
  '5/12': '41.666667%',
  '6/12': '50%',
  '7/12': '58.333333%',
  '8/12': '66.666667%',
  '9/12': '75%',
  '10/12': '83.333333%',
  '11/12': '91.666667%',
};

const sizes = {
  ...spacing,
  ...maxWidth,
  ...width,
  container: 768,
  full: '100%',
  screenHeight: '100vh',
  screenWidth: '100vw',
};

const space = [
  '0',
  '0.25rem',
  '0.5rem',
  '1rem',
  '2rem',
  '4rem',
  '8rem',
  '16rem',
  '32rem',
];

const zIndices = {
  //   auto: 'auto',
  '0': 0,
  '10': 10,
  '20': 20,
  '30': 30,
  '40': 40,
  '50': 50,
};

const transitions = {
  property: {
    none: 'none',
    all: 'all',
    default:
      'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
    colors: 'background-color, border-color, color, fill, stroke',
    opacity: 'opacity',
    shadow: 'box-shadow',
    transform: 'transform',
  },
  timingFunction: {
    linear: 'linear',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
    fast: '100ms cubic-bezier(0.165, -0.235, 0.58, 1.18)',
    default: '200ms cubic-bezier(0.165, -0.235, 0.58, 1.18)',
    slow: '300ms cubic-bezier(0.165, -0.235, 0.58, 1.18)',
    springDefault: '275ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  },
  duration: {
    '75': '75ms',
    '100': '100ms',
    '150': '150ms',
    '200': '200ms',
    '300': '300ms',
    '500': '500ms',
    '700': '700ms',
    '1000': '1000ms',
  },
};

// const transforms = {
//   transformOrigin: {
//     center: 'center',
//     top: 'top',
//     'top-right': 'top right',
//     right: 'right',
//     'bottom-right': 'bottom right',
//     bottom: 'bottom',
//     'bottom-left': 'bottom left',
//     left: 'left',
//     'top-left': 'top left',
//   },
//   translate: {
//     ...spacing,
//     '-full': '-100%',
//     '-1/2': '-50%',
//     '1/2': '50%',
//     full: '100%',
//   },
//   scale: {
//     '0': '0',
//     '50': '.5',
//     '75': '.75',
//     '90': '.9',
//     '95': '.95',
//     '100': '1',
//     '105': '1.05',
//     '110': '1.1',
//     '125': '1.25',
//     '150': '1.5',
//   },
//   rotate: {
//     '-180': '-180deg',
//     '-90': '-90deg',
//     '-45': '-45deg',
//     '0': '0',
//     '45': '45deg',
//     '90': '90deg',
//     '180': '180deg',
//   },
//   skew: {
//     '-12': '-12deg',
//     '-6': '-6deg',
//     '-3': '-3deg',
//     '0': '0',
//     '3': '3deg',
//     '6': '6deg',
//     '12': '12deg',
//   },
// };

const breakpoints = ['640px', '768px', '1024px', '1280px'];

// Markdown & Styled Styles
const heading = {
  fontFamily: 'heading',
  fontWeight: 'heading',
  lineHeight: 'heading',
  m: 0,
  mb: 1,
};

const styles = {
  root: {
    fontFamily: 'body',
    lineHeight: 'body',
    fontWeight: 'body',
  },
  a: {
    color: 'primary',
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline',
    },
  },
  h1: {
    ...heading,
    fontSize: 6,
    mt: 2,
  },
  h2: {
    ...heading,
    fontSize: 5,
    mt: 2,
  },
  h3: {
    ...heading,
    fontSize: 4,
    mt: 3,
  },
  h4: {
    ...heading,
    fontSize: 3,
  },
  h5: {
    ...heading,
    fontSize: 2,
  },
  h6: {
    ...heading,
    fontSize: 1,
    mb: 2,
  },
  code: {
    ...nightOwl,
    p: 3,
  },

  pre: {},
  hr: {
    bg: 'muted',
    border: 0,
    height: '1px',
    m: 3,
  },
};

// Variants
const layout = {
  root: {},
  header: {
    bg: 'inherit',
    boxShadow: 'sm',
    p: 3,
  },
  main: {
    pt: 5,
  },
  footer: {},
};

const commonButtonStyles = {
  py: 2,
  px: 3,
  cursor: `pointer`,
  fontSize: `100%`,
  lineHeight: `inherit`,
};

const buttons = {
  simple: {
    ...commonButtonStyles,
    backgroundColor: `primary`,
    border: `none`,
    color: `white`,
    fontWeight: `bold`,
    borderRadius: `default`,
    '&:hover': {
      backgroundColor: `primaryHover`,
    },
  },
  pill: {
    ...commonButtonStyles,
    backgroundColor: `primary`,
    border: `none`,
    color: `white`,
    fontWeight: `bold`,
    borderRadius: `full`,
    '&:hover': {
      backgroundColor: `primaryHover`,
    },
  },
  outline: {
    ...commonButtonStyles,
    backgroundColor: `transparent`,
    borderWidth: `1px`,
    borderStyle: `solid`,
    borderColor: `primary`,
    color: `primary`,
    fontWeight: `semibold`,
    borderRadius: `default`,
    '&:hover': {
      backgroundColor: `primary`,
      color: `white`,
      borderColor: `transparent`,
    },
  },
  bordered: {
    ...commonButtonStyles,
    backgroundColor: `primary`,
    borderWidth: `1px`,
    borderStyle: `solid`,
    borderColor: `primaryHover`,
    color: `white`,
    fontWeight: `bold`,
    borderRadius: `default`,
    '&:hover': {
      backgroundColor: `primaryHover`,
    },
  },
  disabled: {
    ...commonButtonStyles,
    backgroundColor: `primary`,
    border: `none`,
    opacity: 0.5,
    cursor: `not-allowed`,
    color: `white`,
    fontWeight: `bold`,
    borderRadius: `default`,
  },
  '3D': {
    ...commonButtonStyles,
    backgroundColor: `primary`,
    border: `none`,
    borderBottomWidth: `4px`,
    borderBottomStyle: `solid`,
    borderBottomColor: `primaryHover`,
    color: `white`,
    fontWeight: `bold`,
    borderRadius: `default`,
    transition: `transform 0.3s ease-in-out`,
    '&:hover': {
      transform: `translateY(-1px)`,
    },
  },
  elevated: {
    ...commonButtonStyles,
    backgroundColor: `white`,
    borderWidth: `1px`,
    borderStyle: `solid`,
    borderColor: `gray.4`,
    color: `text`,
    fontWeight: `bold`,
    borderRadius: `default`,
    boxShadow: `default`,
    '&:hover': {
      backgroundColor: `gray.1`,
    },
  },
};

const commonInputStyles = {
  py: 2,
  px: 3,
  fontSize: `100%`,
  borderRadius: `default`,
  // appearance: `none`,
  lineHeight: `tight`,
};

const forms = {
  input: {
    shadow: {
      ...commonInputStyles,
      border: `none`,
      color: `gray.7`,
      boxShadow: `default`,
      '&:focus': {
        outline: `none`,
        boxShadow: `outline`,
      },
    },
    inline: {
      ...commonInputStyles,
      backgroundColor: `gray.2`,
      borderWidth: `2px`,
      borderStyle: `solid`,
      borderColor: `gray.2`,
      color: `gray.7`,
      '&:focus': {
        outline: `none`,
        borderColor: `primary`,
        backgroundColor: `white`,
      },
    },
    underline: {
      ...commonInputStyles,
      backgroundColor: `transparent`,
      border: `none`,
      borderBottomWidth: `2px`,
      borderBottomStyle: `solid`,
      borderBottomColor: `primary`,
      borderRadius: `0px`,
      color: `gray.7`,
      '&:focus': {
        outline: `none`,
        borderColor: `primary`,
        backgroundColor: `white`,
      },
    },
  },
};

const theme: Theme = {
  // borders: {},
  // borderStyles: {},
  borderWidths,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  // opacities: {},
  radii,
  shadows,
  sizes,
  space,
  zIndices,
  transitions,
  // transforms,
  breakpoints,
  styles,
  layout,
  buttons,
  forms,
};

export default theme;

// https://dev.theme-ui.com/sx-prop#theme-aware-properties
// https://dev.theme-ui.com/theme-spec/
