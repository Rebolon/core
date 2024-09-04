/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '  <path d="M11 27.9781C9.35 27.9781 8 29.3285 8 30.9791C8 32.6296 9.34 33.98 11 33.98C12.66 33.98 14 32.6296 14 30.9791C14 29.3285 12.66 27.9781 11 27.9781ZM11 31.9794C10.45 31.9794 10 31.5292 10 30.9791C10 30.4289 10.45 29.9787 11 29.9787C11.55 29.9787 12 30.4289 12 30.9791C12 31.5292 11.55 31.9794 11 31.9794ZM31.8 6.40138C31.61 6.1513 31.31 6.00125 31 6.00125H11.06L11.65 8.00188H29.67L26.24 20.0056H12.98C12.98 19.9156 12.98 19.8156 12.96 19.7255L7.96 2.72023C7.84 2.29009 7.44 2 7 2H3C2.45 2 2 2.45014 2 3.00031C2 3.55048 2.45 4.00063 3 4.00063H6.25L11.04 20.2857C11.07 20.3857 11.12 20.4858 11.18 20.5658L8.79 22.1563C8.73 22.1963 8.68 22.2363 8.64 22.2863C8.23 22.6965 8 23.2466 8 23.8268C8 25.0272 8.98 26.0075 10.18 26.0075H27C27.55 26.0075 28 25.5574 28 25.0072C28 24.457 27.55 24.0069 27 24.0069H10.18C10.08 24.0069 10 23.9269 10 23.8268C10 23.7968 10 23.7668 10.02 23.7468L12.64 22.0063H27C27.45 22.0063 27.84 21.7062 27.96 21.276L31.96 7.27165C32.05 6.97155 31.99 6.64145 31.8 6.39137V6.40138ZM25.01 27.9781C23.35 27.9781 22 29.3285 22 30.9891C22 32.6496 23.35 34 25.01 34C26.67 34 28.02 32.6496 28.02 30.9891C28.02 29.3285 26.67 27.9781 25.01 27.9781ZM25.01 32.0094C24.45 32.0094 24 31.5492 24 30.9991C24 30.4489 24.45 29.9887 25.01 29.9887C25.57 29.9887 26.02 30.4489 26.02 30.9991C26.02 31.5492 25.57 32.0094 25.01 32.0094Z" fill="black"/>\n',

  outlineAlerted:
    '  <path d="M26.9122 1.60953L21.2305 11.0792C20.9609 11.4617 20.9364 11.9582 21.1672 12.3638C21.3979 12.7694 21.8446 13.0153 22.3231 13H33.6964C34.1749 13.0153 34.6217 12.7694 34.8524 12.3638C35.0831 11.9582 35.0586 11.4617 34.7891 11.0792L29.1074 1.60953C28.8794 1.23245 28.4615 1.00067 28.0098 1.00067C27.558 1.00067 27.1402 1.23245 26.9122 1.60953Z" fill="#A36500"/>\n' +
    '  <path d="M21.9455 6.00125H11.06L11.65 8.00188H20.7455L21.9455 6.00125Z" fill="black"/>\n' +
    '  <path d="M27.6692 15.0041H29.7514L27.96 21.276C27.84 21.7062 27.45 22.0063 27 22.0063H12.64L10.02 23.7468C10 23.7668 10 23.7968 10 23.8268C10 23.9269 10.08 24.0069 10.18 24.0069H27C27.55 24.0069 28 24.457 28 25.0072C28 25.5574 27.55 26.0075 27 26.0075H10.18C8.98 26.0075 8 25.0272 8 23.8268C8 23.2466 8.23 22.6965 8.64 22.2863C8.68 22.2363 8.73 22.1963 8.79 22.1563L11.18 20.5658C11.12 20.4858 11.07 20.3857 11.04 20.2857L6.25 4.00063H3C2.45 4.00063 2 3.55048 2 3.00031C2 2.45014 2.45 2 3 2H7C7.44 2 7.84 2.29009 7.96 2.72023L12.96 19.7255C12.98 19.8156 12.98 19.9156 12.98 20.0056H26.24L27.6692 15.0041Z" fill="black"/>\n' +
    '  <path fill-rule="evenodd" clip-rule="evenodd" d="M8 30.9791C8 29.3285 9.35 27.9781 11 27.9781C12.66 27.9781 14 29.3285 14 30.9791C14 32.6296 12.66 33.98 11 33.98C9.34 33.98 8 32.6296 8 30.9791ZM10 30.9791C10 31.5292 10.45 31.9794 11 31.9794C11.55 31.9794 12 31.5292 12 30.9791C12 30.4289 11.55 29.9787 11 29.9787C10.45 29.9787 10 30.4289 10 30.9791Z" fill="black"/>\n' +
    '  <path fill-rule="evenodd" clip-rule="evenodd" d="M22 30.9891C22 29.3285 23.35 27.9781 25.01 27.9781C26.67 27.9781 28.02 29.3285 28.02 30.9891C28.02 32.6496 26.67 34 25.01 34C23.35 34 22 32.6496 22 30.9891ZM24 30.9991C24 31.5492 24.45 32.0094 25.01 32.0094C25.57 32.0094 26.02 31.5492 26.02 30.9991C26.02 30.4489 25.57 29.9887 25.01 29.9887C24.45 29.9887 24 30.4489 24 30.9991Z" fill="black"/>\n',

  outlineBadged:
    '  <path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" fill="#E02200"/>\n' +
    '  <path d="M30.325 12.996C30.2173 13.001 30.1089 13.0034 30 13.0034C29.4138 13.0034 28.8444 12.9314 28.3002 12.7956L26.24 20.0056H12.98C12.98 19.9156 12.98 19.8156 12.96 19.7255L7.96 2.72023C7.84 2.29009 7.44 2 7 2H3C2.45 2 2 2.45014 2 3.00031C2 3.55048 2.45 4.00063 3 4.00063H6.25L11.04 20.2857C11.07 20.3857 11.12 20.4858 11.18 20.5658L8.79 22.1563C8.73 22.1963 8.68 22.2363 8.64 22.2863C8.23 22.6965 8 23.2466 8 23.8268C8 25.0272 8.98 26.0075 10.18 26.0075H27C27.55 26.0075 28 25.5574 28 25.0072C28 24.457 27.55 24.0069 27 24.0069H10.18C10.08 24.0069 10 23.9269 10 23.8268C10 23.7968 10 23.7668 10.02 23.7468L12.64 22.0063H27C27.45 22.0063 27.84 21.7062 27.96 21.276L30.325 12.996Z" fill="black"/>\n' +
    '  <path d="M23.2899 8.00188C23.1013 7.36797 23 6.69644 23 6.00125H11.06L11.65 8.00188H23.2899Z" fill="black"/>\n' +
    '  <path fill-rule="evenodd" clip-rule="evenodd" d="M8 30.9791C8 29.3285 9.35 27.9781 11 27.9781C12.66 27.9781 14 29.3285 14 30.9791C14 32.6296 12.66 33.98 11 33.98C9.34 33.98 8 32.6296 8 30.9791ZM10 30.9791C10 31.5292 10.45 31.9794 11 31.9794C11.55 31.9794 12 31.5292 12 30.9791C12 30.4289 11.55 29.9787 11 29.9787C10.45 29.9787 10 30.4289 10 30.9791Z" fill="black"/>\n' +
    '  <path fill-rule="evenodd" clip-rule="evenodd" d="M22 30.9891C22 29.3285 23.35 27.9781 25.01 27.9781C26.67 27.9781 28.02 29.3285 28.02 30.9891C28.02 32.6496 26.67 34 25.01 34C23.35 34 22 32.6496 22 30.9891ZM24 30.9991C24 31.5492 24.45 32.0094 25.01 32.0094C25.57 32.0094 26.02 31.5492 26.02 30.9991C26.02 30.4489 25.57 29.9887 25.01 29.9887C24.45 29.9887 24 30.4489 24 30.9991Z" fill="black"/>\n',

  solid:
    '  <path d="M11 27.9781C9.35 27.9781 8 29.3285 8 30.9791C8 32.6296 9.34 33.98 11 33.98C12.66 33.98 14 32.6296 14 30.9791C14 29.3285 12.66 27.9781 11 27.9781ZM11 31.9794C10.45 31.9794 10 31.5292 10 30.9791C10 30.4289 10.45 29.9787 11 29.9787C11.55 29.9787 12 30.4289 12 30.9791C12 31.5292 11.55 31.9794 11 31.9794ZM31.8 6.40138C31.61 6.1513 31.31 6.00125 31 6.00125H8.92L7.95 2.72023C7.83 2.29009 7.43 2 6.99 2H3C2.45 2 2 2.45014 2 3.00031C2 3.55048 2.45 4.00063 3 4.00063H6.25L11.04 20.2857C11.07 20.3857 11.12 20.4858 11.18 20.5658L8.79 22.1563C8.73 22.1963 8.68 22.2363 8.64 22.2863C8.23 22.6965 8 23.2466 8 23.8268C8 25.0272 8.98 26.0075 10.18 26.0075H27C27.55 26.0075 28 25.5574 28 25.0072C28 24.457 27.55 24.0069 27 24.0069H10.18C10.08 24.0069 10 23.9269 10 23.8268C10 23.7968 10 23.7668 10.02 23.7468L12.64 22.0063H27C27.45 22.0063 27.84 21.7062 27.96 21.276L31.96 7.27165C32.05 6.97155 31.99 6.64145 31.8 6.39137V6.40138ZM25.01 27.9781C23.35 27.9781 22 29.3285 22 30.9891C22 32.6496 23.35 34 25.01 34C26.67 34 28.02 32.6496 28.02 30.9891C28.02 29.3285 26.67 27.9781 25.01 27.9781ZM25.01 32.0094C24.45 32.0094 24 31.5492 24 30.9991C24 30.4489 24.45 29.9887 25.01 29.9887C25.57 29.9887 26.02 30.4489 26.02 30.9991C26.02 31.5492 25.57 32.0094 25.01 32.0094Z" fill="black"/>\n',

  solidAlerted:
    '  <path d="M26.9122 1.60953L21.2305 11.0792C20.9609 11.4617 20.9364 11.9582 21.1672 12.3638C21.3979 12.7694 21.8446 13.0153 22.3231 13H33.6964C34.1749 13.0153 34.6217 12.7694 34.8524 12.3638C35.0831 11.9582 35.0586 11.4617 34.7891 11.0792L29.1074 1.60953C28.8794 1.23245 28.4615 1.00067 28.0098 1.00067C27.558 1.00067 27.1402 1.23245 26.9122 1.60953Z" fill="#A36500"/>\n' +
    '  <path d="M21.9517 6.00125L19.5498 10.0046C18.8837 11.0084 18.8338 12.3008 19.4341 13.3562C20.0371 14.4161 21.1718 15.0277 22.354 15.0041H29.7601L27.9681 21.276C27.8481 21.7062 27.458 22.0063 27.0078 22.0063H12.6433L10.0225 23.7468C10.0025 23.7668 10.0025 23.7968 10.0025 23.8268C10.0025 23.9269 10.0825 24.0069 10.1826 24.0069H27.0078C27.558 24.0069 28.0081 24.457 28.0081 25.0072C28.0081 25.5574 27.558 26.0075 27.0078 26.0075H10.1826C8.98218 26.0075 8.00188 25.0272 8.00188 23.8268C8.00188 23.2466 8.23195 22.6965 8.64208 22.2863C8.68209 22.2363 8.7321 22.1963 8.79212 22.1563L11.1829 20.5658C11.1229 20.4858 11.0728 20.3857 11.0428 20.2857L6.25133 4.00063H3.00031C2.45014 4.00063 2 3.55048 2 3.00031C2 2.45014 2.45014 2 3.00031 2H6.99156C7.4317 2 7.83182 2.29009 7.95186 2.72023L8.92216 6.00125H21.9517Z" fill="black"/>\n' +
    '  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00188 30.9791C8.00188 29.3285 9.3523 27.9781 11.0028 27.9781C12.6633 27.9781 14.0038 29.3285 14.0038 30.9791C14.0038 32.6296 12.6633 33.98 11.0028 33.98C9.3423 33.98 8.00188 32.6296 8.00188 30.9791ZM10.0025 30.9791C10.0025 31.5292 10.4526 31.9794 11.0028 31.9794C11.553 31.9794 12.0031 31.5292 12.0031 30.9791C12.0031 30.4289 11.553 29.9787 11.0028 29.9787C10.4526 29.9787 10.0025 30.4289 10.0025 30.9791Z" fill="black"/>\n' +
    '  <path fill-rule="evenodd" clip-rule="evenodd" d="M22.0063 30.9891C22.0063 29.3285 23.3567 27.9781 25.0172 27.9781C26.6777 27.9781 28.0281 29.3285 28.0281 30.9891C28.0281 32.6496 26.6777 34 25.0172 34C23.3567 34 22.0063 32.6496 22.0063 30.9891ZM24.0069 30.9991C24.0069 31.5492 24.457 32.0094 25.0172 32.0094C25.5774 32.0094 26.0275 31.5492 26.0275 30.9991C26.0275 30.4489 25.5774 29.9887 25.0172 29.9887C24.457 29.9887 24.0069 30.4489 24.0069 30.9991Z" fill="black"/>\n',

  solidBadged:
    '  <path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" fill="#E02200"/>\n' +
    '  <path d="M30.325 12.996C30.2173 13.001 30.1089 13.0034 30 13.0034C26.134 13.0034 23 9.86845 23 6.00125H8.92L7.95 2.72023C7.83 2.29009 7.43 2 6.99 2H3C2.45 2 2 2.45014 2 3.00031C2 3.55048 2.45 4.00063 3 4.00063H6.25L11.04 20.2857C11.07 20.3857 11.12 20.4858 11.18 20.5658L8.79 22.1563C8.73 22.1963 8.68 22.2363 8.64 22.2863C8.23 22.6965 8 23.2466 8 23.8268C8 25.0272 8.98 26.0075 10.18 26.0075H27C27.55 26.0075 28 25.5574 28 25.0072C28 24.457 27.55 24.0069 27 24.0069H10.18C10.08 24.0069 10 23.9269 10 23.8268C10 23.7968 10 23.7668 10.02 23.7468L12.64 22.0063H27C27.45 22.0063 27.84 21.7062 27.96 21.276L30.325 12.996Z" fill="black"/>\n' +
    '  <path fill-rule="evenodd" clip-rule="evenodd" d="M8 30.9791C8 29.3285 9.35 27.9781 11 27.9781C12.66 27.9781 14 29.3285 14 30.9791C14 32.6296 12.66 33.98 11 33.98C9.34 33.98 8 32.6296 8 30.9791ZM10 30.9791C10 31.5292 10.45 31.9794 11 31.9794C11.55 31.9794 12 31.5292 12 30.9791C12 30.4289 11.55 29.9787 11 29.9787C10.45 29.9787 10 30.4289 10 30.9791Z" fill="black"/>\n' +
    '  <path fill-rule="evenodd" clip-rule="evenodd" d="M22 30.9891C22 29.3285 23.35 27.9781 25.01 27.9781C26.67 27.9781 28.02 29.3285 28.02 30.9891C28.02 32.6496 26.67 34 25.01 34C23.35 34 22 32.6496 22 30.9891ZM24 30.9991C24 31.5492 24.45 32.0094 25.01 32.0094C25.57 32.0094 26.02 31.5492 26.02 30.9991C26.02 30.4489 25.57 29.9887 25.01 29.9887C24.45 29.9887 24 30.4489 24 30.9991Z" fill="black"/>\n',
};

export const shoppingCartIconName = 'shopping-cart';
export const shoppingCartIcon: IconShapeTuple = [shoppingCartIconName, renderIcon(icon)];
