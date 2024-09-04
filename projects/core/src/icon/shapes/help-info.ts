/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '  <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0521 6.5C24.0521 8.98528 22.0002 11 19.469 11C16.9378 11 14.8859 8.98528 14.8859 6.5C14.8859 4.01472 16.9378 2 19.469 2C22.0002 2 24.0521 4.01472 24.0521 6.5ZM22.0152 6.5C22.0152 5.11929 20.8752 4 19.469 4C18.0628 4 16.9228 5.11929 16.9228 6.5C16.9228 7.88071 18.0628 9 19.469 9C20.8752 9 22.0152 7.88071 22.0152 6.5Z" fill="black"/>\n' +
    '  <path d="M25.6715 25.45C25.2015 25.1507 24.5736 25.2803 24.266 25.74C22.83 27.9 20.1921 30.55 17.8395 31.44C15.4868 32.33 13.6434 32.01 12.9101 31.44C12.5943 31.17 11.7694 30.44 12.4721 27.95C12.8542 26.5961 14.8624 21.1444 15.9657 18.1491C16.2151 17.472 16.4183 16.9203 16.546 16.57L14.3257 16.85L14.2106 17.1546C13.3719 19.3729 10.9518 25.7742 10.4963 27.43C9.80371 29.92 10.15 31.73 11.6064 32.99C12.624 33.691 13.8474 34.0457 15.0896 34C16.2949 33.9829 17.4865 33.7456 18.6033 33.3C21.4449 32.21 24.429 29.18 25.9974 26.83C26.1411 26.6047 26.1874 26.3325 26.1263 26.0736C26.0651 25.8146 25.9015 25.5903 25.6715 25.45Z" fill="black"/>\n' +
    '  <path d="M14.8395 14.6192C13.2329 14.8251 11.8689 15 11.8407 15L11.8508 15.09C11.2884 15.1618 10.7731 14.7723 10.7 14.22C10.6268 13.6677 11.0236 13.1618 11.586 13.09C11.8508 13.03 18.0024 12.24 19.4588 12.09C20.5804 11.7902 21.7795 12.1074 22.5957 12.92C23.2985 13.74 23.4309 14.94 22.9013 16.52C22.3717 18.1 20.0292 25 18.7765 28.56C18.4049 28.7936 18.0129 28.9944 17.6052 29.16C17.1789 29.3227 16.7394 29.4498 16.2914 29.54C16.7049 28.3175 17.5703 25.7863 18.4527 23.2053C19.5263 20.065 20.6252 16.8509 20.9662 15.83C21.2513 14.95 21.2004 14.3 21.0375 14.15C20.8745 14 20.3755 13.9 19.7135 14C18.9132 14.0969 16.7117 14.3791 14.8395 14.6192Z" fill="black"/>\n',
  solid:
    '  <path d="M26.0898 6.01261C26.0898 8.22871 24.129 10.0252 21.7102 10.0252C19.2914 10.0252 17.3305 8.22871 17.3305 6.01261C17.3305 3.79651 19.2914 2 21.7102 2C24.129 2 26.0898 3.79651 26.0898 6.01261Z" fill="black"/>\n' +
    '  <path d="M25.3551 26.1564C25.6436 26.1017 25.9439 26.1557 26.1884 26.3064C26.6309 26.6059 26.7621 27.1598 26.4949 27.6004C24.9949 29.697 22.1481 32.3654 19.4218 33.3686C18.346 33.7666 17.1987 33.9775 16.0385 33.9905C14.8454 34.0578 13.661 33.7653 12.6662 33.1579C11.5799 32.5093 11.0613 31.3013 11.3742 30.1485C11.4483 29.7985 12.7035 26.4824 13.9301 23.2418C15.0596 20.2577 16.1648 17.3376 16.3013 16.8567C16.5492 16.3115 16.5764 15.7032 16.378 15.1413C16.1898 14.8389 15.8254 14.6661 15.4473 14.6999C15.086 14.73 11.8012 15.1212 11.8012 15.1212C11.1965 15.1572 10.6745 14.7373 10.6352 14.1833C10.5959 13.6293 11.0542 13.1509 11.6589 13.1149C11.7196 13.111 13.0955 12.9499 14.7885 12.7517C17.3733 12.4491 20.6971 12.0599 21.2065 12.0115C24.3051 11.56 24.6007 13.4359 23.9219 15.3419C23.462 16.646 19.2685 28.0418 19.0276 28.6839L18.4473 30.2588C18.4408 30.2846 18.4331 30.3134 18.4247 30.3446C18.3359 30.6774 18.1746 31.2814 18.5349 31.3823C19.0889 31.5776 20.379 30.6805 20.781 30.401C20.7922 30.3932 20.8026 30.3859 20.8124 30.3792C22.3004 29.3094 23.597 28.0335 24.6555 26.5973C24.8145 26.3701 25.0667 26.2112 25.3551 26.1564Z" fill="black"/>\n',
};

export const helpInfoIconName = 'help-info';
export const helpInfoIcon: IconShapeTuple = [helpInfoIconName, renderIcon(icon)];
