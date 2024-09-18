/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M22 20H20V22H22V20ZM20 26H22V24H20V26ZM28 24H26V26H28V24ZM28 20H26V22H28V20ZM27 12C27.55 12 28 11.55 28 11V5C28 4.45 27.55 4 27 4C26.45 4 26 4.45 26 5V11C26 11.55 26.45 12 27 12ZM22 16H20V18H22V16ZM28 16H26V18H28V16ZM24 8H12V10H24V8ZM10 16H8V18H10V16ZM10 20H8V22H10V20ZM10 24H8V26H10V24ZM33.5 8.54C33.17 8.2 32.72 8.01 32.25 8H30V10H32V30H4V10H6V8H3.75C3.28 8 2.83 8.2 2.5 8.54C2.17 8.88 2 9.34 2 9.81V30.19C2 30.66 2.17 31.12 2.5 31.46C2.83 31.8 3.28 31.99 3.75 32H32.25C32.72 32 33.17 31.8 33.5 31.46C33.83 31.12 34.01 30.66 34 30.19V9.81C34 9.34 33.83 8.88 33.5 8.54ZM14 26H16V24H14V26ZM16 20H14V22H16V20ZM16 16H14V18H16V16ZM9 12C9.55 12 10 11.55 10 11V5C10 4.45 9.55 4 9 4C8.45 4 8 4.45 8 5V11C8 11.55 8.45 12 9 12Z" />\n',
  outlineAlerted:
    '<path d="M26.9039 1.64621L21.2222 11.1159C20.9526 11.4984 20.9281 11.9949 21.1588 12.4005C21.3896 12.806 21.8363 13.0519 22.3148 13.0367H33.6881C34.1666 13.0519 34.6134 12.806 34.8441 12.4005C35.0748 11.9949 35.0503 11.4984 34.7808 11.1159L29.0991 1.64621C28.8711 1.26913 28.4532 1.03735 28.0015 1.03735C27.5497 1.03735 27.1319 1.26913 26.9039 1.64621Z" fill="#A36500"/>\n' +
    '<path d="M32 15.0367H33.6637C33.7763 15.0389 33.8886 15.0354 34 15.0263V30.19C34.01 30.66 33.83 31.12 33.5 31.46C33.17 31.8 32.72 32 32.25 32H3.75C3.28 31.99 2.83 31.8 2.5 31.46C2.17 31.12 2 30.66 2 30.19V9.81C2 9.34 2.17 8.88 2.5 8.54C2.83 8.2 3.28 8 3.75 8H6V10H4V30H32V15.0367Z" />\n' +
    '<path d="M20.7594 8L19.5594 10H12V8H20.7594Z" />\n' +
    '<path d="M20 20H22V22H20V20Z" />\n' +
    '<path d="M22 26H20V24H22V26Z" />\n' +
    '<path d="M26 26V24H28V26H26Z" />\n' +
    '<path d="M26 22V20H28V22H26Z" />\n' +
    '<path d="M20 16H22V18H20V16Z" />\n' +
    '<path d="M26 18V16H28V18H26Z" />\n' +
    '<path d="M8 16H10V18H8V16Z" />\n' +
    '<path d="M8 20H10V22H8V20Z" />\n' +
    '<path d="M8 24H10V26H8V24Z" />\n' +
    '<path d="M16 26H14V24H16V26Z" />\n' +
    '<path d="M14 20H16V22H14V20Z" />\n' +
    '<path d="M14 16H16V18H14V16Z" />\n' +
    '<path d="M10 11C10 11.55 9.55 12 9 12C8.45 12 8 11.55 8 11V5C8 4.45 8.45 4 9 4C9.55 4 10 4.45 10 5V11Z" />\n',
  outlineBadged:
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" />\n' +
    '<path d="M23.2899 8C23.4594 8.56963 23.6995 9.10887 24 9.60759V10H12V8H23.2899Z" />\n' +
    '<path d="M34 11.7453C33.396 12.1666 32.7224 12.4951 32 12.7101V30H4V10H6V8H3.75C3.28 8 2.83 8.2 2.5 8.54C2.17 8.88 2 9.34 2 9.81V30.19C2 30.66 2.17 31.12 2.5 31.46C2.83 31.8 3.28 31.99 3.75 32H32.25C32.72 32 33.17 31.8 33.5 31.46C33.83 31.12 34.01 30.66 34 30.19V11.7453Z" />\n' +
    '<path d="M20 20H22V22H20V20Z" />\n' +
    '<path d="M22 26H20V24H22V26Z" />\n' +
    '<path d="M26 26V24H28V26H26Z" />\n' +
    '<path d="M26 22V20H28V22H26Z" />\n' +
    '<path d="M20 16H22V18H20V16Z" />\n' +
    '<path d="M26 18V16H28V18H26Z" />\n' +
    '<path d="M8 16H10V18H8V16Z" />\n' +
    '<path d="M8 20H10V22H8V20Z" />\n' +
    '<path d="M8 24H10V26H8V24Z" />\n' +
    '<path d="M16 26H14V24H16V26Z" />\n' +
    '<path d="M14 20H16V22H14V20Z" />\n' +
    '<path d="M14 16H16V18H14V16Z" />\n' +
    '<path d="M10 11C10 11.55 9.55 12 9 12C8.45 12 8 11.55 8 11V5C8 4.45 8.45 4 9 4C9.55 4 10 4.45 10 5V11Z" />\n',
  solid:
    '<path d="M27 12C27.55 12 28 11.55 28 11V5C28 4.45 27.55 4 27 4C26.45 4 26 4.45 26 5V11C26 11.55 26.45 12 27 12ZM33.5 8.54C33.17 8.2 32.72 8.01 32.25 8H29.2V11C29.2 12.21 28.21 13.2 27 13.2C25.79 13.2 24.8 12.21 24.8 11V8H11.2V11C11.2 12.21 10.21 13.2 9 13.2C7.79 13.2 6.8 12.21 6.8 11V8H3.75C3.28 8 2.83 8.2 2.5 8.54C2.17 8.88 2 9.34 2 9.81V30.19C2 30.66 2.17 31.12 2.5 31.46C2.83 31.8 3.28 31.99 3.75 32H32.25C32.72 32 33.17 31.8 33.5 31.46C33.83 31.12 34.01 30.66 34 30.19V9.81C34 9.34 33.83 8.88 33.5 8.54ZM10.1 26.1H7.9V23.9H10.1V26.1ZM10.1 22.1H7.9V19.9H10.1V22.1ZM10.1 18.1H7.9V15.9H10.1V18.1ZM16.1 26.1H13.9V23.9H16.1V26.1ZM16.1 22.1H13.9V19.9H16.1V22.1ZM16.1 18.1H13.9V15.9H16.1V18.1ZM22.1 26.1H19.9V23.9H22.1V26.1ZM22.1 22.1H19.9V19.9H22.1V22.1ZM22.1 18.1H19.9V15.9H22.1V18.1ZM28.1 26.1H25.9V23.9H28.1V26.1ZM28.1 22.1H25.9V19.9H28.1V22.1ZM28.1 18.1H25.9V15.9H28.1V18.1ZM9 12C9.55 12 10 11.55 10 11V5C10 4.45 9.55 4 9 4C8.45 4 8 4.45 8 5V11C8 11.55 8.45 12 9 12Z" />\n',
  solidAlerted:
    '<path d="M26.9039 1.64621L21.2222 11.1159C20.9526 11.4984 20.9281 11.9949 21.1588 12.4005C21.3896 12.806 21.8363 13.0519 22.3148 13.0367H33.6881C34.1666 13.0519 34.6134 12.806 34.8441 12.4005C35.0748 11.9949 35.0503 11.4984 34.7808 11.1159L29.0991 1.64621C28.8711 1.26913 28.4532 1.03735 28.0015 1.03735C27.5497 1.03735 27.1319 1.26913 26.9039 1.64621Z" fill="#A36500"/>\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M20.7594 8L19.5362 10.0387C18.8703 11.0423 18.8204 12.3342 19.4206 13.3893C20.0233 14.4489 21.1577 15.0604 22.3395 15.0367H33.6637C33.7763 15.0389 33.8886 15.0354 34 15.0263V30.19C34.01 30.66 33.83 31.12 33.5 31.46C33.17 31.8 32.72 32 32.25 32H3.75C3.28 31.99 2.83 31.8 2.5 31.46C2.17 31.12 2 30.66 2 30.19V9.81C2 9.34 2.17 8.88 2.5 8.54C2.83 8.2 3.28 8 3.75 8H6.8V11C6.8 12.21 7.79 13.2 9 13.2C10.21 13.2 11.2 12.21 11.2 11V8H20.7594ZM7.9 23.9V26.1H10.1V23.9H7.9ZM7.9 19.9V22.1H10.1V19.9H7.9ZM7.9 15.9V18.1H10.1V15.9H7.9ZM13.9 26.1H16.1V23.9H13.9V26.1ZM13.9 22.1H16.1V19.9H13.9V22.1ZM13.9 18.1H16.1V15.9H13.9V18.1ZM19.9 26.1H22.1V23.9H19.9V26.1ZM19.9 22.1H22.1V19.9H19.9V22.1ZM19.9 18.1H22.1V15.9H19.9V18.1ZM25.9 23.9V26.1H28.1V23.9H25.9ZM25.9 19.9V22.1H28.1V19.9H25.9ZM25.9 15.9V18.1H28.1V15.9H25.9Z" />\n' +
    '<path d="M10 11C10 11.55 9.55 12 9 12C8.45 12 8 11.55 8 11V5C8 4.45 8.45 4 9 4C9.55 4 10 4.45 10 5V11Z" />\n',
  solidBadged:
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" />\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M34 11.7453C32.8662 12.5362 31.4872 13 30 13C29.4063 13 28.8299 12.9261 28.2794 12.787C27.9183 13.0467 27.4762 13.2 27 13.2C25.79 13.2 24.8 12.21 24.8 11V10.6862C24.1126 9.92393 23.5904 9.0097 23.2899 8H11.2V11C11.2 12.21 10.21 13.2 9 13.2C7.79 13.2 6.8 12.21 6.8 11V8H3.75C3.28 8 2.83 8.2 2.5 8.54C2.17 8.88 2 9.34 2 9.81V30.19C2 30.66 2.17 31.12 2.5 31.46C2.83 31.8 3.28 31.99 3.75 32H32.25C32.72 32 33.17 31.8 33.5 31.46C33.83 31.12 34.01 30.66 34 30.19V11.7453ZM7.9 23.9V26.1H10.1V23.9H7.9ZM7.9 19.9V22.1H10.1V19.9H7.9ZM7.9 15.9V18.1H10.1V15.9H7.9ZM13.9 26.1H16.1V23.9H13.9V26.1ZM13.9 22.1H16.1V19.9H13.9V22.1ZM13.9 18.1H16.1V15.9H13.9V18.1ZM19.9 26.1H22.1V23.9H19.9V26.1ZM19.9 22.1H22.1V19.9H19.9V22.1ZM19.9 18.1H22.1V15.9H19.9V18.1ZM25.9 23.9V26.1H28.1V23.9H25.9ZM25.9 19.9V22.1H28.1V19.9H25.9ZM25.9 15.9V18.1H28.1V15.9H25.9Z" />\n' +
    '<path d="M10 11C10 11.55 9.55 12 9 12C8.45 12 8 11.55 8 11V5C8 4.45 8.45 4 9 4C9.55 4 10 4.45 10 5V11Z" />\n',
};

export const calendarIconName = 'calendar';
export const calendarIcon: IconShapeTuple = [calendarIconName, renderIcon(icon)];
