/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '  <path d="M5 29.4995H10C10.27 29.4995 10.52 29.3894 10.71 29.2094L11.71 28.209C11.71 28.209 11.73 28.169 11.75 28.149L17.38 26.4784C17.38 26.4784 17.41 26.4684 17.42 26.4584C17.45 26.4584 17.47 26.4384 17.5 26.4284C17.58 26.3884 17.66 26.3384 17.73 26.2783C17.74 26.2683 17.76 26.2683 17.77 26.2483L32.24 12.7536C33.37 11.6132 34 10.1127 34 8.50209C34 6.89152 33.38 5.391 32.24 4.2506C29.9 1.90977 26.1 1.90977 23.78 4.22059L9.34 17.7053C9.26 17.7853 9.19 17.8854 9.14 17.9854C9.13 18.0054 9.12 18.0354 9.11 18.0654C9.1 18.0955 9.08 18.1155 9.07 18.1455L7.42 23.7074C7.34 23.7674 7.27 23.8175 7.21 23.8975L4.21 27.8989C3.98 28.199 3.95 28.6091 4.12 28.9493C4.29 29.2894 4.64 29.4995 5.01 29.4995H5ZM25.17 5.6711C26.73 4.11055 29.27 4.11055 30.83 5.6711C31.59 6.43136 32 7.43171 32 8.50209C32 9.57246 31.58 10.5828 30.85 11.3131L17.11 24.1176L11.45 18.4556L25.17 5.6711ZM10.5 20.3262L15.2 25.0279L11.35 26.1683L9.36 24.1776L10.5 20.3162V20.3262ZM8.22 25.8682L9.72 27.3687L9.6 27.4888H7.01L8.22 25.8682ZM33.01 30.4898H3C2.45 30.4898 2 30.94 2 31.4902V33.4909C2 34.0411 2.45 34.4912 3 34.4912H33C33.55 34.4912 34 34.0411 34 33.4909V31.4902C34 30.94 33.55 30.4898 33 30.4898H33.01Z" fill="black"/>\n',
};

export const highlighterIconName = 'highlighter';
export const highlighterIcon: IconShapeTuple = [highlighterIconName, renderIcon(icon)];
