/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '  <path d="M9.5 6C12.97 6 14.85 6.96 15 7.29V10.18C15.63 10.1 16.3 10.04 17 10.02V7.29C17 5.03 13.11 4 9.5 4C5.89 4 2 5.03 2 7.29V20.64C2 22.63 4.89 23.68 8 23.93V21.92C5.47 21.69 4.12 20.94 4 20.64V7.34C4.15 6.96 6.03 6 9.5 6ZM11.99 16.56C11.99 16.56 11.99 16.58 11.99 16.6V16.57V16.56ZM18 12C14.02 12 10 13.02 10 15.29V28.64C10 30.95 14.15 32 18 32C21.85 32 26 30.95 26 28.64V15.29C26 13.02 21.98 12 18 12ZM18 30C14.21 30 12.17 28.99 12 28.64V24.94V22.59V18.93V16.58H11.99V15.35C12.19 14.95 14.2 13.98 18 13.98C21.8 13.98 23.81 14.94 24 15.27V16.54C23.82 16.95 21.8 17.98 18 17.98C16.3 17.98 14.98 17.77 14 17.51V19.57C15.24 19.85 16.64 19.98 18 19.98C20.17 19.98 22.44 19.64 24 18.93V22.54C23.84 22.95 21.81 23.98 18 23.98C16.3 23.98 14.98 23.77 14 23.51V25.57C15.24 25.85 16.64 25.98 18 25.98C20.18 25.98 22.44 25.64 24.01 24.92V28.56C23.84 28.96 21.79 29.97 18 29.97V30ZM11.99 22.56C11.99 22.56 11.99 22.58 11.99 22.6V22.57V22.56ZM26.5 4C22.89 4 19 5.03 19 7.29V10.02C19.7 10.05 20.36 10.1 20.99 10.18V7.34C21.15 6.96 23.03 6 26.5 6C29.97 6 31.85 6.96 32 7.29V20.61C31.88 20.94 30.53 21.7 28 21.92V23.93C31.11 23.68 34 22.62 34 20.64V7.29C34 5.03 30.11 4 26.5 4Z" fill="black"/>\n',

  outlineAlerted:
    '  <path d="M26.9039 1.64621L21.2222 11.1159C20.9526 11.4984 20.9281 11.9949 21.1588 12.4005C21.3896 12.806 21.8363 13.0519 22.3148 13.0367H33.6881C34.1666 13.0519 34.6134 12.806 34.8441 12.4005C35.0748 11.9949 35.0503 11.4984 34.7808 11.1159L29.0991 1.64621C28.8711 1.26913 28.4532 1.03735 28.0015 1.03735C27.5497 1.03735 27.1319 1.26913 26.9039 1.64621Z" fill="#A36500"/>\n' +
    '  <path d="M22.9486 4.35127C20.7276 4.82405 19 5.7839 19 7.29V10.02C19.1794 10.0277 19.3562 10.0367 19.5306 10.0472C19.5324 10.0444 19.5343 10.0416 19.5362 10.0387L20.99 7.61566V7.34C21.0254 7.25583 21.1453 7.1432 21.3481 7.01885L22.9486 4.35127Z" fill="black"/>\n' +
    '  <path d="M32 15.0367H33.6637C33.7763 15.0389 33.8886 15.0354 34 15.0263V20.64C34 22.62 31.11 23.68 28 23.93V21.92C30.53 21.7 31.88 20.94 32 20.61V15.0367Z" fill="black"/>\n' +
    '  <path d="M19.0087 12.022C18.6738 12.0073 18.3368 12 18 12C14.02 12 10 13.02 10 15.29V28.64C10 30.95 14.15 32 18 32C21.85 32 26 30.95 26 28.64V15.29C26 15.2038 25.9942 15.1193 25.9828 15.0367H23.7154C23.8705 15.1289 23.9654 15.2099 24 15.27V16.54C23.82 16.95 21.8 17.98 18 17.98C16.3 17.98 14.98 17.77 14 17.51V19.57C15.24 19.85 16.64 19.98 18 19.98C20.17 19.98 22.44 19.64 24 18.93V22.54C23.84 22.95 21.81 23.98 18 23.98C16.3 23.98 14.98 23.77 14 23.51V25.57C15.24 25.85 16.64 25.98 18 25.98C20.18 25.98 22.44 25.64 24.01 24.92V28.56C23.84 28.96 21.79 29.97 18 29.97V30C14.21 30 12.17 28.99 12 28.64V16.58H11.99V15.35C12.19 14.95 14.2 13.98 18 13.98C18.7079 13.98 19.3537 14.0133 19.9372 14.0697C19.739 13.8702 19.5646 13.6426 19.4206 13.3893C19.1768 12.9609 19.0403 12.4934 19.0087 12.022Z" fill="black"/>\n' +
    '  <path d="M15 7.29C14.85 6.96 12.97 6 9.5 6C6.03 6 4.15 6.96 4 7.34V20.64C4.12 20.94 5.47 21.69 8 21.92V23.93C4.89 23.68 2 22.63 2 20.64V7.29C2 5.03 5.89 4 9.5 4C13.11 4 17 5.03 17 7.29V10.02C16.3 10.04 15.63 10.1 15 10.18V7.29Z" fill="black"/>\n',

  outlineBadged:
    '  <path fill-rule="evenodd" clip-rule="evenodd" d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" fill="#E02200"/>\n' +
    '  <path d="M32 12.7101V20.61C31.88 20.94 30.53 21.7 28 21.92V23.93C31.11 23.68 34 22.62 34 20.64V11.7453C33.396 12.1666 32.7224 12.4951 32 12.7101Z" fill="black"/>\n' +
    '  <path d="M23.0105 6.38599C23.0035 6.25821 23 6.12951 23 6C23 5.41322 23.0722 4.84331 23.2082 4.29865C20.8637 4.7507 19 5.72571 19 7.29V10.02C19.7 10.05 20.36 10.1 20.99 10.18V7.34C21.0836 7.11771 21.7658 6.69696 23.0105 6.38599Z" fill="black"/>\n' +
    '  <path d="M15 7.29C14.85 6.96 12.97 6 9.5 6C6.03 6 4.15 6.96 4 7.34V20.64C4.12 20.94 5.47 21.69 8 21.92V23.93C4.89 23.68 2 22.63 2 20.64V7.29C2 5.03 5.89 4 9.5 4C13.11 4 17 5.03 17 7.29V10.02C16.3 10.04 15.63 10.1 15 10.18V7.29Z" fill="black"/>\n' +
    '  <path fill-rule="evenodd" clip-rule="evenodd" d="M10 15.29C10 13.02 14.02 12 18 12C21.98 12 26 13.02 26 15.29V28.64C26 30.95 21.85 32 18 32C14.15 32 10 30.95 10 28.64V15.29ZM12 28.64C12.17 28.99 14.21 30 18 30V29.97C21.79 29.97 23.84 28.96 24.01 28.56V24.92C22.44 25.64 20.18 25.98 18 25.98C16.64 25.98 15.24 25.85 14 25.57V23.51C14.98 23.77 16.3 23.98 18 23.98C21.81 23.98 23.84 22.95 24 22.54V18.93C22.44 19.64 20.17 19.98 18 19.98C16.64 19.98 15.24 19.85 14 19.57V17.51C14.98 17.77 16.3 17.98 18 17.98C21.8 17.98 23.82 16.95 24 16.54V15.27C23.81 14.94 21.8 13.98 18 13.98C14.2 13.98 12.19 14.95 11.99 15.35V16.58H12V28.64Z" fill="black"/>\n',

  solid:
    '  <path d="M18 12C14.02 12 10 13.02 10 15.29V28.64C10 30.95 14.15 32 18 32C21.85 32 26 30.95 26 28.64V24.68C23.52 25.73 19.43 26 18 26C16.99 26 15.97 25.93 15 25.78V23.75C15.83 23.9 16.82 24 18 24C21.67 24 25.36 23.08 26 22.44V18.68C23.52 19.73 19.43 20 18 20C16.99 20 15.97 19.93 15 19.78V17.75C15.83 17.9 16.82 18 18 18C21.67 18 25.36 17.08 26 16.44V15.29C26 13.02 21.98 12 18 12ZM17 7.29C17 5.03 13.11 4 9.5 4C5.89 4 2 5.03 2 7.29V20.64C2 22.63 4.89 23.68 8 23.93V15.28C8 12.2 11.42 10.22 17 10.01V7.28V7.29ZM26.5 4C22.89 4 19 5.03 19 7.29V10.02C24.58 10.23 28 12.21 28 15.29V23.94C31.11 23.69 34 22.63 34 20.65V7.29C34 5.03 30.11 4 26.5 4Z" fill="black"/>\n',

  solidAlerted:
    '  <path d="M26.9039 1.64621L21.2222 11.1159C20.9526 11.4984 20.9281 11.9949 21.1588 12.4005C21.3896 12.806 21.8363 13.0519 22.3148 13.0367H33.6881C34.1666 13.0519 34.6134 12.806 34.8441 12.4005C35.0748 11.9949 35.0503 11.4984 34.7808 11.1159L29.0991 1.64621C28.8711 1.26913 28.4532 1.03735 28.0015 1.03735C27.5497 1.03735 27.1319 1.26913 26.9039 1.64621Z" fill="#A36500"/>\n' +
    '  <path d="M22.9486 4.35127C20.7276 4.82405 19 5.7839 19 7.29V10.02C19.1794 10.0268 19.3566 10.0353 19.5315 10.0457C19.5331 10.0434 19.5346 10.0411 19.5362 10.0387L22.9486 4.35127Z" fill="black"/>\n' +
    '  <path d="M27.9922 15.0367H33.6637C33.7763 15.0389 33.8886 15.0354 34 15.0263V20.65C34 22.63 31.11 23.69 28 23.94V15.29C28 15.2047 27.9974 15.1203 27.9922 15.0367Z" fill="black"/>\n' +
    '  <path d="M19.0087 12.022C19.0403 12.4934 19.1768 12.9609 19.4206 13.3893C20.0233 14.4489 21.1577 15.0604 22.3395 15.0367H25.9828C25.9942 15.1193 26 15.2038 26 15.29V16.44C25.36 17.08 21.67 18 18 18C16.82 18 15.83 17.9 15 17.75V19.78C15.97 19.93 16.99 20 18 20C19.43 20 23.52 19.73 26 18.68V22.44C25.36 23.08 21.67 24 18 24C16.82 24 15.83 23.9 15 23.75V25.78C15.97 25.93 16.99 26 18 26C19.43 26 23.52 25.73 26 24.68V28.64C26 30.95 21.85 32 18 32C14.15 32 10 30.95 10 28.64V15.29C10 13.02 14.02 12 18 12C18.3368 12 18.6738 12.0073 19.0087 12.022Z" fill="black"/>\n' +
    '  <path d="M9.5 4C13.11 4 17 5.03 17 7.29V10.01C11.42 10.22 8 12.2 8 15.28V23.93C4.89 23.68 2 22.63 2 20.64V7.29C2 5.03 5.89 4 9.5 4Z" fill="black"/>\n',

  solidBadged:
    '  <path d="M30 10.99C32.7614 10.99 35 8.75141 35 5.98999C35 3.22857 32.7614 0.98999 30 0.98999C27.2386 0.98999 25 3.22857 25 5.98999C25 8.75141 27.2386 10.99 30 10.99Z" fill="#E02200"/>\n' +
    '  <path d="M34 11.7353C32.8662 12.5262 31.4872 12.99 30 12.99C26.134 12.99 23 9.856 23 5.99001C23 5.407 23.0713 4.84063 23.2056 4.29916C20.8623 4.75142 19 5.72629 19 7.29V10.02C24.58 10.23 28 12.21 28 15.29V23.94C31.11 23.69 34 22.63 34 20.65V11.7353Z" fill="black"/>\n' +
    '  <path d="M10 15.29C10 13.02 14.02 12 18 12C21.98 12 26 13.02 26 15.29V16.44C25.36 17.08 21.67 18 18 18C16.82 18 15.83 17.9 15 17.75V19.78C15.97 19.93 16.99 20 18 20C19.43 20 23.52 19.73 26 18.68V22.44C25.36 23.08 21.67 24 18 24C16.82 24 15.83 23.9 15 23.75V25.78C15.97 25.93 16.99 26 18 26C19.43 26 23.52 25.73 26 24.68V28.64C26 30.95 21.85 32 18 32C14.15 32 10 30.95 10 28.64V15.29Z" fill="black"/>\n' +
    '  <path d="M9.5 4C13.11 4 17 5.03 17 7.29V10.01C11.42 10.22 8 12.2 8 15.28V23.93C4.89 23.68 2 22.63 2 20.64V7.29C2 5.03 5.89 4 9.5 4Z" fill="black"/>\n',
};

export const dataClusterIconName = 'data-cluster';
export const dataClusterIcon: IconShapeTuple = [dataClusterIconName, renderIcon(icon)];
