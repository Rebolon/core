/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '  <path d="M18.11 32.0003C10.33 32.0003 4 25.7203 4 17.9903C4 10.2603 10.03 4.2003 17.73 4.0003C18.15 3.9903 18.52 4.2303 18.68 4.6103C18.84 4.9903 18.75 5.4303 18.46 5.7203C16.69 7.4503 15.71 9.7603 15.71 12.2103C15.71 17.2403 19.83 21.3303 24.91 21.3303C26.9 21.3303 28.8 20.7003 30.41 19.5103C30.74 19.2703 31.19 19.2503 31.53 19.4603C31.88 19.6803 32.06 20.0803 31.99 20.4903C30.78 27.1603 24.94 32.0003 18.11 32.0003ZM15.43 6.2903C9.99 7.4803 6 12.2403 6 17.9903C6 24.6103 11.43 30.0003 18.11 30.0003C23.16 30.0003 27.58 26.9203 29.37 22.4003C27.97 23.0103 26.46 23.3203 24.91 23.3203C18.74 23.3203 13.71 18.3303 13.71 12.2003C13.71 10.0703 14.31 8.0303 15.43 6.2803V6.2903Z" fill="black"/>\n',
  solid:
    '  <path d="M18.11 32.0003C10.33 32.0003 4 25.7203 4 17.9903C4 10.2603 10.03 4.2003 17.73 4.0003C18.15 3.9903 18.52 4.2303 18.68 4.6103C18.84 4.9903 18.75 5.4303 18.46 5.7203C16.69 7.4503 15.71 9.7603 15.71 12.2103C15.71 17.2403 19.83 21.3303 24.91 21.3303C26.9 21.3303 28.8 20.7003 30.41 19.5103C30.74 19.2703 31.19 19.2503 31.53 19.4603C31.88 19.6803 32.06 20.0803 31.99 20.4903C30.78 27.1603 24.94 32.0003 18.11 32.0003Z" fill="black"/>\n',
};

export const moonIconName = 'moon';
export const moonIcon: IconShapeTuple = [moonIconName, renderIcon(icon)];
