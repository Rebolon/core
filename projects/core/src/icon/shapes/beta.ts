/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M24.7229 19.07L25.1028 18.12H27.7819L28.1618 19.07H29.6114L27.1621 13.07H25.7226L23.2834 19.07H24.7229ZM26.4424 14.81L27.3321 17H25.5526L26.4424 14.81ZM10.7873 19.03C11.0172 18.97 11.2371 18.85 11.4271 18.7C11.617 18.55 11.7669 18.36 11.8769 18.14C11.9869 17.92 12.0469 17.69 12.0669 17.45C12.0669 17.11 11.9469 16.79 11.757 16.51C11.557 16.24 11.2871 16.03 10.9672 15.92C11.2271 15.8 11.4371 15.61 11.587 15.38C11.737 15.14 11.8169 14.87 11.8069 14.58C11.7969 14.36 11.737 14.14 11.637 13.95C11.537 13.75 11.3971 13.58 11.2271 13.44C11.0572 13.3 10.8572 13.2 10.6473 13.13C10.4374 13.06 10.2174 13.05 9.9975 13.08H6.99844V19.08H10.0675C10.3074 19.11 10.5473 19.1 10.7873 19.04V19.03ZM8.27804 14.17H9.70759C10.1874 14.17 10.5273 14.43 10.5273 14.82C10.5273 15.21 10.1874 15.49 9.70759 15.49H8.27804V14.17ZM8.27804 18V16.5H9.90753C10.0175 16.48 10.1275 16.48 10.2374 16.5C10.3474 16.53 10.4474 16.58 10.5273 16.65C10.6173 16.72 10.6873 16.81 10.7273 16.91C10.7773 17.01 10.7973 17.12 10.7973 17.23C10.7973 17.34 10.7773 17.45 10.7273 17.55C10.6773 17.65 10.6073 17.74 10.5273 17.81C10.4374 17.88 10.3374 17.93 10.2374 17.96C10.1375 17.99 10.0175 17.99 9.90753 17.96L8.27804 17.99V18ZM20.1943 19.07H21.4839V14.23H23.3233V13.07H18.3249V14.23H20.1943V19.07ZM17.6651 17.91H14.3361V16.59H17.3352V15.43H14.3361V14.23H17.6651V13.07H13.0465V19.07H17.6651V17.91ZM32.9903 8H2.99969C2.44986 8 2 8.45 2 9V23C2 23.55 2.44986 24 2.99969 24H6.99844V29C6.99844 29.4 7.23836 29.77 7.61824 29.92C7.73821 29.97 7.86817 30 7.99813 30C8.25804 30 8.51796 29.9 8.7079 29.71L14.4161 24H33.0003C33.5501 24 34 23.55 34 23V9C34 8.45 33.5501 8 33.0003 8H32.9903ZM31.9906 22H13.9963C13.7263 22 13.4764 22.11 13.2865 22.29L8.99781 26.58V22.99C8.99781 22.44 8.54795 21.99 7.99813 21.99H3.99938V10H31.9906V22Z" />\n',
  solid:
    '<path d="M10.5225 14.82C10.5225 14.43 10.1826 14.17 9.70271 14.17H8.27316V15.49H9.70271C10.1826 15.49 10.5225 15.21 10.5225 14.82ZM10.5225 16.65C10.4325 16.58 10.3325 16.53 10.2325 16.5C10.1226 16.47 10.0126 16.47 9.90265 16.5H8.27316V18L9.90265 17.97C10.0126 17.99 10.1226 17.99 10.2325 17.97C10.3425 17.95 10.4425 17.89 10.5225 17.82C10.6124 17.75 10.6824 17.66 10.7224 17.56C10.7724 17.46 10.7924 17.35 10.7924 17.24C10.7924 17.13 10.7724 17.02 10.7224 16.92C10.6724 16.82 10.6024 16.73 10.5225 16.66V16.65ZM32.9854 8H2.9948C2.44498 8 1.99512 8.45 1.99512 9V23C1.99512 23.55 2.44498 24 2.9948 24H6.99356V29C6.99356 29.4 7.23348 29.77 7.61336 29.92C7.73332 29.97 7.86328 30 7.99324 30C8.25316 30 8.51308 29.9 8.70302 29.71L14.4112 24H32.9954C33.5453 24 33.9951 23.55 33.9951 23V9C33.9951 8.45 33.5453 8 32.9954 8H32.9854ZM11.872 18.13C11.7621 18.35 11.6121 18.54 11.4222 18.69C11.2322 18.84 11.0123 18.96 10.7824 19.02C10.5524 19.08 10.3025 19.1 10.0626 19.06H6.99356V13.06H9.99262C10.2126 13.03 10.4325 13.05 10.6424 13.11C10.8523 13.17 11.0523 13.28 11.2222 13.42C11.3922 13.56 11.5321 13.73 11.6321 13.93C11.7321 14.13 11.7921 14.34 11.8021 14.56C11.8021 14.84 11.7321 15.12 11.5821 15.36C11.4322 15.6 11.2222 15.79 10.9623 15.9C11.2822 16.01 11.5521 16.22 11.7521 16.49C11.952 16.76 12.062 17.09 12.062 17.43C12.052 17.67 11.982 17.91 11.872 18.12V18.13ZM17.6602 14.23H14.3313V15.43H17.3303V16.59H14.3313V17.91H17.6602V19.07H13.0417V13.07H17.6602V14.23ZM21.479 19.07H20.1894V14.23H18.32V13.07H23.3185V14.23H21.479V19.07ZM28.1569 19.07L27.7771 18.12H25.0979L24.718 19.07H23.2785L25.7177 13.07H27.1573L29.6065 19.07H28.1569ZM25.5478 17H27.3272L26.4375 14.81L25.5478 17Z" />\n',
};

export const betaIconName = 'beta';
export const betaIcon: IconShapeTuple = [betaIconName, renderIcon(icon)];
