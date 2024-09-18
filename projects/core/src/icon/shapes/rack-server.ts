/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M10 28H8V30H10V28ZM26 28H12V30H26V28ZM26 18H12V20H26V18ZM10 8H8V10H10V8ZM31 2H5C4.45 2 4 2.45 4 3V33C4 33.55 4.45 34 5 34H31C31.55 34 32 33.55 32 33V3C32 2.45 31.55 2 31 2ZM30 32H6V24H30V32ZM30 22H6V14H30V22ZM30 12H6V4H30V12ZM10 18H8V20H10V18ZM26 8H12V10H26V8Z" />\n',

  outlineAlerted:
    '<path d="M26.9039 1.64621L21.2222 11.1159C20.9526 11.4984 20.9281 11.9949 21.1588 12.4005C21.3896 12.806 21.8363 13.0519 22.3148 13.0367H33.6881C34.1666 13.0519 34.6134 12.806 34.8441 12.4005C35.0748 11.9949 35.0503 11.4984 34.7808 11.1159L29.0991 1.64621C28.8711 1.26913 28.4532 1.03735 28.0015 1.03735C27.5497 1.03735 27.1319 1.26913 26.9039 1.64621Z" fill="#A36500"/>\n' +
    '<path d="M8 28H10V30H8V28Z" />\n' +
    '<path d="M12 28H26V30H12V28Z" />\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M24.3594 2H5C4.45 2 4 2.45 4 3V33C4 33.55 4.45 34 5 34H31C31.55 34 32 33.55 32 33V15.0367H30V22H6V14H19.87C19.6994 13.8177 19.5481 13.6136 19.4206 13.3893C19.173 12.9542 19.0361 12.4788 19.0073 12H6V4H23.1594L24.3594 2ZM6 32H30V24H6V32Z" />\n' +
    '<path d="M20.7594 8H12V10H19.5594L20.7594 8Z" />\n' +
    '<path d="M12 18H26V20H12V18Z" />\n' +
    '<path d="M8 8H10V10H8V8Z" />\n' +
    '<path d="M8 18H10V20H8V18Z" />\n',

  outlineBadged:
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" fill="#E02200"/>\n' +
    '<path d="M8 28H10V30H8V28Z" />\n' +
    '<path d="M12 28H26V30H12V28Z" />\n' +
    '<path d="M12 18H26V20H12V18Z" />\n' +
    '<path d="M8 18H10V20H8V18Z" />\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M32 12.7101C31.3663 12.8987 30.695 13 30 13C28.6803 13 27.446 12.6348 26.3924 12H6V4H23.2899C23.5049 3.27757 23.8334 2.60401 24.2547 2H5C4.45 2 4 2.45 4 3V33C4 33.55 4.45 34 5 34H31C31.55 34 32 33.55 32 33V12.7101ZM6 32H30V24H6V32ZM6 22H30V14H6V22Z" />\n' +
    '<path d="M23.2899 8H12V10H24.2547C23.8334 9.39599 23.5049 8.72243 23.2899 8Z" />\n' +
    '<path d="M8 8H10V10H8V8Z" />\n',

  solid:
    '<path d="M4 33C4 33.55 4.45 34 5 34H31C31.55 34 32 33.55 32 33V24H4V33ZM11.9 27.9H26.1V30.1H11.9V27.9ZM7.9 27.9H10.1V30.1H7.9V27.9ZM31 2H5C4.45 2 4 2.45 4 3V12H32V3C32 2.45 31.55 2 31 2ZM10.1 10.1H7.9V7.9H10.1V10.1ZM26.1 10.1H11.9V7.9H26.1V10.1ZM4 22H32V14H4V22ZM11.9 17.9H26.1V20.1H11.9V17.9ZM7.9 17.9H10.1V20.1H7.9V17.9Z" />\n',

  solidAlerted:
    '<path d="M26.9039 1.64621L21.2222 11.1159C20.9526 11.4984 20.9281 11.9949 21.1588 12.4005C21.3896 12.806 21.8363 13.0519 22.3148 13.0367H33.6881C34.1666 13.0519 34.6134 12.806 34.8441 12.4005C35.0748 11.9949 35.0503 11.4984 34.7808 11.1159L29.0991 1.64621C28.8711 1.26913 28.4532 1.03735 28.0015 1.03735C27.5497 1.03735 27.1319 1.26913 26.9039 1.64621Z" fill="#A36500"/>\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M19.87 14C20.5055 14.6792 21.4078 15.0553 22.3395 15.0367H32V22H4V14H19.87ZM26.1 17.9H11.9V20.1H26.1V17.9ZM10.1 17.9H7.9V20.1H10.1V17.9Z" />\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M24.3594 2H5C4.45 2 4 2.45 4 3V12H19.0073C18.9677 11.3412 19.1329 10.6759 19.4965 10.1H11.9V7.9H20.8194L24.3594 2ZM7.9 10.1H10.1V7.9H7.9V10.1Z" />\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M5 34C4.45 34 4 33.55 4 33V24H32V33C32 33.55 31.55 34 31 34H5ZM26.1 27.9H11.9V30.1H26.1V27.9ZM10.1 27.9H7.9V30.1H10.1V27.9Z" />\n',

  solidBadged:
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" fill="#E02200"/>\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M24.2547 2H5C4.45 2 4 2.45 4 3V12H26.3924C25.582 11.5117 24.8787 10.8639 24.3257 10.1H11.9V7.9H23.2609C23.0909 7.29582 23 6.65853 23 6C23 4.51275 23.4638 3.13383 24.2547 2ZM7.9 10.1H10.1V7.9H7.9V10.1Z" />\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M5 34C4.45 34 4 33.55 4 33V24H32V33C32 33.55 31.55 34 31 34H5ZM26.1 27.9H11.9V30.1H26.1V27.9ZM10.1 27.9H7.9V30.1H10.1V27.9Z" />\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M32 22H4V14H32V22ZM26.1 17.9H11.9V20.1H26.1V17.9ZM10.1 17.9H7.9V20.1H10.1V17.9Z" />\n',
};

export const rackServerIconName = 'rack-server';
export const rackServerIcon: IconShapeTuple = [rackServerIconName, renderIcon(icon)];
