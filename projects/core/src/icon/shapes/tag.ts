/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<circle cx="10.52" cy="10.52" r="1.43"/><path d="M31.93 19.2 17.33 4.6a2 2 0 0 0-1.41-.6H6a2 2 0 0 0-2 2v9.92a2 2 0 0 0 .59 1.41l14.6 14.6a2 2 0 0 0 2.83 0l9.9-9.9a2 2 0 0 0 .01-2.83M20.62 30.52 6 15.91V6h9.92l14.6 14.62Z"/>',

  outlineAlerted:
    '<circle cx="10.52" cy="10.52" r="1.43"/><path d="m31.93 19.2-3.8-3.8h-2.82l5.22 5.22-9.9 9.9L6 15.91V6h9.92l3.41 3.41 1-1.78-3-3A2 2 0 0 0 15.92 4H6a2 2 0 0 0-2 2v9.92a2 2 0 0 0 .59 1.41l14.6 14.6a2 2 0 0 0 2.83 0l9.9-9.9a2 2 0 0 0 .01-2.83"/>',

  outlineBadged:
    '<circle cx="10.52" cy="10.52" r="1.43"/><path d="M31.93 19.2 17.33 4.6a2 2 0 0 0-1.41-.6H6a2 2 0 0 0-2 2v9.92a2 2 0 0 0 .59 1.41l14.6 14.6a2 2 0 0 0 2.83 0l9.9-9.9a2 2 0 0 0 .01-2.83M20.62 30.52 6 15.91V6h9.92l14.6 14.62Z"/>',

  solid:
    '<path d="M31.93 19.2 17.33 4.6a2 2 0 0 0-1.41-.6H6a2 2 0 0 0-2 2v9.92a2 2 0 0 0 .59 1.41l14.6 14.6a2 2 0 0 0 2.83 0l9.9-9.9a2 2 0 0 0 .01-2.83M9.65 11.31a1.66 1.66 0 1 1 1.66-1.66 1.66 1.66 0 0 1-1.66 1.66"/>',

  solidAlerted:
    '<path d="M28.46 15.73h-6.23A3.68 3.68 0 0 1 19 10.22l1.43-2.47-3.1-3.15a2 2 0 0 0-1.41-.6H6a2 2 0 0 0-2 2v9.92a2 2 0 0 0 .59 1.41l14.6 14.6a2 2 0 0 0 2.83 0l9.9-9.9a2 2 0 0 0 0-2.83ZM9.65 11.31a1.66 1.66 0 1 1 1.66-1.66 1.66 1.66 0 0 1-1.66 1.66"/>',

  solidBadged:
    '<path d="M31.93 19.2 17.33 4.6a2 2 0 0 0-1.41-.6H6a2 2 0 0 0-2 2v9.92a2 2 0 0 0 .59 1.41l14.6 14.6a2 2 0 0 0 2.83 0l9.9-9.9a2 2 0 0 0 .01-2.83M9.65 11.31a1.66 1.66 0 1 1 1.66-1.66 1.66 1.66 0 0 1-1.66 1.66"/>',
};

export const tagIconName = 'tag';
export const tagIcon: IconShapeTuple = [tagIconName, renderIcon(icon)];
