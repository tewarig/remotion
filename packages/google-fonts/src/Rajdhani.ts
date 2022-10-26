import { loadFonts } from './base';

export const meta = {
  family: "'Rajdhani'",
  version: 'v15',
  url: 'https://fonts.googleapis.com/css2?family=Rajdhani:ital,wght@0,300;0,400;0,500;0,600;0,700',
  unicodeRanges: {
    'devanagari': 'U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB',
    'latin-ext': 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
    'latin': 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
  },
  fonts: {
    normal: {
      '300': {
        'devanagari': 'https://fonts.gstatic.com/s/rajdhani/v15/LDI2apCSOBg7S-QT7pasEfOqeef2kg.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/rajdhani/v15/LDI2apCSOBg7S-QT7pasEfOleef2kg.woff2',
        'latin': 'https://fonts.gstatic.com/s/rajdhani/v15/LDI2apCSOBg7S-QT7pasEfOreec.woff2',
      },
      '400': {
        'devanagari': 'https://fonts.gstatic.com/s/rajdhani/v15/LDIxapCSOBg7S-QT7p4GM-aUWA.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/rajdhani/v15/LDIxapCSOBg7S-QT7p4JM-aUWA.woff2',
        'latin': 'https://fonts.gstatic.com/s/rajdhani/v15/LDIxapCSOBg7S-QT7p4HM-Y.woff2',
      },
      '500': {
        'devanagari': 'https://fonts.gstatic.com/s/rajdhani/v15/LDI2apCSOBg7S-QT7pb0EPOqeef2kg.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/rajdhani/v15/LDI2apCSOBg7S-QT7pb0EPOleef2kg.woff2',
        'latin': 'https://fonts.gstatic.com/s/rajdhani/v15/LDI2apCSOBg7S-QT7pb0EPOreec.woff2',
      },
      '600': {
        'devanagari': 'https://fonts.gstatic.com/s/rajdhani/v15/LDI2apCSOBg7S-QT7pbYF_Oqeef2kg.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/rajdhani/v15/LDI2apCSOBg7S-QT7pbYF_Oleef2kg.woff2',
        'latin': 'https://fonts.gstatic.com/s/rajdhani/v15/LDI2apCSOBg7S-QT7pbYF_Oreec.woff2',
      },
      '700': {
        'devanagari': 'https://fonts.gstatic.com/s/rajdhani/v15/LDI2apCSOBg7S-QT7pa8FvOqeef2kg.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/rajdhani/v15/LDI2apCSOBg7S-QT7pa8FvOleef2kg.woff2',
        'latin': 'https://fonts.gstatic.com/s/rajdhani/v15/LDI2apCSOBg7S-QT7pa8FvOreec.woff2',
      },
    },
  },
};

export const family = meta.family;

type Variants = {
  normal: {
    weights: '300' | '400' | '500' | '600' | '700';
    subsets: 'devanagari' | 'latin' | 'latin-ext';
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
