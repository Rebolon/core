/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '  <path d="M32 12.0386H25.34L26.89 4.26521C26.9417 3.99885 26.886 3.72277 26.735 3.4977C26.584 3.27263 26.3502 3.117 26.085 3.06506C25.8198 3.01312 25.5449 3.06912 25.3208 3.22074C25.0967 3.37236 24.9417 3.60717 24.89 3.87353L23.3 12.0386H15.11L16.66 4.26521C16.6856 4.13333 16.6851 3.99766 16.6585 3.86597C16.6319 3.73428 16.5797 3.60914 16.505 3.4977C16.4302 3.38625 16.3344 3.29069 16.2228 3.21646C16.1113 3.14222 15.9863 3.09078 15.855 3.06506C15.5898 3.01312 15.3149 3.06912 15.0908 3.22074C14.8667 3.37236 14.7117 3.60717 14.66 3.87353L13.07 12.0386H6C5.73478 12.0386 5.48043 12.1444 5.29289 12.3327C5.10536 12.5211 5 12.7765 5 13.0429C5 13.3092 5.10536 13.5647 5.29289 13.753C5.48043 13.9414 5.73478 14.0472 6 14.0472H12.67L11.07 22.0817H4C3.73478 22.0817 3.48043 22.1875 3.29289 22.3758C3.10536 22.5642 3 22.8196 3 23.086C3 23.3524 3.10536 23.6078 3.29289 23.7962C3.48043 23.9845 3.73478 24.0903 4 24.0903H10.66L9.11 31.8637C9.06009 32.1247 9.11521 32.3949 9.26328 32.6151C9.41136 32.8354 9.64032 32.9877 9.9 33.0387C9.9663 33.0486 10.0337 33.0486 10.1 33.0387C10.3339 33.0435 10.5621 32.9656 10.7449 32.8188C10.9276 32.672 11.0532 32.4655 11.1 32.2353L12.7 24.0903H20.89L19.34 31.8637C19.2901 32.1247 19.3452 32.3949 19.4933 32.6151C19.6414 32.8354 19.8703 32.9877 20.13 33.0387C20.193 33.0485 20.257 33.0485 20.32 33.0387C20.5539 33.0435 20.7821 32.9656 20.9649 32.8188C21.1476 32.672 21.2732 32.4655 21.32 32.2353L22.93 24.0903H30C30.2652 24.0903 30.5196 23.9845 30.7071 23.7962C30.8946 23.6078 31 23.3524 31 23.086C31 22.8196 30.8946 22.5642 30.7071 22.3758C30.5196 22.1875 30.2652 22.0817 30 22.0817H23.33L24.94 14.0472H32C32.2652 14.0472 32.5196 13.9414 32.7071 13.753C32.8946 13.5647 33 13.3092 33 13.0429C33 12.7765 32.8946 12.5211 32.7071 12.3327C32.5196 12.1444 32.2652 12.0386 32 12.0386ZM21.29 22.0817H13.1L14.71 14.0472H22.9L21.29 22.0817Z" fill="black"/>\n',
  solid:
    '  <path d="M32.0043 10.0001H26.4284L27.4331 5.17005C27.4578 5.02774 27.4512 4.88179 27.4138 4.74225C27.3764 4.6027 27.3091 4.47288 27.2165 4.3617C27.1239 4.25051 27.0082 4.16062 26.8774 4.09819C26.7465 4.03576 26.6037 4.00228 26.4586 4.00005H24.4493C24.217 3.9944 23.99 4.06904 23.8068 4.21125C23.6236 4.35347 23.4956 4.55447 23.4446 4.78005L22.4198 10.0001H16.9947L17.9993 5.17005C18.0237 5.03096 18.0181 4.88831 17.9831 4.7515C17.948 4.61469 17.8843 4.48681 17.796 4.37629C17.7078 4.26576 17.597 4.17509 17.471 4.11025C17.345 4.0454 17.2066 4.00785 17.065 4.00005H15.0557C14.8234 3.9944 14.5964 4.06904 14.4132 4.21125C14.2301 4.35347 14.1021 4.55447 14.051 4.78005L13.0464 10.0001H7.01839C6.78335 9.99534 6.55409 10.0728 6.37052 10.219C6.18695 10.3652 6.0607 10.5708 6.01373 10.8001L5.60182 12.8001C5.57164 12.947 5.57508 13.0989 5.61187 13.2444C5.64865 13.3898 5.71785 13.5252 5.81434 13.6404C5.91082 13.7557 6.03211 13.8478 6.16924 13.9101C6.30636 13.9723 6.4558 14.0031 6.60648 14.0001H12.1823L10.5347 22.0001H4.50674C4.2717 21.9953 4.04244 22.0728 3.85887 22.219C3.6753 22.3652 3.54904 22.5708 3.50208 22.8001L3.09016 24.8001C3.05999 24.947 3.06343 25.0989 3.10021 25.2444C3.137 25.3898 3.2062 25.5252 3.30268 25.6404C3.39917 25.7557 3.52046 25.8478 3.65758 25.9101C3.79471 25.9723 3.94414 26.0031 4.09483 26.0001H9.71088L8.70622 30.8301C8.6811 30.9749 8.68836 31.1234 8.72748 31.2651C8.76659 31.4068 8.8366 31.5382 8.93252 31.6499C9.02844 31.7616 9.14792 31.8509 9.28245 31.9114C9.41698 31.9719 9.56326 32.0022 9.71088 32.0001H11.7202C11.9438 31.9944 12.1591 31.9145 12.332 31.7733C12.5049 31.632 12.6255 31.4373 12.6746 31.2201L13.7195 26.0001H19.1446L18.14 30.8301C18.1157 30.9692 18.1212 31.1118 18.1562 31.2486C18.1913 31.3854 18.255 31.5133 18.3433 31.6238C18.4315 31.7343 18.5423 31.825 18.6683 31.8899C18.7943 31.9547 18.9327 31.9923 19.0743 32.0001H21.0836C21.3159 32.0057 21.5429 31.9311 21.7261 31.7889C21.9093 31.6466 22.0373 31.4456 22.0883 31.2201L23.1432 26.0001H29.1712C29.4062 26.0048 29.6355 25.9273 29.819 25.7811C30.0026 25.635 30.1288 25.4293 30.1758 25.2001L30.5777 23.2001C30.6079 23.0531 30.6044 22.9012 30.5676 22.7558C30.5308 22.6103 30.4616 22.4749 30.3652 22.3597C30.2687 22.2444 30.1474 22.1523 30.0103 22.09C29.8731 22.0278 29.7237 21.997 29.573 22.0001H23.967L25.6046 14.0001H31.6326C31.8676 14.0048 32.0969 13.9273 32.2804 13.7811C32.464 13.635 32.5903 13.4293 32.6372 13.2001L33.0491 11.2001C33.0803 11.0497 33.0762 10.8941 33.0372 10.7456C32.9982 10.597 32.9254 10.4593 32.8244 10.3433C32.7233 10.2272 32.5968 10.1359 32.4546 10.0764C32.3124 10.0169 32.1583 9.99075 32.0043 10.0001ZM19.9484 22.0001H14.5232L16.1708 14.0001H21.596L19.9484 22.0001Z" fill="black"/>\n',
};

export const hashtagIconName = 'hashtag';
export const hashtagIcon: IconShapeTuple = [hashtagIconName, renderIcon(icon)];
