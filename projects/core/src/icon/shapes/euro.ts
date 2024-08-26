/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '  <path d="M30.297 26.49C28.0464 28.75 25.0656 30 21.8948 30C18.7239 30 15.7331 28.75 13.4925 26.49C12.1922 25.18 11.2719 23.64 10.7018 22H25.0056C25.5558 22 26.0059 21.55 26.0059 21C26.0059 20.45 25.5558 20 25.0056 20H10.1817C9.9616 18.68 9.9616 17.32 10.1817 16H25.0056C25.5558 16 26.0059 15.55 26.0059 15C26.0059 14.45 25.5558 14 25.0056 14H10.7018C11.2719 12.36 12.1922 10.82 13.4925 9.51C15.7431 7.25 18.7239 6 21.8948 6C25.0656 6 28.0564 7.25 30.297 9.51C30.6871 9.9 31.3173 9.9 31.7074 9.51C32.0975 9.12 32.0975 8.49 31.7074 8.1C29.0967 5.46 25.6058 4 21.8948 4C18.1838 4 14.6929 5.46 12.0722 8.1C10.3817 9.8 9.2214 11.84 8.59123 14H5.00027C4.45012 14 4 14.45 4 15C4 15.55 4.45012 16 5.00027 16H8.16111C7.97106 17.33 7.97106 18.67 8.16111 20H5.00027C4.45012 20 4 20.45 4 21C4 21.55 4.45012 22 5.00027 22H8.58123C9.2114 24.16 10.3717 26.19 12.0622 27.9C14.6829 30.55 18.1738 32 21.8848 32C25.5958 32 29.0867 30.54 31.7074 27.9C32.0975 27.51 32.0975 26.87 31.7074 26.49C31.3173 26.1 30.6771 26.1 30.297 26.49Z" fill="black"/>\n',
  solid:
    '  <path fill-rule="evenodd" clip-rule="evenodd" d="M2 18C2 9.16344 9.16344 2 18 2C22.2435 2 26.3131 3.68571 29.3137 6.68629C32.3143 9.68687 34 13.7565 34 18C34 26.8366 26.8366 34 18 34C9.16344 34 2 26.8366 2 18ZM15.7976 28.0945C18.9749 29.3034 22.5347 28.9577 25.42 27.16V27.12C25.7987 26.8824 26.0219 26.4608 26.0055 26.0141C25.9891 25.5673 25.7356 25.1633 25.3405 24.9541C24.9454 24.7449 24.4687 24.7624 24.09 25C21.9861 26.3219 19.4032 26.6394 17.0417 25.8664C14.6803 25.0934 12.7851 23.3101 11.87 21H21.15C21.7023 21 22.15 20.5523 22.15 20C22.15 19.4477 21.7023 19 21.15 19H11.33C11.2433 18.3362 11.2433 17.6638 11.33 17H21.18C21.7323 17 22.18 16.5523 22.18 16C22.18 15.4477 21.7323 15 21.18 15H11.82C12.6941 12.6508 14.5762 10.8178 16.9476 10.006C19.3191 9.19422 21.9296 9.48932 24.06 10.81C24.6427 11.1367 25.3793 10.9474 25.7324 10.3803C26.0854 9.81326 25.9303 9.06878 25.38 8.69C22.476 6.88678 18.8924 6.55609 15.7075 7.79742C12.5225 9.03875 10.1079 11.7072 9.19 15H5.79C5.23772 15 4.79 15.4477 4.79 16C4.79 16.5523 5.23772 17 5.79 17H8.79V17.93C8.79 18.1113 8.80268 18.2925 8.81526 18.4725C8.82768 18.65 8.84 18.8262 8.84 19H5.84C5.28772 19 4.84 19.4477 4.84 20C4.84 20.5523 5.28772 21 5.84 21H9.23C10.1906 24.261 12.6202 26.8856 15.7976 28.0945Z" fill="black"/>\n'
};

export const euroIconName = 'euro';
export const euroIcon: IconShapeTuple = [euroIconName, renderIcon(icon)];
