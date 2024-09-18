/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M11 15H15C15.5523 15 16 15.4477 16 16V20C16 20.5523 15.5523 21 15 21H11C10.4477 21 10 20.5523 10 20V18.8H5.8V27.2H10V26C10 25.4477 10.4477 25 11 25H15C15.5523 25 16 25.4477 16 26V30C16 30.5523 15.5523 31 15 31H11C10.4477 31 10 30.5523 10 30V28.8H4.2V11H3C2.44772 11 2 10.5523 2 10V6C2 5.44772 2.44772 5 3 5H7C7.55228 5 8 5.44772 8 6V10C8 10.5523 7.55228 11 7 11H5.8V17.2H10V16C10 15.4477 10.4477 15 11 15ZM12 29H14V27H12V29ZM6 7H4V9H6V7ZM14 19H12V17H14V19Z" fill="black"/>\n' +
    '<path d="M33 7C33.5523 7 34 7.44772 34 8C34 8.55228 33.5523 9 33 9H10V7H33Z" fill="black"/>\n' +
    '<path d="M33 17H18V19H33C33.5523 19 34 18.5523 34 18C34 17.4477 33.5523 17 33 17Z" fill="black"/>\n' +
    '<path d="M18 27H33C33.5523 27 34 27.4477 34 28C34 28.5523 33.5523 29 33 29H18V27Z" fill="black"/>\n',
  solid:
    '<path d="M15 15H11C10.4477 15 10 15.4477 10 16V17.2H5.8V11H7C7.55228 11 8 10.5523 8 10V6C8 5.44772 7.55228 5 7 5H3C2.44772 5 2 5.44772 2 6V10C2 10.5523 2.44772 11 3 11H4.2V28.8H10V30C10 30.5523 10.4477 31 11 31H15C15.5523 31 16 30.5523 16 30V26C16 25.4477 15.5523 25 15 25H11C10.4477 25 10 25.4477 10 26V27.2H5.8V18.8H10V20C10 20.5523 10.4477 21 11 21H15C15.5523 21 16 20.5523 16 20V16C16 15.4477 15.5523 15 15 15Z" fill="black"/>\n' +
    '<path d="M10 7H33C33.5523 7 34 7.44772 34 8C34 8.55228 33.5523 9 33 9H10V7Z" fill="black"/>\n' +
    '<path d="M33 17H18V19H33C33.5523 19 34 18.5523 34 18C34 17.4477 33.5523 17 33 17Z" fill="black"/>\n' +
    '<path d="M18 27H33C33.5523 27 34 27.4477 34 28C34 28.5523 33.5523 29 33 29H18V27Z" fill="black"/>\n',
};

export const treeViewIconName = 'tree-view';
export const treeViewIcon: IconShapeTuple = [treeViewIconName, renderIcon(icon)];
