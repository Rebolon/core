/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18 20C18.55 20 19 19.55 19 19V5C19 4.45 18.55 4 18 4C17.45 4 17 4.45 17 5V19C17 19.55 17.45 20 18 20ZM24.58 5.64C24.09 5.38 23.49 5.56 23.23 6.05C22.97 6.54 23.15 7.14 23.64 7.4C27.56 9.49 30 13.55 30 17.99C30 24.61 24.62 29.99 18 29.99C11.38 29.99 6 24.62 6 18C6 13.51 8.48 9.43 12.47 7.35C12.96 7.1 13.15 6.49 12.89 6C12.64 5.51 12.03 5.32 11.54 5.58C6.89 8 4 12.76 4 18C4 25.72 10.28 32 18 32C25.72 32 32 25.72 32 18C32 12.82 29.16 8.08 24.58 5.64Z" />\n',

  outlineAlerted:
    '<path d="M26.9039 1.64621L21.2222 11.1159C20.9526 11.4984 20.9281 11.9949 21.1588 12.4005C21.3896 12.806 21.8363 13.0519 22.3148 13.0367H33.6881C34.1666 13.0519 34.6134 12.806 34.8441 12.4005C35.0748 11.9949 35.0503 11.4984 34.7808 11.1159L29.0991 1.64621C28.8711 1.26913 28.4532 1.03735 28.0015 1.03735C27.5497 1.03735 27.1319 1.26913 26.9039 1.64621Z" />\n' +
    '<path d="M29.6323 15.0367H31.6848C31.8922 15.9986 32 16.9909 32 18C32 25.72 25.72 32 18 32C10.28 32 4 25.72 4 18C4 12.76 6.89 8 11.54 5.58C12.03 5.32 12.64 5.51 12.89 6C13.15 6.49 12.96 7.1 12.47 7.35C8.48 9.43 6 13.51 6 18C6 24.62 11.38 29.99 18 29.99C24.62 29.99 30 24.61 30 17.99C30 16.9796 29.8736 15.989 29.6323 15.0367Z" />\n' +
    '<path d="M19 19C19 19.55 18.55 20 18 20C17.45 20 17 19.55 17 19V5C17 4.45 17.45 4 18 4C18.55 4 19 4.45 19 5V19Z" />\n',

  outlineBadged:
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" />\n' +
    '<path d="M31.0504 12.9217C30.7078 12.9733 30.357 13 30 13C29.6165 13 29.2401 12.9692 28.8733 12.9098C29.6035 14.472 30 16.2001 30 17.99C30 24.61 24.62 29.99 18 29.99C11.38 29.99 6 24.62 6 18C6 13.51 8.48 9.43 12.47 7.35C12.96 7.1 13.15 6.49 12.89 6C12.64 5.51 12.03 5.32 11.54 5.58C6.89 8 4 12.76 4 18C4 25.72 10.28 32 18 32C25.72 32 32 25.72 32 18C32 16.2313 31.6689 14.5138 31.0504 12.9217Z" />\n' +
    '<path d="M19 19C19 19.55 18.55 20 18 20C17.45 20 17 19.55 17 19V5C17 4.45 17.45 4 18 4C18.55 4 19 4.45 19 5V19Z" />\n',

  solid:
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M18 2C9.16344 2 2 9.16344 2 18C2 26.8366 9.16344 34 18 34C26.8366 34 34 26.8366 34 18C34 13.7565 32.3143 9.68687 29.3137 6.68629C26.3131 3.68571 22.2435 2 18 2ZM18.06 19.68C17.7188 19.6827 17.3906 19.549 17.1484 19.3087C16.9062 19.0683 16.77 18.7412 16.77 18.4V8.65C16.77 7.93755 17.3476 7.36 18.06 7.36C18.7724 7.36 19.35 7.93755 19.35 8.65V18.4C19.35 18.7412 19.2138 19.0683 18.9716 19.3087C18.7294 19.549 18.4012 19.6827 18.06 19.68ZM8.48682 20.9642C9.82296 25.0758 13.6771 27.8411 18 27.79C22.3088 27.8527 26.1612 25.1154 27.5198 21.0259C28.8784 16.9364 27.4297 12.4381 23.94 9.91C23.3224 9.46177 22.4595 9.59075 22 10.2C21.5348 10.7941 21.6377 11.6525 22.23 12.12C24.1049 13.4399 25.2232 15.5871 25.23 17.88C25.2239 21.2639 22.8559 24.1842 19.5464 24.8894C16.2368 25.5946 12.884 23.8933 11.499 20.8059C10.114 17.7184 11.0726 14.083 13.8 12.08C14.0969 11.8674 14.2966 11.545 14.3548 11.1846C14.413 10.8241 14.3249 10.4552 14.11 10.16C13.6566 9.54411 12.7928 9.40609 12.17 9.85C8.64286 12.3499 7.15067 16.8527 8.48682 20.9642Z" />\n',

  solidAlerted:
    '<path d="M26.9039 1.64621L21.2222 11.1159C20.9526 11.4984 20.9281 11.9949 21.1588 12.4005C21.3896 12.806 21.8363 13.0519 22.3148 13.0367H33.6881C34.1666 13.0519 34.6134 12.806 34.8441 12.4005C35.0748 11.9949 35.0503 11.4984 34.7808 11.1159L29.0991 1.64621C28.8711 1.26913 28.4532 1.03735 28.0015 1.03735C27.5497 1.03735 27.1319 1.26913 26.9039 1.64621Z" />\n' +
    '<path d="M23.724 3.05893C21.9139 2.36545 19.9758 2 18 2C9.16344 2 2 9.16344 2 18C2 26.8366 9.16344 34 18 34C26.8366 34 34 26.8366 34 18C34 16.9989 33.9062 16.0074 33.7234 15.0373C33.7035 15.0373 33.6836 15.0371 33.6637 15.0367H27.5963C28.1773 16.947 28.1812 19.0349 27.5198 21.0259C26.1612 25.1154 22.3088 27.8527 18 27.79C13.6771 27.8411 9.82296 25.0758 8.48682 20.9642C7.15068 16.8527 8.64286 12.3499 12.17 9.85C12.7928 9.40609 13.6566 9.54412 14.11 10.16C14.3249 10.4552 14.413 10.8241 14.3548 11.1846C14.2966 11.545 14.0969 11.8674 13.8 12.08C11.0726 14.083 10.114 17.7184 11.499 20.8059C12.884 23.8933 16.2368 25.5946 19.5464 24.8894C22.8559 24.1842 25.2239 21.2639 25.23 17.88C25.227 16.8864 25.0154 15.9201 24.6238 15.0367H22.3395C21.1577 15.0604 20.0233 14.4489 19.4206 13.3893C19.396 13.3461 19.3724 13.3024 19.35 13.2584V18.4C19.35 18.7412 19.2138 19.0683 18.9716 19.3087C18.7294 19.549 18.4012 19.6827 18.06 19.68C17.7188 19.6827 17.3906 19.549 17.1484 19.3087C16.9062 19.0683 16.77 18.7412 16.77 18.4V8.65C16.77 7.93755 17.3476 7.36 18.06 7.36C18.7724 7.36 19.35 7.93755 19.35 8.65V10.3576C19.4055 10.2486 19.4676 10.1422 19.5362 10.0387L23.724 3.05893Z" />\n',

  solidBadged:
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M26.3368 12.5597C27.429 13.1506 28.6516 13.4589 29.8933 13.4563C30.9769 13.4587 32.0479 13.2241 33.0313 12.769C35.467 19.8131 32.7159 27.606 26.3977 31.5597C20.0794 35.5135 11.868 34.5806 6.5977 29.3103C1.32739 24.04 0.394506 15.8286 4.34826 9.51032C8.30202 3.19208 16.0949 0.440977 23.139 2.87666C22.1307 5.05921 22.2421 7.59499 23.4379 9.68072C22.8807 9.50518 22.2734 9.70095 21.9237 10.1689C21.6884 10.4555 21.5799 10.8255 21.6231 11.1939C21.6663 11.5622 21.8575 11.897 22.1528 12.1214C24.0205 13.4363 25.1346 15.5754 25.1414 17.8595C25.1353 21.2306 22.7764 24.1398 19.4794 24.8423C16.1823 25.5449 12.8423 23.85 11.4625 20.7743C10.0828 17.6986 11.0378 14.077 13.7548 12.0816C14.0506 11.8698 14.2495 11.5486 14.3075 11.1895C14.3655 10.8304 14.2777 10.463 14.0636 10.1689C13.6119 9.55532 12.7514 9.41781 12.131 9.86004C8.29122 12.6159 6.91641 17.6905 8.83995 22.0077C10.7635 26.3249 15.4559 28.6963 20.0726 27.6844C24.6894 26.6724 27.9596 22.5557 27.9009 17.8297C27.8934 15.9597 27.3507 14.131 26.3368 12.5597ZM17.9986 7.33965C17.2889 7.33965 16.7135 7.91501 16.7135 8.62475V18.3377C16.7135 19.0475 17.2889 19.6228 17.9986 19.6228C18.7084 19.6228 19.2837 19.0475 19.2837 18.3377V8.62475C19.2837 7.91501 18.7084 7.33965 17.9986 7.33965Z" />\n' +
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" />\n',
};

export const powerIconName = 'power';
export const powerIcon: IconShapeTuple = [powerIconName, renderIcon(icon)];
