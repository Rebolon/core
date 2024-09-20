/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="m17.6 24.32-2.46 2.44a4 4 0 0 1-5.62 0 3.92 3.92 0 0 1 0-5.55l4.69-4.65a4 4 0 0 1 5.62 0 3.86 3.86 0 0 1 1 1.71 2 2 0 0 0 .27-.27l1.29-1.28a5.9 5.9 0 0 0-1.15-1.62 6 6 0 0 0-8.44 0l-4.7 4.69a5.91 5.91 0 0 0 0 8.39 6 6 0 0 0 8.44 0l3.65-3.62h-.5a8 8 0 0 1-2.09-.24"/><path d="M28.61 7.82a6 6 0 0 0-8.44 0l-3.65 3.62h.49a8 8 0 0 1 2.1.28l2.46-2.44a4 4 0 0 1 5.62 0 3.92 3.92 0 0 1 0 5.55l-4.69 4.65a4 4 0 0 1-5.62 0 3.86 3.86 0 0 1-1-1.71 2 2 0 0 0-.28.23l-1.29 1.28a5.9 5.9 0 0 0 1.15 1.62 6 6 0 0 0 8.44 0l4.69-4.65a5.92 5.92 0 0 0 0-8.39Z"/>',
};

export const linkIconName = 'link';
export const linkIcon: IconShapeTuple = [linkIconName, renderIcon(icon)];
