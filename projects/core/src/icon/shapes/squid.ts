/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M6.69081 14.03C8.33106 9.36 12.7818 6 18.0026 6C23.2234 6 27.6741 9.36 29.3143 14.03C29.9444 14.09 30.5345 14.34 31.0046 14.77C31.1646 14.63 31.3347 14.51 31.5247 14.4C30.0145 8.74 25.0337 4.48 19.0027 4.05V3C19.0027 2.45 18.5527 2 18.0026 2C17.4525 2 17.0024 2.45 17.0024 3V4.05C10.9715 4.48 6.0007 8.74 4.48046 14.4C4.66049 14.5 4.84052 14.62 5.00054 14.77C5.47062 14.35 6.06071 14.1 6.69081 14.03ZM7.00086 22C7.2609 22 7.51094 21.9 7.71097 21.71C8.10103 21.32 8.10103 20.69 7.71097 20.3L6.42077 19.01L7.71097 17.72C8.10103 17.33 8.10103 16.7 7.71097 16.31C7.32091 15.92 6.69081 15.92 6.30075 16.31L5.01055 17.6L3.72034 16.31C3.33028 15.92 2.70018 15.92 2.31012 16.31C1.92006 16.7 1.92006 17.33 2.31012 17.72L3.60033 19.01L2.31012 20.3C1.92006 20.69 1.92006 21.32 2.31012 21.71C2.51016 21.91 2.76019 22 3.02023 22C3.28028 22 3.53031 21.9 3.73035 21.71L5.02055 20.42L6.31075 21.71C6.51078 21.91 6.76082 22 7.02086 22H7.00086ZM28.4142 23.94C26.3439 27.55 22.4533 30 18.0026 30C13.5519 30 9.66127 27.56 7.59095 23.94C7.40092 23.98 7.20089 24 7.00086 24C6.27074 24 5.57063 23.74 5.03055 23.26C6.99086 28.08 11.5816 31.57 17.0024 31.95V33C17.0024 33.55 17.4525 34 18.0026 34C18.5527 34 19.0027 33.55 19.0027 33V31.95C24.4336 31.56 29.0143 28.08 30.9746 23.26C30.4245 23.74 29.7344 24 29.0043 24C28.8043 24 28.6042 23.98 28.4142 23.94ZM32.4148 19L33.705 17.71C34.0951 17.32 34.0951 16.69 33.705 16.3C33.315 15.91 32.6849 15.91 32.2948 16.3L31.0046 17.59L29.7144 16.3C29.3243 15.91 28.6942 15.91 28.3042 16.3C27.9141 16.69 27.9141 17.32 28.3042 17.71L29.5944 19L28.3042 20.29C27.9141 20.68 27.9141 21.31 28.3042 21.7C28.5042 21.9 28.7543 21.99 29.0143 21.99C29.2743 21.99 29.5244 21.89 29.7244 21.7L31.0146 20.41L32.3048 21.7C32.5048 21.9 32.7549 21.99 33.0149 21.99C33.275 21.99 33.525 21.89 33.725 21.7C34.1151 21.31 34.1151 20.68 33.725 20.29L32.4348 19H32.4148Z" />\n',
};

export const squidIconName = 'squid';
export const squidIcon: IconShapeTuple = [squidIconName, renderIcon(icon)];
