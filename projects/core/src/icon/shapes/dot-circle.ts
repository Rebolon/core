/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18 11a7 7 0 1 1 0 14 7 7 0 0 1 0-14"/><path d="M18 34a16 16 0 1 1 0-32 16 16 0 0 1 0 32m0-30a14 14 0 1 0 0 28 14 14 0 0 0 0-28"/>',
};

export const dotCircleIconName = 'dot-circle';
export const dotCircleIcon: IconShapeTuple = [dotCircleIconName, renderIcon(icon)];
