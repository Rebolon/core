/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18 2C10.28 2 4 8.28 4 16C4 23.72 9.75 29.43 17 29.95V33C17 33.55 17.45 34 18 34C18.55 34 19 33.55 19 33V21.41L23.71 16.7C24.1 16.31 24.1 15.68 23.71 15.29C23.32 14.9 22.69 14.9 22.3 15.29L19.01 18.58V13.58L15.72 10.29C15.33 9.9 14.7 9.9 14.31 10.29C13.92 10.68 13.92 11.31 14.31 11.7L17.02 14.41V21.58L13.73 18.29C13.34 17.9 12.71 17.9 12.32 18.29C11.93 18.68 11.93 19.31 12.32 19.7L17.03 24.41V27.95C10.88 27.44 6.03 22.28 6.03 16C6 9.38 11.38 4 18 4C24.62 4 30 9.38 30 16C30 21.58 26.17 26.27 21 27.61V29.67C27.28 28.29 32 22.69 32 16C32 8.28 25.72 2 18 2Z" fill="black"/>\n',
  solid:
    '<path d="M15.0139 29.95V33C15.0139 33.55 15.4644 34 16.015 34C16.5656 34 17.0161 33.55 17.0161 33V29.95C16.6857 29.97 16.3554 30 16.015 30C15.6747 30 15.3443 29.97 15.0139 29.95ZM16.015 2C8.28674 2 2 8.28 2 16C2 23.72 7.75617 29.43 15.0139 29.95V24.91L9.79836 19.7C9.40794 19.31 9.40794 18.68 9.79836 18.29C10.1888 17.9 10.8194 17.9 11.2099 18.29L15.0039 22.08V14.41L12.291 11.7C11.9006 11.31 11.9006 10.68 12.291 10.29C12.6814 9.9 13.3121 9.9 13.7025 10.29L16.9961 13.58V18.58L20.2896 15.29C20.68 14.9 21.3107 14.9 21.7011 15.29C22.0915 15.68 22.0915 16.31 21.7011 16.7L16.9861 21.41V29.95C24.2438 29.43 30 23.38 30 16C30 8.62 23.7433 2 16.015 2Z" fill="black"/>\n',
};

export const treeIconName = 'tree';
export const treeIcon: IconShapeTuple = [treeIconName, renderIcon(icon)];
