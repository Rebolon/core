/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '  <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0001 10C20.2092 10 22.0001 8.20914 22.0001 6C22.0001 3.79086 20.2092 2 18.0001 2C15.7909 2 14.0001 3.79086 14.0001 6C14.0001 8.20914 15.7909 10 18.0001 10ZM6.06006 11H30.0601C30.6123 11 31.0601 11.4477 31.0601 12C31.0601 12.5523 30.6123 13 30.0601 13H22.0001V22.68L25.7701 32.65C25.8642 32.898 25.8561 33.1732 25.7473 33.4151C25.6385 33.6571 25.4381 33.8459 25.1901 33.94C25.0741 33.9794 24.9525 33.9996 24.8301 34C24.4152 33.9972 24.0452 33.7386 23.9001 33.35L20.3801 24H15.6201L12.1201 33.35C11.9749 33.7386 11.6049 33.9972 11.1901 34C11.0676 33.9996 10.946 33.9794 10.8301 33.94C10.5821 33.8459 10.3816 33.6571 10.2728 33.4151C10.1641 33.1732 10.1559 32.898 10.2501 32.65L14.0001 22.65V13H6.06006C5.50777 13 5.06006 12.5523 5.06006 12C5.06006 11.4477 5.50777 11 6.06006 11ZM20.0001 22V13H16.0001V22H20.0001ZM20.0001 6C20.0001 4.89543 19.1046 4 18.0001 4C16.8955 4 16.0001 4.89543 16.0001 6C16.0001 7.10457 16.8955 8 18.0001 8C19.1046 8 20.0001 7.10457 20.0001 6Z" fill="black"/>\n',
  solid:
    '  <path d="M20.96 4.95687C20.96 6.5899 19.6169 7.91373 17.96 7.91373C16.3031 7.91373 14.96 6.5899 14.96 4.95687C14.96 3.32383 16.3031 2 17.96 2C19.6169 2 20.96 3.32383 20.96 4.95687Z" fill="black"/>\n' +
    '  <path d="M6 9.88498H30C30.5523 9.88498 31 10.3263 31 10.8706C31 11.4149 30.5523 11.8562 30 11.8562H22V20.1355L25.95 32.7613C26.1126 33.2811 25.8173 33.8325 25.29 33.9933C25.1935 34.0022 25.0965 34.0022 25 33.9933C24.5436 34.0125 24.1321 33.7245 24 33.2935L20.73 22.5699H15.35L12.06 33.2541C11.9279 33.6851 11.5164 33.9731 11.06 33.9539C10.9635 33.9628 10.8665 33.9628 10.77 33.9539C10.2427 33.7931 9.94736 33.2417 10.11 32.7218L14 20.096V11.8562H6C5.44772 11.8562 5 11.4149 5 10.8706C5 10.3263 5.44772 9.88498 6 9.88498Z" fill="black"/>\n',
};

export const accessibility2IconName = 'accessibility-2';
export const accessibility2Icon: IconShapeTuple = [accessibility2IconName, renderIcon(icon)];
