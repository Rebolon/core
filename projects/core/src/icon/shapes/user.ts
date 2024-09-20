/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18 17a7 7 0 1 0-7-7 7 7 0 0 0 7 7m0-12a5 5 0 1 1-5 5 5 5 0 0 1 5-5m12.47 19.37a17.16 17.16 0 0 0-24.93 0A2 2 0 0 0 5 25.74V31a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2v-5.26a2 2 0 0 0-.53-1.37M29 31H7v-5.27a15.17 15.17 0 0 1 22 0Z"/>',
  outlineAlerted:
    '<path d="M30.47 24.37a17.16 17.16 0 0 0-24.93 0A2 2 0 0 0 5 25.74V31a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2v-5.26a2 2 0 0 0-.53-1.37M29 31H7v-5.27a15.17 15.17 0 0 1 22 0ZM18 17a7 7 0 0 0 4.45-1.6h-.22a3.68 3.68 0 0 1-2.23-.8 5 5 0 1 1 1.24-8.42l1-1.76A7 7 0 1 0 18 17"/>',
  outlineBadged:
    '<path d="M30.47 24.37a17.16 17.16 0 0 0-24.93 0A2 2 0 0 0 5 25.74V31a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2v-5.26a2 2 0 0 0-.53-1.37M29 31H7v-5.27a15.17 15.17 0 0 1 22 0ZM18 17a7 7 0 0 0 6.85-5.56 7.4 7.4 0 0 1-2.24-6.69A7 7 0 1 0 18 17m0-12a5 5 0 1 1-5 5 5 5 0 0 1 5-5"/>',
  solid:
    '<path d="M30.61 24.52a17.16 17.16 0 0 0-25.22 0 1.5 1.5 0 0 0-.39 1v6A1.5 1.5 0 0 0 6.5 33h23a1.5 1.5 0 0 0 1.5-1.5v-6a1.5 1.5 0 0 0-.39-.98"/><circle cx="18" cy="10" r="7"/>',
  solidAlerted:
    '<path d="M30.61 24.52a17.16 17.16 0 0 0-25.22 0 1.5 1.5 0 0 0-.39 1v6A1.5 1.5 0 0 0 6.5 33h23a1.5 1.5 0 0 0 1.5-1.5v-6a1.5 1.5 0 0 0-.39-.98M18 17a7 7 0 0 0 4.45-1.6h-.22A3.68 3.68 0 0 1 19 9.89l3.16-5.47A7 7 0 1 0 18 17"/>',
  solidBadged:
    '<path d="M30.61 24.52a17.16 17.16 0 0 0-25.22 0 1.5 1.5 0 0 0-.39 1v6A1.5 1.5 0 0 0 6.5 33h23a1.5 1.5 0 0 0 1.5-1.5v-6a1.5 1.5 0 0 0-.39-.98M18 17a7 7 0 0 0 6.85-5.56 7.4 7.4 0 0 1-2.24-6.69A7 7 0 1 0 18 17"/>',
};

export const userIconName = 'user';
export const userIcon: IconShapeTuple = [userIconName, renderIcon(icon)];
