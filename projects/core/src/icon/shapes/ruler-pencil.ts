/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M33.71 32.2901L32 30.58V31.99H4V27.99H6V25.99H4V21.99H6V19.99H4V15.99H6V13.99H4V5.41005L20 21.41V18.58L3.71 2.29005C3.42 2.00005 2.99 1.92005 2.62 2.08005C2.25 2.23005 2 2.60005 2 3.00005V33C2 33.55 2.45 34 3 34H33C33.4 34 33.77 33.76 33.92 33.38C34.08 33.01 33.99 32.5801 33.7 32.2901H33.71ZM25 30H27C28.65 30 30 28.65 30 27V8.00005C30 7.82005 29.95 7.64005 29.86 7.49005L26.86 2.49005C26.5 1.89005 25.51 1.89005 25.15 2.49005L22.15 7.49005C22.06 7.65005 22.01 7.82005 22.01 8.00005V27C22.01 28.65 23.36 30 25.01 30H25ZM24 8.28005L26 4.95005L28 8.28005V22H24V8.28005ZM24 24H28V27C28 27.55 27.55 28 27 28H25C24.45 28 24 27.55 24 27V24ZM10 16.79V25C10 25.55 10.45 26 11 26H19.21L17.21 24H12V18.7901L10 16.79Z" />\n',
  solid:
    '<path d="M33.71 32.2901L32 30.58L29.7 28.2801C29.89 27.8901 30 27.46 30 26.99V8.00005C30 7.82005 29.95 7.64005 29.86 7.49005L26.86 2.49005C26.5 1.89005 25.51 1.89005 25.15 2.49005L22.15 7.49005C22.06 7.65005 22.01 7.82005 22.01 8.00005V20.59L20.01 18.59L3.71 2.29005C3.42 2.00005 2.99 1.92005 2.62 2.08005C2.25 2.23005 2 2.60005 2 3.00005V14H4V16H2V20H4V22H2V26H4V28H2V33C2 33.55 2.45 34 3 34H33C33.4 34 33.77 33.76 33.92 33.38C34.08 33.01 33.99 32.5801 33.7 32.2901H33.71ZM10.89 26C10.4 26 10 25.6 10 25.1101V17.8L18 26.01H10.89V26ZM28 27C28 27.55 27.55 28 27 28H25C24.45 28 24 27.55 24 27V24H28V27ZM26 4.94005L28 8.27005V21.99H24V8.28005L26 4.95005V4.94005Z" />\n',
};

export const rulerPencilIconName = 'ruler-pencil';
export const rulerPencilIcon: IconShapeTuple = [rulerPencilIconName, renderIcon(icon)];
