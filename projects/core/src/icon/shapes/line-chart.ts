/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M32 5H4C2.895 5 2 5.895 2 7V29C2 30.105 2.895 31 4 31H32C33.105 31 34 30.105 34 29V7C34 5.895 33.105 5 32 5ZM4 29V7H32V29H4ZM9.602 23.968L15.62 15.222L22.308 25.145L30.414 14.436L29.138 13.47L22.384 22.395L15.634 12.38L9.308 21.572L6.61 19.186L5.55 20.384L9.602 23.968Z" fill="black"/>\n',

  outlineAlerted:
    '<path d="M26.8962 1.61105L21.2145 11.0807C20.9449 11.4632 20.9205 11.9597 21.1512 12.3653C21.3819 12.7709 21.8286 13.0168 22.3071 13.0015H33.6805C34.1589 13.0168 34.6057 12.7709 34.8364 12.3653C35.0671 11.9597 35.0426 11.4632 34.7731 11.0807L29.0914 1.61105C28.8634 1.23397 28.4455 1.0022 27.9938 1.0022C27.542 1.0022 27.1242 1.23397 26.8962 1.61105Z" fill="#A36500"/>\n' +
    '<path d="M22.5305 5H4C2.895 5 2 5.895 2 7V29C2 30.105 2.895 31 4 31H32C33.105 31 34 30.105 34 29V14.9905C33.886 15.0001 33.7712 15.0038 33.6559 15.0015H32V29H4V7H21.3305L22.5305 5Z" fill="black"/>\n' +
    '<path d="M27.979 15.0015L22.384 22.395L15.634 12.38L9.308 21.572L6.61 19.186L5.55 20.384L9.602 23.968L15.62 15.222L22.308 25.145L29.9859 15.0015H27.979Z" fill="black"/>\n',

  outlineBadged:
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" fill="#E02200"/>\n' +
    '<path d="M32 12.7101V29H4V7H23.0709C23.0242 6.6734 23 6.33952 23 6C23 5.66048 23.0242 5.3266 23.0709 5H4C2.895 5 2 5.895 2 7V29C2 30.105 2.895 31 4 31H32C33.105 31 34 30.105 34 29V11.7453C33.396 12.1666 32.7224 12.4951 32 12.7101Z" fill="black"/>\n' +
    '<path d="M15.62 15.222L9.602 23.968L5.55 20.384L6.61 19.186L9.308 21.572L15.634 12.38L22.384 22.395L29.138 13.47L30.414 14.436L22.308 25.145L15.62 15.222Z" fill="black"/>\n',

  solid:
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M4 5H32C33.105 5 34 5.896 34 7V29C34 30.105 33.105 31 32 31H4C2.896 31 2 30.105 2 29V7C2 5.896 2.896 5 4 5ZM15.46 15.36L22.56 25.94L31.35 14.28L29.65 13L22.65 22.27L15.46 11.56L8.7 21.44L6 19.05L4.62 20.64L9.12 24.64L15.46 15.36Z" fill="black"/>\n',

  solidAlerted:
    '<path d="M26.8962 1.61105L21.2145 11.0807C20.9449 11.4632 20.9205 11.9597 21.1512 12.3653C21.3819 12.7709 21.8286 13.0168 22.3071 13.0015H33.6805C34.1589 13.0168 34.6057 12.7709 34.8364 12.3653C35.0671 11.9597 35.0426 11.4632 34.7731 11.0807L29.0914 1.61105C28.8634 1.23397 28.4455 1.0022 27.9938 1.0022C27.542 1.0022 27.1242 1.23397 26.8962 1.61105Z" fill="#A36500"/>\n' +
    '<path d="M22.5305 5H4C2.896 5 2 5.896 2 7V29C2 30.105 2.896 31 4 31H32C33.105 31 34 30.105 34 29V14.9905C33.886 15.0001 33.7712 15.0038 33.6559 15.0015H30.8061L22.56 25.94L15.46 15.36L9.12 24.64L4.62 20.64L6 19.05L8.7 21.44L15.46 11.56L22.65 22.27L28.1386 15.0015H22.3317C21.1499 15.0252 20.0154 14.4137 19.4127 13.3542C18.8125 12.2991 18.8625 11.0071 19.5283 10.0036L22.5305 5Z" fill="black"/>\n',

  solidBadged:
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" fill="#E02200"/>\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M34 11.7453C32.8662 12.5362 31.4872 13 30 13C26.134 13 23 9.86599 23 6C23 5.66048 23.0242 5.3266 23.0709 5H4C2.896 5 2 5.896 2 7V29C2 30.105 2.896 31 4 31H32C33.105 31 34 30.105 34 29V11.7453ZM22.56 25.94L15.46 15.36L9.12 24.64L4.62 20.64L6 19.05L8.7 21.44L15.46 11.56L22.65 22.27L29.65 13L31.35 14.28L22.56 25.94Z" fill="black"/>\n',
};

export const lineChartIconName = 'line-chart';
export const lineChartIcon: IconShapeTuple = [lineChartIconName, renderIcon(icon)];
