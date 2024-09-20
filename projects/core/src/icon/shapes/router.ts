/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="m18 14.87 5.11-5.14a1 1 0 1 0-1.42-1.41L19 11V3.33a1 1 0 0 0-2 0V11l-2.69-2.68a1 1 0 1 0-1.42 1.41Zm0 6.26-5.11 5.14a1 1 0 0 0 1.42 1.41L17 25v7.69a1 1 0 0 0 2 0V25l2.69 2.71a1 1 0 0 0 1.42-1.41Zm10.85-8.24a1 1 0 0 0-1.41 1.42L30.15 17h-7.69a1 1 0 1 0 0 2h7.69l-2.71 2.69a1 1 0 0 0 1.41 1.42L34 18ZM5.85 19h7.69a1 1 0 0 0 0-2H5.85l2.71-2.69a1 1 0 1 0-1.41-1.42L2 18l5.14 5.11a1 1 0 1 0 1.41-1.42Z"/>',

  outlineAlerted:
    '<path d="m18 21.13-5.11 5.14a1 1 0 0 0 1.42 1.41L17 25v7.69a1 1 0 0 0 2 0V25l2.69 2.71a1 1 0 0 0 1.42-1.41ZM5.85 19h7.69a1 1 0 0 0 0-2H5.85l2.71-2.69a1 1 0 1 0-1.41-1.42L2 18l5.14 5.11a1 1 0 1 0 1.41-1.42Zm25.53-3.6h-2.84l1.61 1.6h-7.69a1 1 0 1 0 0 2h7.69l-2.71 2.69a1 1 0 0 0 1.41 1.42L34 18ZM18 14.87l1.15-1.16-.1-.15A3.68 3.68 0 0 1 19 10V3.33a1 1 0 0 0-2 0V11l-2.69-2.68a1 1 0 1 0-1.42 1.41Z"/>',

  outlineBadged:
    '<path d="m18 14.87 5.11-5.14a1 1 0 1 0-1.42-1.41L19 11V3.33a1 1 0 0 0-2 0V11l-2.69-2.68a1 1 0 1 0-1.42 1.41Zm0 6.26-5.11 5.14a1 1 0 0 0 1.42 1.41L17 25v7.69a1 1 0 0 0 2 0V25l2.69 2.71a1 1 0 0 0 1.42-1.41Zm10.85-8.24a1 1 0 0 0-1.41 1.42L30.15 17h-7.69a1 1 0 1 0 0 2h7.69l-2.71 2.69a1 1 0 0 0 1.41 1.42L34 18ZM5.85 19h7.69a1 1 0 0 0 0-2H5.85l2.71-2.69a1 1 0 1 0-1.41-1.42L2 18l5.14 5.11a1 1 0 1 0 1.41-1.42Z"/>',

  solid:
    '<path d="M18 1.67a16 16 0 1 0 16 16 16 16 0 0 0-16-16m-4.14 8.25a.8.8 0 0 1 1.13 0l2.21 2.19V5.93a.8.8 0 0 1 1.6 0v6.18L21 9.92a.8.8 0 1 1 1.13 1.14L18 15.15l-4.14-4.1a.8.8 0 0 1 0-1.13m-3.54 11.82a.8.8 0 0 1-1.13 0L5 17.67l4.19-4.09a.8.8 0 1 1 1.12 1.14l-2.2 2.14h6.27a.8.8 0 0 1 0 1.6H8.11l2.2 2.15a.8.8 0 0 1 .01 1.13m11.82 3.67a.8.8 0 0 1-1.13 0l-2.21-2.18v6.17a.8.8 0 0 1-1.6 0v-6.17L15 25.42a.8.8 0 1 1-1.13-1.14l4.13-4.1 4.14 4.1a.8.8 0 0 1 0 1.13m4.67-3.66a.8.8 0 1 1-1.12-1.14l2.2-2.15h-6.26a.8.8 0 0 1 0-1.6h6.27l-2.2-2.14a.8.8 0 1 1 1.12-1.14L31 17.67Z"/>',

  solidAlerted:
    '<path d="M33.82 15.39h-5.14L31 17.67l-4.19 4.09a.8.8 0 1 1-1.12-1.14l2.2-2.15h-6.26a.8.8 0 0 1 0-1.6h6.27l-1.5-1.47h-4.17a3.68 3.68 0 0 1-3-1.51L18 15.15l-4.14-4.1A.8.8 0 1 1 15 9.92l2.21 2.19V5.93a.8.8 0 0 1 1.6 0v4.49a4 4 0 0 1 .19-.53l4.22-7.31A16 16 0 1 0 34 17.67a16 16 0 0 0-.18-2.28m-23.5 6.35a.8.8 0 0 1-1.13 0L5 17.67l4.19-4.09a.8.8 0 1 1 1.12 1.14l-2.2 2.14h6.27a.8.8 0 0 1 0 1.6H8.11l2.2 2.15a.8.8 0 0 1 .01 1.13m11.82 3.67a.8.8 0 0 1-1.13 0l-2.21-2.18v6.17a.8.8 0 0 1-1.6 0v-6.17L15 25.42a.8.8 0 1 1-1.13-1.14l4.13-4.1 4.14 4.1a.8.8 0 0 1 0 1.13"/>',

  solidBadged:
    '<path d="M33.22 12.76a7.49 7.49 0 0 1-9.9-10.16 16 16 0 1 0 9.9 10.17ZM13.86 9.92a.8.8 0 0 1 1.13 0l2.21 2.19V5.93a.8.8 0 0 1 1.6 0v6.18L21 9.92a.8.8 0 1 1 1.13 1.14L18 15.15l-4.14-4.1a.8.8 0 0 1 0-1.13m-3.54 11.82a.8.8 0 0 1-1.13 0L5 17.67l4.19-4.09a.8.8 0 1 1 1.12 1.14l-2.2 2.14h6.27a.8.8 0 0 1 0 1.6H8.11l2.2 2.15a.8.8 0 0 1 .01 1.13m11.82 3.67a.8.8 0 0 1-1.13 0l-2.21-2.18v6.17a.8.8 0 0 1-1.6 0v-6.17L15 25.42a.8.8 0 1 1-1.13-1.14l4.13-4.1 4.14 4.1a.8.8 0 0 1 0 1.13m4.67-3.66a.8.8 0 1 1-1.12-1.14l2.2-2.15h-6.26a.8.8 0 0 1 0-1.6h6.27l-2.2-2.14a.8.8 0 1 1 1.12-1.14L31 17.67Z"/>',
};

export const routerIconName = 'router';
export const routerIcon: IconShapeTuple = [routerIconName, renderIcon(icon)];
