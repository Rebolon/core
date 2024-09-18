/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M18 34C9.16344 34 2 26.8366 2 18C2 9.16344 9.16344 2 18 2C26.8366 2 34 9.16344 34 18C34 22.2435 32.3143 26.3131 29.3137 29.3137C26.3131 32.3143 22.2435 34 18 34ZM18 4C10.268 4 4 10.268 4 18C4 25.732 10.268 32 18 32C25.732 32 32 25.732 32 18C32 10.268 25.732 4 18 4ZM24.47 13.14L19.61 18L24.33 22.69C24.6698 23.0868 24.6469 23.6782 24.2776 24.0476C23.9082 24.4169 23.3168 24.4398 22.92 24.1L18.18 19.36L13.41 24.13C13.1656 24.4154 12.7819 24.5397 12.4166 24.4518C12.0513 24.3639 11.7661 24.0787 11.6782 23.7134C11.5903 23.3481 11.7146 22.9644 12 22.72L16.78 18L11.9 13.06C11.5602 12.6632 11.5831 12.0718 11.9524 11.7024C12.3218 11.3331 12.9132 11.3102 13.31 11.65L18.2 16.54L23.06 11.73C23.4568 11.3902 24.0482 11.4131 24.4176 11.7824C24.7869 12.1518 24.8098 12.7432 24.47 13.14Z" />\n',

  solid:
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M2 18C2 9.16344 9.16344 2 18 2C22.2435 2 26.3131 3.68571 29.3137 6.68629C32.3143 9.68687 34 13.7565 34 18C34 26.8366 26.8366 34 18 34C9.16344 34 2 26.8366 2 18ZM26 26.1C26.5523 25.5477 26.5523 24.6523 26 24.1L20 18.08L26.17 11.93C26.5273 11.5727 26.6668 11.052 26.536 10.564C26.4053 10.0759 26.0241 9.69474 25.536 9.56397C25.048 9.43321 24.5273 9.57273 24.17 9.93L18 16.1L11.83 9.86C11.4727 9.50273 10.952 9.36321 10.464 9.49397C9.97594 9.62474 9.59474 10.0059 9.46397 10.494C9.33321 10.982 9.47273 11.5027 9.83 11.86L16 18.08L10 24.12C9.64273 24.4773 9.50321 24.998 9.63397 25.486C9.76474 25.9741 10.1459 26.3553 10.634 26.486C11.122 26.6168 11.6427 26.4773 12 26.12L18 20.1L24 26.1C24.5523 26.6523 25.4477 26.6523 26 26.1Z" />\n',
};

export const timesCircleIconName = 'times-circle';
export const timesCircleIcon: IconShapeTuple = [timesCircleIconName, renderIcon(icon)];
