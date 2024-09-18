/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18 8L8.29 17.71C7.9 18.1 7.9 18.73 8.29 19.12C8.68 19.51 9.31 19.51 9.7 19.12L16.99 11.83L16.99 31C16.99 31.55 17.44 32 17.99 32C18.54 32 18.99 31.55 18.99 31L18.99 11.83L26.28 19.12C26.67 19.51 27.3 19.51 27.69 19.12C28.08 18.73 28.08 18.1 27.69 17.71L17.98 8L18 8ZM5 6L31 6C31.55 6 32 5.55 32 5C32 4.45 31.55 4 31 4L5 4C4.45 4 4 4.45 4 5C4 5.55 4.45 6 5 6Z" />\n',
  outlineAlerted:
    '<path d="M26.9039 1.64621L21.2222 11.1159C20.9526 11.4984 20.9281 11.9949 21.1588 12.4005C21.3896 12.806 21.8363 13.0519 22.3148 13.0367H33.6881C34.1666 13.0519 34.6134 12.806 34.8441 12.4005C35.0748 11.9949 35.0503 11.4984 34.7808 11.1159L29.0991 1.64621C28.8711 1.26913 28.4532 1.03735 28.0015 1.03735C27.5497 1.03735 27.1319 1.26913 26.9039 1.64621Z" /><path d="M23.1594 4L21.9594 6L5 6C4.45 6 4 5.55 4 5C4 4.45 4.45 4 5 4L23.1594 4Z" /><path d="M19.7171 9.73714L19.5362 10.0388C19.1752 10.5829 18.9952 11.2118 19.0018 11.8418L18.99 11.83L18.99 31C18.99 31.55 18.54 32 17.99 32C17.44 32 16.99 31.55 16.99 31L16.99 11.83L9.7 19.12C9.31 19.51 8.68 19.51 8.29 19.12C7.9 18.73 7.9 18.1 8.29 17.71L17.99 8.01L19.7171 9.73714Z" /><path d="M17.99 8.01L18 8H17.98L17.99 8.01Z" /><path d="M22.1965 15.0365C22.2441 15.0376 22.2918 15.0376 22.3395 15.0367H25.0167L27.69 17.71C28.08 18.1 28.08 18.73 27.69 19.12C27.3 19.51 26.67 19.51 26.28 19.12L22.1965 15.0365Z" />\n',
  outlineBadged:
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" /><path d="M23.2899 4C23.1013 4.63371 23 5.30503 23 6L5 6C4.45 6 4 5.55 4 5C4 4.45 4.45 4 5 4L23.2899 4Z" /><path d="M17.99 8.01L18 8H17.98L17.99 8.01Z" /><path d="M17.99 8.01L8.29 17.71C7.9 18.1 7.9 18.73 8.29 19.12C8.68 19.51 9.31 19.51 9.7 19.12L16.99 11.83L16.99 31C16.99 31.55 17.44 32 17.99 32C18.54 32 18.99 31.55 18.99 31L18.99 11.83L26.28 19.12C26.67 19.51 27.3 19.51 27.69 19.12C28.08 18.73 28.08 18.1 27.69 17.71L17.99 8.01Z" />\n',
};

export const uploadIconName = 'upload';
export const uploadIcon: IconShapeTuple = [uploadIconName, renderIcon(icon)];
