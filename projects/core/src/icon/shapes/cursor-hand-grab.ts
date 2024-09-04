/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '  <path d="M28.6213 11H28.3715C27.8819 11 27.4123 11.11 26.9926 11.3C26.9526 9.47 25.4038 8 23.5052 8C22.9057 8 22.3461 8.16 21.8565 8.42C21.4368 7.03 20.1678 6 18.6389 6H18.3891C16.5505 6 15.0617 7.48 15.0217 9.3C14.602 9.11 14.1324 9 13.6427 9H13.3929C11.5344 9 10.0155 10.51 10.0155 12.38V14.06C3.44051 17.1 3.41054 20.73 4.58964 24.13C4.75951 24.8 6.32832 30.74 10.4552 33.8C10.625 33.93 10.8349 34 11.0547 34H25.5637C25.7835 34 26.0033 33.92 26.1832 33.79C29.8804 30.9 31.9988 26.56 31.9988 21.88V14.03V14.37C31.9988 12.51 30.4899 10.99 28.6213 10.99V11ZM30.0003 14.04V21.89C30.0003 25.83 28.2616 29.5 25.2139 32.01H11.3945C7.89712 29.2 6.53816 23.68 6.52816 23.62C6.52816 23.59 6.50818 23.55 6.49819 23.52C5.23914 19.94 6.38827 18.24 10.0155 16.29V23.01C10.0155 23.56 10.4652 24.01 11.0147 24.01C11.5643 24.01 12.014 23.56 12.014 23.01V12.38C12.014 11.62 12.6335 11 13.3929 11H13.6427C14.4022 11 15.0217 11.62 15.0217 12.38V16H17.0202V9.38C17.0202 8.62 17.6397 8 18.3991 8H18.6489C19.4084 8 20.0279 8.62 20.0279 9.38V16H22.0264V11.38C22.0264 10.62 22.6959 10 23.5252 10C24.3546 10 25.0241 10.62 25.0241 11.38V14.38V14V16H27.0226V14V14.38C27.0226 13.62 27.6421 13 28.4015 13H28.6513C29.4107 13 30.0303 13.62 30.0303 14.38V14.04H30.0003Z" fill="black"/>\n',
};

export const cursorHandGrabIconName = 'cursor-hand-grab';
export const cursorHandGrabIcon: IconShapeTuple = [cursorHandGrabIconName, renderIcon(icon)];
