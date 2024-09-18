/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M27.36 4H6C4.89543 4 4 4.89543 4 6V30C4 31.1046 4.89543 32 6 32H30C31.1046 32 32 31.1046 32 30V8.78L27.36 4ZM25 30H11V22H25V30ZM27 30H30V9.59L26.51 6H12V12H26C26 13.1046 25.1046 14 24 14H12C10.8954 14 10 13.1046 10 12V6H6V30H9V22C9 20.8954 9.89543 20 11 20H25C26.1046 20 27 20.8954 27 22V30Z" fill="black"/>\n',

  outlineAlerted:
    '<path d="M26.9039 1.64621L21.2222 11.1159C20.9526 11.4984 20.9281 11.9949 21.1588 12.4005C21.3896 12.806 21.8363 13.0519 22.3148 13.0367H33.6881C34.1666 13.0519 34.6134 12.806 34.8441 12.4005C35.0748 11.9949 35.0503 11.4984 34.7808 11.1159L29.0991 1.64621C28.8711 1.26913 28.4532 1.03735 28.0015 1.03735C27.5497 1.03735 27.1319 1.26913 26.9039 1.64621Z" fill="#A36500"/>\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M23.1594 4H6C4.89543 4 4 4.89543 4 6V30C4 31.1046 4.89543 32 6 32H30C31.1046 32 32 31.1046 32 30V15.0367H30V30H27V22C27 20.8954 26.1046 20 25 20H11C9.89543 20 9 20.8954 9 22V30H6V6H10V12C10 13.1046 10.8954 14 12 14H19.87C19.6994 13.8177 19.5481 13.6136 19.4206 13.3893C19.173 12.9542 19.0361 12.4788 19.0073 12H12V6H21.9594L23.1594 4ZM11 30H25V22H11V30Z" fill="black"/>\n',

  outlineBadged:
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M30 30V13.5C30.6763 13.4974 31.349 13.4032 32 13.22V30C32 31.1046 31.1046 32 30 32H6C4.89543 32 4 31.1046 4 30V6C4 4.89543 4.89543 4 6 4H22.78C22.5968 4.65097 22.5026 5.32375 22.5 6H12V12.02H25.57L26 12.32C25.8415 13.2981 24.9908 14.0128 24 14H12C10.8954 14 10 13.1046 10 12V6H6V30H9V22C9 20.8954 9.89543 20 11 20H25C26.1046 20 27 20.8954 27 22V30H30ZM11 30H25V22H11V30Z" fill="black"/>\n' +
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" fill="#E02200"/>\n',

  solid:
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M27.36 4H6C4.89543 4 4 4.89543 4 6V30C4 31.1046 4.89543 32 6 32H30C31.1046 32 32 31.1046 32 30V8.78L27.36 4ZM26 30H10V21.5C10 20.6716 10.6716 20 11.5 20H24.5C25.3284 20 26 20.6716 26 21.5V30ZM12 14H24C25.1046 14 26 13.1046 26 12H12V6H10V12C10 13.1046 10.8954 14 12 14Z" fill="black"/>\n',

  solidAlerted:
    '<path d="M26.9039 1.64621L21.2222 11.1159C20.9526 11.4984 20.9281 11.9949 21.1588 12.4005C21.3896 12.806 21.8363 13.0519 22.3148 13.0367H33.6881C34.1666 13.0519 34.6134 12.806 34.8441 12.4005C35.0748 11.9949 35.0503 11.4984 34.7808 11.1159L29.0991 1.64621C28.8711 1.26913 28.4532 1.03735 28.0015 1.03735C27.5497 1.03735 27.1319 1.26913 26.9039 1.64621Z" fill="#A36500"/>\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M23.1594 4H6C4.89543 4 4 4.89543 4 6V30C4 31.1046 4.89543 32 6 32H30C31.1046 32 32 31.1046 32 30V15.0367H22.3395C21.4078 15.0553 20.5055 14.6792 19.87 14H12C10.8954 14 10 13.1046 10 12V6H12V12H19.0073C18.9663 11.3177 19.1449 10.6284 19.5362 10.0387L23.1594 4ZM10 30H26V21.5C26 20.6716 25.3284 20 24.5 20H11.5C10.6716 20 10 20.6716 10 21.5V30Z" fill="black"/>\n',

  solidBadged:
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M26 12.32C27.194 13.0856 28.5816 13.4949 30 13.5C30.6763 13.4974 31.349 13.4032 32 13.22V30C32 31.1046 31.1046 32 30 32H6C4.89543 32 4 31.1046 4 30V6C4 4.89543 4.89543 4 6 4H22.78C21.9491 6.98108 23.0477 10.1654 25.54 12H12V6H10V12C10 13.1046 10.8954 14 12 14H24C24.9908 14.0128 25.8415 13.2981 26 12.32ZM10 30H26V21.5C26 20.6716 25.3284 20 24.5 20H11.5C10.6716 20 10 20.6716 10 21.5V30Z" fill="black"/>\n' +
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" fill="#E02200"/>\n',
};

export const floppyIconName = 'floppy';
export const floppyIcon: IconShapeTuple = [floppyIconName, renderIcon(icon)];
