/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M32 5H4C2.895 5 2 5.895 2 7V29C2 30.105 2.895 31 4 31H32C33.105 31 34 30.105 34 29V7C34 5.895 33.105 5 32 5ZM4 29V7H32V29H4ZM28 10H8V26H28V10ZM9.6 24H14.1V18.8H9.6V24ZM9.6 11.6H14.1V17.2H9.6V11.6ZM26 24V18.8H21.9V24H26ZM21.9 11.6H26V17.2H21.9V11.6ZM15.7 11.6V17.2H20.3V11.6H15.7ZM20.3 24H15.7V18.8H20.3V24Z" />\n',

  outlineAlerted:
    '<path d="M26.8962 1.61105L21.2145 11.0807C20.9449 11.4632 20.9205 11.9597 21.1512 12.3653C21.3819 12.7709 21.8286 13.0168 22.3071 13.0015H33.6805C34.1589 13.0168 34.6057 12.7709 34.8364 12.3653C35.0671 11.9597 35.0426 11.4632 34.7731 11.0807L29.0914 1.61105C28.8634 1.23397 28.4455 1.0022 27.9938 1.0022C27.542 1.0022 27.1242 1.23397 26.8962 1.61105Z" />\n' +
    '<path d="M22.5305 5H4C2.895 5 2 5.895 2 7V29C2 30.105 2.895 31 4 31H32C33.105 31 34 30.105 34 29V14.9905C33.886 15.0001 33.7712 15.0038 33.6559 15.0015H32V29H4V7H21.3305L22.5305 5Z" />\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M19.5305 10H8V26H28V15.0015H26V17.2H21.9V14.9819C21.3201 14.9175 20.7667 14.7008 20.3 14.3551V17.2H15.7V11.6H18.9985C19.0289 11.04 19.2068 10.4882 19.5283 10.0036L19.5305 10ZM14.1 24H9.6V18.8H14.1V24ZM14.1 11.6H9.6V17.2H14.1V11.6ZM26 18.8V24H21.9V18.8H26ZM15.7 24H20.3V18.8H15.7V24Z" />\n',

  outlineBadged:
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" />\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M24.2547 10H8V26H28V12.7101C27.2776 12.4951 26.604 12.1666 26 11.7453V17.2H21.9V11.6H25.7993C25.2035 11.1524 24.6815 10.6119 24.2547 10ZM14.1 24H9.6V18.8H14.1V24ZM14.1 11.6H9.6V17.2H14.1V11.6ZM26 18.8V24H21.9V18.8H26ZM15.7 17.2V11.6H20.3V17.2H15.7ZM15.7 24H20.3V18.8H15.7V24Z" />\n' +
    '<path d="M32 12.7101V29H4V7H23.0709C23.0242 6.6734 23 6.33952 23 6C23 5.66048 23.0242 5.3266 23.0709 5H4C2.895 5 2 5.895 2 7V29C2 30.105 2.895 31 4 31H32C33.105 31 34 30.105 34 29V11.7453C33.396 12.1666 32.7224 12.4951 32 12.7101Z" />\n',

  solid:
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M34 29V7C34 5.896 33.105 5 32 5H4C2.896 5 2 5.896 2 7V29C2 30.105 2.896 31 4 31H32C33.105 31 34 30.105 34 29ZM28 26H8V10H28V26ZM10 19H14V24H10V19ZM22 19V24H26V19H22ZM20 19V24H16V19H20ZM22 17H26V12H22V17ZM20 12V17H16V12H20ZM14 17V12H10V17H14Z" />\n',

  solidAlerted:
    '<path d="M26.8962 1.61105L21.2145 11.0807C20.9449 11.4632 20.9205 11.9597 21.1512 12.3653C21.3819 12.7709 21.8286 13.0168 22.3071 13.0015H33.6805C34.1589 13.0168 34.6057 12.7709 34.8364 12.3653C35.0671 11.9597 35.0426 11.4632 34.7731 11.0807L29.0914 1.61105C28.8634 1.23397 28.4455 1.0022 27.9938 1.0022C27.542 1.0022 27.1242 1.23397 26.8962 1.61105Z" />\n' +
    '<path d="M22.5305 5H4C2.896 5 2 5.896 2 7V29C2 30.105 2.896 31 4 31H32C33.105 31 34 30.105 34 29V14.9905C33.886 15.0001 33.7712 15.0038 33.6559 15.0015H28V26H8V10H19.5305L22.5305 5Z" />\n' +
    '<path d="M19.0018 12H16V17H20V14.1035C19.7725 13.888 19.5737 13.6371 19.4127 13.3542C19.1713 12.9297 19.035 12.4669 19.0018 12Z" />\n' +
    '<path d="M22 14.9915V17H26V15.0015H22.3317C22.2205 15.0038 22.1099 15.0004 22 14.9915Z" />\n' +
    '<path d="M14 19H10V24H14V19Z" />\n' +
    '<path d="M22 24V19H26V24H22Z" />\n' +
    '<path d="M20 24V19H16V24H20Z" />\n' +
    '<path d="M14 12V17H10V12H14Z" />\n',

  solidBadged:
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" />\n' +
    '<path d="M34 11.7453C32.8662 12.5362 31.4872 13 30 13C29.305 13 28.6337 12.8987 28 12.7101V26H8V10H24.2547C23.4638 8.86617 23 7.48725 23 6C23 5.66048 23.0242 5.3266 23.0709 5H4C2.896 5 2 5.896 2 7V29C2 30.105 2.896 31 4 31H32C33.105 31 34 30.105 34 29V11.7453Z" />\n' +
    '<path d="M14 19H10V24H14V19Z" />\n' +
    '<path d="M22 24V19H26V24H22Z" />\n' +
    '<path d="M20 24V19H16V24H20Z" />\n' +
    '<path d="M26 17H22V12H26V17Z" />\n' +
    '<path d="M20 17V12H16V17H20Z" />\n' +
    '<path d="M14 12V17H10V12H14Z" />\n',
};

export const heatMapIconName = 'heat-map';
export const heatMapIcon: IconShapeTuple = [heatMapIconName, renderIcon(icon)];
