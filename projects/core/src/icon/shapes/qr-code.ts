/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M24 4.5H30.4C31.2837 4.5 32 5.21634 32 6.1V12.5H24V4.5ZM26 10.5H30V6.5H26V10.5ZM20 10.5V8.5H22V4.5H14V8.5H16V12.5H18V14.5H14V12.5H12V4.5H5.6C4.71634 4.5 4 5.21634 4 6.1V12.5H12V14.5H14V16.5H12V18.5H10V14.5H8V18.5H6V14.5H4V18.5H6V20.5H4V22.5H8V20.5H10V22.5H12V20.5H14V28.5H16V26.5H18V24.5H16V20.5H18V22.5H20V28.5H18V30.5H14V32.5H22V30.5H20V28.5H22V22.5H28V20.5H30V22.5H32V20.5H30V18.5H32V16.5H30V14.5H28V16.5H26V14.5H22V10.5H20ZM22 18.5H24V16.5H26V18.5H28V20.5H22V18.5ZM20 16.5V18.5H22V16.5H20ZM18 16.5H14V20.5H16V18.5H18V16.5ZM18 16.5H20V14.5H18V16.5ZM22 20.5V22.5H20V20.5H22ZM20 10.5V12.5H18V10.5H20ZM16 8.5H20V6.5H16V8.5ZM6 10.5H10V6.5H6V10.5ZM4 30.9C4 31.7837 4.71634 32.5 5.6 32.5H12V24.5H4V30.9ZM10 30.5V26.5H6V30.5H10ZM24 32.5H30.4C31.2837 32.5 32 31.7837 32 30.9V24.5H24V32.5ZM30 26.5H26V30.5H30V26.5Z" />\n',
};

export const qrCodeIconName = 'qr-code';
export const qrCodeIcon: IconShapeTuple = [qrCodeIconName, renderIcon(icon)];
