/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M5 10.75H31C31.27 10.75 31.52 10.64 31.71 10.46C31.9 10.28 32 10.02 32 9.75C32 9.48 31.89 9.23 31.71 9.04C31.53 8.85 31.27 8.75 31 8.75H5C4.73 8.75 4.48 8.86 4.29 9.04C4.1 9.22 4 9.48 4 9.75C4 10.02 4.11 10.27 4.29 10.46C4.47 10.65 4.73 10.75 5 10.75ZM31 26.75H5C4.73 26.75 4.48 26.86 4.29 27.04C4.1 27.22 4 27.48 4 27.75C4 28.02 4.11 28.27 4.29 28.46C4.47 28.65 4.73 28.75 5 28.75H31C31.27 28.75 31.52 28.64 31.71 28.46C31.9 28.28 32 28.02 32 27.75C32 27.48 31.89 27.23 31.71 27.04C31.53 26.85 31.27 26.75 31 26.75ZM4.52 22.09C4.48 22.28 4.5 22.49 4.57 22.67C4.64 22.85 4.77 23.01 4.94 23.12C5.1 23.23 5.3 23.29 5.49 23.29C5.62 23.29 5.75 23.26 5.88 23.21C6.01 23.16 6.11 23.08 6.2 22.99L10.44 18.75L6.21 14.51C6.02 14.32 5.77 14.22 5.5 14.22C5.23 14.22 4.98 14.32 4.8 14.51C4.61 14.7 4.51 14.95 4.51 15.21C4.51 15.47 4.61 15.73 4.8 15.92L7.62 18.75L4.8 21.58C4.66 21.72 4.56 21.9 4.52 22.09ZM31 20.75H14C13.73 20.75 13.48 20.86 13.29 21.04C13.1 21.22 13 21.48 13 21.75C13 22.02 13.11 22.27 13.29 22.46C13.47 22.65 13.73 22.75 14 22.75H31C31.27 22.75 31.52 22.64 31.71 22.46C31.9 22.28 32 22.02 32 21.75C32 21.48 31.89 21.23 31.71 21.04C31.53 20.85 31.27 20.75 31 20.75ZM31 14.75H14C13.73 14.75 13.48 14.86 13.29 15.04C13.1 15.22 13 15.48 13 15.75C13 16.02 13.11 16.27 13.29 16.46C13.47 16.65 13.73 16.75 14 16.75H31C31.27 16.75 31.52 16.64 31.71 16.46C31.9 16.28 32 16.02 32 15.75C32 15.48 31.89 15.23 31.71 15.04C31.53 14.85 31.27 14.75 31 14.75Z" fill="black"/>\n',
};

export const indentIconName = 'indent';
export const indentIcon: IconShapeTuple = [indentIconName, renderIcon(icon)];
