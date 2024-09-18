/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M27 7.94745H23.14C22.743 7.20861 22.2224 6.5413 21.6 5.97372H27C27.5523 5.97372 28 5.53189 28 4.98686C28 4.44183 27.5523 4 27 4H9C8.44772 4 8 4.44183 8 4.98686C8 5.53189 8.44772 5.97372 9 5.97372H16.55C18.1795 5.97514 19.7218 6.69994 20.75 7.94745H9C8.44772 7.94745 8 8.38928 8 8.93431C8 9.47934 8.44772 9.92117 9 9.92117H21.79C21.9293 10.406 21.9999 10.9074 22 11.4113C22.0056 14.3904 19.5687 16.8129 16.55 16.8292H10.14C9.74749 16.8297 9.39157 17.0568 9.22996 17.4097C9.06835 17.7627 9.13094 18.1764 9.39 18.4674L21.06 31.6321C21.2906 31.9147 21.6598 32.0496 22.0213 31.9834C22.3828 31.9172 22.6783 31.6605 22.7908 31.3151C22.9033 30.9697 22.8147 30.5912 22.56 30.3295L12.35 18.8029H16.56C18.8024 18.7851 20.9193 17.7792 22.3319 16.0606C23.7445 14.3419 24.305 12.0901 23.86 9.92117H27C27.5523 9.92117 28 9.47934 28 8.93431C28 8.38928 27.5523 7.94745 27 7.94745Z" />\n',
  solid:
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M2 18C2 9.16344 9.16344 2 18 2C22.2435 2 26.3131 3.68571 29.3137 6.68629C32.3143 9.68687 34 13.7565 34 18C34 26.8366 26.8366 34 18 34C9.16344 34 2 26.8366 2 18ZM26 11H23.88C23.6106 10.2602 23.2034 9.57815 22.68 8.99H26C26.5523 8.99 27 8.54228 27 7.99C27 7.43772 26.5523 6.99 26 6.99H12.75C12.0596 6.99 11.5 7.54964 11.5 8.24C11.5 8.93036 12.0596 9.49 12.75 9.49H18.36C19.4763 9.50476 20.5148 10.0651 21.14 10.99H12.82C12.2677 10.99 11.82 11.4377 11.82 11.99C11.82 12.5423 12.2677 12.99 12.82 12.99H21.82V13.19C21.8761 15.1692 20.3191 16.8201 18.34 16.88H13.63C13.134 16.8606 12.6735 17.1366 12.4567 17.5832C12.24 18.0297 12.308 18.5622 12.63 18.94L21.17 29.07C21.4594 29.4112 21.9088 29.5721 22.349 29.4921C22.7892 29.412 23.1532 29.1033 23.304 28.6821C23.4548 28.2608 23.3694 27.7912 23.08 27.45L16.26 19.39H18.26C19.8787 19.3663 21.4215 18.6991 22.5473 17.5358C23.6731 16.3724 24.2894 14.8087 24.26 13.19V13H26C26.5523 13 27 12.5523 27 12C27 11.4477 26.5523 11 26 11Z" />\n',
};

export const rupeeIconName = 'rupee';
export const rupeeIcon: IconShapeTuple = [rupeeIconName, renderIcon(icon)];
