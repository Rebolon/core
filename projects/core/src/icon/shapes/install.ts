/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M10.2622 18.82L17.2647 25.71C17.6549 26.09 18.2751 26.09 18.6652 25.71L25.6677 18.82C26.0679 18.43 26.0679 17.8 25.6877 17.4C25.2976 17 24.6674 17 24.2672 17.38L18.9653 22.59V3C18.9653 2.45 18.5152 2 17.965 2C17.4148 2 16.9646 2.45 16.9646 3V22.6L11.6627 17.39C11.2626 17 10.6324 17.01 10.2422 17.41C9.85209 17.81 9.86209 18.44 10.2622 18.83V18.82ZM31.3998 10.55C31.0096 10.17 30.4795 9.97 29.9393 9.99H26.498C25.9478 9.99 25.4977 10.44 25.4977 10.99C25.4977 11.54 25.9478 11.99 26.498 11.99H30.0193V31.99H5.99071V12H9.36192C9.91211 12 10.3623 11.55 10.3623 11C10.3623 10.45 9.91211 10 9.36192 10H6.07074C5.53055 9.98 5.00036 10.18 4.61022 10.56C4.22008 10.93 4 11.45 4 12V32C4 32.54 4.22008 33.07 4.61022 33.44C5.00036 33.82 5.53055 34.02 6.07074 34H29.9293C30.4695 34.02 30.9996 33.82 31.3898 33.44C31.7799 33.06 32 32.54 32 32V12C32 11.46 31.7799 10.93 31.3898 10.56L31.3998 10.55Z" />\n',

  outlineAlerted:
    '<path d="M26.9039 1.64621L21.2222 11.1159C20.9526 11.4984 20.9281 11.9949 21.1588 12.4005C21.3896 12.806 21.8363 13.0519 22.3148 13.0367H33.6881C34.1666 13.0519 34.6134 12.806 34.8441 12.4005C35.0748 11.9949 35.0503 11.4984 34.7808 11.1159L29.0991 1.64621C28.8711 1.26913 28.4532 1.03735 28.0015 1.03735C27.5497 1.03735 27.1319 1.26913 26.9039 1.64621Z" /><path d="M30.0193 15.0367H32V32C32 32.54 31.7799 33.06 31.3898 33.44C30.9996 33.82 30.4695 34.02 29.9293 34H6.07074C5.53055 34.02 5.00036 33.82 4.61022 33.44C4.22008 33.07 4 32.54 4 32V12C4 11.45 4.22008 10.93 4.61022 10.56C5.00036 10.18 5.53055 9.98 6.07074 10H9.36192C9.91211 10 10.3623 10.45 10.3623 11C10.3623 11.55 9.91211 12 9.36192 12H5.99071V31.99H30.0193V15.0367Z" /><path d="M17.2647 25.71L10.2622 18.82V18.83C9.86209 18.44 9.85209 17.81 10.2422 17.41C10.6324 17.01 11.2626 17 11.6627 17.39L16.9646 22.6V3C16.9646 2.45 17.4148 2 17.965 2C18.5152 2 18.9653 2.45 18.9653 3V22.59L24.2672 17.38C24.6674 17 25.2976 17 25.6877 17.4C26.0679 17.8 26.0679 18.43 25.6677 18.82L18.6652 25.71C18.2751 26.09 17.6549 26.09 17.2647 25.71Z" />\n',

  outlineBadged:
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" /><path d="M30.0193 13V31.99H5.99071V12H9.36192C9.91211 12 10.3623 11.55 10.3623 11C10.3623 10.45 9.91211 10 9.36192 10H6.07074C5.53055 9.98 5.00036 10.18 4.61022 10.56C4.22008 10.93 4 11.45 4 12V32C4 32.54 4.22008 33.07 4.61022 33.44C5.00036 33.82 5.53055 34.02 6.07074 34H29.9293C30.4695 34.02 30.9996 33.82 31.3898 33.44C31.7799 33.06 32 32.54 32 32V12.7131C31.372 12.8989 30.7073 12.999 30.0193 13Z" /><path d="M17.2647 25.71L10.2622 18.82V18.83C9.86209 18.44 9.85209 17.81 10.2422 17.41C10.6324 17.01 11.2626 17 11.6627 17.39L16.9646 22.6V3C16.9646 2.45 17.4148 2 17.965 2C18.5152 2 18.9653 2.45 18.9653 3V22.59L24.2672 17.38C24.6674 17 25.2976 17 25.6877 17.4C26.0679 17.8 26.0679 18.43 25.6677 18.82L18.6652 25.71C18.2751 26.09 17.6549 26.09 17.2647 25.71Z" />\n',
};

export const installIconName = 'install';
export const installIcon: IconShapeTuple = [installIconName, renderIcon(icon)];
