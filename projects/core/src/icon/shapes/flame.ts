/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M31.3 16.66c-1.19-2.09-7.94-14.15-7.94-14.15a1 1 0 0 0-1.75 0l-6 10.64-3-5.28a1 1 0 0 0-1.75 0S5.4 17.78 4.42 19.5A9.3 9.3 0 0 0 3 24.61C3 29.72 5.86 34 11.67 34h10.81C28.28 34 33 29 33 22.78a11.13 11.13 0 0 0-1.7-6.12M22.48 32H11.77C8.13 32 5 28.66 5 24.61a7.43 7.43 0 0 1 1.16-4.13c.73-1.29 4.05-7.21 5.65-10.07l3 5.28a1 1 0 0 0 .87.51 1 1 0 0 0 .87-.51L22.49 5c1.86 3.33 6.15 11 7.07 12.6A9.24 9.24 0 0 1 31 22.78c0 5.09-3.82 9.22-8.52 9.22"/><path d="m25.75 21.73-4.38-7.81a.8.8 0 0 0-1.4 0l-4.2 7.48-1.59-2.49a.8.8 0 0 0-1.35 0l-3.46 5.44a4.35 4.35 0 0 0-.82 2.6 4.5 4.5 0 0 0 .5 2H11a3 3 0 0 1-.83-2 2.78 2.78 0 0 1 .56-1.73l2.8-4.38 1.66 2.6a.8.8 0 0 0 1.41-.12 8 8 0 0 1 .4-.8L20.67 16l3.69 6.57a4.83 4.83 0 0 1 .77 2.71A5 5 0 0 1 23.46 29h2.13a6.7 6.7 0 0 0 1.14-3.74 6.45 6.45 0 0 0-1-3.5Z"/>',
  solid:
    '<path d="M31.3 16.32c-1.19-2.09-7.94-14.15-7.94-14.15a1 1 0 0 0-1.75 0l-6 10.64-3-5.28a1 1 0 0 0-1.75 0s-5.46 9.9-6.44 11.62A9.3 9.3 0 0 0 3 24.26c0 5.11 3.88 9.65 8.67 9.74h10.81C28.28 34 33 28.62 33 22.44a11.13 11.13 0 0 0-1.7-6.12M21.48 32h-6.94A4.68 4.68 0 0 1 10 27.41a3.9 3.9 0 0 1 .75-2.34l3.35-5.21a.5.5 0 0 1 .84 0l1.78 2.77v-.08c.63-1.11 4.23-7.48 4.23-7.48a.5.5 0 0 1 .87 0s3.6 6.38 4.23 7.48a5.83 5.83 0 0 1 .95 3.21C27 32 22.1 32 21.48 32"/>',
};

export const flameIconName = 'flame';
export const flameIcon: IconShapeTuple = [flameIconName, renderIcon(icon)];
