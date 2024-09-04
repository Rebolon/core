/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '  <path d="M13.05 20.9931H17.7V19.9638H14.17V18.3548H17.36V17.3254H14.17V15.8363H17.7V14.807H13.05V20.9831V20.9931ZM10.24 19.1543L6.97 14.807H5.85V20.9831H6.97V16.6358L10.24 20.9831H11.36V14.807H10.24V19.1543ZM25.14 19.2342L23.68 14.807H22.47L21 19.2342L19.68 14.807H18.45L20.41 20.9831H21.53L23.09 16.396L24.64 20.9831H25.76L27.71 14.807H26.49L25.16 19.2342H25.14ZM31.09 17.985L33.92 11.3791C34.05 11.0693 34.02 10.7195 33.84 10.4397C33.65 10.1599 33.34 9.98999 33.01 9.98999H3C2.45 9.99998 2 10.4497 2 10.9994V24.9906C2 25.5403 2.45 25.99 3 25.99H33C33.34 25.99 33.65 25.8201 33.83 25.5403C34.01 25.2604 34.05 24.9007 33.91 24.6009L31.08 17.995L31.09 17.985ZM4 23.9912V11.9987H31.48L29.08 17.6052C28.97 17.8551 28.97 18.1449 29.08 18.3947L31.48 24.0012H4V23.9912Z" fill="black"/>\n',
  solid:
    '  <path d="M31.09 18L33.92 11.39C34.05 11.08 34.02 10.73 33.84 10.45C33.65 10.17 33.34 10 33.01 10H3C2.45 10 2 10.45 2 11V25C2 25.55 2.45 26 3 26H33C33.34 26 33.65 25.83 33.83 25.55C34.01 25.27 34.05 24.91 33.91 24.61L31.08 18H31.09ZM11.36 21H10.24L6.97 16.65V21H5.85V14.82H6.97L10.24 19.17V14.82H11.36V21ZM17.71 15.84H14.18V17.33H17.37V18.36H14.18V19.97H17.71V21H13.06V14.82H17.71V15.85V15.84ZM25.75 21H24.63L23.08 16.41L21.52 21H20.4L18.44 14.82H19.67L20.99 19.25L22.46 14.82H23.67L25.13 19.25L26.46 14.82H27.68L25.73 21H25.75Z" fill="black"/>\n',
};

export const newIconName = 'new';
export const newIcon: IconShapeTuple = [newIconName, renderIcon(icon)];
