/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M32 4H4C2.89543 4 2 4.89543 2 6V30C2 31.1046 2.89543 32 4 32H32C33.1046 32 34 31.1046 34 30V6C34 4.89543 33.1046 4 32 4ZM8.92 14C10.5769 14 11.92 12.6569 11.92 11C11.92 9.34315 10.5769 8 8.92 8C7.26315 8 5.92 9.34315 5.92 11C5.92 12.6569 7.26315 14 8.92 14ZM22.78 15.37L17.38 20.77L13.38 16.77C12.99 16.3823 12.36 16.3823 11.97 16.77L5.92 22.9V25.73L12.71 18.94L16 22.18L12.25 25.93H15L23.45 17.48L30 24V21.18L24.19 15.37C23.8 14.9823 23.17 14.9823 22.78 15.37ZM10.4053 10.3807C10.1545 9.7832 9.56803 9.39595 8.92 9.4V9.41C8.04414 9.41546 7.33546 10.1241 7.33 11C7.33001 11.648 7.72093 12.2321 8.32004 12.4791C8.91915 12.7262 9.60811 12.5875 10.0649 12.1278C10.5217 11.6681 10.6561 10.9783 10.4053 10.3807ZM4 6V30H32V6H4Z" />\n',
  outlineBadged:
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M32 30V13.22C32.7063 13.0266 33.3802 12.73 34 12.34V30C34 31.1046 33.1046 32 32 32H4C2.89543 32 2 31.1046 2 30V6C2 4.89543 2.89543 4 4 4H22.78C22.5968 4.65097 22.5026 5.32375 22.5 6H4V30H32ZM13.38 16.77L17.38 20.77L22.78 15.37C23.17 14.9823 23.8 14.9823 24.19 15.37L30 21.18V24L23.45 17.48L15 25.93H12.25L16 22.18L12.71 18.94L5.92 25.73V22.9L11.97 16.77C12.36 16.3823 12.99 16.3823 13.38 16.77ZM11.93 11C11.93 9.34315 10.5869 8 8.93 8C7.27315 8 5.93 9.34315 5.93 11C5.93 12.6569 7.27315 14 8.93 14C10.5869 14 11.93 12.6569 11.93 11ZM8.93 9.4C8.04634 9.4 7.33 10.1163 7.33 11C7.33 11.8837 8.04634 12.6 8.93 12.6C9.81366 12.6 10.53 11.8837 10.53 11C10.53 10.1163 9.81366 9.4 8.93 9.4Z" /><path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" />\n',
  solid:
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M4 4H32C33.1046 4 34 4.89543 34 6V30C34 31.1046 33.1046 32 32 32H4C2.89543 32 2 31.1046 2 30V6C2 4.89543 2.89543 4 4 4ZM11.92 11C11.92 9.34315 10.5769 8 8.92 8C7.26315 8 5.92 9.34315 5.92 11C5.92 12.6569 7.26315 14 8.92 14C10.5769 14 11.92 12.6569 11.92 11ZM6 27V22.9L12 16.82C12.39 16.4323 13.02 16.4323 13.41 16.82L16 19.35L8.32 27H6ZM11.15 27H30V21.18L24.19 15.37C23.8 14.9823 23.17 14.9823 22.78 15.37L11.15 27Z" />\n',
  solidBadged:
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M24.0268 10.546C25.4451 12.4122 27.6561 13.5056 30 13.5C31.4164 13.5009 32.8038 13.0986 34 12.34V30C34 31.1046 33.1046 32 32 32H4C2.89543 32 2 31.1046 2 30V6C2 4.89543 2.89543 4 4 4H22.78C22.147 6.25684 22.6085 8.6799 24.0268 10.546ZM11.92 11C11.92 9.34315 10.5769 8 8.92 8C7.26315 8 5.92 9.34315 5.92 11C5.92 12.6569 7.26315 14 8.92 14C10.5769 14 11.92 12.6569 11.92 11ZM6 27V22.9L12 16.82C12.39 16.4323 13.02 16.4323 13.41 16.82L16 19.35L8.32 27H6ZM11.15 27H30V21.18L24.19 15.37C23.8 14.9823 23.17 14.9823 22.78 15.37L11.15 27Z" /><path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" />\n',
};

export const imageIconName = 'image';
export const imageIcon: IconShapeTuple = [imageIconName, renderIcon(icon)];
