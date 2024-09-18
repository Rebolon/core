/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M27 8H30C32.21 8 34 9.79 34 12V23H29V21H32V12C32 10.9 31.1 10 30 10H6C4.9 10 4 10.9 4 12V21H7V23H2V12C2 9.79 3.79 8 6 8H9V4H27V8ZM28 17H8C7.45 17 7 17.45 7 18C7 18.55 7.45 19 8 19H9V32H27V19H28C28.55 19 29 18.55 29 18C29 17.45 28.55 17 28 17ZM25 30H11V19H25V30ZM25 8H11V6H25V8ZM29 12.04H27V14.04H29V12.04Z" />\n',

  outlineAlerted:
    '<path d="M26.9039 1.64597L21.2222 11.1156C20.9526 11.4981 20.9281 11.9946 21.1588 12.4002C21.3896 12.8058 21.8363 13.0517 22.3148 13.0364H33.6881C34.1666 13.0517 34.6134 12.8058 34.8441 12.4002C35.0748 11.9946 35.0503 11.4981 34.7808 11.1156L29.0991 1.64597C28.8711 1.26889 28.4532 1.03711 28.0015 1.03711C27.5497 1.03711 27.1319 1.26889 26.9039 1.64597Z" fill="#A36500"/>\n' +
    '<path d="M23.1594 4H9V8H6C3.79 8 2 9.79 2 12V23H7V21H4V12C4 10.9 4.9 10 6 10H19.5594L20.7594 8H11V6H21.9594L23.1594 4Z" />\n' +
    '<path d="M32 15.0367H33.6637C33.7763 15.0389 33.8886 15.0354 34 15.0263V23H29V21H32V15.0367Z" />\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M8 17H28C28.55 17 29 17.45 29 18C29 18.55 28.55 19 28 19H27V32H9V19H8C7.45 19 7 18.55 7 18C7 17.45 7.45 17 8 17ZM11 30H25V19H11V30Z" />\n',

  outlineBadged:
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" />\n' +
    '<path d="M27 12.3264C27.6217 12.6217 28.2939 12.8281 29 12.9291V14.04H27V12.3264Z" />\n' +
    '<path d="M32 12.7101V21H29V23H34V12C34 11.9162 33.9974 11.8331 33.9924 11.7506C33.3903 12.1694 32.7194 12.496 32 12.7101Z" />\n' +
    '<path d="M24.2547 10C23.8334 9.39599 23.5049 8.72243 23.2899 8H11V6H23C23 5.30503 23.1013 4.63371 23.2899 4H9V8H6C3.79 8 2 9.79 2 12V23H7V21H4V12C4 10.9 4.9 10 6 10H24.2547Z" />\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M8 17H28C28.55 17 29 17.45 29 18C29 18.55 28.55 19 28 19H27V32H9V19H8C7.45 19 7 18.55 7 18C7 17.45 7.45 17 8 17ZM11 30H25V19H11V30Z" />\n',

  solid:
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M30 8H27V4H9V8H6C3.79 8 2 9.79 2 12V23H9V32H27V23H34V12C34 9.79 32.21 8 30 8ZM25 30H11V19H25V30ZM25 8H11V6H25V8ZM29 14.04H27V12.04H29V14.04Z" />\n',

  solidAlerted:
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M23.1594 4H9V8H6C3.79 8 2 9.79 2 12V23H9V32H27V23H34V15.0263C33.8886 15.0354 33.7763 15.0389 33.6637 15.0367H22.3395C21.1577 15.0604 20.0233 14.4489 19.4206 13.3893C18.8204 12.3342 18.8703 11.0423 19.5362 10.0387L20.7594 8H11V6H21.9594L23.1594 4ZM11 30H25V19H11V30Z" />\n' +
    '<path d="M26.9039 1.64597L21.2222 11.1156C20.9526 11.4981 20.9281 11.9946 21.1588 12.4002C21.3896 12.8058 21.8363 13.0517 22.3148 13.0364H33.6881C34.1666 13.0517 34.6134 12.8058 34.8441 12.4002C35.0748 11.9946 35.0503 11.4981 34.7808 11.1156L29.0991 1.64597C28.8711 1.26889 28.4532 1.03711 28.0015 1.03711C27.5497 1.03711 27.1319 1.26889 26.9039 1.64597Z" fill="#A36500"/>\n',

  solidBadged:
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" />\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M33.9924 11.7506C32.86 12.5383 31.4839 13 30 13C29.6605 13 29.3266 12.9758 29 12.9291V14.04H27V12.3264C25.2236 11.4825 23.8591 9.91253 23.2899 8H11V6H23C23 5.30503 23.1013 4.63371 23.2899 4H9V8H6C3.79 8 2 9.79 2 12V23H9V32H27V23H34V12C34 11.9162 33.9974 11.8331 33.9924 11.7506ZM11 30H25V19H11V30Z" />\n',
};

export const printerIconName = 'printer';
export const printerIcon: IconShapeTuple = [printerIconName, renderIcon(icon)];
