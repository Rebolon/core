/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M8 26H10.01V22H8V26ZM19.98 26H21.99V22H19.98V26ZM13.99 26H16V22H13.99V26ZM25.97 26H27.98V22H25.97V26ZM6 20H30V18H6V20ZM33.95 19.52L29.95 6.68C29.81 6.27 29.43 6 29 6H7C6.57 6 6.19 6.28 6.05 6.68L2.05 19.52C2.02 19.62 2 19.73 2 19.84V28C2 29.1 2.9 30 4 30H32C33.1 30 34 29.1 34 28V19.84C34 19.73 33.98 19.63 33.95 19.52ZM32 28H4V20L7.72 8H28.28L32 20V28Z" fill="black"/>\n',

  outlineAlerted:
    '<path d="M26.9039 1.64621L21.2222 11.1159C20.9526 11.4984 20.9281 11.9949 21.1588 12.4005C21.3896 12.806 21.8363 13.0519 22.3148 13.0367H33.6881C34.1666 13.0519 34.6134 12.806 34.8441 12.4005C35.0748 11.9949 35.0503 11.4984 34.7808 11.1159L29.0991 1.64621C28.8711 1.26913 28.4532 1.03735 28.0015 1.03735C27.5497 1.03735 27.1319 1.26913 26.9039 1.64621Z" fill="#A36500"/>\n' +
    '<path d="M21.9594 6H7C6.57 6 6.19 6.28 6.05 6.68L2.05 19.52C2.02 19.62 2 19.73 2 19.84V28C2 29.1 2.9 30 4 30H32C33.1 30 34 29.1 34 28V19.84C34 19.73 33.98 19.63 33.95 19.52L32.5533 15.0367H30.4614L32 20V28H4V20L7.72 8H20.7594L21.9594 6Z" fill="black"/>\n' +
    '<path d="M10.01 26H8V22H10.01V26Z" fill="black"/>\n' +
    '<path d="M21.99 26H19.98V22H21.99V26Z" fill="black"/>\n' +
    '<path d="M16 26H13.99V22H16V26Z" fill="black"/>\n' +
    '<path d="M27.98 26H25.97V22H27.98V26Z" fill="black"/>\n' +
    '<path d="M30 20H6V18H30V20Z" fill="black"/>\n',

  outlineBadged:
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" fill="#E02200"/>\n' +
    '<path d="M31.8425 12.755C31.2554 12.9147 30.6377 13 30 13C29.943 13 29.8861 12.9993 29.8294 12.998L32 20V28H4V20L7.72 8H23.2899C23.1013 7.36629 23 6.69497 23 6H7C6.57 6 6.19 6.28 6.05 6.68L2.05 19.52C2.02 19.62 2 19.73 2 19.84V28C2 29.1 2.9 30 4 30H32C33.1 30 34 29.1 34 28V19.84C34 19.73 33.98 19.63 33.95 19.52L31.8425 12.755Z" fill="black"/>\n' +
    '<path d="M10.01 26H8V22H10.01V26Z" fill="black"/>\n' +
    '<path d="M21.99 26H19.98V22H21.99V26Z" fill="black"/>\n' +
    '<path d="M16 26H13.99V22H16V26Z" fill="black"/>\n' +
    '<path d="M27.98 26H25.97V22H27.98V26Z" fill="black"/>\n' +
    '<path d="M30 20H6V18H30V20Z" fill="black"/>\n',

  solid:
    '<path d="M33.95 19.52L29.95 6.68C29.81 6.27 29.43 6 29 6H7C6.57 6 6.19 6.28 6.05 6.68L2.05 19.52C2.02 19.62 2 19.73 2 19.84V28C2 29.1 2.9 30 4 30H32C33.1 30 34 29.1 34 28V19.84C34 19.73 33.98 19.63 33.95 19.52ZM10.01 26H8V22H10.01V26ZM16 26H13.99V22H16V26ZM21.99 26H19.98V22H21.99V26ZM27.98 26H25.97V22H27.98V26ZM30 20H6V18H30V20Z" fill="black"/>\n',

  solidAlerted:
    '<path d="M26.9039 1.64621L21.2222 11.1159C20.9526 11.4984 20.9281 11.9949 21.1588 12.4005C21.3896 12.806 21.8363 13.0519 22.3148 13.0367H33.6881C34.1666 13.0519 34.6134 12.806 34.8441 12.4005C35.0748 11.9949 35.0503 11.4984 34.7808 11.1159L29.0991 1.64621C28.8711 1.26913 28.4532 1.03735 28.0015 1.03735C27.5497 1.03735 27.1319 1.26913 26.9039 1.64621Z" fill="#A36500"/>\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M21.9594 6L19.5362 10.0387C18.8703 11.0423 18.8204 12.3342 19.4206 13.3893C20.0233 14.4489 21.1577 15.0604 22.3395 15.0367H32.5533L33.95 19.52C33.98 19.63 34 19.73 34 19.84V28C34 29.1 33.1 30 32 30H4C2.9 30 2 29.1 2 28V19.84C2 19.73 2.02 19.62 2.05 19.52L6.05 6.68C6.19 6.28 6.57 6 7 6H21.9594ZM8 26H10.01V22H8V26ZM13.99 26H16V22H13.99V26ZM19.98 26H21.99V22H19.98V26ZM25.97 26H27.98V22H25.97V26ZM6 20H30V18H6V20Z" fill="black"/>\n',

  solidBadged:
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" fill="#E02200"/>\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M31.8425 12.755C31.2554 12.9147 30.6377 13 30 13C26.134 13 23 9.86599 23 6H7C6.57 6 6.19 6.28 6.05 6.68L2.05 19.52C2.02 19.62 2 19.73 2 19.84V28C2 29.1 2.9 30 4 30H32C33.1 30 34 29.1 34 28V19.84C34 19.73 33.98 19.63 33.95 19.52L31.8425 12.755ZM8 26H10.01V22H8V26ZM13.99 26H16V22H13.99V26ZM19.98 26H21.99V22H19.98V26ZM25.97 26H27.98V22H25.97V26ZM6 20H30V18H6V20Z" fill="black"/>\n',
};

export const networkSwitchIconName = 'network-switch';
export const networkSwitchIcon: IconShapeTuple = [networkSwitchIconName, renderIcon(icon)];
