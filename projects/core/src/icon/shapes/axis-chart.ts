/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M4 5H32C33.105 5 34 5.895 34 7V29C34 30.105 33.105 31 32 31H4C2.895 31 2 30.105 2 29V7C2 5.895 2.895 5 4 5ZM4 7V29H32V7H4Z"/><path d="M6.007 26.7311L27.73 26.7301C28.49 26.6701 28.91 25.8001 28.47 25.1701C28.3 24.9201 28.03 24.7601 27.73 24.7401L8.001 24.7361L8.01 11.0101C8.01 10.2301 7.17 9.75008 6.5 10.1401C6.19 10.3101 6 10.6501 6 11.0101L6.007 26.7311Z"/>',

  outlineAlerted:
    '<path d="M26.904 1.64621L21.2223 11.1159C20.9527 11.4984 20.9283 11.9949 21.159 12.4005C21.3897 12.806 21.8364 13.0519 22.3149 13.0367H33.6883C34.1667 13.0519 34.6135 12.806 34.8442 12.4005C35.0749 11.9949 35.0504 11.4984 34.7809 11.1159L29.0992 1.64621C28.8712 1.26913 28.4533 1.03735 28.0016 1.03735C27.5498 1.03735 27.132 1.26913 26.904 1.64621Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M22.5594 5H4C2.895 5 2 5.895 2 7V29C2 30.105 2.895 31 4 31H32C33.105 31 34 30.105 34 29V15.0263C33.8886 15.0354 33.7764 15.0389 33.6637 15.0367H32V29H4V7H21.3594L22.5594 5ZM27.73 26.73L6.007 26.731L6 11.01C6 10.65 6.19 10.31 6.5 10.14C7.17 9.75 8.01 10.23 8.01 11.01L8.001 24.736L27.73 24.74C28.03 24.76 28.3 24.92 28.47 25.17C28.91 25.8 28.49 26.67 27.73 26.73Z"/>',

  outlineBadged:
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z"/><path d="M23.0709 5C23.0242 5.3266 23 5.66048 23 6C23 6.33952 23.0242 6.6734 23.0709 7H4V29H32V12.7101C32.7224 12.4951 33.396 12.1666 34 11.7453V29C34 30.104 33.104 31 32 31H4C2.895 31 2 30.104 2 29V7C2 5.895 2.895 5 4 5H23.0709Z"/><path d="M6.007 26.731L27.73 26.73C28.49 26.67 28.91 25.8 28.47 25.17C28.3 24.92 28.03 24.76 27.73 24.74L8.001 24.736L8.01 11.01C8.01 10.23 7.17 9.75 6.5 10.14C6.19 10.31 6 10.65 6 11.01L6.007 26.731Z"/>',

  solid:
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M34 29V7C34 5.896 33.105 5 32 5H4C2.896 5 2 5.896 2 7V29C2 30.105 2.896 31 4 31H32C33.105 31 34 30.105 34 29ZM27.73 26.73L6.007 26.731L6 11.01C6 10.65 6.19 10.31 6.5 10.14C7.17 9.75 8.01 10.23 8.01 11.01L8.001 24.736L27.73 24.74C28.03 24.76 28.3 24.92 28.47 25.17C28.91 25.8 28.49 26.67 27.73 26.73Z"/>',

  solidAlerted:
    '<path d="M26.9046 1.64621L21.2229 11.1159C20.9533 11.4984 20.9289 11.9949 21.1596 12.4005C21.3903 12.806 21.8371 13.0519 22.3155 13.0367H33.6889C34.1673 13.0519 34.6141 12.806 34.8448 12.4005C35.0755 11.9949 35.0511 11.4984 34.7815 11.1159L29.0998 1.64621C28.8718 1.26913 28.454 1.03735 28.0022 1.03735C27.5504 1.03735 27.1326 1.26913 26.9046 1.64621Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M22.56 5L19.5367 10.0387C18.8709 11.0422 18.8209 12.3342 19.4211 13.3893C20.0238 14.4489 21.1583 15.0603 22.3401 15.0367H33.6643C33.7768 15.0389 33.8888 15.0354 34 15.0263V29C34 30.105 33.105 31 32 31H4C2.896 31 2 30.105 2 29V7.00001C2 5.896 2.896 5 4 5L22.56 5ZM6.007 26.731L27.73 26.73C28.49 26.67 28.91 25.8 28.47 25.17C28.3 24.92 28.03 24.76 27.73 24.74L8.001 24.736L8.01 11.01C8.01 10.23 7.17 9.75 6.5 10.14C6.19 10.31 6 10.65 6 11.01L6.007 26.731Z"/>',

  solidBadged:
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z"/><path d="M34 11.7453C32.8662 12.5362 31.4872 13 30 13C26.134 13 23 9.86599 23 6C23 5.66048 23.0242 5.3266 23.0709 5H4C2.896 5 2 5.896 2 7V29C2 30.105 2.896 31 4 31H32C33.105 31 34 30.105 34 29V11.7453ZM6.007 26.731L27.73 26.73C28.49 26.67 28.91 25.8 28.47 25.17C28.3 24.92 28.03 24.76 27.73 24.74L8.001 24.736L8.01 11.01C8.01 10.23 7.17 9.75 6.5 10.14C6.19 10.31 6 10.65 6 11.01L6.007 26.731Z"/>',
};

export const axisChartIconName = 'axis-chart';
export const axisChartIcon: IconShapeTuple = [axisChartIconName, renderIcon(icon)];
