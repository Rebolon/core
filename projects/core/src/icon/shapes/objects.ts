/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M16.08 14.9a10.4 10.4 0 0 1 1.87-.71l-4-10.77a2 2 0 0 0-3.75 0L2 25.26A2 2 0 0 0 3.92 28h6.94a10 10 0 0 1-.52-2H3.92l8.14-21.88ZM32 9H22a2 2 0 0 0-2 2v2.85h.69a11 11 0 0 1 1.31.05V11h10v10h-1.35a10.4 10.4 0 0 1 .45 2h.9a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2"/><path d="M20.69 15.81a8.5 8.5 0 1 0 8.5 8.5 8.51 8.51 0 0 0-8.5-8.5m0 15a6.5 6.5 0 1 1 6.5-6.5 6.51 6.51 0 0 1-6.5 6.5"/>',
  solid:
    '<path d="M10.65 24.44a9.51 9.51 0 0 1 7.06-9.17L13 3a1 1 0 0 0-1.87 0L2.07 26.56A1 1 0 0 0 3 27.92h8.32a9.4 9.4 0 0 1-.67-3.48M32 10H20a1 1 0 0 0-1 1v4a9.43 9.43 0 0 1 10.63 9H32a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1"/><circle cx="20.15" cy="24.44" r="7.5"/>',
};

export const objectsIconName = 'objects';
export const objectsIcon: IconShapeTuple = [objectsIconName, renderIcon(icon)];
