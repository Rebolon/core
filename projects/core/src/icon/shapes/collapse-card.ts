/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M33 22.0005H3C2.45 22.0005 2 22.4505 2 23.0005V29.0005C2 29.5505 2.45 30.0005 3 30.0005H33C33.55 30.0005 34 29.5505 34 29.0005V23.0005C34 22.4505 33.55 22.0005 33 22.0005ZM32 28.0005H4V24.0005H32V28.0005ZM18 13.5005L23.79 7.71055C23.98 7.52055 24.09 7.27055 24.09 7.00055C24.09 6.73055 23.98 6.48055 23.79 6.29055C23.4 5.90055 22.77 5.90055 22.38 6.29055L18 10.6705L13.62 6.29055C13.23 5.90055 12.6 5.90055 12.21 6.29055C12.02 6.48055 11.91 6.73055 11.91 7.00055C11.91 7.27055 12.02 7.52055 12.21 7.71055L18 13.5005ZM22.38 12.5005L18 16.8705L13.62 12.5005C13.23 12.1105 12.6 12.1105 12.21 12.5005C11.82 12.8905 11.82 13.5205 12.21 13.9105L18 19.7005L23.79 13.9105C24.18 13.5205 24.18 12.8905 23.79 12.5005C23.4 12.1105 22.77 12.1105 22.38 12.5005Z" />\n',
  solid:
    '<path d="M12.21 7.70982L18 13.4998L23.79 7.70982C23.9793 7.52205 24.0858 7.26645 24.0858 6.99982C24.0858 6.73318 23.9793 6.47758 23.79 6.28982C23.3999 5.90209 22.77 5.90209 22.38 6.28982L18 10.6698L13.62 6.28982C13.2299 5.90209 12.6 5.90209 12.21 6.28982C12.0207 6.47758 11.9142 6.73318 11.9142 6.99982C11.9142 7.26645 12.0207 7.52205 12.21 7.70982Z" /><path d="M18 19.6998L12.21 13.9098C11.8223 13.5197 11.8223 12.8898 12.21 12.4998C12.6 12.1121 13.2299 12.1121 13.62 12.4998L18 16.8698L22.38 12.4998C22.77 12.1121 23.3999 12.1121 23.79 12.4998C24.1777 12.8898 24.1777 13.5197 23.79 13.9098L18 19.6998Z" /><path d="M2 22.9998C2 22.4475 2.44772 21.9998 3 21.9998H33C33.5523 21.9998 34 22.4475 34 22.9998V28.9998C34 29.5521 33.5523 29.9998 33 29.9998H3C2.44772 29.9998 2 29.5521 2 28.9998V22.9998Z" />\n',
};

export const collapseCardIconName = 'collapse-card';
export const collapseCardIcon: IconShapeTuple = [collapseCardIconName, renderIcon(icon)];
