/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M25.19 20.4a6.8 6.8 0 0 0 .43-2.4 6.86 6.86 0 0 0-6.86-6.86 6.8 6.8 0 0 0-2.37.43L18 13.23a5 5 0 0 1 .74-.06A4.87 4.87 0 0 1 23.62 18a5 5 0 0 1-.06.74Z"/><path d="M34.29 17.53c-3.37-6.23-9.28-10-15.82-10a16.8 16.8 0 0 0-5.24.85L14.84 10a14.8 14.8 0 0 1 3.63-.47c5.63 0 10.75 3.14 13.8 8.43a17.8 17.8 0 0 1-4.37 5.1l1.42 1.42a19.9 19.9 0 0 0 5-6l.26-.48ZM4.87 5.78l4.46 4.46a19.5 19.5 0 0 0-6.69 7.29l-.26.47.26.48c3.37 6.23 9.28 10 15.82 10a16.9 16.9 0 0 0 7.37-1.69l5 5 1.75-1.5-26-26Zm9.75 9.75 6.65 6.65a4.8 4.8 0 0 1-2.5.72A4.87 4.87 0 0 1 13.9 18a4.8 4.8 0 0 1 .72-2.47m-1.45-1.45a6.85 6.85 0 0 0 9.55 9.55l1.6 1.6a14.9 14.9 0 0 1-5.86 1.2c-5.63 0-10.75-3.14-13.8-8.43a17.3 17.3 0 0 1 6.12-6.3Z"/>',
  solid:
    '<path d="M18.37 11.17a6.8 6.8 0 0 0-2.37.43l8.8 8.8a6.8 6.8 0 0 0 .43-2.4 6.86 6.86 0 0 0-6.86-6.83"/><path d="M34.29 17.53c-3.37-6.23-9.28-10-15.82-10a16.8 16.8 0 0 0-5.24.85L14.84 10a14.8 14.8 0 0 1 3.63-.47c5.63 0 10.75 3.14 13.8 8.43a17.8 17.8 0 0 1-4.37 5.1l1.42 1.42a19.9 19.9 0 0 0 5-6l.26-.48ZM4.87 5.78l4.46 4.46a19.5 19.5 0 0 0-6.69 7.29l-.26.47.26.48c3.37 6.23 9.28 10 15.82 10a16.9 16.9 0 0 0 7.37-1.69l5 5 1.75-1.5-26-26Zm8.3 8.3a6.85 6.85 0 0 0 9.55 9.55l1.6 1.6a14.9 14.9 0 0 1-5.86 1.2c-5.63 0-10.75-3.14-13.8-8.43a17.3 17.3 0 0 1 6.12-6.3Z"/>',
};

export const eyeHideIconName = 'eye-hide';
export const eyeHideIcon: IconShapeTuple = [eyeHideIconName, renderIcon(icon)];
