/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M14.9375 25H16.9375V23H14.9375V25ZM33.9375 6H3.9375C3.3875 6 2.9375 6.45 2.9375 7V21C2.9375 23.76 5.1775 26 7.9375 26H8.1975C8.0275 25.36 7.9375 24.69 7.9375 24C6.2875 24 4.9375 22.65 4.9375 21V12H26.9375V21C26.9375 22.65 25.5875 24 23.9375 24C23.9375 24.69 23.8375 25.36 23.6775 26H23.9375C26.6975 26 28.9375 23.76 28.9375 21V8H33.9375C34.4875 8 34.9375 7.55 34.9375 7C34.9375 6.45 34.4875 6 33.9375 6ZM26.9375 10H4.9375V8H26.9375V10ZM15.9375 18C12.6275 18 9.9375 20.69 9.9375 24C9.9375 27.31 12.6275 30 15.9375 30C19.2475 30 21.9375 27.31 21.9375 24C21.9375 20.69 19.2475 18 15.9375 18ZM15.9375 28C13.7275 28 11.9375 26.21 11.9375 24C11.9375 21.79 13.7275 20 15.9375 20C18.1475 20 19.9375 21.79 19.9375 24C19.9375 26.21 18.1475 28 15.9375 28Z" fill="black"/>\n',
  solid:
    '<path d="M33.9375 6H3.9375C3.3875 6 2.9375 6.45 2.9375 7V21C2.9375 23.76 5.1775 26 7.9375 26H8.1975C8.0275 25.36 7.9375 24.69 7.9375 24C6.2875 24 4.9375 22.65 4.9375 21V12H26.9375V21C26.9375 22.65 25.5875 24 23.9375 24C23.9375 24.69 23.8375 25.36 23.6775 26H23.9375C26.6975 26 28.9375 23.76 28.9375 21V8H33.9375C34.4875 8 34.9375 7.55 34.9375 7C34.9375 6.45 34.4875 6 33.9375 6ZM15.9375 18C12.6275 18 9.9375 20.69 9.9375 24C9.9375 27.31 12.6275 30 15.9375 30C19.2475 30 21.9375 27.31 21.9375 24C21.9375 20.69 19.2475 18 15.9375 18ZM17.0375 25.1H14.8375V22.9H17.0375V25.1Z" fill="black"/>\n',
};

export const trailerIconName = 'trailer';
export const trailerIcon: IconShapeTuple = [trailerIconName, renderIcon(icon)];
