/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M24.283 12.29L19.2746 17.3C18.8847 17.11 18.4549 17 17.985 17C16.3255 17 14.9859 18.34 14.9859 20C14.9859 21.66 16.3255 23 17.985 23C19.6445 23 20.9841 21.66 20.9841 20C20.9841 19.54 20.8741 19.1 20.6842 18.71L25.6926 13.7C26.0825 13.31 26.0825 12.68 25.6926 12.29C25.3027 11.9 24.6729 11.9 24.283 12.29ZM17.995 4C13.6064 4 9.61762 5.78 6.72852 8.66C6.71853 8.67 6.69853 8.67 6.68854 8.69C6.67854 8.71 6.66854 8.72 6.65854 8.73C3.77944 11.62 2 15.61 2 20C2 24.39 3.87941 28.71 7.14839 31.73C7.33833 31.9 7.57826 32 7.82818 32H28.1718C28.4217 32 28.6617 31.91 28.8516 31.73C32.1206 28.7 34 24.43 34 20C33.99 11.18 26.8122 4 17.995 4ZM27.762 30H8.22805C5.73883 27.57 4.28928 24.42 4.04936 21H6.99844C7.54827 21 7.99813 20.55 7.99813 20C7.99813 19.45 7.54827 19 6.99844 19H4.04936C4.26929 15.89 5.5089 13.07 7.4283 10.85L9.50765 12.93C9.70759 13.13 9.95751 13.22 10.2174 13.22C10.4774 13.22 10.7273 13.12 10.9272 12.93C11.3171 12.54 11.3171 11.91 10.9272 11.52L8.84786 9.44C11.0672 7.51 13.8963 6.28 16.9953 6.06V9.01C16.9953 9.56 17.4452 10.01 17.995 10.01C18.5448 10.01 18.9947 9.56 18.9947 9.01V6.06C25.9125 6.55 31.4508 12.09 31.9406 19.01H28.9916C28.4417 19.01 27.9919 19.46 27.9919 20.01C27.9919 20.56 28.4417 21.01 28.9916 21.01H31.9406C31.7007 24.43 30.2512 27.58 27.762 30.01V30Z" fill="black"/>\n',

  outlineBadged:
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" fill="#E02200"/>\n' +
    '<path d="M30.0915 12.9994C31.1319 14.7898 31.7864 16.8315 31.9406 19.01H28.9916C28.4417 19.01 27.9919 19.46 27.9919 20.01C27.9919 20.56 28.4417 21.01 28.9916 21.01H31.9406C31.7007 24.43 30.2512 27.58 27.762 30.01V30H8.22805C5.73883 27.57 4.28928 24.42 4.04936 21H6.99844C7.54827 21 7.99813 20.55 7.99813 20C7.99813 19.45 7.54827 19 6.99844 19H4.04936C4.26929 15.89 5.5089 13.07 7.4283 10.85L9.50765 12.93C9.70759 13.13 9.95751 13.22 10.2174 13.22C10.4774 13.22 10.7273 13.12 10.9272 12.93C11.3171 12.54 11.3171 11.91 10.9272 11.52L8.84786 9.44C11.0672 7.51 13.8963 6.28 16.9953 6.06V9.01C16.9953 9.56 17.4452 10.01 17.995 10.01C18.5448 10.01 18.9947 9.56 18.9947 9.01V6.06C20.4217 6.16108 21.79 6.47705 23.0675 6.97569C23.023 6.65684 23 6.3311 23 6C23 5.60301 23.033 5.21374 23.0965 4.83479C21.4935 4.29353 19.7778 4 17.995 4C13.6064 4 9.61762 5.78 6.72852 8.66C6.7248 8.66372 6.71969 8.66606 6.71423 8.66856C6.70502 8.67277 6.69481 8.67745 6.68854 8.69C6.67854 8.71 6.66854 8.72 6.65854 8.73C3.77944 11.62 2 15.61 2 20C2 24.39 3.87941 28.71 7.14839 31.73C7.33833 31.9 7.57826 32 7.82818 32H28.1718C28.4217 32 28.6617 31.91 28.8516 31.73C32.1206 28.7 34 24.43 34 20C33.997 17.351 33.3474 14.85 32.2011 12.6469C31.5365 12.8669 30.8277 12.99 30.0915 12.9994Z" fill="black"/>\n' +
    '<path d="M19.2746 17.3L24.283 12.29C24.6729 11.9 25.3027 11.9 25.6926 12.29C26.0825 12.68 26.0825 13.31 25.6926 13.7L20.6842 18.71C20.8741 19.1 20.9841 19.54 20.9841 20C20.9841 21.66 19.6445 23 17.985 23C16.3255 23 14.9859 21.66 14.9859 20C14.9859 18.34 16.3255 17 17.985 17C18.4549 17 18.8847 17.11 19.2746 17.3Z" fill="black"/>\n',

  solid:
    '<path d="M18 4C9.18 4 2 11.18 2 20C2 24.43 3.88 28.71 7.15 31.73C7.34 31.9 7.58 32 7.83 32H28.18C28.43 32 28.67 31.91 28.86 31.73C32.13 28.7 34.01 24.43 34.01 20C34 11.18 26.82 4 18 4ZM16.9 7C16.9 6.39 17.39 5.9 18 5.9C18.61 5.9 19.1 6.39 19.1 7V9C19.1 9.61 18.61 10.1 18 10.1C17.39 10.1 16.9 9.61 16.9 9V7ZM7 21.1H5C4.39 21.1 3.9 20.61 3.9 20C3.9 19.39 4.39 18.9 5 18.9H7C7.61 18.9 8.1 19.39 8.1 20C8.1 20.61 7.61 21.1 7 21.1ZM11 13C10.79 13.21 10.52 13.32 10.22 13.32C9.92 13.32 9.65 13.21 9.44 13L8.22 11.78C7.79 11.35 7.79 10.65 8.22 10.23C8.65 9.8 9.35 9.8 9.77 10.23L10.99 11.45C11.2 11.66 11.31 11.93 11.31 12.23C11.31 12.53 11.2 12.8 10.99 13.01L11 13ZM25.78 13.78L20.82 18.74C21.01 19.15 21.1 19.58 21.1 20C21.1 21.71 19.71 23.1 18 23.1C16.29 23.1 14.9 21.71 14.9 20C14.9 18.29 16.29 16.9 18 16.9C18.43 16.9 18.85 16.99 19.26 17.18L24.22 12.22C24.65 11.79 25.35 11.79 25.77 12.22C26.2 12.65 26.2 13.35 25.77 13.77L25.78 13.78ZM31 21.1H29C28.39 21.1 27.9 20.61 27.9 20C27.9 19.39 28.39 18.9 29 18.9H31C31.61 18.9 32.1 19.39 32.1 20C32.1 20.61 31.61 21.1 31 21.1Z" fill="black"/>\n',

  solidBadged:
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" fill="#E02200"/>\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M32.1997 12.6443C31.5055 12.875 30.763 13 29.9913 13C26.1265 13 22.9934 9.86599 22.9934 6C22.9934 5.60228 23.0266 5.2123 23.0903 4.83269C21.4891 4.29277 19.7755 4 17.995 4C9.17776 4 2 11.18 2 20C2 24.43 3.87941 28.71 7.14839 31.73C7.33833 31.9 7.57826 32 7.82818 32H28.1718C28.4217 32 28.6617 31.91 28.8516 31.73C32.1206 28.7 34 24.43 34 20C33.997 17.3499 33.3469 14.8479 32.1997 12.6443ZM17.995 5.9C17.3852 5.9 16.8953 6.39 16.8953 7V9C16.8953 9.61 17.3852 10.1 17.995 10.1C18.6048 10.1 19.0947 9.61 19.0947 9V7C19.0947 6.39 18.6048 5.9 17.995 5.9ZM4.99906 21.1H6.99844C7.60825 21.1 8.09809 20.61 8.09809 20C8.09809 19.39 7.60825 18.9 6.99844 18.9H4.99906C4.38925 18.9 3.89941 19.39 3.89941 20C3.89941 20.61 4.38925 21.1 4.99906 21.1ZM10.2174 13.32C10.515 13.32 10.783 13.2117 10.9922 13.005C11.1989 12.7957 11.3071 12.5276 11.3071 12.23C11.3071 11.93 11.1971 11.66 10.9872 11.45L9.76757 10.23C9.3477 9.8 8.64792 9.8 8.21806 10.23C7.78819 10.65 7.78819 11.35 8.21806 11.78L9.43768 13C9.64761 13.21 9.91753 13.32 10.2174 13.32ZM20.8141 18.74L25.7726 13.78L25.7626 13.77C26.1924 13.35 26.1924 12.65 25.7626 12.22C25.3427 11.79 24.6429 11.79 24.2131 12.22L19.2546 17.18C18.8447 16.99 18.4249 16.9 17.995 16.9C16.2855 16.9 14.896 18.29 14.896 20C14.896 21.71 16.2855 23.1 17.995 23.1C19.7045 23.1 21.094 21.71 21.094 20C21.094 19.58 21.0041 19.15 20.8141 18.74ZM27.8919 20C27.8919 20.61 28.3818 21.1 28.9916 21.1H30.9909C31.6008 21.1 32.0906 20.61 32.0906 20C32.0906 19.39 31.6008 18.9 30.9909 18.9H28.9916C28.3818 18.9 27.8919 19.39 27.8919 20Z" fill="black"/>\n',
};

export const dashboardIconName = 'dashboard';
export const dashboardIcon: IconShapeTuple = [dashboardIconName, renderIcon(icon)];
