/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M14 14C17.31 14 20 11.31 20 8C20 4.69 17.31 2 14 2C10.69 2 8 4.69 8 8C8 11.31 10.69 14 14 14ZM14 4C16.21 4 18 5.79 18 8C18 10.21 16.21 12 14 12C11.79 12 10 10.21 10 8C10 5.79 11.79 4 14 4ZM33 22H28V24H32V32H18V24H24V25C24 25.55 24.45 26 25 26C25.55 26 26 25.55 26 25V20C26 19.45 25.55 19 25 19C24.45 19 24 19.45 24 20V22H17C16.45 22 16 22.45 16 23V33C16 33.55 16.45 34 17 34H33C33.55 34 34 33.55 34 33V23C34 22.45 33.55 22 33 22ZM22 29H28V27.6H22V29ZM21.98 17.8C20.01 16.84 17.33 16 14 16C8.61 16 4.91 18.21 3.19 19.53C2.43 20.11 2 20.98 2 21.92V26.99C2 27.54 2.45 27.99 3 27.99C3.55 27.99 4 27.54 4 26.99V21.92C4 21.6 4.15 21.31 4.4 21.12C5.92 19.95 9.2 18 14 18C17.51 18 20.19 19.05 21.98 20.06V17.8Z" />\n',
  solid:
    '<path d="M33 22.0063H28V24.0069H32V32.0094H18V24.0069H24V25.0072C24 25.5574 24.45 26.0075 25 26.0075C25.55 26.0075 26 25.5574 26 25.0072V20.0056C26 19.4555 25.55 19.0053 25 19.0053C24.45 19.0053 24 19.4555 24 20.0056V22.0063H21.98V17.8049C20.01 16.8446 17.33 16.0044 14 16.0044C8.61 16.0044 4.91 18.2151 3.19 19.5355C2.43 20.1157 2 20.9859 2 21.9262V26.9978C2 27.548 2.45 27.9981 3 27.9981H16V32.9997C16 33.5499 16.45 34 17 34H33C33.55 34 34 33.5499 34 32.9997V22.9966C34 22.4464 33.55 21.9962 33 21.9962V22.0063ZM14 14.0038C17.31 14.0038 20 11.3129 20 8.00188C20 4.69084 17.31 2 14 2C10.69 2 8 4.69084 8 8.00188C8 11.3129 10.69 14.0038 14 14.0038ZM22 29.0084H28V27.608H22V29.0084Z" />\n',
};

export const employeeIconName = 'employee';
export const employeeIcon: IconShapeTuple = [employeeIconName, renderIcon(icon)];
