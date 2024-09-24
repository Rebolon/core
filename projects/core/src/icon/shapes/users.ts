/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M22 9C22 7.35 23.35 6 25 6C26.65 6 28 7.35 28 9C28 10.65 26.65 12 25 12C24.75 12 24.5 11.96 24.27 11.9C24.59 12.55 24.82 13.25 24.92 13.99C24.95 13.99 24.97 13.99 25 13.99C27.76 13.99 30 11.75 30 8.99C30 6.23 27.76 4 25 4C22.48 4 20.41 5.88 20.07 8.31C20.78 8.53 21.44 8.86 22.03 9.28C22.03 9.18 22 9.09 22 8.99V9ZM13 15C13 17.76 15.24 20 18 20C20.76 20 23 17.76 23 15C23 12.24 20.76 10 18 10C15.24 10 13 12.24 13 15ZM18 12C19.65 12 21 13.35 21 15C21 16.65 19.65 18 18 18C16.35 18 15 16.65 15 15C15 13.35 16.35 12 18 12ZM33 17.4C31.72 16.5 28.98 15 25 15C25 15.7 24.89 16.38 24.7 17.02C24.8 17.02 24.89 17 25 17C28.56 17 30.97 18.42 31.85 19.04C31.95 19.11 32 19.2 32 19.29V25.01C32 25.56 32.45 26.01 33 26.01C33.55 26.01 34 25.56 34 25.01V19.29C34 18.55 33.62 17.85 33 17.41V17.4ZM26 23.4C24.72 22.5 21.98 21 18 21C14.02 21 11.28 22.5 10 23.4C9.37 23.84 9 24.55 9 25.28V31C9 31.55 9.45 32 10 32C10.55 32 11 31.55 11 31V25.28C11 25.19 11.06 25.1 11.15 25.03C12.02 24.42 14.44 22.99 18 22.99C21.56 22.99 23.97 24.41 24.85 25.03C24.95 25.1 25 25.19 25 25.28V31C25 31.55 25.45 32 26 32C26.55 32 27 31.55 27 31V25.28C27 24.54 26.62 23.84 26 23.4ZM11.3 17.02C11.11 16.38 11 15.7 11 15C7.02 15 4.28 16.5 3 17.4C2.37 17.84 2 18.55 2 19.28V25C2 25.55 2.45 26 3 26C3.55 26 4 25.55 4 25V19.28C4 19.19 4.06 19.1 4.15 19.03C5.02 18.42 7.44 16.99 11 16.99C11.11 16.99 11.2 17.01 11.3 17.01V17.02ZM11 14C11 14 11.05 14 11.08 14C11.19 13.26 11.41 12.55 11.73 11.91C11.49 11.97 11.25 12.01 11 12.01C9.35 12.01 8 10.66 8 9.01C8 7.36 9.35 6.01 11 6.01C12.65 6.01 14 7.36 14 9.01C14 9.11 13.98 9.2 13.97 9.3C14.56 8.88 15.22 8.55 15.93 8.33C15.59 5.9 13.52 4.02 11 4.02C8.24 4.02 6 6.26 6 9.02C6 11.78 8.24 14.02 11 14.02V14Z"/>',

  outlineAlerted:
    '<path d="M26.9039 1.64621L21.2222 11.1159C20.9526 11.4984 20.9281 11.9949 21.1588 12.4005C21.3896 12.806 21.8363 13.0519 22.3148 13.0367H33.6881C34.1666 13.0519 34.6134 12.806 34.8441 12.4005C35.0748 11.9949 35.0503 11.4984 34.7808 11.1159L29.0991 1.64621C28.8711 1.26913 28.4532 1.03735 28.0015 1.03735C27.5497 1.03735 27.1319 1.26913 26.9039 1.64621Z"/><path d="M24.9999 15.0446H26.0702C29.4734 15.2798 31.8381 16.5921 33 17.4096V17.4196C33.62 17.8599 34 18.5604 34 19.3009V25.025C34 25.5754 33.55 26.0257 33 26.0257C32.45 26.0257 32 25.5754 32 25.025V19.3009C32 19.2109 31.95 19.1208 31.85 19.0508C30.97 18.4303 28.56 17.0093 25 17.0093C24.9437 17.0093 24.8926 17.0145 24.8428 17.0197C24.7952 17.0245 24.7488 17.0293 24.7 17.0293C24.8867 16.4 24.9961 15.7321 24.9999 15.0446Z"/><path d="M19.4312 10.2125C18.9777 10.0771 18.4973 10.0043 18 10.0043C15.24 10.0043 13 12.2459 13 15.0079C13 17.7698 15.24 20.0114 18 20.0114C20.7478 20.0114 22.9801 17.7897 22.9999 15.0446H22.3395C21.873 15.0539 21.4139 14.9642 20.9919 14.787C20.9973 14.86 21 14.9336 21 15.0079C21 16.659 19.65 18.01 18 18.01C16.35 18.01 15 16.659 15 15.0079C15 13.3567 16.35 12.0057 18 12.0057C18.3589 12.0057 18.7037 12.0697 19.0234 12.1867C18.9439 11.5099 19.0821 10.817 19.4312 10.2125Z"/><path d="M22.8717 4.47979L20.487 8.45716C20.3501 8.40489 20.211 8.35682 20.07 8.31309C20.3071 6.61708 21.3858 5.1888 22.8717 4.47979Z"/><path d="M18 21.0122C21.98 21.0122 24.72 22.5132 26 23.4139C26.62 23.8542 27 24.5547 27 25.2952V31.0193C27 31.5697 26.55 32.02 26 32.02C25.45 32.02 25 31.5697 25 31.0193V25.2952C25 25.2052 24.95 25.1151 24.85 25.045C23.97 24.4246 21.56 23.0036 18 23.0036C14.44 23.0036 12.02 24.4346 11.15 25.045C11.06 25.1151 11 25.2052 11 25.2952V31.0193C11 31.5697 10.55 32.02 10 32.02C9.45 32.02 9 31.5697 9 31.0193V25.2952C9 24.5647 9.37 23.8542 10 23.4139C11.28 22.5132 14.02 21.0122 18 21.0122Z"/><path d="M11.297 17.0193C11.298 17.0226 11.299 17.026 11.3 17.0293V17.0193C11.299 17.0193 11.298 17.0193 11.297 17.0193Z"/><path d="M11 15.0079C11 15.7047 11.1089 16.3818 11.297 17.0193C11.2493 17.0191 11.2038 17.0144 11.1572 17.0097C11.1074 17.0045 11.0563 16.9993 11 16.9993C7.44 16.9993 5.02 18.4303 4.15 19.0407C4.06 19.1108 4 19.2009 4 19.2909V25.015C4 25.5654 3.55 26.0157 3 26.0157C2.45 26.0157 2 25.5654 2 25.015V19.2909C2 18.5604 2.37 17.8499 3 17.4096C4.28 16.5089 7.02 15.0079 11 15.0079Z"/><path d="M11.08 14.0072H11V14.0272C8.24 14.0272 6 11.7856 6 9.02359C6 6.26162 8.24 4.02002 11 4.02002C13.52 4.02002 15.59 5.90136 15.93 8.3331C15.22 8.55326 14.56 8.88349 13.97 9.30379C13.9735 9.26902 13.9782 9.23545 13.9828 9.20225C13.9915 9.13992 14 9.07888 14 9.01359C14 7.36241 12.65 6.01144 11 6.01144C9.35 6.01144 8 7.36241 8 9.01359C8 10.6648 9.35 12.0157 11 12.0157C11.25 12.0157 11.49 11.9757 11.73 11.9157C11.41 12.5561 11.19 13.2666 11.08 14.0072Z"/>',

  outlineBadged:
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z"/><path d="M23.1985 4.33813C21.5453 4.98472 20.3242 6.49509 20.07 8.31309C20.78 8.53324 21.44 8.86348 22.03 9.28378C22.03 9.23374 22.0225 9.18621 22.015 9.13868C22.0076 9.09194 22.0003 9.0452 22 8.99608C22.0022 8.09674 22.4049 7.28704 23.0381 6.73702C23.0129 6.49527 23 6.24986 23 6.00143C23 5.42832 23.0688 4.87128 23.1985 4.33813Z"/><path d="M26.0777 11.8043C26.7337 12.2492 27.4692 12.5857 28.2584 12.7879C27.383 13.5415 26.2444 13.9971 25 13.9971H24.92C24.82 13.2566 24.59 12.5561 24.27 11.9057C24.5 11.9657 24.75 12.0057 25 12.0057C25.3793 12.0057 25.7428 11.9343 26.0777 11.8043Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M18 20.0114C15.24 20.0114 13 17.7698 13 15.0079C13 12.2459 15.24 10.0043 18 10.0043C20.76 10.0043 23 12.2459 23 15.0079C23 17.7698 20.76 20.0114 18 20.0114ZM21 15.0079C21 13.3567 19.65 12.0057 18 12.0057C16.35 12.0057 15 13.3567 15 15.0079C15 16.659 16.35 18.01 18 18.01C19.65 18.01 21 16.659 21 15.0079Z"/><path d="M25 15.0079C28.98 15.0079 31.72 16.5089 33 17.4096V17.4196C33.62 17.8599 34 18.5604 34 19.3009V25.025C34 25.5754 33.55 26.0257 33 26.0257C32.45 26.0257 32 25.5754 32 25.025V19.3009C32 19.2109 31.95 19.1208 31.85 19.0508C30.97 18.4303 28.56 17.0093 25 17.0093C24.9437 17.0093 24.8926 17.0145 24.8428 17.0197C24.7952 17.0245 24.7488 17.0293 24.7 17.0293C24.89 16.3889 25 15.7084 25 15.0079Z"/><path d="M18 21.0122C21.98 21.0122 24.72 22.5132 26 23.4139C26.62 23.8542 27 24.5547 27 25.2952V31.0193C27 31.5697 26.55 32.02 26 32.02C25.45 32.02 25 31.5697 25 31.0193V25.2952C25 25.2052 24.95 25.1151 24.85 25.045C23.97 24.4246 21.56 23.0036 18 23.0036C14.44 23.0036 12.02 24.4346 11.15 25.045C11.06 25.1151 11 25.2052 11 25.2952V31.0193C11 31.5697 10.55 32.02 10 32.02C9.45 32.02 9 31.5697 9 31.0193V25.2952C9 24.5647 9.37 23.8542 10 23.4139C11.28 22.5132 14.02 21.0122 18 21.0122Z"/><path d="M11.297 17.0193C11.298 17.0226 11.299 17.026 11.3 17.0293V17.0193C11.299 17.0193 11.298 17.0193 11.297 17.0193Z"/><path d="M11 15.0079C11 15.7047 11.1089 16.3818 11.297 17.0193C11.2493 17.0191 11.2038 17.0144 11.1572 17.0097C11.1074 17.0045 11.0563 16.9993 11 16.9993C7.44 16.9993 5.02 18.4303 4.15 19.0407C4.06 19.1108 4 19.2009 4 19.2909V25.015C4 25.5654 3.55 26.0157 3 26.0157C2.45 26.0157 2 25.5654 2 25.015V19.2909C2 18.5604 2.37 17.8499 3 17.4096C4.28 16.5089 7.02 15.0079 11 15.0079Z"/><path d="M11.08 14.0072H11V14.0272C8.24 14.0272 6 11.7856 6 9.02359C6 6.26162 8.24 4.02002 11 4.02002C13.52 4.02002 15.59 5.90136 15.93 8.3331C15.22 8.55326 14.56 8.88349 13.97 9.30379C13.9735 9.26902 13.9782 9.23545 13.9828 9.20225C13.9915 9.13992 14 9.07888 14 9.01359C14 7.36241 12.65 6.01144 11 6.01144C9.35 6.01144 8 7.36241 8 9.01359C8 10.6648 9.35 12.0157 11 12.0157C11.25 12.0157 11.49 11.9757 11.73 11.9157C11.41 12.5561 11.19 13.2666 11.08 14.0072Z"/>',

  solid:
    '<path d="M13 15.0039C13 17.7649 15.24 20.0057 18 20.0057C20.76 20.0057 23 17.7649 23 15.0039C23 12.2429 20.76 10.0021 18 10.0021C15.24 10.0021 13 12.2429 13 15.0039ZM24.92 13.9936C24.92 13.9936 24.97 13.9936 25 13.9936C27.76 13.9936 30 11.7528 30 8.99178C30 6.2308 27.76 4 25 4C22.48 4 20.41 5.88067 20.07 8.31154C22.61 9.10182 24.53 11.3026 24.92 13.9936ZM11 13.9936C11 13.9936 11.05 13.9936 11.08 13.9936C11.47 11.3026 13.39 9.10182 15.93 8.31154C15.59 5.88067 13.52 4 11 4C8.24 4 6 6.2408 6 9.00179C6 11.7628 8.24 14.0036 11 14.0036V13.9936ZM33 17.3948C31.72 16.4945 28.98 14.9939 25 14.9939C25 16.8446 24.27 18.5352 23.09 19.7856C24.93 20.3758 26.31 21.1761 27.15 21.7563C28.31 22.5766 29 23.8871 29 25.2776V25.9979H33C33.55 25.9979 34 25.5477 34 24.9975V19.2755C34 18.5352 33.62 17.8349 33 17.3948ZM26 23.3969C24.72 22.4966 21.98 20.9961 18 20.9961C14.02 20.9961 11.28 22.4966 10 23.3969C9.37 23.8371 9 24.5473 9 25.2776V30.9996C9 31.5498 9.45 32 10 32H26C26.55 32 27 31.5498 27 30.9996V25.2776C27 24.5373 26.62 23.8371 26 23.3969ZM11 14.9939C7.02 14.9939 4.28 16.4945 3 17.3948C2.37 17.8349 2 18.5452 2 19.2755V24.9975C2 25.5477 2.45 25.9979 3 25.9979H7V25.2776C7 23.8871 7.69 22.5666 8.86 21.7563C9.69 21.1761 11.07 20.3758 12.92 19.7856C11.74 18.5352 11.01 16.8446 11.01 14.9939H11Z"/>',

  solidAlerted:
    '<path d="M26.9039 1.64621L21.2222 11.1159C20.9526 11.4984 20.9281 11.9949 21.1588 12.4005C21.3896 12.806 21.8363 13.0519 22.3148 13.0367H33.6881C34.1666 13.0519 34.6134 12.806 34.8441 12.4005C35.0748 11.9949 35.0503 11.4984 34.7808 11.1159L29.0991 1.64621C28.8711 1.26913 28.4532 1.03735 28.0015 1.03735C27.5497 1.03735 27.1319 1.26913 26.9039 1.64621Z"/><path d="M24.9998 15.0406H26.2061C29.5363 15.3008 31.8537 16.5885 33 17.3948C33.62 17.8349 34 18.5352 34 19.2755V24.9975C34 25.5477 33.55 25.9979 33 25.9979H29V25.2776C29 23.8871 28.31 22.5766 27.15 21.7563C26.31 21.1761 24.93 20.3758 23.09 19.7856C24.2601 18.5457 24.9877 16.873 24.9998 15.0406Z"/><path d="M19.4312 10.2103C18.8668 11.1872 18.8536 12.3957 19.4206 13.3927C20.0233 14.4527 21.1577 15.0643 22.3395 15.0406H22.9999C22.9801 17.7847 20.7478 20.0057 18 20.0057C15.24 20.0057 13 17.7649 13 15.0039C13 12.2429 15.24 10.0021 18 10.0021C18.4973 10.0021 18.9777 10.0749 19.4312 10.2103Z"/><path d="M22.8717 4.47962L20.4868 8.45592C20.3499 8.40356 20.2109 8.35538 20.07 8.31154C20.3071 6.61614 21.3858 5.18837 22.8717 4.47962Z"/><path d="M11.08 13.9936H11V14.0036C8.24 14.0036 6 11.7628 6 9.00179C6 6.2408 8.24 4 11 4C13.52 4 15.59 5.88067 15.93 8.31154C13.39 9.10182 11.47 11.3026 11.08 13.9936Z"/><path d="M18 20.9961C21.98 20.9961 24.72 22.4966 26 23.3969C26.62 23.8371 27 24.5373 27 25.2776V30.9996C27 31.5498 26.55 32 26 32H10C9.45 32 9 31.5498 9 30.9996V25.2776C9 24.5473 9.37 23.8371 10 23.3969C11.28 22.4966 14.02 20.9961 18 20.9961Z"/><path d="M3 17.3948C4.28 16.4945 7.02 14.9939 11 14.9939H11.01C11.01 16.8446 11.74 18.5352 12.92 19.7856C11.07 20.3758 9.69 21.1761 8.86 21.7563C7.69 22.5666 7 23.8871 7 25.2776V25.9979H3C2.45 25.9979 2 25.5477 2 24.9975V19.2755C2 18.5452 2.37 17.8349 3 17.3948Z"/>',

  solidBadged:
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z"/><path d="M23.1985 4.33801C23.0688 4.87097 23 5.42781 23 6.00071C23 9.26662 25.235 12.0103 28.2584 12.7848C27.383 13.5381 26.2444 13.9936 25 13.9936H24.92C24.53 11.3026 22.61 9.10182 20.07 8.31154C20.3242 6.49419 21.5453 4.98437 23.1985 4.33801Z"/><path d="M18 20.0057C15.24 20.0057 13 17.7649 13 15.0039C13 12.2429 15.24 10.0021 18 10.0021C20.76 10.0021 23 12.2429 23 15.0039C23 17.7649 20.76 20.0057 18 20.0057Z"/><path d="M11.08 13.9936H11V14.0036C8.24 14.0036 6 11.7628 6 9.00179C6 6.2408 8.24 4 11 4C13.52 4 15.59 5.88067 15.93 8.31154C13.39 9.10182 11.47 11.3026 11.08 13.9936Z"/><path d="M25 14.9939C28.98 14.9939 31.72 16.4945 33 17.3948C33.62 17.8349 34 18.5352 34 19.2755V24.9975C34 25.5477 33.55 25.9979 33 25.9979H29V25.2776C29 23.8871 28.31 22.5766 27.15 21.7563C26.31 21.1761 24.93 20.3758 23.09 19.7856C24.27 18.5352 25 16.8446 25 14.9939Z"/><path d="M18 20.9961C21.98 20.9961 24.72 22.4966 26 23.3969C26.62 23.8371 27 24.5373 27 25.2776V30.9996C27 31.5498 26.55 32 26 32H10C9.45 32 9 31.5498 9 30.9996V25.2776C9 24.5473 9.37 23.8371 10 23.3969C11.28 22.4966 14.02 20.9961 18 20.9961Z"/><path d="M3 17.3948C4.28 16.4945 7.02 14.9939 11 14.9939H11.01C11.01 16.8446 11.74 18.5352 12.92 19.7856C11.07 20.3758 9.69 21.1761 8.86 21.7563C7.69 22.5666 7 23.8871 7 25.2776V25.9979H3C2.45 25.9979 2 25.5477 2 24.9975V19.2755C2 18.5452 2.37 17.8349 3 17.3948Z"/>',
};

export const usersIconName = 'users';
export const usersIcon: IconShapeTuple = [usersIconName, renderIcon(icon)];
