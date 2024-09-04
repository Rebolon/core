/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '  <path fill-rule="evenodd" clip-rule="evenodd" d="M26 32H29C29.5523 32 30 32.4477 30 33C30 33.5523 29.5523 34 29 34H7C6.44772 34 6 33.5523 6 33C6 32.4477 6.44772 32 7 32H10V24.91C10.0267 22.8176 11.0337 20.859 12.72 19.62L14 18.62C14.3132 18.3824 14.648 18.1749 15 18C14.6394 17.8391 14.2946 17.6449 13.97 17.42L12.69 16.42C11.0038 15.1662 10.0071 13.1912 10 11.09V4H7C6.44772 4 6 3.55228 6 3C6 2.44772 6.44772 2 7 2H29C29.5523 2 30 2.44772 30 3C30 3.55228 29.5523 4 29 4H26V11.09C25.9733 13.1824 24.9663 15.141 23.28 16.38L22 17.38C21.6868 17.6175 21.352 17.825 21 18C21.3606 18.1609 21.7054 18.3551 22.03 18.58L23.31 19.58C24.9961 20.8338 25.9929 22.8088 26 24.91V32ZM13.88 21.19C12.7028 22.065 12.0063 23.4432 12 24.91V32H24V24.91C23.9652 23.4803 23.2758 22.1458 22.13 21.29L20.85 20.29C20.4858 20.0236 20.085 19.8114 19.66 19.66C19.268 19.5135 19.0086 19.1385 19.01 18.72V17.38C19.0086 16.9615 19.268 16.5865 19.66 16.44C20.0816 16.2878 20.479 16.0757 20.84 15.81L22.12 14.81C23.2972 13.935 23.9937 12.5568 24 11.09V4H12V11.09C12.0195 12.5374 12.7105 13.8935 13.87 14.76L15.15 15.76C15.5142 16.0264 15.915 16.2386 16.34 16.39C16.732 16.5365 16.9914 16.9115 16.99 17.33V18.62C16.9914 19.0385 16.732 19.4135 16.34 19.56C15.9184 19.7122 15.521 19.9243 15.16 20.19L13.88 21.19Z" fill="black"/>\n',

  outlineAlerted:
    '  <path d="M26.9039 1.64597L21.2222 11.1156C20.9526 11.4981 20.9281 11.9946 21.1588 12.4002C21.3896 12.8058 21.8363 13.0517 22.3148 13.0364H33.6881C34.1666 13.0517 34.6134 12.8058 34.8441 12.4002C35.0748 11.9946 35.0503 11.4981 34.7808 11.1156L29.0991 1.64597C28.8711 1.26889 28.4532 1.03711 28.0015 1.03711C27.5497 1.03711 27.1319 1.26889 26.9039 1.64597Z" fill="#A36500"/>\n' +
    '  <path d="M24.3592 2H7C6.44772 2 6 2.44772 6 3C6 3.55228 6.44772 4 7 4H10V11.09C10.0071 13.1912 11.0038 15.1662 12.69 16.42L13.97 17.42C14.2946 17.6449 14.6394 17.8391 15 18C14.648 18.1749 14.3132 18.3824 14 18.62L12.72 19.62C11.0337 20.859 10.0267 22.8176 10 24.91V32H7C6.44772 32 6 32.4477 6 33C6 33.5523 6.44772 34 7 34H29C29.5523 34 30 33.5523 30 33C30 32.4477 29.5523 32 29 32H26V24.91C25.9929 22.8088 24.9961 20.8338 23.31 19.58L22.03 18.58C21.7054 18.3551 21.3606 18.1609 21 18C21.352 17.825 21.6868 17.6175 22 17.38L23.28 16.38C23.8032 15.9956 24.261 15.5419 24.6444 15.0364H22.3395C22.1791 15.0397 22.0196 15.0312 21.8621 15.0114L20.84 15.81C20.479 16.0757 20.0816 16.2878 19.66 16.44C19.268 16.5865 19.0086 16.9615 19.01 17.38V18.72C19.0086 19.1385 19.268 19.5135 19.66 19.66C20.085 19.8114 20.4858 20.0236 20.85 20.29L22.13 21.29C23.2758 22.1458 23.9652 23.4803 24 24.91V32H12V24.91C12.0063 23.4432 12.7028 22.065 13.88 21.19L15.16 20.19C15.521 19.9243 15.9184 19.7122 16.34 19.56C16.732 19.4135 16.9914 19.0385 16.99 18.62V17.33C16.9914 16.9115 16.732 16.5365 16.34 16.39C15.915 16.2386 15.5142 16.0264 15.15 15.76L13.87 14.76C12.7105 13.8935 12.0195 12.5374 12 11.09V4H23.1592L24.3592 2Z" fill="black"/>\n',

  outlineBadged:
    '  <path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" fill="#E02200"/>\n' +
    '  <path d="M24.2547 2H7C6.44772 2 6 2.44772 6 3C6 3.55228 6.44772 4 7 4H10V11.09C10.0071 13.1912 11.0038 15.1662 12.69 16.42L13.97 17.42C14.2946 17.6449 14.6394 17.8391 15 18C14.648 18.1749 14.3132 18.3824 14 18.62L12.72 19.62C11.0337 20.859 10.0267 22.8176 10 24.91V32H7C6.44772 32 6 32.4477 6 33C6 33.5523 6.44772 34 7 34H29C29.5523 34 30 33.5523 30 33C30 32.4477 29.5523 32 29 32H26V24.91C25.9929 22.8088 24.9961 20.8338 23.31 19.58L22.03 18.58C21.7054 18.3551 21.3606 18.1609 21 18C21.352 17.825 21.6868 17.6175 22 17.38L23.28 16.38C24.7961 15.266 25.7631 13.5704 25.9623 11.7188C25.1713 11.1593 24.5015 10.4399 24 9.60759V11.09C23.9937 12.5568 23.2972 13.935 22.12 14.81L20.84 15.81C20.479 16.0757 20.0816 16.2878 19.66 16.44C19.268 16.5865 19.0086 16.9615 19.01 17.38V18.72C19.0086 19.1385 19.268 19.5135 19.66 19.66C20.085 19.8114 20.4858 20.0236 20.85 20.29L22.13 21.29C23.2758 22.1458 23.9652 23.4803 24 24.91V32H12V24.91C12.0063 23.4432 12.7028 22.065 13.88 21.19L15.16 20.19C15.521 19.9243 15.9184 19.7122 16.34 19.56C16.732 19.4135 16.9914 19.0385 16.99 18.62V17.33C16.9914 16.9115 16.732 16.5365 16.34 16.39C15.915 16.2386 15.5142 16.0264 15.15 15.76L13.87 14.76C12.7105 13.8935 12.0195 12.5374 12 11.09V4H23.2899C23.5049 3.27757 23.8334 2.60401 24.2547 2Z" fill="black"/>\n',

  solid:
    '  <path d="M7 4H29C29.55 4 30 3.55 30 3C30 2.45 29.55 2 29 2H7C6.45 2 6 2.45 6 3C6 3.55 6.45 4 7 4ZM21.7 16.61C24.29 15.64 26 13.17 26 10.4V5.99H10V10.4C10 13.16 11.71 15.64 14.3 16.61L16 17.25V18.75L14.3 19.39C11.71 20.36 10 22.83 10 25.6V30.01H26V25.6C26 22.84 24.29 20.36 21.7 19.39L20 18.75V17.25L21.7 16.61ZM29 32H7C6.45 32 6 32.45 6 33C6 33.55 6.45 34 7 34H29C29.55 34 30 33.55 30 33C30 32.45 29.55 32 29 32Z" fill="black"/>\n',

  solidAlerted:
    '  <path d="M26.9039 1.64597L21.2222 11.1156C20.9526 11.4981 20.9281 11.9946 21.1588 12.4002C21.3896 12.8058 21.8363 13.0517 22.3148 13.0364H33.6881C34.1666 13.0517 34.6134 12.8058 34.8441 12.4002C35.0748 11.9946 35.0503 11.4981 34.7808 11.1156L29.0991 1.64597C28.8711 1.26889 28.4532 1.03711 28.0015 1.03711C27.5497 1.03711 27.1319 1.26889 26.9039 1.64597Z" fill="#A36500"/>\n' +
    '  <path d="M21.9652 5.99L19.5361 10.0385C18.8703 11.042 18.8203 12.334 19.4205 13.3891C20.0232 14.4487 21.1577 15.0601 22.3395 15.0364H23.785C23.1197 15.7179 22.3018 16.261 21.3699 16.61L19.6699 17.25V18.75L21.3699 19.39C23.9599 20.36 25.6699 22.84 25.6699 25.6V30.01H9.66992V25.6C9.66992 22.83 11.3799 20.36 13.9699 19.39L15.6699 18.75V17.25L13.9699 16.61C11.3799 15.64 9.66992 13.16 9.66992 10.4V5.99H21.9652Z" fill="black"/>\n' +
    '  <path d="M24.3592 2L23.1592 4H6.66992C6.11992 4 5.66992 3.55 5.66992 3C5.66992 2.45 6.11992 2 6.66992 2H24.3592Z" fill="black"/>\n' +
    '  <path d="M6.66992 32H28.6699C29.2199 32 29.6699 32.45 29.6699 33C29.6699 33.55 29.2199 34 28.6699 34H6.66992C6.11992 34 5.66992 33.55 5.66992 33C5.66992 32.45 6.11992 32 6.66992 32Z" fill="black"/>\n',

  solidBadged:
    '  <path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" fill="#E02200"/>\n' +
    '  <path d="M23 5.99C23 5.99333 23 5.99667 23 6C23 8.32597 24.1345 10.387 25.8802 11.6599C25.4497 13.8985 23.8892 15.7901 21.7 16.61L20 17.25V18.75L21.7 19.39C24.29 20.36 26 22.84 26 25.6V30.01H10V25.6C10 22.83 11.71 20.36 14.3 19.39L16 18.75V17.25L14.3 16.61C11.71 15.64 10 13.16 10 10.4V5.99H23Z" fill="black"/>\n' +
    '  <path d="M24.2547 2C23.8334 2.60401 23.5049 3.27757 23.2899 4H7C6.45 4 6 3.55 6 3C6 2.45 6.45 2 7 2H24.2547Z" fill="black"/>\n' +
    '  <path d="M7 32H29C29.55 32 30 32.45 30 33C30 33.55 29.55 34 29 34H7C6.45 34 6 33.55 6 33C6 32.45 6.45 32 7 32Z" fill="black"/>\n',
};

export const hourglassIconName = 'hourglass';
export const hourglassIcon: IconShapeTuple = [hourglassIconName, renderIcon(icon)];
