/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '  <path fill-rule="evenodd" clip-rule="evenodd" d="M28.993 8H9.85876C9.34323 7.99269 8.85308 7.77496 8.50196 7.3973C8.15085 7.01964 7.96927 6.51486 7.99932 6C7.99674 4.94787 8.80953 4.07365 9.85876 4H28.993C29.5451 4 29.9927 3.55228 29.9927 3C29.9927 2.44772 29.5451 2 28.993 2H9.85876C7.70513 2.07545 5.99861 3.8444 5.99993 6C5.99026 6.16319 5.99026 6.32681 5.99993 6.49C5.9903 6.56971 5.9903 6.65029 5.99993 6.73V30C5.99861 32.1556 7.70513 33.9246 9.85876 34H28.993C29.5451 34 29.9927 33.5523 29.9927 33V9.07C29.9939 8.50535 29.5563 8.03694 28.993 8ZM27.9933 32H9.85878C8.80954 31.9263 7.99676 31.0521 7.99934 30V9.54999C8.56776 9.86366 9.20988 10.0191 9.85878 9.99999H27.9933V32Z" fill="black"/>\n' +
    '  <path d="M27.9933 5.20001H9.99873V6.75001H27.9933V5.20001Z" fill="black"/>\n',
  solid:
    '  <path d="M9.85876 8H28.993C29.5563 8.03694 29.9939 8.50535 29.9927 9.07V33C29.9927 33.5523 29.5451 34 28.993 34H9.85876C7.70513 33.9246 5.99861 32.1556 5.99993 30V6.73C5.9903 6.65029 5.9903 6.56971 5.99993 6.49C5.99026 6.32681 5.99026 6.16319 5.99993 6C5.99861 3.8444 7.70513 2.07545 9.85876 2H28.993C29.5451 2 29.9927 2.44772 29.9927 3C29.9927 3.55228 29.5451 4 28.993 4H9.85876C8.80953 4.07365 7.99674 4.94787 7.99932 6C7.96927 6.51486 8.15085 7.01964 8.50196 7.3973C8.85308 7.77496 9.34323 7.99269 9.85876 8Z" fill="black"/>\n' +
    '  <path d="M27.9933 5.20001H9.99873V6.75001H27.9933V5.20001Z" fill="black"/>\n',
};

export const bookIconName = 'book';
export const bookIcon: IconShapeTuple = [bookIconName, renderIcon(icon)];
