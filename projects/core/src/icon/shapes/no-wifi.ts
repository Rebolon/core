/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M32.3001 11.7101C32.4901 11.9001 32.7501 12.0001 33.0001 12.0001C33.2501 12.0001 33.5101 11.9101 33.7001 11.7101C34.0901 11.3301 34.0901 10.7101 33.7001 10.3301C27.2501 4.03006 17.7601 2.43006 9.77006 5.53006L11.3001 7.06006C18.4101 4.63006 26.6301 6.17006 32.3001 11.7001V11.7101ZM29.0101 16.5701C29.2601 16.5701 29.5201 16.4701 29.7101 16.2801C30.1001 15.8901 30.1001 15.2601 29.7101 14.8701C25.6101 10.7601 19.8801 9.26006 14.5901 10.3701L16.3201 12.1001C16.8701 12.0401 17.4301 12.0001 17.9901 12.0001C21.8801 12.0001 25.5401 13.5201 28.2901 16.2801C28.4801 16.4801 28.7401 16.5701 28.9901 16.5701H29.0101ZM25.1901 20.9601C25.3901 20.9301 25.5801 20.8501 25.7301 20.6901C26.1201 20.2901 26.1201 19.6501 25.7301 19.2501C24.2501 17.7401 22.4401 16.7601 20.5401 16.3001L25.1901 20.9501V20.9601ZM3.71006 2.29006C3.32006 1.90006 2.68006 1.90006 2.29006 2.29006C1.90006 2.68006 1.90006 3.32006 2.29006 3.71006L6.01006 7.43006C4.69006 8.25006 3.44006 9.21006 2.29006 10.3401C1.90006 10.7201 1.90006 11.3401 2.29006 11.7201C2.68006 12.1001 3.31006 12.1001 3.70006 11.7201C4.85006 10.6001 6.11006 9.66006 7.44006 8.87006L10.4401 11.8701C8.94006 12.6301 7.53006 13.6201 6.28006 14.8701C5.89006 15.2601 5.89006 15.8901 6.28006 16.2801C6.67006 16.6701 7.30006 16.6701 7.69006 16.2801C8.93006 15.0301 10.3701 14.0601 11.9201 13.3501L15.0101 16.4401C13.2701 16.9401 11.6201 17.8701 10.2601 19.2601C9.87006 19.6601 9.87006 20.3001 10.2601 20.7001C10.6501 21.1001 11.2801 21.1001 11.6701 20.7001C13.0901 19.2501 14.8701 18.4101 16.7201 18.1401L32.2901 33.7101C32.4901 33.9101 32.7401 34.0001 33.0001 34.0001C33.2601 34.0001 33.5101 33.9001 33.7101 33.7101C34.1001 33.3201 34.1001 32.6901 33.7101 32.3001L3.71006 2.29006ZM18.0001 23.9901C15.8001 23.9901 14.0101 25.7801 14.0101 27.9901C14.0101 30.2001 15.8001 31.9901 18.0001 31.9901C20.2001 31.9901 21.9901 30.2001 21.9901 27.9901C21.9901 25.7801 20.2001 23.9901 18.0001 23.9901ZM18.0001 29.9901C16.9001 29.9901 16.0101 29.0901 16.0101 27.9901C16.0101 26.8901 16.9001 25.9901 18.0001 25.9901C19.1001 25.9901 19.9901 26.8901 19.9901 27.9901C19.9901 29.0901 19.1001 29.9901 18.0001 29.9901Z" />\n',
  solid:
    '<path d="M28.6801 17.5501C29.0701 17.5501 29.4301 17.4001 29.7101 17.1201C30.2801 16.5401 30.2801 15.6101 29.7101 15.0301C26.5901 11.8501 22.4301 10.1001 18.0101 10.1001C16.8801 10.1001 15.7701 10.2201 14.6801 10.4401L17.3201 13.0801C17.5501 13.0701 17.7801 13.0501 18.0101 13.0501C21.6501 13.0501 25.0801 14.5001 27.6601 17.1201C27.9301 17.4001 28.3001 17.5501 28.6901 17.5501H28.6801ZM31.5301 12.6201C31.8001 12.8901 32.1701 13.0401 32.5501 13.0401C32.9301 13.0401 33.3001 12.8901 33.5701 12.6201C33.8501 12.3501 34.0001 11.9801 34.0001 11.5901C34.0001 11.2001 33.8501 10.8301 33.5701 10.5601C27.1901 4.24006 17.8401 2.62006 9.93006 5.70006L12.2101 7.98006C18.8001 5.91006 26.3101 7.45006 31.5301 12.6301V12.6201ZM3.71006 2.29006C3.32006 1.90006 2.68006 1.90006 2.29006 2.29006C1.90006 2.68006 1.90006 3.32006 2.29006 3.71006L6.18006 7.60006C4.85006 8.44006 3.58006 9.41006 2.43006 10.5601C2.15006 10.8401 2.00006 11.2001 2.00006 11.5901C2.00006 11.9801 2.15006 12.3401 2.43006 12.6201C2.99006 13.1801 3.91006 13.1801 4.47006 12.6201C5.64006 11.4601 6.93006 10.5101 8.30006 9.72006L10.5201 11.9401C8.98006 12.7301 7.55006 13.7501 6.30006 15.0301C5.73006 15.6101 5.73006 16.5401 6.30006 17.1201C6.85006 17.6801 7.80006 17.6801 8.35006 17.1201C9.62006 15.8201 11.1101 14.8301 12.7201 14.1401L15.0201 16.4401C13.2001 16.9601 11.5201 17.9401 10.1501 19.3601C9.59006 19.9401 9.59006 20.8901 10.1501 21.4701C10.4201 21.7501 10.7901 21.9101 11.1801 21.9101C11.5701 21.9101 11.9401 21.7501 12.2101 21.4701C13.6601 19.9701 15.5501 19.1101 17.5901 19.0101L32.2901 33.7101C32.4901 33.9101 32.7401 34.0001 33.0001 34.0001C33.2601 34.0001 33.5101 33.9001 33.7101 33.7101C34.1001 33.3201 34.1001 32.6901 33.7101 32.3001L3.71006 2.29006ZM18.0001 24.1801C15.7901 24.1801 14.0001 25.9701 14.0001 28.1801C14.0001 30.3901 15.7901 32.1801 18.0001 32.1801C20.2101 32.1801 22.0001 30.3901 22.0001 28.1801C22.0001 25.9701 20.2101 24.1801 18.0001 24.1801ZM25.7601 21.5201C25.7601 21.5201 25.8201 21.4901 25.8501 21.4601C26.4101 20.8801 26.4101 19.9301 25.8501 19.3501C24.3701 17.8201 22.5401 16.7801 20.5501 16.3001L25.7601 21.5101V21.5201Z" />\n',
};

export const noWifiIconName = 'no-wifi';
export const noWifiIcon: IconShapeTuple = [noWifiIconName, renderIcon(icon)];
