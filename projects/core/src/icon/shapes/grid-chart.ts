/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M4 17H15C16.1046 17 17 16.1046 17 15V8C17 6.89543 16.1046 6 15 6H4C2.89543 6 2 6.89543 2 8V15C2 16.1046 2.89543 17 4 17ZM4 15V8H15V15H4ZM15 30H4C2.89543 30 2 29.1046 2 28V21C2 19.8954 2.89543 19 4 19H15C16.1046 19 17 19.8954 17 21V28C17 29.1046 16.1046 30 15 30ZM21 17H32C33.1046 17 34 16.1046 34 15V8C34 6.89543 33.1046 6 32 6H21C19.8954 6 19 6.89543 19 8V15C19 16.1046 19.8954 17 21 17ZM21 8V15H32V8H21ZM4 28V21H15V28H4ZM32 30H21C19.8954 30 19 29.1046 19 28V21C19 19.8954 19.8954 19 21 19H32C33.1046 19 34 19.8954 34 21V28C34 29.1046 33.1046 30 32 30ZM21 28V21H32V28H21Z"/>',

  outlineAlerted:
    '<path d="M26.8962 1.61105L21.2145 11.0807C20.9449 11.4632 20.9205 11.9597 21.1512 12.3653C21.3819 12.7709 21.8286 13.0168 22.3071 13.0015H33.6805C34.1589 13.0168 34.6057 12.7709 34.8364 12.3653C35.0671 11.9597 35.0426 11.4632 34.7731 11.0807L29.0914 1.61105C28.8634 1.23397 28.4455 1.0022 27.9938 1.0022C27.542 1.0022 27.1242 1.23397 26.8962 1.61105Z"/><path d="M21.9305 6H21C19.8954 6 19 6.89543 19 8V11.5736C19.0345 11.0227 19.2119 10.4805 19.5283 10.0036L21.9305 6Z"/><path d="M19 11.9731V15C19 16.1046 19.8954 17 21 17H32C33.1046 17 34 16.1046 34 15V14.9905C33.886 15.0001 33.7712 15.0038 33.6559 15.0015H22.3317C22.2693 15.0028 22.2072 15.0023 22.1452 15H21V14.7508C20.3463 14.4804 19.7805 14.0007 19.4127 13.3542C19.1666 12.9216 19.0299 12.4491 19 11.9731Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M15 17H4C2.89543 17 2 16.1046 2 15V8C2 6.89543 2.89543 6 4 6H15C16.1046 6 17 6.89543 17 8V15C17 16.1046 16.1046 17 15 17ZM4 8V15H15V8H4Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4 30H15C16.1046 30 17 29.1046 17 28V21C17 19.8954 16.1046 19 15 19H4C2.89543 19 2 19.8954 2 21V28C2 29.1046 2.89543 30 4 30ZM4 21V28H15V21H4Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M21 30H32C33.1046 30 34 29.1046 34 28V21C34 19.8954 33.1046 19 32 19H21C19.8954 19 19 19.8954 19 21V28C19 29.1046 19.8954 30 21 30ZM21 21V28H32V21H21Z"/>',

  outlineBadged:
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z"/><path d="M32 12.7101V15H21V8H23.2899C23.1013 7.36629 23 6.69497 23 6H21C19.8954 6 19 6.89543 19 8V15C19 16.1046 19.8954 17 21 17H32C33.1046 17 34 16.1046 34 15V11.7453C33.396 12.1666 32.7224 12.4951 32 12.7101Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M15 17H4C2.89543 17 2 16.1046 2 15V8C2 6.89543 2.89543 6 4 6H15C16.1046 6 17 6.89543 17 8V15C17 16.1046 16.1046 17 15 17ZM4 8V15H15V8H4Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4 30H15C16.1046 30 17 29.1046 17 28V21C17 19.8954 16.1046 19 15 19H4C2.89543 19 2 19.8954 2 21V28C2 29.1046 2.89543 30 4 30ZM4 21V28H15V21H4Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M21 30H32C33.1046 30 34 29.1046 34 28V21C34 19.8954 33.1046 19 32 19H21C19.8954 19 19 19.8954 19 21V28C19 29.1046 19.8954 30 21 30ZM21 21V28H32V21H21Z"/>',

  solid:
    '<path d="M4 17H15C16.105 17 17 16.105 17 15V8C17 6.895 16.105 6 15 6H4C2.895 6 2 6.895 2 8V15C2 16.105 2.895 17 4 17Z"/><path d="M21 17H32C33.105 17 34 16.105 34 15V8C34 6.895 33.105 6 32 6H21C19.895 6 19 6.895 19 8V15C19 16.105 19.895 17 21 17Z"/><path d="M15 30H4C2.895 30 2 29.105 2 28V21C2 19.895 2.895 19 4 19H15C16.105 19 17 19.895 17 21V28C17 29.105 16.105 30 15 30Z"/><path d="M21 30H32C33.105 30 34 29.105 34 28V21C34 19.895 33.105 19 32 19H21C19.895 19 19 19.895 19 21V28C19 29.105 19.895 30 21 30Z"/>',

  solidAlerted:
    '<path d="M26.9118 1.61496L21.2301 11.0846C20.9605 11.4671 20.9361 11.9636 21.1668 12.3692C21.3975 12.7748 21.8443 13.0207 22.3227 13.0054H33.6961C34.1745 13.0207 34.6213 12.7748 34.852 12.3692C35.0827 11.9636 35.0583 11.4671 34.7887 11.0846L29.107 1.61496C28.879 1.23788 28.4612 1.0061 28.0094 1.0061C27.5576 1.0061 27.1398 1.23788 26.9118 1.61496Z"/><path d="M21.9484 6L19.544 10.0075C18.8781 11.011 18.8282 12.303 19.4283 13.3581C20.0311 14.4177 21.1655 15.0291 22.3473 15.0054H33.6715C33.7815 15.0076 33.8912 15.0043 34 14.9957V15C34 16.105 33.105 17 32 17H21C19.895 17 19 16.105 19 15V8C19 6.895 19.895 6 21 6H21.9484Z"/><path d="M15 17H4C2.895 17 2 16.105 2 15V8C2 6.895 2.895 6 4 6H15C16.105 6 17 6.895 17 8V15C17 16.105 16.105 17 15 17Z"/><path d="M4 30H15C16.105 30 17 29.105 17 28V21C17 19.895 16.105 19 15 19H4C2.895 19 2 19.895 2 21V28C2 29.105 2.895 30 4 30Z"/><path d="M32 30H21C19.895 30 19 29.105 19 28V21C19 19.895 19.895 19 21 19H32C33.105 19 34 19.895 34 21V28C34 29.105 33.105 30 32 30Z"/>',

  solidBadged:
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z"/><path d="M34 11.7453C32.8662 12.5362 31.4872 13 30 13C26.134 13 23 9.86599 23 6H21C19.895 6 19 6.895 19 8V15C19 16.105 19.895 17 21 17H32C33.105 17 34 16.105 34 15V11.7453Z"/><path d="M15 17H4C2.895 17 2 16.105 2 15V8C2 6.895 2.895 6 4 6H15C16.105 6 17 6.895 17 8V15C17 16.105 16.105 17 15 17Z"/><path d="M4 30H15C16.105 30 17 29.105 17 28V21C17 19.895 16.105 19 15 19H4C2.895 19 2 19.895 2 21V28C2 29.105 2.895 30 4 30Z"/><path d="M32 30H21C19.895 30 19 29.105 19 28V21C19 19.895 19.895 19 21 19H32C33.105 19 34 19.895 34 21V28C34 29.105 33.105 30 32 30Z"/>',
};

export const gridChartIconName = 'grid-chart';
export const gridChartIcon: IconShapeTuple = [gridChartIconName, renderIcon(icon)];
