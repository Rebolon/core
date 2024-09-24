/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M24.31 25.81c-1.75 0-3-2.49-3-6a12.8 12.8 0 0 1 1.72-6.7 2.57 2.57 0 0 0-3.79 0A12.8 12.8 0 0 1 21 19.76c0 3.56-1.23 6-3 6s-3-2.49-3-6a12.8 12.8 0 0 1 1.72-6.7 2.57 2.57 0 0 0-3.79 0 12.8 12.8 0 0 1 1.72 6.7c0 3.56-1.23 6-3 6s-3-2.49-3-6a12.9 12.9 0 0 1 1.71-6.7 2.7 2.7 0 0 0-1.89-.87C7.1 12.19 5.69 13.7 5 16l-.23.7H2a1 1 0 0 1 0-2h1.29c1.1-2.83 3.06-4.55 5.24-4.55a4.67 4.67 0 0 1 3.16 1.32 4.62 4.62 0 0 1 3.15-1.32A4.65 4.65 0 0 1 18 11.51a4.43 4.43 0 0 1 6.31 0 4.67 4.67 0 0 1 3.16-1.32c2.18 0 4.14 1.72 5.24 4.55H34a1 1 0 0 1 0 2h-2.72l-.23-.7c-.74-2.34-2.15-3.85-3.58-3.85a2.7 2.7 0 0 0-1.89.87 12.9 12.9 0 0 1 1.71 6.7c0 3.56-1.22 6.05-2.98 6.05M18 14.93a11.7 11.7 0 0 0-1 4.83c0 2.54.66 3.75 1 4 .32-.27 1-1.48 1-4a11.7 11.7 0 0 0-1-4.83m6.31 0a11.7 11.7 0 0 0-1 4.83c0 2.54.66 3.75 1 4 .32-.27 1-1.48 1-4a11.7 11.7 0 0 0-1-4.83m-12.62 0a11.7 11.7 0 0 0-1 4.83c0 2.54.66 3.75 1 4 .32-.27 1-1.48 1-4a11.7 11.7 0 0 0-1-4.83"/>',
};

export const inductorIconName = 'inductor';
export const inductorIcon: IconShapeTuple = [inductorIconName, renderIcon(icon)];
