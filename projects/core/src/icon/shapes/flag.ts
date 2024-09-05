/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '  <path d="M29.39 2.07999C29.02 1.91999 28.59 1.99999 28.3 2.27999C28.19 2.38999 25.54 4.80999 19.29 2.92999C15.04 1.64999 11.76 2.42999 10 2.90999V4.99999C11.23 4.59999 14.4 3.54999 18.71 4.84999C23.26 6.21999 26.29 5.55999 28 4.78999V16.53C27.06 17.22 24.05 18.95 19.37 17.07C15.62 15.57 11.93 16.42 10 16.92V19C11.42 18.58 15.03 17.49 18.63 18.93C20.44 19.65 22.05 19.92 23.45 19.92C27.34 19.92 29.57 17.84 29.69 17.72C29.89 17.53 30 17.27 30 17V2.99999C30 2.59999 29.76 2.23999 29.39 2.07999ZM7 1.99999C6.45 1.99999 6 2.44999 6 2.99999V33C6 33.55 6.45 34 7 34C7.55 34 8 33.55 8 33V2.99999C8 2.44999 7.55 1.99999 7 1.99999Z" fill="black"/>\n',
  solid:
    '<path d="M5.92,2a1,1,0,0,0-1,1V33a1,1,0,0,0,2,0V3A1,1,0,0,0,5.92,2Z"/><path d="M30.5,3.82a1,1,0,0,0-1,0,14.9,14.9,0,0,1-6.13,1.16,13.11,13.11,0,0,1-5.18-1.49A12.78,12.78,0,0,0,13.2,2,10.86,10.86,0,0,0,9,2.85V20a8.8,8.8,0,0,1,4.25-1.08,11.22,11.22,0,0,1,4.2,1.28,14.84,14.84,0,0,0,6,1.66,16.79,16.79,0,0,0,7-1.37,1,1,0,0,0,.55-.89V4.67A1,1,0,0,0,30.5,3.82Z"/>',
};

export const flagIconName = 'flag';
export const flagIcon: IconShapeTuple = [flagIconName, renderIcon(icon)];
