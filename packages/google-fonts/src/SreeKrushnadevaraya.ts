import { loadFonts } from './base';

export const meta = {
  family: "'Sree Krushnadevaraya'",
  version: 'v21',
  url: 'https://fonts.googleapis.com/css2?family=Sree+Krushnadevaraya:ital,wght@0,400',
  unicodeRanges: {
    telugu: 'U+0951-0952, U+0964-0965, U+0C00-0C7F, U+1CDA, U+200C-200D, U+25CC',
    latin: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
  },
  fonts: {
    normal: {
      '400': {
        telugu: 'https://fonts.gstatic.com/s/sreekrushnadevaraya/v21/R70FjzQeifmPepmyQQjQ9kvwMkWYPfTA_HWA0llguQ.woff2',
        latin: 'https://fonts.gstatic.com/s/sreekrushnadevaraya/v21/R70FjzQeifmPepmyQQjQ9kvwMkWYPfTA_HWc0lk.woff2',
      },
    },
  },
};

export const family = meta.family;

type Variants = {
  normal: {
    weights: '400';
    subsets: 'latin' | 'telugu';
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
