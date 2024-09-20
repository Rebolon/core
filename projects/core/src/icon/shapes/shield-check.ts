/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M31.25 7.4a44 44 0 0 1-6.62-2.35 45 45 0 0 1-6.08-3.21L18 1.5l-.54.35a45 45 0 0 1-6.08 3.21A44 44 0 0 1 4.75 7.4L4 7.59v8.34c0 13.39 13.53 18.4 13.66 18.45l.34.12.34-.12c.14 0 13.66-5.05 13.66-18.45V7.59ZM30 15.93c0 11-10 15.61-12 16.43-2-.82-12-5.44-12-16.43V9.14a47.5 47.5 0 0 0 6.18-2.25 48 48 0 0 0 5.82-3 48 48 0 0 0 5.82 3A47.5 47.5 0 0 0 30 9.14Z"/><path d="M10.88 16.87a1 1 0 0 0-1.41 1.41l6 6L26.4 13.77a1 1 0 0 0-1.4-1.44l-9.47 9.19Z"/>',

  solid:
    '<path d="M31.25 7.4a44 44 0 0 1-6.62-2.35 45 45 0 0 1-6.08-3.21L18 1.5l-.54.35a45 45 0 0 1-6.08 3.21A44 44 0 0 1 4.75 7.4L4 7.59v8.34c0 13.39 13.53 18.4 13.66 18.45l.34.12.34-.12c.14 0 13.66-5.05 13.66-18.45V7.59Zm-4.57 6.65L15.51 24.9l-6.32-6.33a1.4 1.4 0 0 1 2-2L15.54 21l9.19-9a1.4 1.4 0 1 1 2 2Z"/>',
};

export const shieldCheckIconName = 'shield-check';
export const shieldCheckIcon: IconShapeTuple = [shieldCheckIconName, renderIcon(icon)];
