/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M14 30H6V22H8V20H4V32H16V28H14V30ZM26 20H20V26H26V20ZM10 26H16V20H10V26ZM26 10H20V16H26V10ZM4 16H8V14H6V6H14V8H16V4H4V16ZM10 16H16V10H10V16ZM20 4V8H22V6H30V14H28V16H32V4H20ZM28 22H30V30H22V28H20V32H32V20H28V22Z" fill="black"/>\n',

  outlineAlerted:
    '<path d="M26.9039 1.64621L21.2222 11.1159C20.9526 11.4984 20.9281 11.9949 21.1588 12.4005C21.3896 12.806 21.8363 13.0519 22.3148 13.0367H33.6881C34.1666 13.0519 34.6134 12.806 34.8441 12.4005C35.0748 11.9949 35.0503 11.4984 34.7808 11.1159L29.0991 1.64621C28.8711 1.26913 28.4532 1.03735 28.0015 1.03735C27.5497 1.03735 27.1319 1.26913 26.9039 1.64621Z" fill="#A36500"/>\n' +
    '<path d="M23.1594 4H20V8H20.7594L23.1594 4Z" fill="black"/>\n' +
    '<path d="M28 15.0367H32V16H28V15.0367Z" fill="black"/>\n' +
    '<path d="M20 14.1312C20.6254 14.7274 21.4696 15.0541 22.3395 15.0367H26V16H20V14.1312Z" fill="black"/>\n' +
    '<path d="M6 22V30H14V28H16V32H4V20H8V22H6Z" fill="black"/>\n' +
    '<path d="M20 20H26V26H20V20Z" fill="black"/>\n' +
    '<path d="M16 26H10V20H16V26Z" fill="black"/>\n' +
    '<path d="M8 16H4V4H16V8H14V6H6V14H8V16Z" fill="black"/>\n' +
    '<path d="M16 16H10V10H16V16Z" fill="black"/>\n' +
    '<path d="M30 22H28V20H32V32H20V28H22V30H30V22Z" fill="black"/>\n',

  outlineBadged:
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" fill="#E02200"/>\n' +
    '<path d="M32 12.7101C31.3663 12.8987 30.695 13 30 13V14H28V16H32V12.7101Z" fill="black"/>\n' +
    '<path d="M24.2547 10C24.7288 10.6797 25.3203 11.2712 26 11.7453V16H20V10H24.2547Z" fill="black"/>\n' +
    '<path d="M23 6C23 5.30503 23.1013 4.63371 23.2899 4H20V8H22V6H23Z" fill="black"/>\n' +
    '<path d="M6 22V30H14V28H16V32H4V20H8V22H6Z" fill="black"/>\n' +
    '<path d="M20 26V20H26V26H20Z" fill="black"/>\n' +
    '<path d="M16 26H10V20H16V26Z" fill="black"/>\n' +
    '<path d="M8 16H4V4H16V8H14V6H6V14H8V16Z" fill="black"/>\n' +
    '<path d="M16 16H10V10H16V16Z" fill="black"/>\n' +
    '<path d="M30 22H28V20H32V32H20V28H22V30H30V22Z" fill="black"/>\n',
};

export const vmwAppIconName = 'vmw-app';
export const vmwAppIcon: IconShapeTuple = [vmwAppIconName, renderIcon(icon)];
