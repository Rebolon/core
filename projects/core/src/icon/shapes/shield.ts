/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M24.6371 5.55C26.7779 6.51 28.9887 7.21 31.2595 7.81L32.0098 8V15.43C32.0098 28.83 18.4849 33.88 18.3449 33.88L18.0048 34L17.6646 33.88C17.3245 33.75 4.00977 28.72 4.00977 15.43V8L4.76003 7.81C7.03084 7.21 9.25164 6.52 11.3924 5.56C13.5032 4.65 15.5339 3.57 17.4746 2.35L18.0148 2L18.565 2.34C20.5057 3.56 22.5364 4.64 24.6471 5.55H24.6371ZM18.0048 31.86C20.0055 31.04 30.0091 26.43 30.0091 15.43V9.55C27.8983 8.94 25.8376 8.28 23.8268 7.39C21.8161 6.52 19.8754 5.52 18.0048 4.39C16.1341 5.52 14.1934 6.52 12.1827 7.39C10.172 8.28 8.11123 8.94 6.00048 9.55V15.43C6.00048 26.42 16.004 31.04 18.0048 31.86Z" fill="black"/>\n',

  outlineAlerted:
    '<path d="M26.9039 1.64621L21.2222 11.1159C20.9526 11.4984 20.9281 11.9949 21.1588 12.4005C21.3896 12.806 21.8363 13.0519 22.3148 13.0367H33.6881C34.1666 13.0519 34.6134 12.806 34.8441 12.4005C35.0748 11.9949 35.0503 11.4984 34.7808 11.1159L29.0991 1.64621C28.8711 1.26913 28.4532 1.03735 28.0015 1.03735C27.5497 1.03735 27.1319 1.26913 26.9039 1.64621Z" fill="#A36500"/>\n' +
    '<path d="M22.7577 4.68021C21.3185 3.97518 19.9198 3.19171 18.565 2.34L18.0148 2L17.4746 2.35C15.5339 3.57 13.5032 4.65 11.3924 5.56C9.25164 6.52 7.03084 7.21 4.76003 7.81L4.00977 8V15.43C4.00977 28.6689 17.2224 33.7112 17.6602 33.8783L17.6646 33.88L18.0048 34L18.3449 33.88C18.4849 33.88 32.0098 28.83 32.0098 15.43V15.0367H30.0091V15.43C30.0091 26.43 20.0055 31.04 18.0048 31.86C16.0041 31.04 6.00048 26.42 6.00048 15.43V9.55C8.11123 8.94 10.172 8.28 12.1827 7.39C14.1934 6.52 16.1341 5.52 18.0048 4.39C19.2126 5.11959 20.4496 5.79499 21.7158 6.41619L22.7577 4.68021Z" fill="black"/>\n',

  outlineBadged:
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" fill="#E02200"/>\n' +
    '<path d="M32.0098 12.7101C31.3758 12.8987 30.7043 13 30.0091 13L30.0091 15.43C30.0091 26.43 20.0055 31.04 18.0048 31.86C16.0041 31.04 6.00048 26.42 6.00048 15.43V9.55C8.11123 8.94 10.172 8.28 12.1827 7.39C14.1934 6.52 16.1341 5.52 18.0048 4.39C19.6449 5.38075 21.3389 6.27156 23.0867 7.06244C23.0339 6.71599 23.0065 6.36119 23.0065 6C23.0065 5.60713 23.0389 5.22183 23.1012 4.8466C21.5408 4.09912 20.0273 3.25931 18.565 2.34L18.0148 2L17.4746 2.35C15.5339 3.57 13.5032 4.65 11.3924 5.56C9.25164 6.52 7.03084 7.21 4.76003 7.81L4.00977 8V15.43C4.00977 28.6689 17.2224 33.7112 17.6602 33.8783L17.6646 33.88L18.0048 34L18.3449 33.88C18.4849 33.88 32.0098 28.83 32.0098 15.43V12.7101Z" fill="black"/>\n',

  solid:
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M24.6371 5.55C26.7779 6.51 28.9887 7.21 31.2595 7.81L32.0098 8V15.43C32.0098 28.83 18.4849 33.88 18.3449 33.88L18.0048 34L17.6646 33.88C17.3245 33.75 4.00977 28.72 4.00977 15.43V8L4.76003 7.81C7.03084 7.21 9.25164 6.52 11.3924 5.56C13.5032 4.65 15.5339 3.57 17.4746 2.35L18.0148 2L18.565 2.34C20.5057 3.56 22.5364 4.64 24.6471 5.55H24.6371Z" fill="black"/>\n',

  solidAlerted:
    '<path d="M26.9039 1.64621L21.2222 11.1159C20.9526 11.4984 20.9281 11.9949 21.1588 12.4005C21.3896 12.806 21.8363 13.0519 22.3148 13.0367H33.6881C34.1666 13.0519 34.6134 12.806 34.8441 12.4005C35.0748 11.9949 35.0503 11.4984 34.7808 11.1159L29.0991 1.64621C28.8711 1.26913 28.4532 1.03735 28.0015 1.03735C27.5497 1.03735 27.1319 1.26913 26.9039 1.64621Z" fill="#A36500"/>\n' +
    '<path d="M22.7525 4.67768L19.5359 10.0387C18.8701 11.0423 18.8201 12.3342 19.4203 13.3893C20.0231 14.4489 21.1575 15.0604 22.3393 15.0367H32.0098V15.43C32.0098 28.83 18.4849 33.88 18.3449 33.88L18.0048 34L17.6646 33.88L17.6601 33.8783C17.2224 33.7112 4.00977 28.6689 4.00977 15.43V8L4.76003 7.81C7.03084 7.21 9.25164 6.52 11.3924 5.56C13.5032 4.65 15.5339 3.57 17.4746 2.35L18.0148 2L18.565 2.34C19.9182 3.19069 21.3152 3.9733 22.7525 4.67768Z" fill="black"/>\n',

  solidBadged:
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" fill="#E02200"/>\n' +
    '<path d="M32.0098 12.7071C31.3731 12.8977 30.6984 13 29.9998 13C26.1338 13 22.9998 9.86599 22.9998 6C22.9998 5.60608 23.0323 5.21975 23.0948 4.84357C21.5367 4.09685 20.0254 3.25806 18.565 2.34L18.0148 2L17.4746 2.35C15.5339 3.57 13.5032 4.65 11.3924 5.56C9.25164 6.52 7.03084 7.21 4.76003 7.81L4.00977 8V15.43C4.00977 28.6689 17.2224 33.7112 17.6601 33.8783L17.6646 33.88L18.0048 34L18.3449 33.88C18.4849 33.88 32.0098 28.83 32.0098 15.43V12.7071Z" fill="black"/>\n',
};

export const shieldIconName = 'shield';
export const shieldIcon: IconShapeTuple = [shieldIconName, renderIcon(icon)];
