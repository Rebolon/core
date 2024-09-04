/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '  <path d="M12 24H14V26H12V24Z" fill="black"/>\n' +
    '  <path d="M14 20H12V22H14V20Z" fill="black"/>\n' +
    '  <path d="M12 16H14V18H12V16Z" fill="black"/>\n' +
    '  <path d="M14 12H12V14H14V12Z" fill="black"/>\n' +
    '  <path d="M12 8H14V10H12V8Z" fill="black"/>\n' +
    '  <path d="M24 24H16V26H24V24Z" fill="black"/>\n' +
    '  <path d="M16 20H24V22H16V20Z" fill="black"/>\n' +
    '  <path d="M24 16H16V18H24V16Z" fill="black"/>\n' +
    '  <path d="M16 12H24V14H16V12Z" fill="black"/>\n' +
    '  <path d="M24 8H16V10H24V8Z" fill="black"/>\n' +
    '  <path fill-rule="evenodd" clip-rule="evenodd" d="M8 2H28C29.1046 2 30 2.89543 30 4V32C30 33.1046 29.1046 34 28 34H8C6.89543 34 6 33.1046 6 32V4C6 2.89543 6.89543 2 8 2ZM8 32H28V4H8V32Z" fill="black"/>\n',

  outlineBadged:
    '  <path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" fill="#E02200"/>\n' +
    '  <path d="M24.2547 2H8C6.89543 2 6 2.89543 6 4V32C6 33.1046 6.89543 34 8 34H28C29.1046 34 30 33.1046 30 32V13C29.305 13 28.6337 12.8987 28 12.7101V32H8V4H23.2899C23.5049 3.27757 23.8334 2.60401 24.2547 2Z" fill="black"/>\n' +
    '  <path d="M23.2899 8H16V10H24V9.60759C23.6995 9.10887 23.4594 8.56963 23.2899 8Z" fill="black"/>\n' +
    '  <path d="M14 8H12V10H14V8Z" fill="black"/>\n' +
    '  <path d="M14 12H12V14H14V12Z" fill="black"/>\n' +
    '  <path d="M14 16H12V18H14V16Z" fill="black"/>\n' +
    '  <path d="M14 20H12V22H14V20Z" fill="black"/>\n' +
    '  <path d="M12 24H14V26H12V24Z" fill="black"/>\n' +
    '  <path d="M24 24H16V26H24V24Z" fill="black"/>\n' +
    '  <path d="M24 20H16V22H24V20Z" fill="black"/>\n' +
    '  <path d="M24 16H16V18H24V16Z" fill="black"/>\n' +
    '  <path d="M24 12H16V14H24V12Z" fill="black"/>\n',

  solid:
    '  <path fill-rule="evenodd" clip-rule="evenodd" d="M28 2H8C6.9 2 6 2.9 6 4V32C6 33.1 6.9 34 8 34H28C29.1 34 30 33.1 30 32V4C30 2.9 29.1 2 28 2ZM14 26H12V24H14V26ZM12 22H14V20H12V22ZM14 18H12V16H14V18ZM12 14H14V12H12V14ZM14 10H12V8H14V10ZM16 26H24V24H16V26ZM24 22H16V20H24V22ZM16 18H24V16H16V18ZM24 14H16V12H24V14ZM16 10H24V8H16V10Z" fill="black"/>\n',

  solidBadged:
    '  <path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" fill="#E02200"/>\n' +
    '  <path fill-rule="evenodd" clip-rule="evenodd" d="M24.2547 2H8C6.9 2 6 2.9 6 4V32C6 33.1 6.9 34 8 34H28C29.1 34 30 33.1 30 32V13C27.4537 13 25.2249 11.6404 24 9.60759V10H16V8H23.2899C23.1013 7.36629 23 6.69497 23 6C23 4.51275 23.4638 3.13383 24.2547 2ZM12 26H14V24H12V26ZM14 22H12V20H14V22ZM12 18H14V16H12V18ZM14 14H12V12H14V14ZM12 10H14V8H12V10ZM24 26H16V24H24V26ZM16 22H24V20H16V22ZM24 18H16V16H24V18ZM16 14H24V12H16V14Z" fill="black"/>\n',
};

export const listIconName = 'list';
export const listIcon: IconShapeTuple = [listIconName, renderIcon(icon)];
