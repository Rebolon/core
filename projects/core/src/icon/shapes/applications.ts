/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M10 10H4V12H12V4H10V10ZM10 20H4V22H12V14H10V20ZM20 20H14V22H22V14H20V20ZM10 30H4V32H12V24H10V30ZM20 30H14V32H22V24H20V30ZM30 4V10H24V12H32V4H30ZM20 10H14V12H22V4H20V10ZM30 20H24V22H32V14H30V20ZM30 30H24V32H32V24H30V30Z" />\n',

  outlineAlerted:
    '<path d="M26.9039 1.64621L21.2222 11.1159C20.9526 11.4984 20.9281 11.9949 21.1588 12.4005C21.3896 12.806 21.8363 13.0519 22.3148 13.0367H33.6881C34.1666 13.0519 34.6134 12.806 34.8441 12.4005C35.0748 11.9949 35.0503 11.4984 34.7808 11.1159L29.0991 1.64621C28.8711 1.26913 28.4532 1.03735 28.0015 1.03735C27.5497 1.03735 27.1319 1.26913 26.9039 1.64621Z" fill="#A36500"/>\n' +
    '<path d="M30 15.0367H32V22H24V20H30V15.0367Z" />\n' +
    '<path d="M20 14.1312C20.5436 14.6495 21.2526 14.9641 22 15.026V22H14V20H20V14.1312Z" />\n' +
    '<path d="M22 5.9323V4H20V9.26568L22 5.9323Z" />\n' +
    '<path d="M19.5594 10L19.5362 10.0387C19.1449 10.6284 18.9663 11.3177 19.0073 12H14V10H19.5594Z" />\n' +
    '<path d="M4 10H10V4H12V12H4V10Z" />\n' +
    '<path d="M4 20H10V14H12V22H4V20Z" />\n' +
    '<path d="M4 30H10V24H12V32H4V30Z" />\n' +
    '<path d="M14 30H20V24H22V32H14V30Z" />\n' +
    '<path d="M24 30H30V24H32V32H24V30Z" />\n',

  outlineBadged:
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" fill="#E02200"/>\n' +
    '<path d="M24.2547 10C24.8179 10.8074 25.5469 11.4905 26.3924 12H24V10H24.2547Z" />\n' +
    '<path d="M4 10H10V4H12V12H4V10Z" />\n' +
    '<path d="M4 20H10V14H12V22H4V20Z" />\n' +
    '<path d="M14 20H20V14H22V22H14V20Z" />\n' +
    '<path d="M4 30H10V24H12V32H4V30Z" />\n' +
    '<path d="M14 30H20V24H22V32H14V30Z" />\n' +
    '<path d="M14 10H20V4H22V12H14V10Z" />\n' +
    '<path d="M24 20H30V14H32V22H24V20Z" />\n' +
    '<path d="M24 30H30V24H32V32H24V30Z" />\n',

  solid:
    '<path d="M4 12H12V4H4V12ZM14 32H22V24H14V32ZM4 32H12V24H4V32ZM4 22H12V14H4V22ZM24 32H32V24H24V32ZM24 4V12H32V4H24ZM24 22H32V14H24V22ZM14 22H22V14H14V22ZM14 12H22V4H14V12Z" />\n',

  solidAlerted:
    '<path d="M26.9039 1.64621L21.2222 11.1159C20.9526 11.4984 20.9281 11.9949 21.1588 12.4005C21.3896 12.806 21.8363 13.0519 22.3148 13.0367H33.6881C34.1666 13.0519 34.6134 12.806 34.8441 12.4005C35.0748 11.9949 35.0503 11.4984 34.7808 11.1159L29.0991 1.64621C28.8711 1.26913 28.4532 1.03735 28.0015 1.03735C27.5497 1.03735 27.1319 1.26913 26.9039 1.64621Z" fill="#A36500"/>\n' +
    '<path d="M24 15.0367H32V22H24V15.0367Z" />\n' +
    '<path d="M19.87 14C20.4279 14.5963 21.1914 14.959 22 15.026V22H14V14H19.87Z" />\n' +
    '<path d="M22 5.9323L19.5362 10.0387C19.1449 10.6284 18.9663 11.3177 19.0073 12H14V4H22V5.9323Z" />\n' +
    '<path d="M12 12H4V4H12V12Z" />\n' +
    '<path d="M22 32H14V24H22V32Z" />\n' +
    '<path d="M12 32H4V24H12V32Z" />\n' +
    '<path d="M12 22H4V14H12V22Z" />\n' +
    '<path d="M32 32H24V24H32V32Z" />\n',

  solidBadged:
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" fill="#E02200"/>\n' +
    '<path d="M24 9.60759C24.5901 10.5869 25.4131 11.4099 26.3924 12H24V9.60759Z" />\n' +
    '<path d="M12 12H4V4H12V12Z" />\n' +
    '<path d="M22 32H14V24H22V32Z" />\n' +
    '<path d="M12 32H4V24H12V32Z" />\n' +
    '<path d="M12 22H4V14H12V22Z" />\n' +
    '<path d="M32 32H24V24H32V32Z" />\n' +
    '<path d="M32 22H24V14H32V22Z" />\n' +
    '<path d="M22 22H14V14H22V22Z" />\n' +
    '<path d="M22 12H14V4H22V12Z" />\n',
};

export const applicationsIconName = 'applications';
export const applicationsIcon: IconShapeTuple = [applicationsIconName, renderIcon(icon)];
