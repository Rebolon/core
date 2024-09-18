/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M30 24H6V26H30V24ZM13.71 8.72L17 5.61V19C17 19.55 17.45 20 18 20C18.55 20 19 19.55 19 19V5.61L22.29 8.72C22.68 9.09 23.31 9.09 23.7 8.72C24.09 8.35 24.09 7.75 23.7 7.38L18 2L12.29 7.39C12.09 7.57 12 7.82 12 8.06C12 8.3 12.1 8.54 12.29 8.73C12.68 9.1 13.31 9.1 13.7 8.73L13.71 8.72ZM30 29.98V27.97H26V29.98H30ZM33.95 24.69L29.95 12.69C29.81 12.28 29.43 12.01 29 12.01H21V14.01H28.28L32 25.17V32.01H4V25.17L7.72 14.01H15V12.01H7C6.57 12.01 6.19 12.29 6.05 12.69L2.05 24.68C2.02 24.78 2 24.89 2 25V32C2 33.1 2.9 34 4 34H32C33.1 34 34 33.1 34 32V25C34 24.89 33.98 24.79 33.95 24.68V24.69Z" />\n',

  outlineAlerted:
    '<path d="M26.9039 1.64621L21.2222 11.1159C20.9526 11.4984 20.9281 11.9949 21.1588 12.4005C21.3896 12.806 21.8363 13.0519 22.3148 13.0367H33.6881C34.1666 13.0519 34.6134 12.806 34.8441 12.4005C35.0748 11.9949 35.0503 11.4984 34.7808 11.1159L29.0991 1.64621C28.8711 1.26913 28.4532 1.03735 28.0015 1.03735C27.5497 1.03735 27.1319 1.26913 26.9039 1.64621Z" fill="#A36500"/>\n' +
    '<path d="M28.6222 15.0367H30.7322L33.95 24.69V24.68C33.98 24.79 34 24.89 34 25V32C34 33.1 33.1 34 32 34H4C2.9 34 2 33.1 2 32V25C2 24.89 2.02 24.78 2.05 24.68L6.05 12.69C6.19 12.29 6.57 12.01 7 12.01H15V14.01H7.72L4 25.17V32.01H32V25.17L28.6222 15.0367Z" />\n' +
    '<path d="M22.0601 5.83215L21.0377 7.53619L19 5.61V19C19 19.55 18.55 20 18 20C17.45 20 17 19.55 17 19V5.61L13.71 8.72L13.7 8.73C13.31 9.1 12.68 9.1 12.29 8.73C12.1 8.54 12 8.3 12 8.06C12 7.82 12.09 7.57 12.29 7.39L18 2L22.0601 5.83215Z" />\n' +
    '<path d="M30 27.97V29.98H26V27.97H30Z" />\n' +
    '<path d="M6 24H30V26H6V24Z" />\n',

  outlineBadged:
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" fill="#E02200"/>\n' +
    '<path d="M30.0533 12.9998C30.0355 12.9999 30.0178 13 30 13C28.6873 13 27.459 12.6387 26.4091 12.01H21V14.01H28.28L32 25.17V32.01H4V25.17L7.72 14.01H15V12.01H7C6.57 12.01 6.19 12.29 6.05 12.69L2.05 24.68C2.02 24.78 2 24.89 2 25V32C2 33.1 2.9 34 4 34H32C33.1 34 34 33.1 34 32V25C34 24.89 33.98 24.79 33.95 24.68V24.69L30.0533 12.9998Z" />\n' +
    '<path d="M23.0405 6.75754C23.1184 7.48108 23.3065 8.1716 23.5877 8.81197C23.1971 9.08692 22.6444 9.05627 22.29 8.72L19 5.61V19C19 19.55 18.55 20 18 20C17.45 20 17 19.55 17 19V5.61L13.71 8.72L13.7 8.73C13.31 9.1 12.68 9.1 12.29 8.73C12.1 8.54 12 8.3 12 8.06C12 7.82 12.09 7.57 12.29 7.39L18 2L23.0405 6.75754Z" />\n' +
    '<path d="M30 27.97V29.98H26V27.97H30Z" />\n' +
    '<path d="M6 24H30V26H6V24Z" />\n',

  solid:
    '<path d="M13.71 8.72L17 5.61V19C17 19.55 17.45 20 18 20C18.55 20 19 19.55 19 19V5.61L22.29 8.72C22.68 9.09 23.31 9.09 23.7 8.72C24.09 8.35 24.09 7.75 23.7 7.38L18 2L12.29 7.39C12.09 7.57 12 7.82 12 8.06C12 8.3 12.1 8.54 12.29 8.73C12.68 9.1 13.31 9.1 13.7 8.73L13.71 8.72ZM2 26V32C2 33.1 2.9 34 4 34H32C33.1 34 34 33.1 34 32V26H2ZM30 30.01H26V28H30V30.01ZM29.95 12.68C29.81 12.27 29.43 12 29 12H21V19C21 20.65 19.65 22 18 22C16.35 22 15 20.65 15 19V12H7C6.57 12 6.19 12.28 6.05 12.68L2.28 24H33.72L29.95 12.68Z" />\n',

  solidAlerted:
    '<path d="M26.9039 1.64621L21.2222 11.1159C20.9526 11.4984 20.9281 11.9949 21.1588 12.4005C21.3896 12.806 21.8363 13.0519 22.3148 13.0367H33.6881C34.1666 13.0519 34.6134 12.806 34.8441 12.4005C35.0748 11.9949 35.0503 11.4984 34.7808 11.1159L29.0991 1.64621C28.8711 1.26913 28.4532 1.03735 28.0015 1.03735C27.5497 1.03735 27.1319 1.26913 26.9039 1.64621Z" fill="#A36500"/>\n' +
    '<path d="M21 14.7827C21.4197 14.9575 21.876 15.046 22.3395 15.0367H30.7349L33.72 24H2.28L6.05 12.68C6.19 12.28 6.57 12 7 12H15V19C15 20.65 16.35 22 18 22C19.65 22 21 20.65 21 19V14.7827Z" />\n' +
    '<path d="M22.0601 5.83215L21.0377 7.53619L19 5.61V19C19 19.55 18.55 20 18 20C17.45 20 17 19.55 17 19V5.61L13.71 8.72L13.7 8.73C13.31 9.1 12.68 9.1 12.29 8.73C12.1 8.54 12 8.3 12 8.06C12 7.82 12.09 7.57 12.29 7.39L18 2L22.0601 5.83215Z" />\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M2 32V26H34V32C34 33.1 33.1 34 32 34H4C2.9 34 2 33.1 2 32ZM26 30.01H30V28H26V30.01Z" />\n',

  solidBadged:
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" fill="#E02200"/>\n' +
    '<path d="M30.0565 12.9998C30.0377 12.9999 30.0189 13 30 13C28.6803 13 27.446 12.6348 26.3924 12H21V19C21 20.65 19.65 22 18 22C16.35 22 15 20.65 15 19V12H7C6.57 12 6.19 12.28 6.05 12.68L2.28 24H33.72L30.0565 12.9998Z" />\n' +
    '<path d="M23.0405 6.75754C23.1184 7.48108 23.3065 8.1716 23.5877 8.81197C23.1971 9.08692 22.6444 9.05627 22.29 8.72L19 5.61V19C19 19.55 18.55 20 18 20C17.45 20 17 19.55 17 19V5.61L13.71 8.72L13.7 8.73C13.31 9.1 12.68 9.1 12.29 8.73C12.1 8.54 12 8.3 12 8.06C12 7.82 12.09 7.57 12.29 7.39L18 2L23.0405 6.75754Z" />\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M2 32V26H34V32C34 33.1 33.1 34 32 34H4C2.9 34 2 33.1 2 32ZM26 30.01H30V28H26V30.01Z" />\n',
};

export const backupRestoreIconName = 'backup-restore';
export const backupRestoreIcon: IconShapeTuple = [backupRestoreIconName, renderIcon(icon)];
