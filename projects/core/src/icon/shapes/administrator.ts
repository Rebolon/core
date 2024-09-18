/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M14.0002 14C17.3102 14 20.0002 11.31 20.0002 8C20.0002 4.69 17.3102 2 14.0002 2C10.6902 2 8.00023 4.69 8.00023 8C8.00023 11.31 10.6902 14 14.0002 14ZM14.0002 4C16.2102 4 18.0002 5.79 18.0002 8C18.0002 10.21 16.2102 12 14.0002 12C11.7902 12 10.0002 10.21 10.0002 8C10.0002 5.79 11.7902 4 14.0002 4ZM24.8302 21.08C22.7102 21.1 21.0102 22.84 21.0302 24.96C21.0502 27.08 22.7802 28.78 24.9002 28.76C27.0202 28.74 28.7202 27.01 28.7102 24.89C28.6802 22.77 26.9502 21.07 24.8302 21.08ZM26.4402 26.5C26.0102 26.93 25.4302 27.16 24.8302 27.16C23.6002 27.14 22.6202 26.13 22.6302 24.9C22.6302 23.67 23.6302 22.68 24.8602 22.68C26.0902 22.68 27.0902 23.66 27.1102 24.89C27.1102 25.49 26.8702 26.08 26.4402 26.5ZM16.2202 17.7L17.5802 16.4C17.5802 16.4 17.6202 16.37 17.6402 16.35C16.5302 16.13 15.3102 15.99 13.9902 15.99C8.60023 15.99 4.90023 18.2 3.18023 19.52C2.42023 20.1 1.99023 20.97 1.99023 21.91V26.98C1.99023 27.53 2.44023 27.98 2.99023 27.98C3.54023 27.98 3.99023 27.53 3.99023 26.98V21.91C3.99023 21.59 4.14023 21.3 4.39023 21.11C5.92023 19.94 9.19023 17.99 13.9902 17.99C14.6502 17.99 15.2702 18.03 15.8702 18.1C15.9702 17.96 16.0902 17.82 16.2202 17.69V17.7ZM33.2902 22.93L31.7302 22.47C31.6602 22.26 31.5702 22.05 31.4702 21.84L32.1902 20.51C32.4202 20.07 32.3402 19.52 31.9802 19.17L30.6402 17.85C30.2902 17.5 29.7402 17.41 29.3002 17.65L27.9602 18.36C27.7402 18.26 27.5202 18.16 27.2902 18.08L26.8202 16.6C26.6602 16.14 26.2202 15.84 25.7402 15.84H23.8202C23.3202 15.84 22.8902 16.17 22.7402 16.64L22.3002 18.07C22.0702 18.15 21.8402 18.25 21.6202 18.35L20.3002 17.65C19.8602 17.42 19.3202 17.49 18.9702 17.84L17.6002 19.15C17.2402 19.5 17.1502 20.05 17.3902 20.5L18.0902 21.78C17.9802 21.99 17.8902 22.21 17.8102 22.43L16.4002 22.89C15.9202 23.03 15.5902 23.48 15.5902 23.98V25.85C15.6102 26.34 15.9402 26.75 16.4102 26.89L17.8802 27.33C17.9602 27.54 18.0502 27.76 18.1602 27.97L17.4402 29.32C17.2002 29.76 17.2802 30.31 17.6402 30.67L18.9802 31.99C19.3302 32.34 19.8802 32.42 20.3202 32.19L21.6902 31.47C21.9002 31.56 22.1102 31.65 22.3202 31.73L22.7602 33.2C22.9102 33.68 23.3502 34 23.8502 34H25.7502C26.2402 34 26.6702 33.67 26.8202 33.2L27.2602 31.73C27.4702 31.66 27.6802 31.57 27.8802 31.48L29.2602 32.21C29.7002 32.44 30.2402 32.36 30.5902 32.01L31.9302 30.69C32.2902 30.34 32.3802 29.79 32.1402 29.34L31.4102 28C31.5002 27.8 31.5902 27.6 31.6602 27.4L33.1602 26.96C33.6402 26.83 33.9802 26.39 33.9902 25.89V24.03C34.0102 23.55 33.7302 23.11 33.2902 22.93ZM30.3902 26.11L30.2702 26.53C30.1602 26.91 30.0102 27.27 29.8202 27.62L29.6102 28L30.6102 29.79L29.7502 30.63L27.9302 29.63L27.5602 29.83C27.2002 30.02 26.8302 30.18 26.4402 30.29L26.0202 30.41L25.4302 32.41H24.2002L23.6102 30.46L23.1902 30.34C22.8002 30.23 22.4202 30.08 22.0602 29.89L21.6902 29.69L19.8802 30.69L19.0202 29.84L20.0202 28.02L19.8002 27.64C19.6002 27.28 19.4302 26.9 19.3102 26.51L19.1802 26.1L17.2302 25.52V24.31L19.1702 23.73L19.2902 23.32C19.4102 22.92 19.5702 22.54 19.7802 22.18L20.0002 21.79L19.0002 20.06L19.8702 19.22L21.6402 20.16L22.0202 19.95C22.3902 19.74 22.7802 19.58 23.1902 19.46L23.6002 19.34L24.1902 17.43H25.4202L26.0002 19.33L26.4102 19.45C26.8102 19.57 27.2002 19.73 27.5702 19.93L27.9502 20.14L29.7502 19.19L30.6102 20.04L29.6102 21.81L29.8202 22.19C30.0202 22.55 30.1802 22.93 30.2902 23.32L30.4102 23.74L32.3402 24.31L32.3902 25.53L30.3902 26.11Z" />\n',
  solid:
    '<path d="M14.0021 13.9963C17.3127 13.9963 20.0032 11.3071 20.0032 7.99813C20.0032 4.68916 17.3127 2 14.0021 2C10.6914 2 8.00092 4.68916 8.00092 7.99813C8.00092 11.3071 10.6914 13.9963 14.0021 13.9963ZM33.8559 23.6532L31.8555 23.0534C31.7155 22.5636 31.5155 22.1037 31.2754 21.6539L32.2756 19.8144C32.3556 19.6745 32.3256 19.4945 32.2056 19.3746L30.7253 17.935C30.6153 17.8151 30.4353 17.7851 30.2852 17.865L28.4349 18.8547C27.9848 18.5948 27.5047 18.3849 27.0046 18.2349L26.3945 16.2555C26.3445 16.1056 26.1944 16.0056 26.0344 16.0056H24.034C23.874 16.0056 23.734 16.1156 23.684 16.2655L23.0738 18.2449C22.5737 18.3949 22.0936 18.5948 21.6336 18.8447L19.8132 17.855C19.6632 17.7751 19.4931 17.8051 19.3731 17.925L17.9028 19.3546C17.7828 19.4645 17.7528 19.6445 17.8328 19.7944L18.833 21.5939C18.573 22.0437 18.3729 22.5236 18.2229 23.0234L16.2225 23.6232C16.0725 23.6732 15.9625 23.8132 15.9625 23.9731V25.9525C15.9625 26.1125 16.0725 26.2524 16.2225 26.3024L18.2229 26.9022C18.3729 27.3921 18.573 27.8619 18.833 28.3018L17.8328 30.1812C17.7528 30.3212 17.7828 30.5011 17.9028 30.6211L19.3131 32.1106C19.4231 32.2306 19.6032 32.2605 19.7532 32.1806L21.6236 31.1909C22.0636 31.4308 22.5337 31.6207 23.0138 31.7607L23.6239 33.7401C23.674 33.89 23.814 34 23.974 34H25.9744C26.1344 34 26.2745 33.89 26.3245 33.7401L26.9346 31.7607C27.4147 31.6207 27.8748 31.4308 28.3149 31.1909L30.2052 32.1806C30.3552 32.2605 30.5253 32.2306 30.6453 32.1106L32.0956 30.671C32.2156 30.5611 32.2456 30.3811 32.1656 30.2312L31.1654 28.3718C31.4055 27.9319 31.6055 27.472 31.7455 26.9922L33.7459 26.3924C33.8959 26.3424 34.006 26.2024 34.006 26.0425V24.0131C34.026 23.8732 33.9659 23.7332 33.8559 23.6532ZM25.0342 28.3318C23.684 28.3418 22.4637 27.542 21.9436 26.3124C21.4235 25.0828 21.6936 23.6532 22.6438 22.7035C23.5939 21.7538 25.0242 21.4639 26.2645 21.9738C27.5047 22.4836 28.3249 23.6932 28.3249 25.0228C28.3249 26.8322 26.8546 28.3118 25.0342 28.3218V28.3318ZM15.6824 21.7138L16.5126 21.4639L16.1125 20.7341C15.6124 19.8044 15.8024 18.6448 16.5526 17.925L18.0129 16.5055C18.0129 16.5055 18.0529 16.4755 18.0729 16.4555C16.8526 16.1856 15.5024 16.0056 14.0121 16.0056C8.62104 16.0056 4.92033 18.2149 3.2 19.5345C2.43985 20.1143 2.00977 20.9841 2.00977 21.9238V26.9922C2.00977 27.542 2.45985 27.9919 3.00996 27.9919H15.2023C14.4822 27.582 14.0221 26.8222 14.0121 25.9525V23.9531C14.0121 22.9235 14.6922 22.0237 15.6924 21.7138H15.6824Z" />\n',
};

export const administratorIconName = 'administrator';
export const administratorIcon: IconShapeTuple = [administratorIconName, renderIcon(icon)];
