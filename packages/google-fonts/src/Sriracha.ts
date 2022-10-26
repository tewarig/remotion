import { loadFonts } from './base';

export const meta = {
  family: "'Sriracha'",
  version: 'v10',
  url: 'https://fonts.googleapis.com/css2?family=Sriracha:ital,wght@0,400',
  unicodeRanges: {
    'thai': 'U+0E01-0E5B, U+200C-200D, U+25CC',
    'vietnamese': 'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB',
    'latin-ext': 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
    'latin': 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
  },
  fonts: {
    normal: {
      '400': {
        'thai': 'https://fonts.gstatic.com/s/sriracha/v10/0nkrC9D4IuYBgWcI9NbLTwHSoQ.woff2',
        'vietnamese': 'https://fonts.gstatic.com/s/sriracha/v10/0nkrC9D4IuYBgWcI9NbQTwHSoQ.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/sriracha/v10/0nkrC9D4IuYBgWcI9NbRTwHSoQ.woff2',
        'latin': 'https://fonts.gstatic.com/s/sriracha/v10/0nkrC9D4IuYBgWcI9NbfTwE.woff2',
      },
    },
  },
};

export const family = meta.family;

type Variants = {
  normal: {
    weights: '400';
    subsets: 'latin' | 'latin-ext' | 'thai' | 'vietnamese';
  };
};

export const loadFont = <T extends keyof Variants>(
  style: T,
  options: {
    weights: Variants[T]['weights'][];
    subsets: Variants[T]['subsets'][];
  }
) => {
  loadFonts(meta, style, options);
};
