/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M22.1873 4.51759C22.8185 2.98998 24.3033 1.996 25.948 2.00001C28.1836 2.00546 29.9946 3.82706 30 6.07579C30.004 7.73009 29.0158 9.22355 27.4971 9.85848C25.9784 10.4934 24.2289 10.1445 23.0659 8.97471C21.9029 7.80493 21.5561 6.0452 22.1873 4.51759ZM25.948 8.17791C25.1017 8.18192 24.3366 7.67225 24.01 6.88699C23.6833 6.10172 23.8597 5.19584 24.4567 4.59252C25.0537 3.9892 25.9534 3.8075 26.7357 4.13232C27.5179 4.45713 28.0282 5.22434 28.0282 6.07556C28.0282 7.23279 27.0985 8.17245 25.948 8.17791Z" fill="black"/>\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M27.131 18.3724H22.2015C22.1209 18.3791 22.0415 18.3958 21.9649 18.422L25.0113 14.9016C25.569 14.2725 25.816 13.4246 25.6842 12.5922C25.5523 11.7599 25.0555 11.0312 24.3311 10.6076L16.4439 6.04592C16.0944 5.8424 15.6569 5.87383 15.3397 6.12525L10.6369 9.84402C10.4265 10.0066 10.2901 10.2476 10.2585 10.5126C10.227 10.7776 10.303 11.0443 10.4693 11.2522C10.6575 11.4917 10.9448 11.6307 11.2482 11.629C11.466 11.6284 11.6775 11.5551 11.8496 11.4208L16.0594 8.1086L19.1255 9.86386L14.1172 15.5957C12.494 15.7885 10.9519 16.4152 9.65105 17.4105L11.0609 18.8286C13.9227 16.8197 17.8049 17.1653 20.2713 19.6487C22.7378 22.132 23.0776 26.0373 21.0776 28.9139L22.4776 30.332C24.6652 27.4484 24.9625 23.5406 23.2367 20.3557H26.017L25.2578 26.8115C25.2273 27.0733 25.3017 27.3365 25.4644 27.5431C25.6272 27.7496 25.8651 27.8825 26.1254 27.9123H26.2437C26.7452 27.9159 27.1694 27.5404 27.2296 27.0396L28.1169 19.4831C28.1483 19.2017 28.0586 18.9202 27.8704 18.7096C27.6835 18.4956 27.4142 18.3728 27.131 18.3724ZM20.8509 10.8757L23.3353 12.3235C23.5518 12.4444 23.6982 12.6616 23.7297 12.9086C23.7736 13.1551 23.7007 13.4082 23.5325 13.5928L20.4171 17.2025C19.3143 16.4189 18.051 15.8937 16.72 15.6654L20.8509 10.8757Z" fill="black"/>\n' +
    '<path d="M8.68953 27.9049C9.88787 30.4171 12.4117 32.0161 15.1819 32.0181C16.8175 32.016 18.4033 31.4528 19.6776 30.4215L21.0776 31.8297C17.4355 34.9171 12.0497 34.6854 8.68306 31.2964C5.31639 27.9075 5.09013 22.4899 8.16236 18.8289L9.56233 20.2371C7.83047 22.4118 7.49118 25.3926 8.68953 27.9049Z" fill="black"/>\n',
  solid:
    '<path d="M27.3856 2.09963C26.1385 2.09556 25.012 2.85699 24.532 4.02843C24.052 5.19987 24.3132 6.55028 25.1936 7.4492C26.074 8.34812 27.3999 8.61825 28.5525 8.13348C29.705 7.64872 30.4568 6.50466 30.4568 5.23543C30.4568 3.50749 29.0833 2.10516 27.3856 2.09963Z" fill="black"/>\n' +
    '<path d="M15.6539 32.0908C12.8791 32.0887 10.3511 30.4681 9.15074 27.922C7.95042 25.3758 8.29027 22.3548 10.025 20.1506L8.6227 18.7234C5.54542 22.4339 5.77205 27.9246 9.14426 31.3594C12.5165 34.7941 17.9111 35.029 21.5592 31.8998L20.1569 30.4726C18.8805 31.5178 17.2921 32.0886 15.6539 32.0908Z" fill="black"/>\n' +
    '<path d="M22.2703 18.2612H27.5436C27.8444 18.2466 28.1353 18.3724 28.3336 18.6029C28.5221 18.8164 28.612 19.1017 28.5805 19.3869L27.6918 27.0455C27.6315 27.553 27.2065 27.9336 26.7042 27.9299H26.5857C26.0466 27.8619 25.6627 27.3634 25.7266 26.8143L26.487 20.2713H23.7812C25.4957 23.5089 25.1785 27.4701 22.9714 30.3823L21.5593 28.945C23.5735 26.028 23.2358 22.0594 20.7587 19.5383C18.2816 17.0172 14.3823 16.6735 11.5162 18.7235L10.1139 17.2863C11.3937 16.2979 12.9053 15.6673 14.4985 15.4571L20.3446 8.80353L17.5104 7.16527L13.2937 10.5222C12.8628 10.8636 12.2417 10.7848 11.9062 10.3463C11.5708 9.90779 11.6482 9.27556 12.0791 8.93419L16.8093 5.16519C17.1249 4.91483 17.5578 4.88308 17.9054 5.08479L21.7074 7.25573L25.4205 9.45682C25.969 9.78018 26.3459 10.337 26.4473 10.9739C26.5487 11.6107 26.3639 12.2603 25.9438 12.7434L21.6185 17.628C21.8489 17.829 22.0662 18.0401 22.2703 18.2612Z" fill="black"/>\n',
};

export const accessibility1IconName = 'accessibility-1';
export const accessibility1Icon: IconShapeTuple = [accessibility1IconName, renderIcon(icon)];
