/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M30.31 13v-.32a10.26 10.26 0 0 0-10.45-10 10.47 10.47 0 0 0-9.6 6.1A9.65 9.65 0 0 0 10.89 28a3 3 0 0 1 0-2A7.65 7.65 0 0 1 11 10.74h.67l.23-.63a8.43 8.43 0 0 1 8-5.4 8.26 8.26 0 0 1 8.45 8 8 8 0 0 1 0 .8l-.08.72.65.3A6 6 0 0 1 26.38 26h-1.29a3 3 0 0 1 0 2h1.28a8 8 0 0 0 3.93-15Z"/><path d="M22.28 26.07a1 1 0 0 0-.71.29L19 28.94V16.68a1 1 0 1 0-2 0v12.26l-2.57-2.57A1 1 0 0 0 13 27.78l5 5 5-5a1 1 0 0 0-.71-1.71Z"/>',

  outlineAlerted:
    '<path d="M22.28 26.07a1 1 0 0 0-.71.29L19 28.94V16.68a1 1 0 1 0-2 0v12.26l-2.57-2.57A1 1 0 0 0 13 27.78l5 5 5-5a1 1 0 0 0-.71-1.71ZM19.87 4.69a8.8 8.8 0 0 1 2 .25l1-1.8a10.8 10.8 0 0 0-3.07-.45 10.47 10.47 0 0 0-9.6 6.1A9.65 9.65 0 0 0 10.89 28a3 3 0 0 1 0-2A7.65 7.65 0 0 1 11 10.74h.67l.23-.63a8.43 8.43 0 0 1 7.97-5.42M32.9 15.4h-2.69A6 6 0 0 1 26.38 26h-1.29a3 3 0 0 1 0 2h1.28a8 8 0 0 0 6.53-12.6"/>',

  outlineBadged:
    '<path d="M22.28 26.07a1 1 0 0 0-.71.29L19 28.94V16.68a1 1 0 1 0-2 0v12.26l-2.57-2.57A1 1 0 0 0 13 27.78l5 5 5-5a1 1 0 0 0-.71-1.71ZM19.87 4.69a8.8 8.8 0 0 1 2.68.42 7.5 7.5 0 0 1 .5-1.94 10.8 10.8 0 0 0-3.18-.48 10.47 10.47 0 0 0-9.6 6.1A9.65 9.65 0 0 0 10.89 28a3 3 0 0 1 0-2A7.65 7.65 0 0 1 11 10.74h.67l.23-.63a8.43 8.43 0 0 1 7.97-5.42m11.05 8.75a7.1 7.1 0 0 1-2.63-.14v.23l-.08.72.65.3A6 6 0 0 1 26.38 26h-1.29a3 3 0 0 1 0 2h1.28a8 8 0 0 0 4.54-14.61Z"/>',
};

export const downloadCloudIconName = 'download-cloud';
export const downloadCloudIcon: IconShapeTuple = [downloadCloudIconName, renderIcon(icon)];
