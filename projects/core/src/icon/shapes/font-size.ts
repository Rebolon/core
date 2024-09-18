/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M20.7596 10.7H20.8195C21.2193 10.71 21.5991 10.52 21.8089 10.18C21.9289 10 21.9788 9.79001 21.9788 9.59001C21.9788 9.59001 21.9788 9.58001 21.9788 9.57001C21.9788 9.43001 21.9388 9.30001 21.8789 9.17001C21.8589 9.12001 21.8489 9.08001 21.8189 9.03001C21.6091 8.70001 21.2393 8.51001 20.8395 8.52001C20.8395 8.52001 20.8295 8.52001 20.8195 8.52001H5.22929C4.80955 8.47001 4.39981 8.66001 4.16995 9.02001C3.94009 9.38001 3.94009 9.83001 4.16995 10.18C4.39981 10.54 4.80955 10.74 5.22929 10.7H11.7552V27.52C11.8052 28.08 12.2949 28.51 12.8645 28.51C13.4342 28.51 13.9239 28.08 13.9738 27.52V10.7H18.7508H20.7596ZM31.8227 17.04C31.6028 16.7 31.2031 16.51 30.7833 16.55L30.7433 16.51H21.2093C20.7896 16.47 20.3898 16.66 20.17 17C19.9501 17.34 19.9501 17.77 20.17 18.11C20.3898 18.45 20.7896 18.64 21.2093 18.6H25.0669V27.54C25.1169 28.08 25.5866 28.49 26.1562 28.49C26.7259 28.49 27.1856 28.08 27.2455 27.54V18.63H30.7933C31.213 18.67 31.6128 18.48 31.8327 18.14C32.0525 17.8 32.0525 17.37 31.8327 17.03L31.8227 17.04Z" />\n',
};

export const fontSizeIconName = 'font-size';
export const fontSizeIcon: IconShapeTuple = [fontSizeIconName, renderIcon(icon)];
