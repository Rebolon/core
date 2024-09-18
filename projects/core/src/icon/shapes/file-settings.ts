/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M14.38 30H6V4H26V12.86C26.83 13.04 27.55 13.56 28 14.28V4C28 2.9 27.1 2 26 2H6C4.9 2 4 2.9 4 4V30C4 31.1 4.9 32 6 32H15.41L15.28 31.87C14.76 31.36 14.46 30.69 14.38 30ZM24.29 20.36C22.09 20.4 20.34 22.21 20.37 24.41C20.4 26.61 22.2 28.37 24.4 28.36C26.6 28.35 28.37 26.56 28.37 24.36C28.34 22.13 26.52 20.35 24.29 20.36ZM26.04 26.12C25.57 26.58 24.95 26.83 24.29 26.83C22.95 26.79 21.89 25.69 21.91 24.36C21.93 23.02 23.02 21.95 24.36 21.96C25.7 21.96 26.77 23.05 26.77 24.39C26.77 25.04 26.5 25.67 26.04 26.12ZM33.29 22.32L31.61 21.82C31.52 21.58 31.43 21.34 31.32 21.11L32.1 19.67C32.34 19.22 32.26 18.66 31.89 18.3L30.47 16.89C30.11 16.53 29.55 16.45 29.1 16.69L27.65 17.45C27.4 17.33 27.15 17.22 26.89 17.13L26.41 15.55C26.25 15.08 25.8 14.77 25.3 14.78H23.3C22.79 14.78 22.34 15.11 22.19 15.6L21.72 17.14C21.46 17.23 21.2 17.34 20.95 17.46L19.53 16.7C19.08 16.46 18.53 16.54 18.17 16.9L16.72 18.3C16.35 18.66 16.26 19.22 16.51 19.68L17.25 21.01C17.13 21.25 17.03 21.5 16.94 21.75L15.36 22.22C14.87 22.36 14.53 22.82 14.53 23.33V25.33C14.53 25.84 14.87 26.29 15.36 26.43L16.95 26.9C17.04 27.15 17.14 27.39 17.26 27.62L16.48 29.08C16.24 29.53 16.32 30.09 16.69 30.45L18.11 31.85C18.47 32.21 19.03 32.3 19.48 32.06L20.96 31.28C21.19 31.39 21.43 31.48 21.68 31.57L22.17 33.19C22.32 33.67 22.77 34 23.28 34H25.28C25.79 34 26.24 33.67 26.39 33.18L26.86 31.6C27.1 31.52 27.33 31.42 27.56 31.31L29.06 32.1C29.51 32.34 30.06 32.26 30.42 31.9L31.84 30.5C32.21 30.14 32.3 29.58 32.05 29.12L31.26 27.67C31.37 27.44 31.46 27.21 31.55 26.98L33.17 26.51C33.66 26.37 34 25.91 34 25.4V23.44C34.02 22.95 33.74 22.51 33.29 22.32ZM32.4 25.07L30.29 25.69L30.17 26.11C30.05 26.52 29.88 26.92 29.67 27.3L29.46 27.68L30.46 29.59L29.46 30.59L27.46 29.59L27.09 29.79C26.71 29.99 26.31 30.16 25.89 30.28L25.47 30.4L24.84 32.49H23.59L22.96 30.41L22.54 30.29C22.12 30.17 21.72 30.01 21.33 29.8L20.96 29.6L19.02 30.6L18.02 29.6L19.02 27.66L18.8 27.28C18.6 26.88 18.45 26.45 18.34 26.01L18.17 25.64L16.17 25.01V23.7L18.17 23.09L18.3 22.68C18.43 22.25 18.61 21.84 18.83 21.45L19.07 21.01L18.07 19.16L19.07 18.22L20.96 19.22L21.34 19.01C21.74 18.79 22.16 18.62 22.6 18.49L23.01 18.37L23.64 16.37H25.02L25.64 18.37L26.05 18.49C26.47 18.62 26.88 18.79 27.27 19.01L27.65 19.22L29.57 18.22L30.57 19.22L29.57 21.11L29.78 21.49C29.99 21.87 30.16 22.28 30.28 22.7L30.4 23.12L32.46 23.73L32.4 25.07Z" />\n',

  outlineAlerted:
    '<path d="M26.9039 1.64597L21.2222 11.1156C20.9526 11.4981 20.9281 11.9946 21.1588 12.4002C21.3896 12.8058 21.8363 13.0517 22.3148 13.0364H33.6881C34.1666 13.0517 34.6134 12.8058 34.8441 12.4002C35.0748 11.9946 35.0503 11.4981 34.7808 11.1156L29.0991 1.64597C28.8711 1.26889 28.4532 1.03711 28.0015 1.03711C27.5497 1.03711 27.1319 1.26889 26.9039 1.64597Z" fill="#A36500"/>\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M20.37 24.41C20.34 22.21 22.09 20.4 24.29 20.36C26.52 20.35 28.34 22.13 28.37 24.36C28.37 26.56 26.6 28.35 24.4 28.36C22.2 28.37 20.4 26.61 20.37 24.41ZM24.29 26.83C24.95 26.83 25.57 26.58 26.04 26.12C26.5 25.67 26.77 25.04 26.77 24.39C26.77 23.05 25.7 21.96 24.36 21.96C23.02 21.95 21.93 23.02 21.91 24.36C21.89 25.69 22.95 26.79 24.29 26.83Z" />\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M22.5705 15.0367H26.0515C26.2134 15.1678 26.3397 15.3435 26.41 15.55L26.89 17.13C27.15 17.22 27.4 17.33 27.65 17.45L29.1 16.69C29.55 16.45 30.11 16.53 30.47 16.89L31.89 18.3C32.26 18.66 32.34 19.22 32.1 19.67L31.32 21.11C31.43 21.34 31.52 21.58 31.61 21.82L33.29 22.32C33.74 22.51 34.02 22.95 34 23.44V25.4C34 25.91 33.66 26.37 33.17 26.51L31.55 26.98C31.46 27.21 31.37 27.44 31.26 27.67L32.05 29.12C32.3 29.58 32.21 30.14 31.84 30.5L30.42 31.9C30.06 32.26 29.51 32.34 29.06 32.1L27.56 31.31C27.33 31.42 27.1 31.52 26.86 31.6L26.39 33.18C26.24 33.67 25.79 34 25.28 34H23.28C22.77 34 22.32 33.67 22.17 33.19L21.68 31.57C21.43 31.48 21.19 31.39 20.96 31.28L19.48 32.06C19.03 32.3 18.47 32.21 18.11 31.85L16.69 30.45C16.32 30.09 16.24 29.53 16.48 29.08L17.26 27.62C17.14 27.39 17.04 27.15 16.95 26.9L15.36 26.43C14.87 26.29 14.53 25.84 14.53 25.33V23.33C14.53 22.82 14.87 22.36 15.36 22.22L16.94 21.75C17.03 21.5 17.13 21.25 17.25 21.01L16.51 19.68C16.26 19.22 16.35 18.66 16.72 18.3L18.17 16.9C18.53 16.54 19.08 16.46 19.53 16.7L20.95 17.46C21.2 17.34 21.46 17.23 21.72 17.14L22.19 15.6C22.2599 15.3718 22.3948 15.1783 22.5705 15.0367ZM30.29 25.69L32.4 25.07L32.46 23.73L30.4 23.12L30.28 22.7C30.16 22.28 29.99 21.87 29.78 21.49L29.57 21.11L30.57 19.22L29.57 18.22L27.65 19.22L27.27 19.01C26.88 18.79 26.47 18.62 26.05 18.49L25.64 18.37L25.02 16.37H23.64L23.01 18.37L22.6 18.49C22.16 18.62 21.74 18.79 21.34 19.01L20.96 19.22L19.07 18.22L18.07 19.16L19.07 21.01L18.83 21.45C18.61 21.84 18.43 22.25 18.3 22.68L18.17 23.09L16.17 23.7V25.01L18.17 25.64L18.34 26.01C18.45 26.45 18.6 26.88 18.8 27.28L19.02 27.66L18.02 29.6L19.02 30.6L20.96 29.6L21.33 29.8C21.72 30.01 22.12 30.17 22.54 30.29L22.96 30.41L23.59 32.49H24.84L25.47 30.4L25.89 30.28C26.31 30.16 26.71 29.99 27.09 29.79L27.46 29.59L29.46 30.59L30.46 29.59L29.46 27.68L29.67 27.3C29.88 26.92 30.05 26.52 30.17 26.11L30.29 25.69Z" />\n' +
    '<path d="M24.3594 2L23.1594 4H6V30H14.38C14.46 30.69 14.76 31.36 15.28 31.87L15.41 32H6C4.9 32 4 31.1 4 30V4C4 2.9 4.9 2 6 2H24.3594Z" />\n',

  outlineBadged:
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" />\n' +
    '<path d="M24.2547 2H6C4.9 2 4 2.9 4 4V30C4 31.1 4.9 32 6 32H15.41L15.28 31.87C14.76 31.36 14.46 30.69 14.38 30H6V4H23.2899C23.5049 3.27757 23.8334 2.60401 24.2547 2Z" />\n' +
    '<path d="M26 11.7453C26.604 12.1666 27.2776 12.4951 28 12.7101V14.28C27.55 13.56 26.83 13.04 26 12.86V11.7453Z" />\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M20.37 24.41C20.34 22.21 22.09 20.4 24.29 20.36C26.52 20.35 28.34 22.13 28.37 24.36C28.37 26.56 26.6 28.35 24.4 28.36C22.2 28.37 20.4 26.61 20.37 24.41ZM24.29 26.83C24.95 26.83 25.57 26.58 26.04 26.12C26.5 25.67 26.77 25.04 26.77 24.39C26.77 23.05 25.7 21.96 24.36 21.96C23.02 21.95 21.93 23.02 21.91 24.36C21.89 25.69 22.95 26.79 24.29 26.83Z" />\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M31.61 21.82L33.29 22.32C33.74 22.51 34.02 22.95 34 23.44V25.4C34 25.91 33.66 26.37 33.17 26.51L31.55 26.98C31.46 27.21 31.37 27.44 31.26 27.67L32.05 29.12C32.3 29.58 32.21 30.14 31.84 30.5L30.42 31.9C30.06 32.26 29.51 32.34 29.06 32.1L27.56 31.31C27.33 31.42 27.1 31.52 26.86 31.6L26.39 33.18C26.24 33.67 25.79 34 25.28 34H23.28C22.77 34 22.32 33.67 22.17 33.19L21.68 31.57C21.43 31.48 21.19 31.39 20.96 31.28L19.48 32.06C19.03 32.3 18.47 32.21 18.11 31.85L16.69 30.45C16.32 30.09 16.24 29.53 16.48 29.08L17.26 27.62C17.14 27.39 17.04 27.15 16.95 26.9L15.36 26.43C14.87 26.29 14.53 25.84 14.53 25.33V23.33C14.53 22.82 14.87 22.36 15.36 22.22L16.94 21.75C17.03 21.5 17.13 21.25 17.25 21.01L16.51 19.68C16.26 19.22 16.35 18.66 16.72 18.3L18.17 16.9C18.53 16.54 19.08 16.46 19.53 16.7L20.95 17.46C21.2 17.34 21.46 17.23 21.72 17.14L22.19 15.6C22.34 15.11 22.79 14.78 23.3 14.78H25.3C25.8 14.77 26.25 15.08 26.41 15.55L26.89 17.13C27.15 17.22 27.4 17.33 27.65 17.45L29.1 16.69C29.55 16.45 30.11 16.53 30.47 16.89L31.89 18.3C32.26 18.66 32.34 19.22 32.1 19.67L31.32 21.11C31.43 21.34 31.52 21.58 31.61 21.82ZM30.29 25.69L32.4 25.07L32.46 23.73L30.4 23.12L30.28 22.7C30.16 22.28 29.99 21.87 29.78 21.49L29.57 21.11L30.57 19.22L29.57 18.22L27.65 19.22L27.27 19.01C26.88 18.79 26.47 18.62 26.05 18.49L25.64 18.37L25.02 16.37H23.64L23.01 18.37L22.6 18.49C22.16 18.62 21.74 18.79 21.34 19.01L20.96 19.22L19.07 18.22L18.07 19.16L19.07 21.01L18.83 21.45C18.61 21.84 18.43 22.25 18.3 22.68L18.17 23.09L16.17 23.7V25.01L18.17 25.64L18.34 26.01C18.45 26.45 18.6 26.88 18.8 27.28L19.02 27.66L18.02 29.6L19.02 30.6L20.96 29.6L21.33 29.8C21.72 30.01 22.12 30.17 22.54 30.29L22.96 30.41L23.59 32.49H24.84L25.47 30.4L25.89 30.28C26.31 30.16 26.71 29.99 27.09 29.79L27.46 29.59L29.46 30.59L30.46 29.59L29.46 27.68L29.67 27.3C29.88 26.92 30.05 26.52 30.17 26.11L30.29 25.69Z" />\n',

  solid:
    '<path d="M15.8524 29.9913H6.00041V3.99938H26.0045V13.9963H26.0345H26.0646C26.8547 13.9963 27.5749 14.3961 28.005 15.0159V3.99938C28.005 2.89972 27.1048 2 26.0045 2H6.00041C4.90019 2 4 2.89972 4 3.99938V29.9913C4 31.0909 4.90019 31.9906 6.00041 31.9906H16.4826C15.9625 31.4508 15.7424 30.701 15.8524 29.9913ZM33.8462 23.6532L31.8457 23.0534C31.7057 22.5636 31.5057 22.1037 31.2656 21.6539L32.2658 19.8144C32.3458 19.6745 32.3158 19.4945 32.1958 19.3746L30.7155 17.935C30.6055 17.8151 30.4255 17.7851 30.2754 17.865L28.425 18.8547C27.9749 18.5948 27.4948 18.3849 26.9947 18.2349L26.3846 16.2555C26.3346 16.1056 26.1846 16.0056 26.0245 16.0056H24.0241C23.8641 16.0056 23.7241 16.1156 23.6741 16.2655L23.0639 18.2449C22.5638 18.3949 22.0837 18.5948 21.6236 18.8447L19.8033 17.855C19.6532 17.7751 19.4832 17.8051 19.3632 17.925L17.8929 19.3546C17.7728 19.4645 17.7428 19.6445 17.8229 19.7944L18.8231 21.5939C18.563 22.0437 18.363 22.5236 18.2129 23.0234L16.2125 23.6232C16.0625 23.6732 15.9525 23.8132 15.9525 23.9731V25.9525C15.9525 26.1125 16.0625 26.2524 16.2125 26.3024L18.2129 26.9022C18.363 27.3921 18.563 27.8619 18.8231 28.3018L17.8229 30.1812C17.7428 30.3212 17.7728 30.5011 17.8929 30.6211L19.3032 32.1106C19.4132 32.2306 19.5932 32.2605 19.7432 32.1806L21.6136 31.1909C22.0537 31.4308 22.5238 31.6207 23.0039 31.7607L23.614 33.7401C23.6641 33.89 23.8041 34 23.9641 34H25.9645C26.1246 34 26.2646 33.89 26.3146 33.7401L26.9247 31.7607C27.4048 31.6207 27.8649 31.4308 28.305 31.1909L30.1954 32.1806C30.3454 32.2605 30.5155 32.2306 30.6355 32.1106L32.0858 30.671C32.2058 30.5611 32.2358 30.3811 32.1558 30.2312L31.1556 28.3718C31.3957 27.9319 31.5957 27.472 31.7357 26.9922L33.7361 26.3924C33.8862 26.3424 33.9962 26.2024 33.9962 26.0425V24.0131C34.0162 23.8732 33.9562 23.7332 33.8462 23.6532ZM25.0243 28.3318C23.6741 28.3418 22.4538 27.552 21.9337 26.3124C21.4136 25.0828 21.6836 23.6532 22.6338 22.7035C23.584 21.7538 25.0143 21.4639 26.2546 21.9738C27.4948 22.4836 28.315 23.6932 28.315 25.0228C28.315 26.8322 26.8447 28.3118 25.0243 28.3218V28.3318Z" />\n',

  solidAlerted:
    '<path d="M26.9039 1.64597L21.2222 11.1156C20.9526 11.4981 20.9281 11.9946 21.1588 12.4002C21.3896 12.8058 21.8363 13.0517 22.3148 13.0364H33.6881C34.1666 13.0517 34.6134 12.8058 34.8441 12.4002C35.0748 11.9946 35.0503 11.4981 34.7808 11.1156L29.0991 1.64597C28.8711 1.26889 28.4532 1.03711 28.0015 1.03711C27.5497 1.03711 27.1319 1.26889 26.9039 1.64597Z" fill="#A36500"/>\n' +
    '<path d="M24.3594 2L23.1598 3.99938H6.00041V29.9913H15.8524C15.7424 30.701 15.9625 31.4508 16.4826 31.9906H6.00041C4.90019 31.9906 4 31.0909 4 29.9913V3.99938C4 2.89972 4.90019 2 6.00041 2H24.3594Z" />\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M31.8457 23.0534L33.8462 23.6532C33.9562 23.7332 34.0162 23.8732 33.9962 24.0131V26.0425C33.9962 26.2024 33.8862 26.3424 33.7361 26.3924L31.7357 26.9922C31.5957 27.472 31.3957 27.9319 31.1556 28.3718L32.1558 30.2312C32.2358 30.3811 32.2058 30.5611 32.0858 30.671L30.6355 32.1106C30.5155 32.2306 30.3454 32.2605 30.1954 32.1806L28.305 31.1909C27.8649 31.4308 27.4048 31.6207 26.9247 31.7607L26.3146 33.7401C26.2646 33.89 26.1246 34 25.9645 34H23.9641C23.8041 34 23.6641 33.89 23.614 33.7401L23.0039 31.7607C22.5238 31.6207 22.0537 31.4308 21.6136 31.1909L19.7432 32.1806C19.5932 32.2605 19.4132 32.2306 19.3032 32.1106L17.8929 30.6211C17.7728 30.5011 17.7428 30.3212 17.8229 30.1812L18.8231 28.3018C18.563 27.8619 18.363 27.3921 18.2129 26.9022L16.2125 26.3024C16.0625 26.2524 15.9525 26.1125 15.9525 25.9525V23.9731C15.9525 23.8132 16.0625 23.6732 16.2125 23.6232L18.2129 23.0234C18.363 22.5236 18.563 22.0437 18.8231 21.5939L17.8229 19.7944C17.7428 19.6445 17.7728 19.4645 17.8929 19.3546L19.3632 17.925C19.4832 17.8051 19.6532 17.7751 19.8033 17.855L21.6236 18.8447C22.0837 18.5948 22.5638 18.3949 23.0639 18.2449L23.6741 16.2655C23.7241 16.1156 23.8641 16.0056 24.0241 16.0056H26.0245C26.1846 16.0056 26.3346 16.1056 26.3846 16.2555L26.9947 18.2349C27.4948 18.3849 27.9749 18.5948 28.425 18.8547L30.2754 17.865C30.4255 17.7851 30.6055 17.8151 30.7155 17.935L32.1958 19.3746C32.3158 19.4945 32.3458 19.6745 32.2658 19.8144L31.2656 21.6539C31.5057 22.1037 31.7057 22.5636 31.8457 23.0534ZM21.9337 26.3124C22.4538 27.552 23.6741 28.3418 25.0243 28.3318V28.3218C26.8447 28.3118 28.315 26.8322 28.315 25.0228C28.315 23.6932 27.4948 22.4836 26.2546 21.9738C25.0143 21.4639 23.584 21.7538 22.6338 22.7035C21.6836 23.6532 21.4136 25.0828 21.9337 26.3124Z" />\n',

  solidBadged:
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" />\n' +
    '<path d="M24.2547 2H6.00041C4.90019 2 4 2.89972 4 3.99938V29.9913C4 31.0909 4.90019 31.9906 6.00041 31.9906H16.4826C15.9625 31.4508 15.7424 30.701 15.8524 29.9913H6.00041V3.99938H23.2901C23.5051 3.27718 23.8335 2.60383 24.2547 2Z" />\n' +
    '<path d="M26.0045 11.7485C26.6088 12.1692 27.2825 12.4972 28.005 12.7116V15.0159C27.5749 14.3961 26.8547 13.9963 26.0646 13.9963H26.0045V11.7485Z" />\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M31.8457 23.0534L33.8462 23.6532C33.9562 23.7332 34.0162 23.8732 33.9962 24.0131V26.0425C33.9962 26.2024 33.8862 26.3424 33.7361 26.3924L31.7357 26.9922C31.5957 27.472 31.3957 27.9319 31.1556 28.3718L32.1558 30.2312C32.2358 30.3811 32.2058 30.5611 32.0858 30.671L30.6355 32.1106C30.5155 32.2306 30.3454 32.2605 30.1954 32.1806L28.305 31.1909C27.8649 31.4308 27.4048 31.6207 26.9247 31.7607L26.3146 33.7401C26.2646 33.89 26.1246 34 25.9645 34H23.9641C23.8041 34 23.6641 33.89 23.614 33.7401L23.0039 31.7607C22.5238 31.6207 22.0537 31.4308 21.6136 31.1909L19.7432 32.1806C19.5932 32.2605 19.4132 32.2306 19.3032 32.1106L17.8929 30.6211C17.7728 30.5011 17.7428 30.3212 17.8229 30.1812L18.8231 28.3018C18.563 27.8619 18.363 27.3921 18.2129 26.9022L16.2125 26.3024C16.0625 26.2524 15.9525 26.1125 15.9525 25.9525V23.9731C15.9525 23.8132 16.0625 23.6732 16.2125 23.6232L18.2129 23.0234C18.363 22.5236 18.563 22.0437 18.8231 21.5939L17.8229 19.7944C17.7428 19.6445 17.7728 19.4645 17.8929 19.3546L19.3632 17.925C19.4832 17.8051 19.6532 17.7751 19.8033 17.855L21.6236 18.8447C22.0837 18.5948 22.5638 18.3949 23.0639 18.2449L23.6741 16.2655C23.7241 16.1156 23.8641 16.0056 24.0241 16.0056H26.0245C26.1846 16.0056 26.3346 16.1056 26.3846 16.2555L26.9947 18.2349C27.4948 18.3849 27.9749 18.5948 28.425 18.8547L30.2754 17.865C30.4255 17.7851 30.6055 17.8151 30.7155 17.935L32.1958 19.3746C32.3158 19.4945 32.3458 19.6745 32.2658 19.8144L31.2656 21.6539C31.5057 22.1037 31.7057 22.5636 31.8457 23.0534ZM21.9337 26.3124C22.4538 27.552 23.6741 28.3418 25.0243 28.3318V28.3218C26.8447 28.3118 28.315 26.8322 28.315 25.0228C28.315 23.6932 27.4948 22.4836 26.2546 21.9738C25.0143 21.4639 23.584 21.7538 22.6338 22.7035C21.6836 23.6532 21.4136 25.0828 21.9337 26.3124Z" />\n',
};

export const fileSettingsIconName = 'file-settings';
export const fileSettingsIcon: IconShapeTuple = [fileSettingsIconName, renderIcon(icon)];
