/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M30.8474 7.43L33.986 20.08C33.9949 20.1564 33.9949 20.2336 33.986 20.31V28C33.986 29.1046 33.091 30 31.9869 30H3.99903C2.89494 30 1.9999 29.1046 1.9999 28V20.32C1.99027 20.2403 1.99027 20.1597 1.9999 20.08L5.12854 7.47C5.36721 6.6012 6.15709 5.99933 7.05771 6H28.9282C29.814 5.9987 30.595 6.58063 30.8474 7.43ZM3.99903 20.44V28H31.9869V20.44L28.9182 8H7.05771L3.99903 20.44ZM5.99817 19H29.9878V21H5.99817V19ZM29.9878 23H25.9895V25H29.9878V23Z" />\n',

  outlineAlerted:
    '<path d="M26.9039 1.64621L21.2222 11.1159C20.9526 11.4984 20.9281 11.9949 21.1588 12.4005C21.3896 12.806 21.8363 13.0519 22.3148 13.0367H33.6881C34.1666 13.0519 34.6134 12.806 34.8441 12.4005C35.0748 11.9949 35.0503 11.4984 34.7808 11.1159L29.0991 1.64621C28.8711 1.26913 28.4532 1.03735 28.0015 1.03735C27.5497 1.03735 27.1319 1.26913 26.9039 1.64621Z" fill="#A36500"/>\n' +
    '<path d="M21.9593 6H7.05771C6.15709 5.99932 5.36721 6.6012 5.12854 7.47L1.9999 20.08C1.99027 20.1597 1.99027 20.2403 1.9999 20.32V28C1.9999 29.1046 2.89494 30 3.99903 30H31.9869C33.091 30 33.986 29.1046 33.986 28V20.31C33.9949 20.2336 33.9949 20.1564 33.986 20.08L32.7347 15.0367H30.654L31.9869 20.44V28H3.99903V20.44L7.05771 8H20.7593L21.9593 6Z" />\n' +
    '<path d="M29.9878 19H5.99817V21H29.9878V19Z" />\n' +
    '<path d="M25.9895 23H29.9878V25H25.9895V23Z" />\n',

  outlineBadged:
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" />\n' +
    '<path d="M30.1512 12.9984L31.9869 20.44V28H3.99903V20.44L7.05771 8H23.2898C23.1012 7.36629 22.9999 6.69497 22.9999 6L7.05771 6C6.15709 5.99933 5.36721 6.6012 5.12854 7.47L1.9999 20.08C1.99027 20.1597 1.99027 20.2403 1.9999 20.32V28C1.9999 29.1046 2.89494 30 3.99903 30H31.9869C33.091 30 33.986 29.1046 33.986 28V20.31C33.9949 20.2336 33.9949 20.1564 33.986 20.08L32.1462 12.6648C31.5156 12.8678 30.8458 12.9837 30.1512 12.9984Z" />\n' +
    '<path d="M29.9878 19H5.99817V21H29.9878V19Z" />\n' +
    '<path d="M25.9895 23H29.9878V25H25.9895V23Z" />\n',

  solid:
    '<path d="M28.94 6C29.8261 5.9987 30.6075 6.58063 30.86 7.43L33.71 19H2.29L5.13 7.47C5.36877 6.6012 6.15899 5.99933 7.06 6H28.94Z" />\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M2 21V28C2 29.1046 2.89543 30 4 30H32C33.1046 30 34 29.1046 34 28V21H2ZM30 26H26V24H30V26Z" />\n',

  solidAlerted:
    '<path d="M26.9039 1.64621L21.2222 11.1159C20.9526 11.4984 20.9281 11.9949 21.1588 12.4005C21.3896 12.806 21.8363 13.0519 22.3148 13.0367H33.6881C34.1666 13.0519 34.6134 12.806 34.8441 12.4005C35.0748 11.9949 35.0503 11.4984 34.7808 11.1159L29.0991 1.64621C28.8711 1.26913 28.4532 1.03735 28.0015 1.03735C27.5497 1.03735 27.1319 1.26913 26.9039 1.64621Z" fill="#A36500"/>\n' +
    '<path d="M21.9594 6L19.5362 10.0387C18.8703 11.0423 18.8204 12.3342 19.4206 13.3893C20.0233 14.4489 21.1577 15.0604 22.3395 15.0367H32.7337L33.71 19H2.29L5.13 7.47C5.36877 6.6012 6.15899 5.99932 7.06 6H21.9594Z" />\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M2 28V21H34V28C34 29.1046 33.1046 30 32 30H4C2.89543 30 2 29.1046 2 28ZM26 26H30V24H26V26Z" />\n',

  solidBadged:
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" />\n' +
    '<path d="M32.1492 12.6639C31.472 12.8821 30.7498 13 30 13C26.134 13 23 9.86599 23 6L7.06 6C6.15899 5.99933 5.36877 6.6012 5.13 7.47L2.29 19H33.71L32.1492 12.6639Z" />\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M2 28V21H34V28C34 29.1046 33.1046 30 32 30H4C2.89543 30 2 29.1046 2 28ZM26 26H30V24H26V26Z" />\n',
};

export const hardDiskIconName = 'hard-disk';
export const hardDiskIcon: IconShapeTuple = [hardDiskIconName, renderIcon(icon)];
