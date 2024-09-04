/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '  <path fill-rule="evenodd" clip-rule="evenodd" d="M29 12.0026C28.8687 16.5366 24.9189 20.1145 20.1686 20.0026H12.2381V22.0026H21.6667C22.2453 22.0026 22.7143 22.4503 22.7143 23.0026C22.7143 23.5548 22.2453 24.0026 21.6667 24.0026H12.2381V31.0026C12.2381 31.5548 11.7691 32.0026 11.1905 32.0026C10.6119 32.0026 10.1429 31.5548 10.1429 31.0026V24.0026H8.04762C7.46904 24.0026 7 23.5548 7 23.0026C7 22.4503 7.46904 22.0026 8.04762 22.0026H10.1429V20.0026H8.04762C7.46904 20.0026 7 19.5548 7 19.0026C7 18.4503 7.46904 18.0026 8.04762 18.0026H10.1429V5.00256C10.1429 4.45027 10.6119 4.00256 11.1905 4.00256H20.1686C24.9189 3.8906 28.8687 7.4685 29 12.0026ZM20.1686 6.00254H12.2381V18.0025H20.1686C23.762 18.115 26.774 15.4322 26.9048 12.0025C26.7683 8.57534 23.7598 5.89564 20.1686 6.00254Z" fill="black"/>\n',
  solid:
    '  <path fill-rule="evenodd" clip-rule="evenodd" d="M18 2C9.16344 2 2 9.16344 2 18C2 26.8366 9.16344 34 18 34C26.8366 34 34 26.8366 34 18C34 13.7565 32.3143 9.68687 29.3137 6.68629C26.3131 3.68571 22.2435 2 18 2ZM20.75 20.56H15V22H23.29C23.8423 22 24.29 22.4477 24.29 23C24.29 23.5523 23.8423 24 23.29 24H15V29C15 29.6904 14.4404 30.25 13.75 30.25C13.0596 30.25 12.5 29.6904 12.5 29V24H11.25C10.6977 24 10.25 23.5523 10.25 23C10.25 22.4477 10.6977 22 11.25 22H12.46V20.56H11.25C10.5596 20.56 10 20.0004 10 19.31C10 18.6196 10.5596 18.06 11.25 18.06H12.46V8C12.46 7.30964 13.0196 6.75 13.71 6.75H20.71C24.6465 6.62649 27.9396 9.71376 28.07 13.65C27.9395 17.5717 24.6727 20.6555 20.75 20.56ZM15 9.25H20.75C21.9854 9.18193 23.1969 9.60898 24.1165 10.4366C25.0361 11.2643 25.588 12.4243 25.65 13.66C25.51 16.2109 23.3422 18.1735 20.79 18.06H15V9.25Z" fill="black"/>\n',
};

export const rubleIconName = 'ruble';
export const rubleIcon: IconShapeTuple = [rubleIconName, renderIcon(icon)];
