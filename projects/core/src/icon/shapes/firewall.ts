/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M31 6H5C3.35 6 2 7.35 2 9V27C2 28.65 3.35 30 5 30H31C32.65 30 34 28.65 34 27V9C34 7.35 32.65 6 31 6ZM32 27C32 27.55 31.55 28 31 28H24V24H22V28H14V24H12V28H5C4.45 28 4 27.55 4 27V23H32V27ZM32 21H29V16H27V21H19V16H17V21H9V16H7V21H4V15H32V21ZM32 13H24V9H22V13H14V9H12V13H4V9C4 8.45 4.45 8 5 8H31C31.55 8 32 8.45 32 9V13Z" />\n',

  outlineAlerted:
    '<path d="M26.9039 1.64597L21.2222 11.1156C20.9526 11.4981 20.9281 11.9946 21.1588 12.4002C21.3896 12.8058 21.8363 13.0517 22.3148 13.0364H33.6881C34.1666 13.0517 34.6134 12.8058 34.8441 12.4002C35.0748 11.9946 35.0503 11.4981 34.7808 11.1156L29.0991 1.64597C28.8711 1.26889 28.4532 1.03711 28.0015 1.03711C27.5497 1.03711 27.1319 1.26889 26.9039 1.64597Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M21.9594 6H5C3.35 6 2 7.35 2 9V27C2 28.65 3.35 30 5 30H31C32.65 30 34 28.65 34 27V15.0263C33.8886 15.0354 33.7763 15.0389 33.6637 15.0367H32V21H29V16H27V21H19V16H17V21H9V16H7V21H4V15H21.7777C20.8082 14.8531 19.9268 14.2793 19.4206 13.3893C19.3485 13.2627 19.2858 13.1326 19.2325 13H14V9H12V13H4V9C4 8.45 4.45 8 5 8H20.7594L21.9594 6ZM31 28C31.55 28 32 27.55 32 27V23H4V27C4 27.55 4.45 28 5 28H12V24H14V28H22V24H24V28H31Z" />\n',

  outlineBadged:
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M24 9.60759V13H32V12.7101C32.7224 12.4951 33.396 12.1666 34 11.7453V27C34 28.65 32.65 30 31 30H5C3.35 30 2 28.65 2 27V9C2 7.35 3.35 6 5 6H23C23 6.69497 23.1013 7.36629 23.2899 8H5C4.45 8 4 8.45 4 9V13H12V9H14V13H22V9H23.6736C23.7726 9.2084 23.8816 9.41114 24 9.60759ZM31 28C31.55 28 32 27.55 32 27V23H4V27C4 27.55 4.45 28 5 28H12V24H14V28H22V24H24V28H31ZM29 21H32V15H4V21H7V16H9V21H17V16H19V21H27V16H29V21Z" />\n',

  solid:
    '<path d="M31 6H5C3.35 6 2 7.35 2 9V27C2 28.65 3.35 30 5 30H31C32.65 30 34 28.65 34 27V9C34 7.35 32.65 6 31 6ZM14 28H12V25H14V28ZM24 28H22V25H24V28ZM32 23H4V21H7V17H9V21H17V17H19V21H27V17H29V21H32V23ZM32 15H4V13H12V9H14V13H22V9H24V13H32V15Z" />\n',

  solidAlerted:
    '<path d="M26.9039 1.64597L21.2222 11.1156C20.9526 11.4981 20.9281 11.9946 21.1588 12.4002C21.3896 12.8058 21.8363 13.0517 22.3148 13.0364H33.6881C34.1666 13.0517 34.6134 12.8058 34.8441 12.4002C35.0748 11.9946 35.0503 11.4981 34.7808 11.1156L29.0991 1.64597C28.8711 1.26889 28.4532 1.03711 28.0015 1.03711C27.5497 1.03711 27.1319 1.26889 26.9039 1.64597Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M21.9594 6H5C3.35 6 2 7.35 2 9V27C2 28.65 3.35 30 5 30H31C32.65 30 34 28.65 34 27V15.0263C33.8886 15.0354 33.7763 15.0389 33.6637 15.0367H22.3395C22.1504 15.0405 21.9624 15.028 21.7777 15H4V13H12V9H14V13H19.2325C18.8413 12.0282 18.9503 10.9218 19.5362 10.0387L21.9594 6ZM12 28H14V25H12V28ZM22 28H24V25H22V28ZM4 23H32V21H29V17H27V21H19V17H17V21H9V17H7V21H4V23Z" />\n',

  solidBadged:
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M34 11.7453C32.8662 12.5362 31.4872 13 30 13C27.4537 13 25.2249 11.6404 24 9.60759V13H30H32V15H4V13H12V9H14V13H22V9H23.6736C23.2417 8.09074 23 7.0736 23 6H5C3.35 6 2 7.35 2 9V27C2 28.65 3.35 30 5 30H31C32.65 30 34 28.65 34 27V11.7453ZM12 28H14V25H12V28ZM22 25V28H24V25H22ZM4 23H32V21H29V17H27V21H19V17H17V21H9V17H7V21H4V23Z" />\n',
};

export const firewallIconName = 'firewall';
export const firewallIcon: IconShapeTuple = [firewallIconName, renderIcon(icon)];
