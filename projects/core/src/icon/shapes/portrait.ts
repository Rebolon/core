/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M28 2H8C6.89543 2 6 2.89543 6 4V32C6 33.1046 6.89543 34 8 34H28C29.1046 34 30 33.1046 30 32V4C30 2.89543 29.1046 2 28 2ZM28 4V32H8V4H28ZM14.21 26.45C14.5223 26.1385 15.0277 26.1385 15.34 26.45L17.2 28.17V7.83L15.39 9.51C15.0777 9.82151 14.5723 9.82151 14.26 9.51C14.1079 9.36136 14.0222 9.15767 14.0222 8.945C14.0222 8.73233 14.1079 8.52864 14.26 8.38L18 4.91L21.74 8.38C21.9831 8.56365 22.1007 8.8694 22.0435 9.16862C21.9862 9.46784 21.764 9.70857 21.4703 9.78953C21.1767 9.87049 20.8625 9.77762 20.66 9.55L18.8 7.83V28.17L20.66 26.49C20.9723 26.1785 21.4777 26.1785 21.79 26.49C21.9357 26.6453 22.0126 26.8528 22.0032 27.0655C21.9938 27.2783 21.8989 27.4782 21.74 27.62L18 31.09L14.21 27.58C14.0579 27.4314 13.9722 27.2277 13.9722 27.015C13.9722 26.8023 14.0579 26.5986 14.21 26.45Z" fill="black"/>\n',
  solid:
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M8 2H28C29.1046 2 30 2.89543 30 4V32C30 33.1046 29.1046 34 28 34H8C6.89543 34 6 33.1046 6 32V4C6 2.89543 6.89543 2 8 2ZM21.935 26.355C21.5594 25.9491 20.9259 25.9244 20.52 26.3L19 27.71V8.29L20.52 9.7C20.7059 9.86903 20.9487 9.96185 21.2 9.96C21.4772 9.95911 21.7415 9.84322 21.93 9.64C22.3042 9.23634 22.2819 8.60613 21.88 8.23L18 4.64L14.12 8.23C13.8574 8.47294 13.7444 8.83752 13.8235 9.1864C13.9026 9.53528 14.1618 9.81546 14.5035 9.9214C14.8452 10.0273 15.2174 9.94294 15.48 9.7L17 8.29V27.71L15.48 26.3C15.2174 26.0571 14.8452 25.9727 14.5035 26.0786C14.1618 26.1845 13.9026 26.4647 13.8235 26.8136C13.7444 27.1625 13.8574 27.5271 14.12 27.77L18 31.36L21.88 27.77C22.2859 27.3944 22.3106 26.7609 21.935 26.355Z" fill="black"/>\n',
};

export const portraitIconName = 'portrait';
export const portraitIcon: IconShapeTuple = [portraitIconName, renderIcon(icon)];
