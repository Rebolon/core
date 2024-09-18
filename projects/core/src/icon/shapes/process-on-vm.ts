/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M12 14.5001V24.5001C12 25.0501 12.45 25.5001 13 25.5001H23C23.55 25.5001 24 25.0501 24 24.5001V14.5001C24 13.9501 23.55 13.5001 23 13.5001H13C12.45 13.5001 12 13.9501 12 14.5001ZM14 15.5001H22V23.5001H14V15.5001ZM5.26 22.2801C5.81 22.2001 6.19 21.7001 6.11 21.1501C6.03 20.6101 6 20.0501 6 19.4901C6 13.4101 10.55 8.39006 16.47 7.61006L16.29 7.79006C15.9 8.18006 15.9 8.81006 16.29 9.20006C16.49 9.40006 16.74 9.49006 17 9.49006C17.26 9.49006 17.51 9.39006 17.71 9.20006L20.42 6.49006L17.71 3.79006C17.32 3.40006 16.69 3.40006 16.3 3.79006C15.91 4.18006 15.91 4.81006 16.3 5.20006L16.66 5.56006C9.56 6.25006 4 12.2301 4 19.5001C4 20.1501 4.04 20.8001 4.13 21.4301C4.2 21.9301 4.63 22.2901 5.12 22.2901C5.16 22.2901 5.21 22.2901 5.26 22.2901V22.2801ZM23.67 30.0701C21.94 31.0001 19.98 31.4901 18 31.4901C14.3 31.4901 10.83 29.7601 8.57 26.9001L8.83 26.9401C9.38 27.0401 9.89 26.6601 9.98 26.1201C10.07 25.5801 9.7 25.0601 9.16 24.9701L5.38 24.3401L4.75 28.1201C4.66 28.6601 5.03 29.1801 5.57 29.2701C5.63 29.2701 5.68 29.2801 5.74 29.2801C6.22 29.2801 6.64 28.9301 6.73 28.4501L6.82 27.9201C9.45 31.4001 13.59 33.5001 18 33.5001C20.31 33.5001 22.6 32.9301 24.62 31.8401C25.11 31.5801 25.29 30.9701 25.03 30.4901C24.77 30.0001 24.16 29.8201 23.68 30.0801L23.67 30.0701ZM30.09 26.8301L29.9 26.8601C31.26 24.6601 32 22.1201 32 19.4901C32 13.9001 28.68 8.85006 23.55 6.63006C23.04 6.41006 22.46 6.64006 22.24 7.15006C22.02 7.66006 22.25 8.25006 22.76 8.46006C27.16 10.3601 30.01 14.6901 30.01 19.4801C30.01 21.8001 29.34 24.0401 28.1 25.9601L27.99 25.3201C27.9 24.7801 27.39 24.4001 26.84 24.5001C26.3 24.5901 25.93 25.1001 26.02 25.6501L26.64 29.4301L30.42 28.8101C30.96 28.7201 31.33 28.2101 31.24 27.6601C31.15 27.1201 30.64 26.7401 30.09 26.8401V26.8301Z" />\n',
};

export const processOnVmIconName = 'process-on-vm';
export const processOnVmIcon: IconShapeTuple = [processOnVmIconName, renderIcon(icon)];
