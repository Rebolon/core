/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { token, CdsTheme } from './token-utils';

// internal optimization so tokens can refer to pre-calculated values rather than generating/duplicating the same calc over many tokens
const internal = {
  scale1: token('calc((1rem / var(--cds-global-base)) * var(--cds-global-scale-layout-space))', { raw: true }),
  scale2: token('calc((1rem / var(--cds-global-base)) * var(--cds-global-scale-space))', { raw: true }),
  scale3: token('calc((1rem / var(--cds-global-base)) * var(--cds-global-scale-typography))', { raw: true }),
};

const base = token(20, { raw: true });

const scale = {
  space: token(1, { raw: true }),
  layoutSpace: token(1, { raw: true }),
  typography: token(1, { raw: true }),
};

const layout = {
  grid: {
    cols: token(12, { raw: true }),
  },
  width: {
    xs: token('576px', { raw: true, static: true }),
    sm: token('768px', { raw: true, static: true }),
    md: token('992px', { raw: true, static: true }),
    lg: token('1200px', { raw: true, static: true }),
    xl: token('1440px', { raw: true, static: true }),
  },
  space: {
    xxxs: token(2, { scale: internal.scale1 }),
    xxs: token(4, { scale: internal.scale1 }),
    xs: token(8, { scale: internal.scale1 }),
    sm: token(12, { scale: internal.scale1 }),
    md: token(16, { scale: internal.scale1 }),
    lg: token(24, { scale: internal.scale1 }),
    xl: token(32, { scale: internal.scale1 }),
    xxl: token(48, { scale: internal.scale1 }),
    xxxl: token(64, { scale: internal.scale1 }),
  },
};

const space = {
  0: token(0, { scale: internal.scale2 }),
  1: token(1, { scale: internal.scale2 }),
  2: token(2, { scale: internal.scale2 }),
  3: token(4, { scale: internal.scale2 }),
  4: token(6, { scale: internal.scale2 }),
  5: token(8, { scale: internal.scale2 }),
  6: token(12, { scale: internal.scale2 }),
  7: token(16, { scale: internal.scale2 }),
  8: token(18, { scale: internal.scale2 }),
  9: token(24, { scale: internal.scale2 }),
  10: token(32, { scale: internal.scale2 }),
  11: token(36, { scale: internal.scale2 }),
  12: token(48, { scale: internal.scale2 }),
  13: token(64, { scale: internal.scale2 }),
  14: token(72, { scale: internal.scale2 }),
  15: token(96, { scale: internal.scale2 }),
};

const color = {
  black: token([0, 0, 0]),
  white: token([0, 0, 100]),
  green: {
    50: token([93, 80, 94]),
    100: token([93, 80, 83]),
    200: token([93, 80, 70]),
    300: token([93, 80, 56]),
    400: token([93, 80, 48]),
    500: token([93, 80, 44]),
    600: token([93, 80, 37]),
    700: token([93, 80, 28]),
    800: token([93, 80, 23]),
    900: token([93, 80, 17]),
    1000: token([93, 80, 12]),
  },
  blue: {
    50: token([198, 100, 95]),
    75: token([198, 100, 94]),
    100: token([198, 100, 87]),
    200: token([198, 100, 78]),
    300: token([198, 100, 70]),
    400: token([198, 100, 59]),
    500: token([198, 100, 48]),
    600: token([198, 100, 43]),
    700: token([198, 100, 34]),
    800: token([198, 100, 27]),
    900: token([198, 100, 21]),
    1000: token([198, 100, 15]),
  },
  violet: {
    50: token([282, 100, 97]),
    100: token([282, 80, 91]),
    200: token([282, 73, 83]),
    300: token([282, 66, 74]),
    400: token([282, 60, 65]),
    500: token([282, 60, 57]),
    600: token([282, 60, 49]),
    700: token([283, 80, 36]),
    800: token([282, 100, 26]),
    900: token([282, 100, 19]),
    1000: token([282, 100, 14]),
  },
  red: {
    50: token([9, 100, 97]),
    100: token([9, 100, 94]),
    200: token([9, 100, 88]),
    300: token([9, 100, 79]),
    400: token([9, 100, 71]),
    500: token([9, 100, 65]),
    600: token([9, 100, 59]),
    700: token([9, 100, 44]),
    800: token([9, 100, 38]),
    900: token([9, 100, 22]),
    1000: token([7, 10, 17]),
  },
  ochre: {
    50: token([41, 100, 96]),
    100: token([41, 100, 92]),
    200: token([41, 100, 86]),
    300: token([41, 100, 78]),
    400: token([41, 100, 70]),
    500: token([40, 100, 59]),
    600: token([39, 100, 50]),
    700: token([38, 100, 42]),
    800: token([37, 100, 32]),
    900: token([36, 100, 27]),
    1000: token([35, 100, 19]),
  },
  lavender: {
    50: token([238, 100, 96]),
    100: token([238, 58, 88]),
    200: token([238, 53, 79]),
    300: token([238, 52, 70]),
    400: token([238, 58, 64]),
    500: token([238, 59, 58]),
    600: token([238, 60, 52]),
    700: token([238, 69, 45]),
    800: token([238, 100, 32]),
    900: token([238, 100, 22]),
    1000: token([238, 100, 14]),
  },
  azure: {
    50: token([211, 100, 95]),
    100: token([211, 100, 88]),
    200: token([211, 100, 81]),
    300: token([211, 100, 70]),
    400: token([211, 100, 62]),
    500: token([211, 100, 54]),
    600: token([211, 100, 46]),
    700: token([211, 100, 37]),
    800: token([211, 100, 26]),
    900: token([211, 100, 18]),
    1000: token([211, 100, 14]),
  },
  aqua: {
    50: token([184, 100, 96]),
    100: token([184, 100, 86]),
    200: token([184, 100, 75]),
    300: token([184, 100, 62]),
    400: token([184, 100, 48]),
    500: token([184, 100, 43]),
    600: token([184, 100, 34]),
    700: token([184, 100, 25]),
    800: token([184, 100, 18]),
    900: token([184, 100, 13]),
    1000: token([184, 100, 10]),
  },
  jade: {
    50: token([160, 83, 95]),
    100: token([160, 82, 88]),
    200: token([160, 78, 78]),
    300: token([160, 69, 65]),
    400: token([160, 69, 53]),
    500: token([160, 64, 45]),
    600: token([160, 69, 36]),
    700: token([160, 64, 30]),
    800: token([160, 100, 21]),
    900: token([160, 70, 21]),
    1000: token([160, 69, 19]),
  },
  yellow: {
    50: token([50, 100, 95]),
    100: token([50, 100, 84]),
    200: token([50, 100, 73]),
    300: token([50, 100, 57]),
    400: token([46, 100, 52]),
    500: token([44, 100, 47]),
    600: token([42, 100, 42]),
    700: token([40, 100, 37]),
    800: token([40, 100, 26]),
    900: token([40, 100, 18]),
    1000: token([40, 32, 14]),
  },
  lime: {
    50: token([66, 100, 94]),
    100: token([66, 95, 83]),
    200: token([66, 85, 70]),
    300: token([66, 80, 58]),
    400: token([66, 80, 48]),
    500: token([66, 90, 41]),
    600: token([66, 90, 36]),
    700: token([66, 100, 28]),
    800: token([66, 100, 22]),
    900: token([66, 100, 12]),
    1000: token([66, 100, 7]),
  },
  tangerine: {
    50: token([25, 100, 95]),
    100: token([25, 100, 88]),
    200: token([25, 94, 78]),
    300: token([25, 100, 72]),
    400: token([25, 100, 62]),
    500: token([25, 100, 48]),
    600: token([25, 100, 41]),
    700: token([25, 100, 34]),
    800: token([25, 100, 25]),
    900: token([25, 100, 19]),
    1000: token([25, 100, 15]),
  },
  magenta: {
    50: token([345, 100, 95]),
    100: token([345, 100, 87]),
    200: token([345, 100, 79]),
    300: token([345, 100, 70]),
    400: token([345, 100, 61]),
    500: token([345, 81, 50]),
    600: token([345, 83, 40]),
    700: token([345, 91, 31]),
    800: token([345, 100, 24]),
    900: token([345, 100, 19]),
    1000: token([345, 100, 15]),
  },
  pink: {
    50: token([324, 100, 97]),
    100: token([324, 95, 91]),
    200: token([324, 84, 81]),
    300: token([324, 78, 70]),
    400: token([324, 78, 62]),
    500: token([324, 64, 51]),
    600: token([324, 80, 39]),
    700: token([324, 100, 30]),
    800: token([324, 100, 24]),
    900: token([324, 100, 18]),
    1000: token([324, 100, 15]),
  },
  warmGray: {
    50: token([282, 3, 97]),
    100: token([282, 3, 92]),
    200: token([282, 3, 84]),
    300: token([282, 3, 74]),
    400: token([282, 3, 63]),
    500: token([282, 3, 54]),
    600: token([282, 3, 43]),
    700: token([282, 3, 35]),
    800: token([282, 3, 28]),
    900: token([282, 3, 20]),
    1000: token([282, 3, 14]),
  },
  slate: {
    50: token([238, 20, 96]),
    100: token([238, 20, 91]),
    200: token([238, 20, 82]),
    300: token([238, 20, 73]),
    400: token([238, 20, 63]),
    500: token([238, 23, 56]),
    600: token([238, 24, 49]),
    700: token([238, 28, 38]),
    800: token([238, 28, 29]),
    900: token([238, 28, 22]),
    1000: token([238, 28, 14]),
  },
  ice: {
    50: token([211, 100, 97]),
    100: token([211, 58, 90]),
    200: token([211, 53, 81]),
    300: token([211, 49, 70]),
    400: token([211, 47, 62]),
    500: token([211, 47, 53]),
    600: token([211, 56, 44]),
    700: token([211, 69, 34]),
    800: token([211, 69, 27]),
    900: token([211, 100, 20]),
    1000: token([211, 100, 14]),
  },
  coolGray: {
    50: token([211, 20, 96]),
    100: token([211, 20, 90]),
    200: token([211, 20, 81]),
    300: token([211, 20, 72]),
    400: token([211, 20, 61]),
    500: token([211, 20, 53]),
    600: token([211, 20, 44]),
    700: token([211, 23, 36]),
    800: token([211, 30, 28]),
    900: token([211, 40, 22]),
    1000: token([211, 63, 14]),
  },
  tan: {
    50: token([41, 23, 96]),
    100: token([41, 22, 91]),
    200: token([41, 27, 82]),
    300: token([41, 23, 68]),
    400: token([41, 23, 58]),
    500: token([41, 20, 47]),
    600: token([41, 20, 40]),
    700: token([41, 20, 32]),
    800: token([41, 23, 26]),
    900: token([41, 23, 21]),
    1000: token([41, 22, 16]),
  },
  construction: {
    25: token([198, 33, 99]),
    50: token([198, 36, 96]),
    100: token([198, 20, 91]),
    200: token([198, 14, 82]),
    300: token([198, 10, 71]),
    400: token([198, 9, 56]),
    500: token([198, 10, 46]),
    600: token([198, 14, 36]),
    700: token([198, 19, 28]),
    800: token([198, 23, 23]),
    900: token([198, 28, 18]),
    1000: token([198, 30, 15]),
  },
  gray: {
    0: token([0, 0, 100]),
    50: token([0, 0, 98]),
    100: token([0, 0, 95]),
    200: token([0, 0, 91]),
    300: token([0, 0, 87]),
    400: token([0, 0, 80]),
    500: token([0, 0, 70]),
    600: token([0, 0, 55]),
    700: token([0, 0, 40]),
    800: token([0, 0, 27]),
    900: token([0, 0, 20]),
    1000: token([0, 0, 0]),
  },
};

const generateTypographyTokens = () => {
  return {
    color: {
      100: token(color.white),
      200: token(color.construction[600]), // placeholders
      300: token(color.construction[800]), // labels
      400: token(color.construction[900]), // headings
      500: token(color.black), // content
      450: token(color.construction[1000]),
    },
    fontWeight: {
      // Clarity City is limited to a minimum weight of 300 and max weight of 600, tokens provide hooks for customization
      light: token('300'),
      regular: token('400'),
      medium: token('500'),
      semibold: token('600'),
      bold: token('600'),
      extrabold: token('600'),
    },
    fontSize: {
      0: token(10, { scale: internal.scale3 }),
      1: token(11, { scale: internal.scale3 }),
      2: token(12, { scale: internal.scale3 }),
      3: token(13, { scale: internal.scale3 }),
      4: token(14, { scale: internal.scale3 }),
      5: token(16, { scale: internal.scale3 }),
      6: token(20, { scale: internal.scale3 }),
      7: token(24, { scale: internal.scale3 }),
      8: token(32, { scale: internal.scale3 }),
      9: token(40, { scale: internal.scale3 }),
    },
    fontFamily: token("'Clarity City', 'Avenir Next', sans-serif"),
    headerFontFamily: token("'Clarity City', 'Avenir Next', sans-serif"),
    monospaceFontFamily: token('ui-monospace, Consolas, Menlo, Monaco, monospace'),
    topGapHeight: token('0.1475em'), // line-height eraser
    ascenderHeight: token('0.1703em'), // line-height eraser
    xHeight: token('0.517em'), // line-height eraser
    link: {
      color: {
        value: token(color.blue[700]),
        hover: token(color.blue[800]),
        visited: {
          value: token(color.lavender[600]),
          hover: token(color.lavender[700]),
        },
      },
      onColorbg: {
        value: token(color.black),
      },
    },
    body: {
      fontSize: token(14, { scale: internal.scale3 }),
      lineHeight: token('1.4285714em', { static: true }), // static for line height eraser calcs
      letterSpacing: token('-0.00714286em'),
      fontWeight: token('400'),
    },
    display: {
      fontSize: token(40, { scale: internal.scale3 }),
      lineHeight: token('1.1em', { static: true }),
      letterSpacing: token('-0.0125em'),
      fontWeight: token('500'),
    },
    heading: {
      // TODO(CDE-821): Remove heading in v7
      fontSize: token(32, { scale: internal.scale3 }),
      lineHeight: token('1.125em', { static: true }),
      letterSpacing: token('-0.0125em'),
      fontWeight: token('500'),
    },
    headline: {
      fontSize: token(32, { scale: internal.scale3 }),
      lineHeight: token('1.125em', { static: true }),
      letterSpacing: token('-0.0125em'),
      fontWeight: token('500'),
    },
    title: {
      fontSize: token(24, { scale: internal.scale3 }),
      lineHeight: token('1.333333em', { static: true }),
      letterSpacing: token('-0.00833333em'),
      fontWeight: token('500'),
    },
    section: {
      fontSize: token(20, { scale: internal.scale3 }),
      lineHeight: token('1.2em', { static: true }),
      letterSpacing: token('-0.01em'),
      fontWeight: token('500'),
    },
    subsection: {
      fontSize: token(16, { scale: internal.scale3 }),
      lineHeight: token('1.5em', { static: true }),
      letterSpacing: token('-0.0125em'),
      fontWeight: token('500'),
    },
    message: {
      fontSize: token(16, { scale: internal.scale3 }),
      lineHeight: token('1.5em', { static: true }),
      letterSpacing: token('-0.0125em'),
      fontWeight: token(400),
    },
    secondary: {
      fontSize: token(13, { scale: internal.scale3 }),
      lineHeight: token('1.23077em', { static: true }),
      letterSpacing: token('-0.007692em'),
      fontWeight: token('400'),
    },
    caption: {
      fontSize: token(11, { scale: internal.scale3 }),
      lineHeight: token('1.454545em', { static: true }),
      letterSpacing: token('0.018182em'),
      fontWeight: token('400'),
    },
    smallcaption: {
      fontSize: token(10, { scale: internal.scale3 }),
      lineHeight: token('1.2em', { static: true }),
      letterSpacing: token('0.05em'),
      fontWeight: token('500'),
    },
    infoHover: {
      value: token(color.blue[800]),
    },
    successHover: {
      value: token(color.green[800]),
    },
    warningHover: {
      value: token(color.ochre[900]),
    },
    dangerHover: {
      value: token(color.red[800]),
    },
    neutralHover: {
      value: token(color.construction[700]),
    },
    disabled: {
      value: token(color.construction[500]),
      button: token(color.construction[500]),
    },
  };
};

const typography = generateTypographyTokens();

const animation = {
  duration: {
    instant: token('0s'),
    quickest: token('0.1s'),
    quicker: token('0.15s'),
    quick: token('0.2s'),
    secondary: token('0.3s'),
    primary: token('0.4s'),
    slow: token('0.5s'),
    slower: token('0.7s'),
    slowest: token('0.8s'),
  },
  easing: {
    primary: token('cubic-bezier(0,.99,0,.99)'),
    secondary: token('cubic-bezier(0, 1.5, 0.5, 1)'),
    loop: token('cubic-bezier(0.17, 0.4, 0.8, 0.79)'),
  },
};

const aliases = {
  object: {
    border: {
      radius: {
        100: token(4),
        200: token(12),
        300: token('50%'),
      },
      width: {
        100: token(1),
        200: token(2),
        300: token(3),
        400: token(4),
      },
      color: {
        value: token(color.construction[200]),
        tint: token(color.construction[100]),
        shade: token(color.construction[300]),
      },
    },
    shadow: {
      100: token(
        '0 calc((1 / var(--cds-global-base, 20)) * 1rem) calc((3 / var(--cds-global-base, 20)) * 1rem) 0 hsla(198, 30%, 15%, 0.5)'
      ),
      200: token(
        '0 calc((1 / var(--cds-global-base, 20)) * 1rem) calc((3 / var(--cds-global-base, 20)) * 1rem) 0 hsla(198, 30%, 15%, 0.3)'
      ),
      300: token(
        '0 calc((1 / var(--cds-global-base, 20)) * 1rem) calc((3 / var(--cds-global-base, 20)) * 1rem) 0 hsla(198, 30%, 15%, 0.2)'
      ),
    },
    opacity: {
      0: token('hsla(0, 0%, 0%, 0)'),
      100: token('hsla(0, 0%, 0%, 0.2)'),
      200: token('hsla(0, 0%, 0%, 0.4)'),
      300: token('hsla(0, 0%, 0%, 0.6)'),
    },
    interaction: {
      outline: token('Highlight solid 2px', { raw: true, static: true }),
      outlineWebkit: token('5px auto -webkit-focus-ring-color', { raw: true, static: true }), // https://coryrylan.com/blog/dont-override-css-outline-focus-styles
      outlineOffset: token('1px', { raw: true, static: true }),
      touchTarget: token(36),
      borderColor: token(color.construction[500]),
      background: {
        value: token(color.white),
        hover: token(color.blue[50]),
        active: token(color.blue[75]),
        selected: token(color.blue[50]),
        disabled: token(color.white),
        highlight: token(color.blue[700]),
      },
      color: {
        value: token(color.construction[700]),
        hover: token(color.construction[1000]),
        active: token(color.construction[1000]),
        selected: token(color.construction[700]),
        disabled: token(color.construction[300]),
      },
      info: {
        hover: token(color.blue[800]),
        click: token(color.blue[900]),
        secondaryHover: token(color.blue[50]),
      },
      success: {
        hover: token(color.green[800]),
        click: token(color.green[900]),
        secondaryHover: token(color.green[50]),
      },
      warning: {
        hover: token(color.ochre[600]),
        click: token(color.ochre[700]),
        secondaryHover: token(color.ochre[50]),
      },
      danger: {
        hover: token(color.red[800]),
        click: token(color.red[900]),
        secondaryHover: token(color.red[50]),
      },
      neutral: {
        hover: token(color.construction[700]),
        click: token(color.construction[800]),
        secondaryHover: token(color.construction[50]),
      },
      inverse: {
        hover: token(color.construction[600]),
        click: token(color.construction[800]),
      },
    },
    app: {
      background: token(color.construction[25]),
    },
    overlay: {
      background: token(color.white),
      backdropBackground: token('hsla(0, 0%, 0%, 0.6)'),
    },
    container: {
      background: {
        value: token(color.white),
        tint: token(color.construction[50]),
        shade: token(color.construction[100]),
        dark: token(color.construction[200]),
        inverse: {
          value: token(color.construction[200]),
          tint: token(color.construction[100]),
          shade: token(color.construction[300]),
        },
      },
      borderColor: token(color.construction[200]),
    },
  },
  status: {
    info: {
      value: token(color.blue[700]),
      tint: token(color.blue[50]),
      shade: token(color.blue[800]),
    },
    success: {
      value: token(color.green[700]),
      tint: token(color.green[50]),
      shade: token(color.green[800]),
    },
    warning: {
      value: token(color.ochre[500]),
      tint: token(color.ochre[100]),
      shade: token(color.ochre[600]),
      dark: token(color.ochre[800]),
    },
    danger: {
      value: token(color.red[700]),
      tint: token(color.red[50]),
      shade: token(color.red[800]),
      dark: token(color.red[900]),
    },
    neutral: {
      value: token(color.construction[600]),
      tint: token(color.construction[50]),
      shade: token(color.construction[700]),
    },
    disabled: {
      value: token(color.construction[300]),
      tint: token(color.construction[200]),
      shade: token(color.construction[400]),
    },
    alt: {
      value: token(color.violet[700]),
      tint: token(color.violet[600]),
      shade: token(color.violet[900]),
    },
  },
  utility: {
    gray: {
      value: token(color.construction[500]),
      tint: token(color.construction[50]),
      shade: token(color.construction[700]),
    },
    blue: {
      value: token(color.blue[700]),
      tint: token(color.blue[50]),
      shade: token(color.blue[800]),
    },
    lightBlue: {
      value: token(color.blue[300]),
      tint: token(color.blue[50]),
      shade: token(color.blue[600]),
    },
    darkBlue: {
      value: token(color.azure[800]),
      tint: token(color.azure[50]),
      shade: token(color.azure[1000]),
    },
    green: {
      value: token(color.green[700]),
      tint: token(color.green[50]),
      shade: token(color.green[800]),
    },
    yellow: {
      value: token(color.ochre[500]),
      tint: token(color.ochre[100]),
      shade: token(color.ochre[700]),
    },
    red: {
      value: token(color.red[700]),
      tint: token(color.red[50]),
      shade: token(color.red[800]),
    },
    tangerine: {
      value: token(color.tangerine[400]),
      tint: token(color.tangerine[50]),
      shade: token(color.tangerine[600]),
    },
    violet: {
      value: token(color.violet[600]),
      tint: token(color.violet[50]),
      shade: token(color.violet[800]),
    },
  },
  typography: generateTypographyTokens(), // Typography will move from -global to -alias in the future.
};

export const baseTheme: CdsTheme = {
  global: { base, scale, layout, space, color, typography, animation },
  aliases,
  internal,
};

export const darkTheme: CdsTheme = {
  global: {
    typography: {
      color: {
        100: token(color.black),
        200: token(color.construction[300]), // placeholders
        300: token(color.construction[200]), // labels
        400: token(color.construction[100]), // headings
        450: token(color.construction[50]),
        500: token(color.white), // content
      },
      link: {
        color: {
          value: token(color.blue[400]),
          hover: token(color.blue[200]),
          visited: {
            value: token(color.lavender[300]),
            hover: token(color.lavender[200]),
          },
        },
        onColorbg: {
          value: token(color.construction[1000]),
        },
      },
      infoHover: {
        value: token(color.blue[200]),
      },
      successHover: {
        value: token(color.green[400]),
      },
      warningHover: {
        value: token(color.yellow[600]),
      },
      dangerHover: {
        value: token(color.red[400]),
      },
      neutralHover: {
        value: token(color.construction[200]),
      },
      disabled: {
        value: token(color.construction[500]),
        button: token(color.construction[900]),
      },
    },
  },
  aliases: {
    typography: {
      color: {
        100: token(color.black),
        200: token(color.construction[300]), // placeholders
        300: token(color.construction[200]), // labels
        400: token(color.construction[100]), // headings
        450: token(color.construction[50]),
        500: token(color.white), // content
      },
      link: {
        color: {
          value: token(color.blue[400]),
          hover: token(color.blue[200]),
          visited: {
            value: token(color.lavender[300]),
            hover: token(color.lavender[200]),
          },
        },
        onColorbg: {
          value: token(color.construction[1000]),
        },
      },
      infoHover: {
        value: token(color.blue[200]),
      },
      successHover: {
        value: token(color.green[400]),
      },
      warningHover: {
        value: token(color.yellow[600]),
      },
      dangerHover: {
        value: token(color.red[400]),
      },
      neutralHover: {
        value: token(color.construction[200]),
      },
      disabled: {
        value: token(color.construction[500]),
        button: token(color.construction[900]),
      },
    },
    object: {
      border: {
        radius: {
          100: token(4),
          200: token(12),
          300: token('50%'),
        },
        width: {
          100: token(1),
          200: token(2),
          300: token(3),
          400: token(4),
        },
        color: {
          value: token(color.construction[500]),
          tint: token(color.construction[400]),
          shade: token(color.construction[600]),
        },
      },
      shadow: {
        100: token(`0 var(--cds-global-space-1) var(--cds-global-space-2) 0 var(--cds-alias-object-opacity-300)`),
        200: token('0 var(--cds-global-space-1) var(--cds-global-space-2) 0 var(--cds-alias-object-opacity-200)'),
        300: token('0 var(--cds-global-space-1) var(--cds-global-space-2) 0 var(--cds-alias-object-opacity-100)'),
      },
      opacity: {
        0: token('hsla(0, 0%, 0%, 0)'),
        100: token('hsla(0, 0%, 0%, 0.2)'),
        200: token('hsla(0, 0%, 0%, 0.4)'),
        300: token('hsla(0, 0%, 0%, 0.6)'),
      },
      interaction: {
        outline: token('Highlight solid 2px', { raw: true, static: true }),
        outlineWebkit: token('5px auto -webkit-focus-ring-color', { raw: true, static: true }), // https://coryrylan.com/blog/dont-override-css-outline-focus-styles
        outlineOffset: token('1px', { raw: true, static: true }),
        touchTarget: token(36),
        borderColor: token(color.construction[300]),
        background: {
          value: token(color.construction[1000]),
          hover: token(color.blue[600]),
          active: token(color.blue[800]),
          selected: token(color.blue[700]),
          disabled: token(color.construction[700]),
          highlight: token(color.blue[400]),
        },
        color: {
          value: token(color.construction[200]),
          hover: token(color.construction[50]),
          active: token(color.construction[100]),
          selected: token(color.construction[200]),
          disabled: token(color.construction[600]),
        },
        info: {
          hover: token(color.blue[300]),
          click: token(color.blue[500]),
          secondaryHover: token(color.blue[1000]),
        },
        success: {
          hover: token(color.green[400]),
          click: token(color.green[600]),
          secondaryHover: token(color.green[1000]),
        },
        warning: {
          hover: token(color.yellow[300]),
          click: token(color.yellow[500]),
          secondaryHover: token(color.yellow[1000]),
        },
        danger: {
          hover: token(color.red[400]),
          click: token(color.red[600]),
          secondaryHover: token(color.red[1000]),
        },
        neutral: {
          hover: token(color.construction[200]),
          click: token(color.construction[400]),
          secondaryHover: token(color.construction[800]),
        },
        inverse: {
          hover: token(color.construction[700]),
          click: token(color.construction[800]),
        },
      },
      app: {
        background: token(color.construction[1000]),
      },
      overlay: {
        background: token(color.construction[900]),
        backdropBackground: token('hsla(0, 0%, 0%, 0.6)'),
      },
      container: {
        background: {
          value: token(color.construction[900]),
          tint: token(color.construction[1000]),
          shade: token(color.construction[800]),
          dark: token(color.construction[800]),
          inverse: {
            value: token(color.construction[600]),
            tint: token(color.construction[500]),
            shade: token(color.construction[800]),
          },
        },
        borderColor: token(color.black),
      },
    },
    status: {
      info: {
        value: token(color.blue[400]),
        tint: token(color.blue[800]),
        shade: token(color.blue[500]),
      },
      success: {
        value: token(color.green[500]),
        tint: token(color.green[800]),
        shade: token(color.green[600]),
      },
      warning: {
        value: token(color.ochre[400]),
        tint: token(color.ochre[600]),
        shade: token(color.ochre[500]),
        dark: token(color.ochre[700]),
      },
      danger: {
        value: token(color.red[500]),
        tint: token(color.red[800]),
        shade: token(color.red[600]),
        dark: token(color.red[900]),
      },
      neutral: {
        value: token(color.construction[300]),
        tint: token(color.construction[700]),
        shade: token(color.construction[400]),
      },
      disabled: {
        value: token(color.construction[600]),
        tint: token(color.construction[700]),
        shade: token(color.construction[500]),
      },
      alt: {
        value: token(color.violet[700]),
        tint: token(color.violet[600]),
        shade: token(color.violet[900]),
      },
    },
    utility: {
      gray: {
        value: token(color.construction[300]),
        tint: token(color.construction[1000]),
        shade: token(color.construction[200]),
      },
      blue: {
        value: token(color.blue[300]),
        tint: token(color.blue[1000]),
        shade: token(color.blue[200]),
      },
      lightBlue: {
        value: token(color.blue[700]),
        tint: token(color.blue[1000]),
        shade: token(color.blue[500]),
      },
      darkBlue: {
        value: token(color.azure[200]),
        tint: token(color.azure[1000]),
        shade: token(color.azure[50]),
      },
      green: {
        value: token(color.green[400]),
        tint: token(color.green[1000]),
        shade: token(color.green[200]),
      },
      yellow: {
        value: token(color.ochre[400]),
        tint: token(color.ochre[900]),
        shade: token(color.ochre[300]),
      },
      red: {
        value: token(color.red[300]),
        tint: token(color.red[1000]),
        shade: token(color.red[200]),
      },
      tangerine: {
        value: token(color.tangerine[600]),
        tint: token(color.tangerine[1000]),
        shade: token(color.tangerine[400]),
      },
      violet: {
        value: token(color.violet[400]),
        tint: token(color.violet[1000]),
        shade: token(color.violet[200]),
      },
    },
  },
};

export const highContrastTheme: CdsTheme = {
  global: {
    typography: {
      color: {
        300: token('CanvasText', { raw: true, static: true }), // labels
        400: token('CanvasText', { raw: true, static: true }), // headings
        500: token('CanvasText', { raw: true, static: true }), // content
      },
      link: {
        color: {
          value: token('LinkText', { raw: true, static: true }),
          hover: token('ActiveText', { raw: true, static: true }),
          visited: {
            value: token('VisitedText', { raw: true, static: true }),
            hover: token('VisitedText', { raw: true, static: true }),
          },
        },
        onColorbg: {
          value: token(color.construction[1000]),
        },
      },
    },
  },
  aliases: {
    typography: {
      color: {
        300: token('CanvasText', { raw: true, static: true }), // labels
        400: token('CanvasText', { raw: true, static: true }), // headings
        500: token('CanvasText', { raw: true, static: true }), // content
      },
      link: {
        color: {
          value: token('LinkText', { raw: true, static: true }),
          hover: token('ActiveText', { raw: true, static: true }),
          visited: {
            value: token('VisitedText', { raw: true, static: true }),
            hover: token('VisitedText', { raw: true, static: true }),
          },
        },
        onColorbg: {
          value: token(color.construction[1000]),
        },
      },
    },
    status: {
      info: {
        value: token('CanvasText', { raw: true, static: true }),
      },
      success: {
        value: token('CanvasText', { raw: true, static: true }),
      },
      warning: {
        value: token('CanvasText', { raw: true, static: true }),
      },
      danger: {
        value: token('CanvasText', { raw: true, static: true }),
      },
      neutral: {
        value: token('GrayText', { raw: true, static: true }),
        tint: token('GrayText', { raw: true, static: true }),
        shade: token('GrayText', { raw: true, static: true }),
      },
    },
    object: {
      border: {
        color: {
          value: token('CanvasText', { raw: true, static: true }),
          tint: token('CanvasText', { raw: true, static: true }),
          shade: token('CanvasText', { raw: true, static: true }),
        },
      },
      app: {
        background: token('Canvas', { raw: true, static: true }),
      },
      container: {
        borderColor: token('CanvasText', { raw: true, static: true }),
      },
      interaction: {
        borderColor: token('CanvasText', { raw: true, static: true }),
        color: {
          value: token('ButtonText', { raw: true, static: true }),
          hover: token('HighlightText', { raw: true, static: true }),
          active: token('ActiveText', { raw: true, static: true }),
          selected: token('SelectedItemText', { raw: true, static: true }),
          disabled: token('GrayText', { raw: true, static: true }),
        },
        background: {
          value: token('ButtonFace', { raw: true, static: true }),
          hover: token('Highlight', { raw: true, static: true }),
          active: token('Highlight', { raw: true, static: true }),
          selected: token('SelectedItem', { raw: true, static: true }),
          disabled: token('Canvas', { raw: true, static: true }),
          highlight: token('Highlight', { raw: true, static: true }),
        },
      },
    },
  },
};

export const lowMotionTheme: CdsTheme = {
  global: {
    animation: {
      duration: {
        instant: token('0s'),
        quickest: token('0s'),
        quicker: token('0s'),
        quick: token('0s'),
        secondary: token('0s'),
        primary: token('0s'),
        slow: token('2s'),
        slower: token('2s'),
        slowest: token('2s'),
      },
    },
  },
};
