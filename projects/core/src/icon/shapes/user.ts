/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18 18.0451C21.86 18.0451 25 14.895 25 11.0226C25 7.15013 21.86 4 18 4C14.14 4 11 7.15013 11 11.0226C11 14.895 14.14 18.0451 18 18.0451ZM18 6.00645C20.76 6.00645 23 8.25367 23 11.0226C23 13.7915 20.76 16.0387 18 16.0387C15.24 16.0387 13 13.7915 13 11.0226C13 8.25367 15.24 6.00645 18 6.00645ZM29.79 24.8169C29.64 24.6263 26.03 20.0516 18 20.0516C9.97 20.0516 6.36 24.6263 6.21 24.8169C6.08 24.9875 6 25.2082 6 25.4289V30.9968C6 31.5485 6.45 32 7 32C7.55 32 8 31.5485 8 30.9968V25.8101C8.81 24.9373 11.93 22.058 18 22.058C24.07 22.058 27.2 24.9373 28 25.8101V30.9968C28 31.5485 28.45 32 29 32C29.55 32 30 31.5485 30 30.9968V25.4289C30 25.2082 29.93 24.9875 29.79 24.8169Z" />\n',
  outlineAlerted:
    '<path d="M26.9039 1.64621L21.2222 11.1159C20.9526 11.4984 20.9281 11.9949 21.1588 12.4005C21.3896 12.806 21.8363 13.0519 22.3148 13.0367H33.6881C34.1666 13.0519 34.6134 12.806 34.8441 12.4005C35.0748 11.9949 35.0503 11.4984 34.7808 11.1159L29.0991 1.64621C28.8711 1.26913 28.4532 1.03735 28.0015 1.03735C27.5497 1.03735 27.1319 1.26913 26.9039 1.64621Z" fill="#A36500"/>\n' +
    '<path d="M22.2786 5.46793C21.0948 4.54804 19.61 4 18 4C14.14 4 11 7.15013 11 11.0226C11 14.895 14.14 18.0451 18 18.0451C20.3734 18.0451 22.4746 16.8542 23.741 15.0367H22.3395C21.954 15.0444 21.5735 14.9845 21.2148 14.8636C20.3455 15.5968 19.2238 16.0387 18 16.0387C15.24 16.0387 13 13.7915 13 11.0226C13 8.25367 15.24 6.00645 18 6.00645C19.2349 6.00645 20.3658 6.45636 21.2384 7.2016L22.2786 5.46793Z" />\n' +
    '<path d="M18 20.0516C26.03 20.0516 29.64 24.6263 29.79 24.8169C29.93 24.9875 30 25.2082 30 25.4289V30.9968C30 31.5485 29.55 32 29 32C28.45 32 28 31.5485 28 30.9968V25.8101C27.2 24.9373 24.07 22.058 18 22.058C11.93 22.058 8.81 24.9373 8 25.8101V30.9968C8 31.5485 7.55 32 7 32C6.45 32 6 31.5485 6 30.9968V25.4289C6 25.2082 6.08 24.9875 6.21 24.8169C6.36 24.6263 9.97 20.0516 18 20.0516Z" />\n',
  outlineBadged:
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" />\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M23.0009 5.36327C23.0304 7.22515 23.7869 8.91048 24.9989 10.1479C24.9996 10.1894 25 10.2309 25 10.2726C25 14.145 21.86 17.2951 18 17.2951C14.14 17.2951 11 14.145 11 10.2726C11 6.40013 14.14 3.25 18 3.25C19.9573 3.25 21.7294 4.05993 23.0009 5.36327ZM23 10.2726C23 7.50367 20.76 5.25645 18 5.25645C15.24 5.25645 13 7.50367 13 10.2726C13 13.0415 15.24 15.2887 18 15.2887C20.76 15.2887 23 13.0415 23 10.2726Z" />\n' +
    '<path d="M18 19.3016C26.03 19.3016 29.64 23.8763 29.79 24.0669C29.93 24.2375 30 24.4582 30 24.6789V30.2468C30 30.7985 29.55 31.25 29 31.25C28.45 31.25 28 30.7985 28 30.2468V25.0601C27.2 24.1873 24.07 21.308 18 21.308C11.93 21.308 8.81 24.1873 8 25.0601V30.2468C8 30.7985 7.55 31.25 7 31.25C6.45 31.25 6 30.7985 6 30.2468V24.6789C6 24.4582 6.08 24.2375 6.21 24.0669C6.36 23.8763 9.97 19.3016 18 19.3016Z" />\n',
  solid:
    '<path d="M18 18.0451C21.86 18.0451 25 14.895 25 11.0226C25 7.15013 21.86 4 18 4C14.14 4 11 7.15013 11 11.0226C11 14.895 14.14 18.0451 18 18.0451ZM29.79 24.8169C29.64 24.6263 26.03 20.0516 18 20.0516C9.97 20.0516 6.36 24.6263 6.21 24.8169C6.08 24.9875 6 25.2082 6 25.4289V30.9968C6 31.5485 6.45 32 7 32H29C29.55 32 30 31.5485 30 30.9968V25.4289C30 25.2082 29.93 24.9875 29.79 24.8169Z" />\n',
  solidAlerted:
    '<path d="M26.9039 1.64621L21.2222 11.1159C20.9526 11.4984 20.9281 11.9949 21.1588 12.4005C21.3896 12.806 21.8363 13.0519 22.3148 13.0367H33.6881C34.1666 13.0519 34.6134 12.806 34.8441 12.4005C35.0748 11.9949 35.0503 11.4984 34.7808 11.1159L29.0991 1.64621C28.8711 1.26913 28.4532 1.03735 28.0015 1.03735C27.5497 1.03735 27.1319 1.26913 26.9039 1.64621Z" fill="#A36500"/>\n' +
    '<path d="M22.2786 5.46793L19.5362 10.0387C18.8703 11.0423 18.8204 12.3342 19.4206 13.3893C20.0233 14.4489 21.1577 15.0604 22.3395 15.0367H23.741C22.4746 16.8542 20.3734 18.0451 18 18.0451C14.14 18.0451 11 14.895 11 11.0226C11 7.15013 14.14 4 18 4C19.61 4 21.0948 4.54804 22.2786 5.46793Z" />\n' +
    '<path d="M18 20.0516C26.03 20.0516 29.64 24.6263 29.79 24.8169C29.93 24.9875 30 25.2082 30 25.4289V30.9968C30 31.5485 29.55 32 29 32H7C6.45 32 6 31.5485 6 30.9968V25.4289C6 25.2082 6.08 24.9875 6.21 24.8169C6.36 24.6263 9.97 20.0516 18 20.0516Z" />\n',
  solidBadged:
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" />\n' +
    '<path d="M23.0009 6.11327C23.0304 7.97515 23.7869 9.66048 24.9989 10.8979C24.9996 10.9394 25 10.9809 25 11.0226C25 14.895 21.86 18.0451 18 18.0451C14.14 18.0451 11 14.895 11 11.0226C11 7.15013 14.14 4 18 4C19.9573 4 21.7294 4.80993 23.0009 6.11327Z" />\n' +
    '<path d="M18 20.0516C26.03 20.0516 29.64 24.6263 29.79 24.8169C29.93 24.9875 30 25.2082 30 25.4289V30.9968C30 31.5485 29.55 32 29 32H7C6.45 32 6 31.5485 6 30.9968V25.4289C6 25.2082 6.08 24.9875 6.21 24.8169C6.36 24.6263 9.97 20.0516 18 20.0516Z" />\n',
};

export const userIconName = 'user';
export const userIcon: IconShapeTuple = [userIconName, renderIcon(icon)];
