/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '  <path d="M18 19.8C18.55 19.8 19 19.35 19 18.8V13C19 12.45 18.55 12 18 12C17.45 12 17 12.45 17 13V18.8C17 19.35 17.45 19.8 18 19.8ZM18.85 21.95C18.73 21.84 18.6 21.75 18.46 21.69C18.17 21.57 17.83 21.57 17.54 21.69C17.4 21.75 17.27 21.84 17.15 21.95C16.93 22.18 16.8 22.48 16.8 22.8C16.8 23.12 16.93 23.42 17.15 23.65C17.27 23.76 17.4 23.85 17.54 23.91C17.69 23.97 17.84 24 18 24C18.16 24 18.31 23.97 18.46 23.91C18.6 23.85 18.73 23.76 18.85 23.65C19.07 23.42 19.2 23.12 19.2 22.8C19.2 22.64 19.17 22.49 19.11 22.34C19.05 22.2 18.96 22.06 18.85 21.95ZM18 6C11.38 6 6 11.38 6 18C6 24.62 11.38 30 18 30C24.62 30 30 24.62 30 18C30 11.38 24.62 6 18 6ZM18 28C12.49 28 8 23.51 8 18C8 12.49 12.49 8 18 8C23.51 8 28 12.49 28 18C28 23.51 23.51 28 18 28Z" fill="black"/>\n',
  solid:
    '  <path d="M18 6C11.38 6 6 11.38 6 18C6 24.62 11.38 30 18 30C24.62 30 30 24.62 30 18C30 11.38 24.62 6 18 6ZM16.8 12.65C16.8 11.99 17.34 11.45 18 11.45C18.66 11.45 19.2 11.99 19.2 12.65V18.45C19.2 19.11 18.66 19.65 18 19.65C17.34 19.65 16.8 19.11 16.8 18.45V12.65ZM18.98 24.15C18.84 24.28 18.69 24.38 18.53 24.45C18.35 24.52 18.18 24.56 18 24.56C17.82 24.56 17.64 24.53 17.46 24.45C17.31 24.38 17.16 24.29 17 24.14C16.74 23.87 16.59 23.52 16.59 23.15C16.59 22.78 16.73 22.44 17 22.15C17.14 22.02 17.29 21.92 17.45 21.85C17.62 21.78 17.8 21.74 17.99 21.74C18.18 21.74 18.36 21.78 18.53 21.85C18.68 21.92 18.83 22.02 18.98 22.15C19.1 22.27 19.21 22.43 19.28 22.61C19.35 22.79 19.39 22.96 19.39 23.14C19.39 23.5 19.25 23.85 18.97 24.14L18.98 24.15Z" fill="black"/>\n',
};

export const exclamationCircleIconName = 'exclamation-circle';
export const exclamationCircleIcon: IconShapeTuple = [exclamationCircleIconName, renderIcon(icon)];
