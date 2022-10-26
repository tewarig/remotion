import { loadFonts } from './base';

export const meta = {
  family: "'Big Shoulders Inline Text'",
  version: 'v21',
  url: 'https://fonts.googleapis.com/css2?family=Big+Shoulders+Inline+Text:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900',
  unicodeRanges: {
    'vietnamese': 'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB',
    'latin-ext': 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
    'latin': 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
  },
  fonts: {
    normal: {
      '100': {
        'vietnamese': 'https://fonts.gstatic.com/s/bigshouldersinlinetext/v21/vm8kdQDmVECV5-vm5dJ-Tp-6WDeRjL4RV7dP8u-NGSLwHmI1.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/bigshouldersinlinetext/v21/vm8kdQDmVECV5-vm5dJ-Tp-6WDeRjL4RV7dP8u-NGSPwHmI1.woff2',
        'latin': 'https://fonts.gstatic.com/s/bigshouldersinlinetext/v21/vm8kdQDmVECV5-vm5dJ-Tp-6WDeRjL4RV7dP8u-NGS3wHg.woff2',
      },
      '200': {
        'vietnamese': 'https://fonts.gstatic.com/s/bigshouldersinlinetext/v21/vm8kdQDmVECV5-vm5dJ-Tp-6WDeRjL4RV7dP8u-NGSLwHmI1.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/bigshouldersinlinetext/v21/vm8kdQDmVECV5-vm5dJ-Tp-6WDeRjL4RV7dP8u-NGSPwHmI1.woff2',
        'latin': 'https://fonts.gstatic.com/s/bigshouldersinlinetext/v21/vm8kdQDmVECV5-vm5dJ-Tp-6WDeRjL4RV7dP8u-NGS3wHg.woff2',
      },
      '300': {
        'vietnamese': 'https://fonts.gstatic.com/s/bigshouldersinlinetext/v21/vm8kdQDmVECV5-vm5dJ-Tp-6WDeRjL4RV7dP8u-NGSLwHmI1.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/bigshouldersinlinetext/v21/vm8kdQDmVECV5-vm5dJ-Tp-6WDeRjL4RV7dP8u-NGSPwHmI1.woff2',
        'latin': 'https://fonts.gstatic.com/s/bigshouldersinlinetext/v21/vm8kdQDmVECV5-vm5dJ-Tp-6WDeRjL4RV7dP8u-NGS3wHg.woff2',
      },
      '400': {
        'vietnamese': 'https://fonts.gstatic.com/s/bigshouldersinlinetext/v21/vm8kdQDmVECV5-vm5dJ-Tp-6WDeRjL4RV7dP8u-NGSLwHmI1.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/bigshouldersinlinetext/v21/vm8kdQDmVECV5-vm5dJ-Tp-6WDeRjL4RV7dP8u-NGSPwHmI1.woff2',
        'latin': 'https://fonts.gstatic.com/s/bigshouldersinlinetext/v21/vm8kdQDmVECV5-vm5dJ-Tp-6WDeRjL4RV7dP8u-NGS3wHg.woff2',
      },
      '500': {
        'vietnamese': 'https://fonts.gstatic.com/s/bigshouldersinlinetext/v21/vm8kdQDmVECV5-vm5dJ-Tp-6WDeRjL4RV7dP8u-NGSLwHmI1.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/bigshouldersinlinetext/v21/vm8kdQDmVECV5-vm5dJ-Tp-6WDeRjL4RV7dP8u-NGSPwHmI1.woff2',
        'latin': 'https://fonts.gstatic.com/s/bigshouldersinlinetext/v21/vm8kdQDmVECV5-vm5dJ-Tp-6WDeRjL4RV7dP8u-NGS3wHg.woff2',
      },
      '600': {
        'vietnamese': 'https://fonts.gstatic.com/s/bigshouldersinlinetext/v21/vm8kdQDmVECV5-vm5dJ-Tp-6WDeRjL4RV7dP8u-NGSLwHmI1.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/bigshouldersinlinetext/v21/vm8kdQDmVECV5-vm5dJ-Tp-6WDeRjL4RV7dP8u-NGSPwHmI1.woff2',
        'latin': 'https://fonts.gstatic.com/s/bigshouldersinlinetext/v21/vm8kdQDmVECV5-vm5dJ-Tp-6WDeRjL4RV7dP8u-NGS3wHg.woff2',
      },
      '700': {
        'vietnamese': 'https://fonts.gstatic.com/s/bigshouldersinlinetext/v21/vm8kdQDmVECV5-vm5dJ-Tp-6WDeRjL4RV7dP8u-NGSLwHmI1.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/bigshouldersinlinetext/v21/vm8kdQDmVECV5-vm5dJ-Tp-6WDeRjL4RV7dP8u-NGSPwHmI1.woff2',
        'latin': 'https://fonts.gstatic.com/s/bigshouldersinlinetext/v21/vm8kdQDmVECV5-vm5dJ-Tp-6WDeRjL4RV7dP8u-NGS3wHg.woff2',
      },
      '800': {
        'vietnamese': 'https://fonts.gstatic.com/s/bigshouldersinlinetext/v21/vm8kdQDmVECV5-vm5dJ-Tp-6WDeRjL4RV7dP8u-NGSLwHmI1.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/bigshouldersinlinetext/v21/vm8kdQDmVECV5-vm5dJ-Tp-6WDeRjL4RV7dP8u-NGSPwHmI1.woff2',
        'latin': 'https://fonts.gstatic.com/s/bigshouldersinlinetext/v21/vm8kdQDmVECV5-vm5dJ-Tp-6WDeRjL4RV7dP8u-NGS3wHg.woff2',
      },
      '900': {
        'vietnamese': 'https://fonts.gstatic.com/s/bigshouldersinlinetext/v21/vm8kdQDmVECV5-vm5dJ-Tp-6WDeRjL4RV7dP8u-NGSLwHmI1.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/bigshouldersinlinetext/v21/vm8kdQDmVECV5-vm5dJ-Tp-6WDeRjL4RV7dP8u-NGSPwHmI1.woff2',
        'latin': 'https://fonts.gstatic.com/s/bigshouldersinlinetext/v21/vm8kdQDmVECV5-vm5dJ-Tp-6WDeRjL4RV7dP8u-NGS3wHg.woff2',
      },
    },
  },
};

export const family = meta.family;

type Variants = {
  normal: {
    weights: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
    subsets: 'latin' | 'latin-ext' | 'vietnamese';
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
