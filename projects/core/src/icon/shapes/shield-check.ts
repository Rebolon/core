/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M16.0043 20.59L12.7131 17.3C12.323 16.91 11.6927 16.91 11.3026 17.3C10.9125 17.69 10.9125 18.32 11.3026 18.71L16.0143 23.42L24.7274 14.71C25.1175 14.32 25.1175 13.69 24.7274 13.3C24.3373 12.91 23.707 12.91 23.3169 13.3L16.0243 20.59H16.0043ZM31.2597 7.81C28.9889 7.21 26.7781 6.51 24.6374 5.55C22.5266 4.64 20.4959 3.56 18.5552 2.34L18.005 2L17.4648 2.35C15.5241 3.57 13.4934 4.65 11.3826 5.56C9.24187 6.52 7.02108 7.21 4.75027 7.81L4 8V15.43C4 28.71 17.3248 33.75 17.6549 33.88L17.995 34L18.3351 33.88C18.4752 33.88 32 28.83 32 15.43V8L31.2497 7.81H31.2597ZM30.0093 15.43C30.0093 26.43 20.0057 31.04 18.005 31.86C16.0043 31.04 6.00071 26.42 6.00071 15.43V9.55C8.11147 8.94 10.1722 8.28 12.1829 7.39C14.1936 6.52 16.1343 5.52 18.005 4.39C19.8757 5.52 21.8164 6.52 23.8271 7.39C25.8378 8.28 27.8985 8.94 30.0093 9.55V15.43Z" fill="black"/>\n',

  solid:
    '<path d="M31.2597 7.81C28.9889 7.21 26.7781 6.51 24.6374 5.55C22.5266 4.64 20.4959 3.56 18.5552 2.34L18.005 2L17.4648 2.35C15.5241 3.57 13.4934 4.65 11.3826 5.56C9.24187 6.52 7.02108 7.21 4.75027 7.81L4 8V15.43C4 28.71 17.3248 33.75 17.6549 33.88L17.995 34L18.3351 33.88C18.4752 33.88 32 28.83 32 15.43V8L31.2497 7.81H31.2597ZM24.8574 14.85L16.1443 23.56L16.0043 23.7L15.8642 23.56L11.1526 18.85C10.9225 18.62 10.8024 18.32 10.8024 18C10.8024 17.68 10.9225 17.38 11.1526 17.15C11.3826 16.92 11.6827 16.8 12.0029 16.8C12.323 16.8 12.6231 16.92 12.8532 17.15L16.0043 20.3L23.1568 13.15C23.3869 12.92 23.687 12.8 24.0071 12.8C24.3273 12.8 24.6274 12.92 24.8574 13.15C25.0875 13.38 25.2076 13.68 25.2076 14C25.2076 14.32 25.0875 14.62 24.8574 14.85Z" fill="black"/>\n',
};

export const shieldCheckIconName = 'shield-check';
export const shieldCheckIcon: IconShapeTuple = [shieldCheckIconName, renderIcon(icon)];
