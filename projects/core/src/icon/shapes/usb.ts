/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M14.29 11.4a1.49 1.49 0 0 1 1.28-.72h1a2.89 2.89 0 0 0 2.75 2.09 3 3 0 0 0 0-5.91 2.9 2.9 0 0 0-2.67 1.82h-1.08a3.49 3.49 0 0 0-3 1.66l-3 4.83h2.36Zm5-2.94A1.36 1.36 0 1 1 18 9.81a1.32 1.32 0 0 1 1.33-1.35Z"/><path d="m34.3 17.37-6.11-3.66a.7.7 0 0 0-.7 0 .71.71 0 0 0-.36.61V17H6.92a2.33 2.33 0 0 1 .32 1.17 2.47 2.47 0 1 1-2.47-2.46 2.4 2.4 0 0 1 1.15.3l.93-1.76A4.44 4.44 0 1 0 9.15 19h3.58l4.17 6.65a3.49 3.49 0 0 0 3 1.66h1.66v1.28a.79.79 0 0 0 .8.79h4.49a.79.79 0 0 0 .8-.79v-4.4a.79.79 0 0 0-.8-.8h-4.51a.8.8 0 0 0-.8.8v1.12h-1.66a1.51 1.51 0 0 1-1.28-.72L15.09 19h12v2.66a.69.69 0 0 0 .36.61.67.67 0 0 0 .34.09.65.65 0 0 0 .36-.1l6.11-3.66a.69.69 0 0 0 .34-.6.71.71 0 0 0-.3-.63M23.14 25H26v2.8h-2.86Zm5.39-4.56v-4.89l4 2.42Z"/>',
  solid:
    '<path d="m34.72 17.37-5.51-3.31a.71.71 0 0 0-1.07.6V17H11.77l3.52-5.6a1.49 1.49 0 0 1 1.28-.72h1.64a2.41 2.41 0 0 0 2.25 1.61 2.48 2.48 0 0 0 0-4.95 2.38 2.38 0 0 0-2.13 1.34h-1.76a3.49 3.49 0 0 0-3 1.66L9.41 17H8a3.46 3.46 0 1 0 .08 2h5.64l4.15 6.62a3.49 3.49 0 0 0 3 1.66h2.59v.92h4.4v-4.4h-4.4v1.48h-2.58a1.51 1.51 0 0 1-1.28-.72L16.11 19h12v2.28a.7.7 0 0 0 .36.61.7.7 0 0 0 .34.09.65.65 0 0 0 .36-.1l5.52-3.31a.7.7 0 0 0 0-1.2Z"/>',
};

export const usbIconName = 'usb';
export const usbIcon: IconShapeTuple = [usbIconName, renderIcon(icon)];
